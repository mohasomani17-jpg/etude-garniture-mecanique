"use client";

import { useState } from "react";

const gmaoData = [
  { name: "01CEX102PO", total: 33, seal: 19, rate: 57.6 },
  { name: "01CEX202PO", total: 10, seal: 5, rate: 50.0 },
  { name: "02CEX102PO", total: 26, seal: 7, rate: 26.9 },
  { name: "02CEX202PO", total: 31, seal: 6, rate: 19.4 },
];

const comparison = [
  {
    criterion: "Principe",
    packing: "Fuite contrôlée nécessaire",
    cartridge: "Film lubrifiant entre deux faces",
  },
  {
    criterion: "Maintenance",
    packing: "Réglage et resserrage périodiques",
    cartridge: "Cartouche préréglée, suivi conditionnel",
  },
  {
    criterion: "Impact sur l’arbre",
    packing: "Frottement continu sur la chemise",
    cartridge: "Pas de frottement direct sur l’arbre",
  },
  {
    criterion: "Maîtrise des fuites",
    packing: "Variable, dépendante du serrage",
    cartridge: "Très faible en fonctionnement normal",
  },
];

const riskRows = [
  { label: "Fuite excessive", before: 32, after: 16 },
  { label: "Débit d’arrosage interrompu", before: 32, after: 8 },
  { label: "Échauffement des tresses", before: 27, after: 6 },
  { label: "Usure de la chemise", before: 27, after: 6 },
];

const specGroups = {
  service: [
    ["Fluide", "Eau déminéralisée propre"],
    ["Température normale", "33,2 °C"],
    ["Vitesse de rotation", "2 980 tr/min"],
    ["Débit nominal", "648 m³/h"],
  ],
  interface: [
    ["Portée nominale", "74,60 mm"],
    ["Portée mesurée", "74,63 mm"],
    ["Déplacement axial relevé", "≈ 0,07 mm"],
    ["Zones d’étanchéité", "2 passages d’arbre"],
  ],
  seal: [
    ["Architecture", "Cartouche simple"],
    ["Modèle présélectionné", "Chesterton 155"],
    ["Faces", "SSC / carbone"],
    ["Joints", "FKM ou EPDM à valider"],
  ],
} as const;

type SpecKey = keyof typeof specGroups;

export default function Home() {
  const [activeSpec, setActiveSpec] = useState<SpecKey>("service");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#accueil" aria-label="Retour à l’accueil">
          <span className="brand-mark">ME</span>
          <span className="brand-copy">
            <b>Étude d’étanchéité</b>
            <small>02CEX202PO · TAQA Morocco</small>
          </span>
        </a>

        <button
          className="menu-button"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navigation principale">
          <a href="#diagnostic" onClick={closeMenu}>Diagnostic</a>
          <a href="#solution" onClick={closeMenu}>Solution</a>
          <a href="#conception" onClick={closeMenu}>Conception</a>
          <a href="#risques" onClick={closeMenu}>AMDEC</a>
          <a className="nav-cta" href="#validation" onClick={closeMenu}>Décision</a>
        </nav>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow"><span>Rapport de stage professionnel</span> · 2026</p>
          <h1>
            Réduire la fuite.<br />
            <em>Fiabiliser la pompe.</em>
          </h1>
          <p className="hero-lead">
            Étude de remplacement du presse-étoupe de la pompe de reprise
            02CEX202PO par une garniture mécanique simple à cartouche.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#diagnostic">Explorer l’étude <span>↓</span></a>
            <a className="text-link" href="#solution">Voir la solution <span>↗</span></a>
          </div>
          <div className="author-line">
            <span className="avatar">ME</span>
            <p><b>Mohammed Essommani</b><small>Génie des systèmes mécaniques industriels</small></p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Pompe industrielle 02CEX202PO">
          <div className="hero-grid" aria-hidden="true" />
          <img className="pump-image" src="/assets/pompe-02cex202po.png" alt="Pompe de reprise 02CEX202PO en atelier" />
          <div className="equipment-tag">
            <span>Équipement étudié</span>
            <strong>02CEX202PO</strong>
            <small>Pompe centrifuge · 550 kW</small>
          </div>
          <div className="seal-orbit" aria-hidden="true"><span /></div>
        </div>
      </section>

      <section className="metric-rail" aria-label="Chiffres clés de l’étude">
        <article><strong>37<span>%</span></strong><p>des OT CEX terminés liés au presse-étoupe</p></article>
        <article><strong>11,64<span>m/s</span></strong><p>vitesse périphérique calculée</p></article>
        <article><strong>74,63<span>mm</span></strong><p>diamètre réel de la portée d’arbre</p></article>
        <article><strong>2,97<span>kg</span></strong><p>masse estimée de la maquette CAO</p></article>
      </section>

      <section className="context-section section-pad">
        <div className="section-intro">
          <p className="section-index">01 · CONTEXTE</p>
          <h2>Un petit organe.<br />Un enjeu d’exploitation majeur.</h2>
          <p>
            Au sein du poste d’eau des unités 1 et 2, la pompe de reprise maintient
            la circulation des condensats. Son étanchéité influence directement la
            propreté, la maintenance et la disponibilité de l’installation.
          </p>
        </div>
        <figure className="plant-figure">
          <img src="/assets/centrale-taqa.jpg" alt="Centrale thermique de TAQA Morocco à Jorf Lasfar" />
          <figcaption><span>Site industriel</span> Centrale thermique de Jorf Lasfar</figcaption>
        </figure>
        <div className="context-notes">
          <article><span>01</span><h3>Diagnostiquer</h3><p>Historique GMAO, limites techniques et état de l’équipement existant.</p></article>
          <article><span>02</span><h3>Sélectionner</h3><p>Cahier des charges, dimensionnement et présélection d’une cartouche.</p></article>
          <article><span>03</span><h3>Intégrer</h3><p>Maquette CATIA V5, interfaces, encombrement et analyse des risques.</p></article>
        </div>
      </section>

      <section className="diagnostic-section section-pad" id="diagnostic">
        <div className="diagnostic-header">
          <div>
            <p className="section-index light">02 · DIAGNOSTIC GMAO</p>
            <h2>La récurrence est mesurable.</h2>
          </div>
          <p>
            Sur 100 ordres de travail terminés concernant les quatre pompes CEX,
            37 sont directement associés au presse-étoupe. Le couple de la tranche 2
            concentre 13 interventions d’étanchéité sur 57 OT terminés.
          </p>
        </div>

        <div className="gmao-panel">
          <div className="chart-title">
            <div><span>Part des OT presse-étoupe</span><strong>par équipement</strong></div>
            <small>Source : historique GMAO arrêté au 02.08.2026</small>
          </div>
          <div className="bar-chart">
            {gmaoData.map((item) => (
              <div className="bar-row" key={item.name}>
                <div className="bar-meta"><b>{item.name}</b><span>{item.seal} / {item.total} OT</span></div>
                <div className="bar-track"><span style={{ width: `${item.rate}%` }} /></div>
                <strong>{item.rate.toFixed(1).replace(".", ",")} %</strong>
              </div>
            ))}
          </div>
          <div className="diagnostic-insight">
            <span className="pulse-dot" />
            <p><b>Signal critique détecté :</b> un intervalle minimal de 1,4 jour entre deux signalements sur 02CEX202PO, avec un épisode qualifié de fuite importante.</p>
          </div>
        </div>

        <div className="limitations">
          <p className="mono-label">LECTURE RESPONSABLE DES DONNÉES</p>
          <h3>Ce que l’historique prouve — et ce qu’il ne prouve pas.</h3>
          <div className="limits-grid">
            <article className="proved"><span>✓</span><div><b>Constat établi</b><p>Les fuites sont récurrentes et justifient l’étude d’une amélioration.</p></div></article>
            <article><span>!</span><div><b>Réserve méthodologique</b><p>Sans heures de marche ni durées d’arrêt, les intervalles calendaires ne sont ni un MTBF ni un MTTR.</p></div></article>
          </div>
        </div>
      </section>

      <section className="comparison-section section-pad">
        <div className="section-intro compact">
          <p className="section-index">03 · CHANGEMENT DE TECHNOLOGIE</p>
          <h2>Passer d’un réglage permanent<br />à une étanchéité maîtrisée.</h2>
        </div>
        <div className="comparison-table" role="table" aria-label="Comparaison des technologies d’étanchéité">
          <div className="comparison-head" role="row">
            <span>Critère</span><b>Presse-étoupe actuel</b><b>Cartouche proposée</b>
          </div>
          {comparison.map((row) => (
            <div className="comparison-row" role="row" key={row.criterion}>
              <span>{row.criterion}</span><p>{row.packing}</p><p className="preferred">{row.cartridge}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="solution-section section-pad" id="solution">
        <div className="solution-visual">
          <div className="solution-image-wrap">
            <span className="image-label">COUPE FONCTIONNELLE</span>
            <img src="/assets/chesterton-155.png" alt="Vue en coupe d’une garniture mécanique à cartouche Chesterton 155" />
          </div>
          <div className="selection-badge"><small>Modèle présélectionné</small><strong>Chesterton 155</strong><span>Cartouche simple · 2 ensembles</span></div>
        </div>

        <div className="solution-content">
          <p className="section-index light">04 · PRÉSÉLECTION</p>
          <h2>Une architecture cohérente.<br /><em>Une validation encore conditionnelle.</em></h2>
          <p className="solution-lead">
            La Chesterton 155 couvre la vitesse calculée et l’enveloppe provisoire de pression.
            La décision finale dépend toutefois de la pression réelle de chambre, de la chimie de l’eau
            et d’un plan fournisseur certifié.
          </p>

          <div className="spec-tabs" role="tablist" aria-label="Données de présélection">
            {(["service", "interface", "seal"] as SpecKey[]).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeSpec === key}
                onClick={() => setActiveSpec(key)}
              >
                {key === "service" ? "Service" : key === "interface" ? "Interface" : "Configuration"}
              </button>
            ))}
          </div>
          <div className="spec-list" role="tabpanel">
            {specGroups[activeSpec].map(([label, value]) => (
              <div key={label}><span>{label}</span><b>{value}</b></div>
            ))}
          </div>

          <div className="capacity-gauges">
            <div><span><b>Vitesse</b><small>11,64 / 25 m/s</small></span><div className="gauge"><i style={{ width: "46.6%" }} /></div><strong>46,6 %</strong></div>
            <div><span><b>Pression enveloppe</b><small>36 / 40 bar(g)</small></span><div className="gauge warning"><i style={{ width: "90%" }} /></div><strong>90 %*</strong></div>
          </div>
          <p className="gauge-note">* Comparaison conservatrice, pas un coefficient de sécurité. La pression de chambre reste à mesurer.</p>
        </div>
      </section>

      <section className="critical-callout">
        <span className="callout-number">0,37</span>
        <div><p className="mono-label">ÉCART DIMENSIONNEL · mm</p><h2>La taille standard de 75 mm ne peut pas être commandée directement.</h2><p>La portée mesurée à 74,63 mm est hors de la tolérance 74,95–75,05 mm. Une exécution spécifique ou une adaptation certifiée par le fabricant est nécessaire.</p></div>
        <span className="callout-mark">!</span>
      </section>

      <section className="cad-section section-pad" id="conception">
        <div className="cad-heading">
          <div><p className="section-index">05 · CONCEPTION CATIA V5</p><h2>De l’hypothèse technique<br />à la maquette vérifiable.</h2></div>
          <p>Une maquette d’étude a été construite pour contrôler l’architecture, l’encombrement, l’empilement axial et la cohérence de l’assemblage avant consultation fournisseur.</p>
        </div>
        <div className="cad-layout">
          <figure className="cad-main">
            <img src="/assets/maquette-catia.png" alt="Maquette numérique CATIA V5 de la garniture mécanique" />
            <figcaption><b>Maquette avec matériaux affectés</b><span>Visualisation de conception — données non contractuelles</span></figcaption>
          </figure>
          <div className="cad-stats">
            <article><strong>18</strong><span>références distinctes</span></article>
            <article><strong>40</strong><span>occurrences assemblées</span></article>
            <article><strong>63,25</strong><span>mm de longueur axiale</span></article>
            <article><strong>203</strong><span>mm d’encombrement maximal</span></article>
          </div>
          <figure className="exploded">
            <img src="/assets/vue-eclatee.png" alt="Vue éclatée et nomenclature de la garniture mécanique" />
            <figcaption><span>Livrable CAO 03</span><b>Vue éclatée & nomenclature</b></figcaption>
          </figure>
        </div>
      </section>

      <section className="risk-section section-pad" id="risques">
        <div className="risk-heading">
          <p className="section-index light">06 · ANALYSE AMDEC</p>
          <h2>La maîtrise du risque<br />se conçoit avant le montage.</h2>
          <p>La criticité est évaluée par C = G × O × D. Les valeurs résiduelles supposent la réalisation et la vérification de toutes les actions recommandées.</p>
        </div>

        <div className="risk-board">
          <div className="risk-legend"><span><i className="before-dot" />Criticité initiale</span><span><i className="after-dot" />Criticité résiduelle théorique</span></div>
          {riskRows.map((risk, index) => (
            <div className="risk-row" key={risk.label}>
              <span className="risk-index">0{index + 1}</span>
              <b>{risk.label}</b>
              <div className="risk-bars">
                <div className="risk-bar before" style={{ width: `${(risk.before / 32) * 100}%` }}><span>{risk.before}</span></div>
                <div className="risk-bar after" style={{ width: `${(risk.after / 32) * 100}%` }}><span>{risk.after}</span></div>
              </div>
            </div>
          ))}
          <div className="risk-actions">
            <span>Actions structurantes</span>
            <p>Mesurer la pression · contrôler l’arbre et les paliers · définir le rinçage · formaliser la mise en service</p>
          </div>
        </div>
      </section>

      <section className="validation-section section-pad" id="validation">
        <div className="validation-title">
          <p className="section-index">07 · DÉCISION INDUSTRIELLE</p>
          <h2>Présélection validée.<br />Commande non autorisée.</h2>
          <p>Le projet a franchi le diagnostic, le choix d’architecture et la maquette. Quatre validations terrain restent obligatoires avant l’achat.</p>
        </div>
        <ol className="roadmap">
          <li><span>01</span><div><b>Mesurer</b><p>Pression de chambre, transitoires, dimensions et état dynamique.</p></div><em>Terrain</em></li>
          <li><span>02</span><div><b>Faire certifier</b><p>Point de fonctionnement, matériaux et plan pour Ø 74,63 mm.</p></div><em>Fournisseur</em></li>
          <li><span>03</span><div><b>Définir le rinçage</b><p>Pression, débit, instrumentation et contrôle avant démarrage.</p></div><em>Méthodes</em></li>
          <li><span>04</span><div><b>Lancer un pilote</b><p>Montage contrôlé puis suivi fuite, vibration, température et OT/1 000 h.</p></div><em>Exploitation</em></li>
        </ol>
        <div className="decision-stamp"><span>STATUT DE L’ÉTUDE</span><b>GO CONDITIONNEL</b><small>Sous réserve des validations listées</small></div>
      </section>

      <footer>
        <div className="footer-top">
          <div><span className="footer-mark">ME</span><p><b>Mohammed Essommani</b><small>Rapport de stage professionnel · 2026–2027</small></p></div>
          <a href="#accueil">Retour en haut ↑</a>
        </div>
        <div className="partner-logos" aria-label="Institutions partenaires">
          <img src="/assets/centrale-lyon.png" alt="Centrale Lyon" />
          <img src="/assets/ensam.png" alt="ENSAM Casablanca" />
          <img src="/assets/taqa.png" alt="TAQA Morocco" />
        </div>
        <p className="footer-note">Synthèse interactive d’une étude préliminaire. Les valeurs de sélection ne remplacent ni les relevés terrain ni le plan certifié du fournisseur.</p>
      </footer>
    </main>
  );
}
