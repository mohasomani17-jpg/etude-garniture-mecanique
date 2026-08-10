"use client";

import { useState } from "react";
import AxisHero from "../AxisHero";
import { specs, type SpecKey } from "../site-content";

export default function SolutionPage() {
  const [activeSpec, setActiveSpec] = useState<SpecKey>("service");
  return <main className="axis-page axis-page-dark">
    <AxisHero number="04" eyebrow="Présélection" title="Une architecture cohérente." accent="Une décision conditionnelle." description="La Chesterton 155 couvre la vitesse calculée et l’enveloppe provisoire de pression. Le choix final dépend encore des relevés terrain et du plan fournisseur certifié." previous="/technologie" next="/conception" />
    <section className="solution section"><div className="container solution-grid">
      <div className="solution-media"><span className="media-label">Coupe fonctionnelle</span><img src="/assets/chesterton-155.png" alt="Garniture mécanique à cartouche Chesterton 155" /><div className="model-card"><small>Modèle présélectionné</small><strong>Chesterton 155</strong><span>Cartouche simple · 2 ensembles</span></div></div>
      <div className="solution-copy"><p className="overline">DIMENSIONNEMENT</p><h2>Vérifier le service.<br /><span>Verrouiller l’interface.</span></h2><p className="solution-intro">Les caractéristiques sont organisées par famille pour distinguer les conditions de service, les dimensions d’intégration et la configuration retenue.</p>
        <div className="tabs" role="tablist" aria-label="Caractéristiques techniques">{(Object.keys(specs) as SpecKey[]).map(key => <button key={key} role="tab" aria-selected={activeSpec === key} onClick={() => setActiveSpec(key)}>{key === "service" ? "Service" : key === "interface" ? "Interface" : "Configuration"}</button>)}</div>
        <div className="specs" role="tabpanel">{specs[activeSpec].map(([label,value]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}</div>
        <div className="capacity"><div><span><b>Vitesse</b><small>11,64 / 25 m/s</small></span><div><i style={{ width: "46.6%" }} /></div><strong>46,6 %</strong></div><div><span><b>Pression*</b><small>36 / 40 bar(g)</small></span><div className="warn"><i style={{ width: "90%" }} /></div><strong>90 %</strong></div></div><p className="fine-print">* Enveloppe conservatrice : la pression réelle de chambre reste à mesurer.</p>
      </div>
    </div></section>
    <section className="critical"><div className="container critical-inner"><div className="critical-value"><strong>0,37</strong><span>mm</span></div><div><p className="overline">ÉCART DIMENSIONNEL</p><h2>Le standard Ø 75 mm ne peut pas être commandé directement.</h2><p>La portée mesurée à 74,63 mm se situe hors de la tolérance 74,95–75,05 mm. Une exécution spécifique ou une adaptation certifiée est nécessaire.</p></div><span className="critical-mark">!</span></div></section>
  </main>;
}
