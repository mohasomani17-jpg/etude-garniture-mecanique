import { axes } from "./site-content";

export default function Home() {
  return (
    <main className="home-main" id="accueil">
      <section className="hero">
        <div className="hero-copy container">
          <div className="hero-kicker"><span className="live-dot" /> Étude technique · Stage professionnel 2026</div>
          <h1>Une étanchéité<br /><span>pensée pour durer.</span></h1>
          <p className="hero-lead">Remplacer le presse-étoupe de la pompe de reprise 02CEX202PO par une garniture mécanique à cartouche — de l’historique GMAO à la maquette CATIA V5.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#axes">Explorer les axes <span>↓</span></a>
            <a className="ghost-button" href="/conception">Manipuler le modèle 3D <span>↗</span></a>
          </div>
          <div className="author-chip"><span>ME</span><div><b>Mohammed Essommani</b><small>Génie des systèmes mécaniques industriels</small></div></div>
        </div>

        <div className="hero-media">
          <div className="image-glow" />
          <img src="/assets/pompe-02cex202po.png" alt="Pompe centrifuge 02CEX202PO étudiée" />
          <div className="asset-card"><span>Actif industriel</span><strong>02CEX202PO</strong><small>Pompe centrifuge · 550 kW</small></div>
          <div className="hero-status"><span className="status-icon">✓</span><div><small>Phase actuelle</small><b>Présélection validée</b></div></div>
        </div>

        <div className="metric-strip container">
          <article><span>01</span><strong>37<em>%</em></strong><p>des OT CEX liés à l’étanchéité</p></article>
          <article><span>02</span><strong>11,64<em>m/s</em></strong><p>vitesse périphérique calculée</p></article>
          <article><span>03</span><strong>74,63<em>mm</em></strong><p>diamètre réel de la portée</p></article>
          <article><span>04</span><strong>2,97<em>kg</em></strong><p>masse estimée de la maquette</p></article>
        </div>
      </section>

      <section className="axes-overview section container" id="axes">
        <div className="section-heading split-heading">
          <div><p className="overline">PARCOURS DE L’ÉTUDE</p><h2>Sept axes.<br /><span>Sept pages dédiées.</span></h2></div>
          <p>Chaque volet dispose désormais de son propre espace. Vous pouvez suivre l’étude dans l’ordre ou accéder directement au sujet qui vous intéresse.</p>
        </div>
        <div className="axis-cards">
          {axes.map((axis) => (
            <a className={`axis-card axis-card-${axis.tone}`} href={axis.href} key={axis.href}>
              <span className="axis-number">{axis.number}</span>
              <div><small>{axis.eyebrow}</small><h2>{axis.title}</h2><p>{axis.summary}</p></div>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div className="container home-cta-inner">
          <div><p className="overline">MAQUETTE NUMÉRIQUE</p><h2>Inspecter l’assemblage sous tous les angles.</h2></div>
          <a className="primary-button" href="/conception">Ouvrir l’axe conception <span>↗</span></a>
        </div>
      </section>
    </main>
  );
}
