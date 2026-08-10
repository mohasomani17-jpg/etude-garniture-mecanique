"use client";

import { createElement, useEffect, useRef, useState } from "react";

type ViewerElement = HTMLElement & {
  cameraOrbit: string;
  autoRotate: boolean;
  jumpCameraToGoal?: () => void;
};

const views = [
  { label: "Perspective", shortLabel: "3D", orbit: "38deg 68deg 108%" },
  { label: "Face", shortLabel: "Face", orbit: "0deg 90deg 112%" },
  { label: "Dessus", shortLabel: "Dessus", orbit: "0deg 10deg 118%" },
  { label: "Côté", shortLabel: "Côté", orbit: "90deg 90deg 112%" },
] as const;

export default function GarnitureViewer() {
  const viewerRef = useRef<ViewerElement | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeView, setActiveView] = useState("Perspective");
  const [autoRotate, setAutoRotate] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let active = true;
    let viewer: ViewerElement | null = null;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) setAutoRotate(false);
    const onLoad = () => active && setLoaded(true);
    const onProgress = (event: Event) => {
      const detail = (event as CustomEvent<{ totalProgress?: number }>).detail;
      if (active && typeof detail?.totalProgress === "number") setProgress(detail.totalProgress);
    };

    import("@google/model-viewer").then(() => {
      if (!active) return;
      viewer = viewerRef.current;
      if (viewer && reduceMotion) viewer.autoRotate = false;
      viewer?.addEventListener("load", onLoad);
      viewer?.addEventListener("progress", onProgress);
    });

    return () => {
      active = false;
      viewer?.removeEventListener("load", onLoad);
      viewer?.removeEventListener("progress", onProgress);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "";
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) setExpanded(false);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, [expanded]);

  const selectView = (label: string, orbit: string) => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    viewer.autoRotate = false;
    setAutoRotate(false);
    setActiveView(label);
    viewer.cameraOrbit = orbit;
    viewer.jumpCameraToGoal?.();
  };

  const toggleRotation = () => {
    const nextValue = !autoRotate;
    setAutoRotate(nextValue);
    if (viewerRef.current) viewerRef.current.autoRotate = nextValue;
  };

  const toggleExpanded = async () => {
    if (expanded) {
      if (document.fullscreenElement) await document.exitFullscreen();
      setExpanded(false);
      return;
    }

    setExpanded(true);
    try {
      await shellRef.current?.requestFullscreen?.();
    } catch {
      // Le mode plein écran CSS reste actif sur les navigateurs sans API Fullscreen.
    }
  };

  const modelViewer = createElement("model-viewer", {
    ref: viewerRef,
    className: "model-viewer",
    src: "/garniture.glb",
    poster: "/assets/maquette-catia.png",
    alt: "Assemblage tridimensionnel interactif de la garniture mécanique",
    "camera-controls": true,
    "auto-rotate": autoRotate,
    "auto-rotate-delay": "900",
    "rotation-per-second": "7deg",
    "interaction-prompt": "auto",
    "interaction-prompt-style": "wiggle",
    "touch-action": "pan-y",
    "shadow-intensity": "1.15",
    "shadow-softness": "0.82",
    exposure: "1.05",
    "environment-image": "neutral",
    "camera-orbit": "38deg 68deg 108%",
    "min-camera-orbit": "auto auto 62%",
    "max-camera-orbit": "auto auto 230%",
    "field-of-view": "31deg",
    loading: "eager",
    reveal: "auto",
  } as Record<string, unknown>);

  return (
    <article className={expanded ? "viewer-shell is-expanded" : "viewer-shell"} id="modele-3d" ref={shellRef}>
      <div className="viewer-head">
        <div>
          <p className="viewer-eyebrow"><span /> Maquette navigable</p>
          <h3>Assemblage interactif</h3>
          <p>Faites glisser la pièce, zoomez et choisissez une vue normalisée pour inspecter chaque interface.</p>
        </div>
        <div className="viewer-file"><span>Format web</span><b>GLB · 3,5 Mo</b><small>Optimisé depuis CATIA STEP</small></div>
      </div>

      <div className="viewer-stage">
        {modelViewer}

        {!loaded && (
          <div className="viewer-loading" role="status" aria-live="polite">
            <div className="loading-track"><i style={{ width: `${Math.max(progress * 100, 8)}%` }} /></div>
            <span>Chargement de la maquette… {Math.round(progress * 100)} %</span>
          </div>
        )}

        <div className="viewer-badges" aria-hidden="true">
          <span>40 occurrences</span><span>Commande tactile</span>
        </div>

        <div className="viewer-toolbar" aria-label="Contrôles du modèle 3D">
          <div className="view-presets" role="group" aria-label="Vues prédéfinies">
            {views.map((view) => (
              <button
                className={activeView === view.label ? "is-active" : ""}
                key={view.label}
                type="button"
                onClick={() => selectView(view.label, view.orbit)}
                aria-pressed={activeView === view.label}
                title={`Vue ${view.label.toLocaleLowerCase("fr")}`}
              >
                <span>{view.shortLabel}</span><small>{view.label}</small>
              </button>
            ))}
          </div>
          <div className="viewer-actions">
            <button className={autoRotate ? "is-active" : ""} type="button" onClick={toggleRotation} aria-pressed={autoRotate}>
              <span>↻</span><small>{autoRotate ? "Rotation active" : "Rotation arrêtée"}</small>
            </button>
            <button type="button" onClick={toggleExpanded} aria-pressed={expanded}>
              <span>{expanded ? "×" : "⛶"}</span><small>{expanded ? "Réduire" : "Plein écran"}</small>
            </button>
          </div>
        </div>

        <p className="viewer-hint"><span>↔</span><b>Glisser pour tourner</b><i /><b className="hint-secondary">Pincer ou molette pour zoomer</b><i /><b className="hint-secondary">Maj + glisser pour déplacer</b></p>
      </div>
    </article>
  );
}
