"use client";

import { useEffect, useState } from "react";

const maintenanceData = [
  { name: "01CEX102PO", total: 33, seal: 19, rate: 57.6 },
  { name: "01CEX202PO", total: 10, seal: 5, rate: 50 },
  { name: "02CEX102PO", total: 26, seal: 7, rate: 26.9 },
  { name: "02CEX202PO", total: 31, seal: 6, rate: 19.4 },
];

const comparison = [
  ["Principe", "Fuite contrôlée nécessaire", "Film lubrifiant entre deux faces"],
  ["Maintenance", "Réglage et resserrage périodiques", "Cartouche préréglée, suivi conditionnel"],
  ["Impact arbre", "Frottement continu sur la chemise", "Aucun frottement direct sur l’arbre"],
  ["Fuites", "Variables, dépendantes du serrage", "Très faibles en régime normal"],
];

const riskRows = [
  { label: "Fuite excessive", before: 32, after: 16 },
  { label: "Débit de rinçage interrompu", before: 32, after: 8 },
  { label: "Échauffement des faces", before: 27, after: 6 },
  { label: "Usure de la chemise", before: 27, after: 6 },
];

const specs = {
  service: [
    ["Fluide", "Eau déminéralisée propre"],
    ["Température", "33,2 °C"],
    ["Rotation", "2 980 tr/min"],
    ["Débit nominal", "648 m³/h"],
  ],
  interface: [
    ["Portée nominale", "74,60 mm"],
    ["Portée mesurée", "74,63 mm"],
    ["Déplacement axial", "≈ 0,07 mm"],
    ["Passages d’arbre", "2 zones"],
  ],
  configuration: [
    ["Architecture", "Cartouche simple"],
    ["Présélection", "Chesterton 155"],
    ["Faces", "SSC / carbone"],
    ["Joints", "FKM ou EPDM à valider"],
  ],
} as const;

type SpecKey = keyof typeof specs;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSpec, setActiveSpec] = useState<SpecKey>("service");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="accueil">
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Accueil">
          <span className="brand-symbol">ME</span>
          <span className="brand-text"><b>Seal / 02CEX202PO</b><small>Étude de modernisation</small></span>
        </a>
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Navigation principale">
          <a href="#diagnostic" onClick={closeMenu}>Diagnostic</a>
          <a href="#solution" onClick={closeMenu}>Solution</a>
          <a href="#conception" onClick={closeMenu}>Conception</a>
          <a href="#risques" onClick={closeMenu}>Risques</a>
          <a className="nav-highlight" href="#decision" onClick={closeMenu}>Décision <span>↗</span></a>
        </nav>
        <button className={menuOpen ? "menu-toggle is-open" : "menu-toggle"} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>
          <span /><span />
        </button>
      </header>

      <section className="hero">
        <div className="hero-copy container">
          <div className="hero-kicker"><span className="live-dot" /> Étude technique · Stage professionnel 2026</div>
          <h1>Une étanchéité<br /><span>pensée pour durer.</span></h1>
          <p className="hero-lead">Remplacer le presse-étoupe de la pompe de reprise 02CEX202PO par une garniture mécanique à cartouche — de l’historique GMAO à la maquette CATIA V5.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#diagnostic">Découvrir l’étude <span>↓</span></a>
            <a className="ghost-button" href="#decision">Voir la conclusion <span>↗</span></a>
          </div>
          <div className="author-chip"><span>ME</span><div><b>Mohammed Essommani</b><small>Génie des systèmes mécaniques industriels</small></div></div>
        </div>

        <div className="hero-media">
          <div className="image-glow" />
          <img src="/assets/pompe-02cex202po.png" alt="Pompe centrifuge 02CEX202PO étudiée" />
          <div className="asset-card">
            <span>Actif industriel</span><strong>02CEX202PO</strong><small>Pompe centrifuge · 550 kW</small>
          </div>
          <div className="hero-status"><span className="status-icon">✓</span><div><small>Phase actuelle</small><b>Présélection validée</b></div></div>
        </div>

        <div className="metric-strip container">
          <article><span>01</span><strong>37<em>%</em></strong><p>des OT CEX liés à l’étanchéité</p></article>
          <article><span>02</span><strong>11,64<em>m/s</em></strong><p>vitesse périphérique calculée</p></article>
          <article><span>03</span><strong>74,63<em>mm</em></strong><p>diamètre réel de la portée</p></article>
          <article><span>04</span><strong>2,97<em>kg</em></strong><p>masse estimée de la maquette</p></article>
        </div>
      </section>

      <section className="context section container">
        <div className="section-heading split-heading">
          <div><p className="overline">01 · CONTEXTE</p><h2>Un organe discret.<br /><span>Un enjeu majeur.</span></h2></div>
          <p>Au poste d’eau des unités 1 et 2, la pompe de reprise maintient la circulation des condensats. Son étanchéité influence directement la propreté, la maintenance et la disponibilité de l’installation.</p>
        </div>
        <div className="context-grid">
          <figure className="plant-card">
            <img src="/assets/centrale-taqa.jpg" alt="Centrale thermique TAQA Morocco à Jorf Lasfar" />
            <figcaption><span>Site industriel</span><b>Centrale thermique de Jorf Lasfar</b></figcaption>
          </figure>
          <div className="method-list">
            {[
              ["01", "Diagnostiquer", "Historique GMAO, limites des données et état de l’équipement."],
              ["02", "Sélectionner", "Cahier des charges, dimensionnement et choix de la cartouche."],
              ["03", "Intégrer", "Maquette CATIA V5, interfaces, encombrement et risques."],
            ].map(([n, title, text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><i>↗</i></article>)}
          </div>
        </div>
      </section>

      <section className="diagnostic section" id="diagnostic">
        <div className="container">
          <div className="section-heading split-heading on-dark">
            <div><p className="overline">02 · DIAGNOSTIC GMAO</p><h2>La récurrence<br /><span>est mesurable.</span></h2></div>
            <p>Sur 100 ordres de travail terminés concernant les quatre pompes CEX, 37 sont directement associés au presse-étoupe. La fréquence justifie une amélioration structurée.</p>
          </div>
          <div className="diagnostic-grid">
            <article className="chart-card dark-card">
              <div className="card-head"><div><small>Part des OT presse-étoupe</small><h3>Par équipement</h3></div><span>GMAO · 02.08.2026</span></div>
              <div className="bars">
                {maintenanceData.map(item => <div className="bar-item" key={item.name}>
                  <div className="bar-label"><b>{item.name}</b><small>{item.seal} / {item.total} OT</small></div>
                  <div className="bar-track"><i style={{ width: `${item.rate}%` }} /></div>
                  <strong>{item.rate.toFixed(1).replace(".", ",")} %</strong>
                </div>)}
              </div>
            </article>
            <div className="insight-stack">
              <article className="signal-card"><div className="signal-ring"><span /></div><small>Signal critique</small><strong>1,4 jour</strong><p>Intervalle minimal entre deux signalements sur 02CEX202PO.</p></article>
              <article className="method-card"><span>Lecture responsable</span><h3>Une preuve de récurrence, pas un MTBF.</h3><p>Sans heures de marche ni durées d’arrêt, les intervalles calendaires ne permettent pas de calculer le MTBF ou le MTTR.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="technology section container">
        <div className="section-heading split-heading">
          <div><p className="overline">03 · TECHNOLOGIE</p><h2>Changer de logique,<br /><span>pas seulement de pièce.</span></h2></div>
          <p>Le passage à une cartouche remplace une étanchéité dépendante du réglage par une interface fonctionnelle maîtrisée et plus simple à surveiller.</p>
        </div>
        <div className="comparison">
          <div className="comparison-row comparison-head"><span>Critère</span><b>Presse-étoupe actuel</b><b className="selected">Cartouche proposée <i>Choix</i></b></div>
          {comparison.map(([criterion, current, proposed]) => <div className="comparison-row" key={criterion}><span>{criterion}</span><p>{current}</p><p className="selected">{proposed}</p></div>)}
        </div>
      </section>

      <section className="solution section" id="solution">
        <div className="container solution-grid">
          <div className="solution-media">
            <span className="media-label">Coupe fonctionnelle</span>
            <img src="/assets/chesterton-155.png" alt="Garniture mécanique à cartouche Chesterton 155" />
            <div className="model-card"><small>Modèle présélectionné</small><strong>Chesterton 155</strong><span>Cartouche simple · 2 ensembles</span></div>
          </div>
          <div className="solution-copy">
            <p className="overline">04 · PRÉSÉLECTION</p>
            <h2>Une architecture cohérente.<br /><span>Une décision conditionnelle.</span></h2>
            <p className="solution-intro">La Chesterton 155 couvre la vitesse calculée et l’enveloppe provisoire de pression. Le choix final dépend encore des relevés terrain et du plan fournisseur certifié.</p>
            <div className="tabs" role="tablist" aria-label="Caractéristiques techniques">
              {(Object.keys(specs) as SpecKey[]).map(key => <button key={key} role="tab" aria-selected={activeSpec === key} onClick={() => setActiveSpec(key)}>{key === "service" ? "Service" : key === "interface" ? "Interface" : "Configuration"}</button>)}
            </div>
            <div className="specs" role="tabpanel">{specs[activeSpec].map(([label, value]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}</div>
            <div className="capacity">
              <div><span><b>Vitesse</b><small>11,64 / 25 m/s</small></span><div><i style={{ width: "46.6%" }} /></div><strong>46,6 %</strong></div>
              <div><span><b>Pression*</b><small>36 / 40 bar(g)</small></span><div className="warn"><i style={{ width: "90%" }} /></div><strong>90 %</strong></div>
            </div>
            <p className="fine-print">* Enveloppe conservatrice : la pression réelle de chambre reste à mesurer.</p>
          </div>
        </div>
      </section>

      <section className="critical">
        <div className="container critical-inner"><div className="critical-value"><strong>0,37</strong><span>mm</span></div><div><p className="overline">ÉCART DIMENSIONNEL</p><h2>Le standard Ø 75 mm ne peut pas être commandé directement.</h2><p>La portée mesurée à 74,63 mm se situe hors de la tolérance 74,95–75,05 mm. Une exécution spécifique ou une adaptation certifiée est nécessaire.</p></div><span className="critical-mark">!</span></div>
      </section>

      <section className="cad section container" id="conception">
        <div className="section-heading split-heading">
          <div><p className="overline">05 · CONCEPTION CATIA V5</p><h2>De l’hypothèse<br /><span>à la maquette.</span></h2></div>
          <p>La maquette contrôle l’architecture, l’empilement axial, les interfaces et l’encombrement avant consultation du fournisseur.</p>
        </div>
        <div className="cad-grid">
          <figure className="cad-main"><img src="/assets/maquette-catia.png" alt="Maquette CATIA V5 de la garniture mécanique" /><figcaption><span>Maquette numérique</span><b>Assemblage avec matériaux affectés</b></figcaption></figure>
          <div className="cad-stats">
            <article><strong>18</strong><span>références</span></article><article><strong>40</strong><span>occurrences</span></article><article><strong>63,25</strong><span>mm axial</span></article><article><strong>203</strong><span>mm maxi.</span></article>
          </div>
          <figure className="cad-exploded"><img src="/assets/vue-eclatee.png" alt="Vue éclatée de la garniture" /><figcaption><span>Livrable CAO</span><b>Vue éclatée & nomenclature</b></figcaption></figure>
        </div>
      </section>

      <section className="risks section" id="risques">
        <div className="container risk-grid">
          <div className="risk-copy"><p className="overline">06 · ANALYSE AMDEC</p><h2>Concevoir aussi<br /><span>la maîtrise du risque.</span></h2><p>La criticité C = G × O × D est comparée avant et après les actions préventives. Les valeurs résiduelles restent théoriques jusqu’à leur validation sur le terrain.</p><div className="risk-actions"><small>Actions structurantes</small><p>Mesurer la pression · contrôler l’arbre · définir le rinçage · formaliser la mise en service</p></div></div>
          <div className="risk-board">
            <div className="risk-legend"><span><i className="before" />Initiale</span><span><i className="after" />Résiduelle</span></div>
            {riskRows.map((row, index) => <article className="risk-row" key={row.label}><span>0{index + 1}</span><b>{row.label}</b><div><i className="risk-bar before" style={{ width: `${row.before / 32 * 100}%` }}><em>{row.before}</em></i><i className="risk-bar after" style={{ width: `${row.after / 32 * 100}%` }}><em>{row.after}</em></i></div></article>)}
          </div>
        </div>
      </section>

      <section className="decision section container" id="decision">
        <div className="section-heading decision-heading"><p className="overline">07 · DÉCISION INDUSTRIELLE</p><h2>Présélection validée.<br /><span>Commande non autorisée.</span></h2><p>Quatre validations doivent encore verrouiller l’intégration avant l’achat.</p></div>
        <ol className="roadmap">
          {[
            ["01", "Mesurer", "Pression de chambre, transitoires, dimensions et état dynamique.", "Terrain"],
            ["02", "Faire certifier", "Point de fonctionnement, matériaux et plan pour Ø 74,63 mm.", "Fournisseur"],
            ["03", "Définir le rinçage", "Pression, débit, instrumentation et contrôle avant démarrage.", "Méthodes"],
            ["04", "Lancer un pilote", "Suivre fuite, vibration, température et OT par 1 000 h.", "Exploitation"],
          ].map(([n, title, text, owner]) => <li key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><em>{owner}</em></li>)}
        </ol>
        <div className="decision-card"><small>Statut de l’étude</small><strong>GO conditionnel</strong><span>Sous réserve des validations listées</span></div>
      </section>

      <footer>
        <div className="container footer-top"><div className="footer-identity"><span className="brand-symbol">ME</span><div><b>Mohammed Essommani</b><small>Rapport de stage professionnel · 2026–2027</small></div></div><a href="#accueil">Retour en haut ↑</a></div>
        <div className="container logos"><img src="/assets/centrale-lyon.png" alt="Centrale Lyon" /><img src="/assets/ensam.png" alt="ENSAM Casablanca" /><img src="/assets/taqa.png" alt="TAQA Morocco" /></div>
        <p className="container footer-note">Synthèse interactive d’une étude préliminaire. Les valeurs de sélection ne remplacent ni les relevés terrain ni le plan certifié du fournisseur.</p>
      </footer>
    </main>
  );
}
