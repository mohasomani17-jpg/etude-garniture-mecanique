import type { Metadata } from "next";
import AxisHero from "../AxisHero";

export const metadata: Metadata = { title: "Contexte industriel" };

export default function ContextePage() {
  return <main className="axis-page">
    <AxisHero number="01" eyebrow="Contexte industriel" title="Une pompe de reprise." accent="Un enjeu de disponibilité." description="La 02CEX202PO transfère les condensats vers le dégazeur à travers les réchauffeurs basse pression. Ses deux passages d’arbre rendent l’étanchéité déterminante pour la propreté, la maintenance et la continuité du cycle eau-vapeur." previous="/" next="/diagnostic" />
    <section className="context section container">
      <div className="section-heading split-heading"><div><p className="overline">SITE & MÉTHODE</p><h2>Comprendre avant<br /><span>de modifier.</span></h2></div><p>La démarche relie l’historique de maintenance, le cahier des charges, la sélection fournisseur, la maquette numérique, l’AMDEC et l’évaluation du pilote.</p></div>
      <div className="context-grid">
        <figure className="plant-card"><img src="/assets/centrale-taqa.jpg" alt="Centrale thermique TAQA Morocco à Jorf Lasfar" /><figcaption><span>Site industriel</span><b>Centrale thermique de Jorf Lasfar</b></figcaption></figure>
        <div className="method-list">{[["01", "Diagnostiquer", "Historique GMAO, état mécanique et limites des données disponibles."], ["02", "Spécifier & sélectionner", "Exigences vérifiables, calculs et présélection conditionnelle."], ["03", "Intégrer & valider", "CATIA V5, Plan 11, AMDEC, pilote et lecture économique."]].map(([n,title,text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><i>↗</i></article>)}</div>
      </div>
      <div className="context-facts" aria-label="Caractéristiques principales de la pompe">
        <article><strong>648</strong><span>m³/h</span><p>Débit nominal</p></article>
        <article><strong>168</strong><span>mCE</span><p>Hauteur manométrique</p></article>
        <article><strong>2 980</strong><span>tr/min</span><p>Vitesse de rotation</p></article>
        <article><strong>2</strong><span>côtés</span><p>Zones d’étanchéité</p></article>
      </div>
    </section>
  </main>;
}
