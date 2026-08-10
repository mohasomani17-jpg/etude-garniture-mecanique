import type { Metadata } from "next";
import AxisHero from "../AxisHero";

export const metadata: Metadata = { title: "Contexte industriel" };

export default function ContextePage() {
  return <main className="axis-page">
    <AxisHero number="01" eyebrow="Contexte industriel" title="Un organe discret." accent="Un enjeu majeur." description="Au poste d’eau des unités 1 et 2, la pompe de reprise maintient la circulation des condensats. Son étanchéité influence directement la propreté, la maintenance et la disponibilité de l’installation." previous="/" next="/diagnostic" />
    <section className="context section container">
      <div className="section-heading split-heading"><div><p className="overline">SITE & MÉTHODE</p><h2>Comprendre avant<br /><span>de modifier.</span></h2></div><p>La démarche relie l’historique de maintenance, les mesures d’interface, la sélection fournisseur et la validation par maquette numérique.</p></div>
      <div className="context-grid">
        <figure className="plant-card"><img src="/assets/centrale-taqa.jpg" alt="Centrale thermique TAQA Morocco à Jorf Lasfar" /><figcaption><span>Site industriel</span><b>Centrale thermique de Jorf Lasfar</b></figcaption></figure>
        <div className="method-list">{[["01", "Diagnostiquer", "Historique GMAO, limites des données et état de l’équipement."], ["02", "Sélectionner", "Cahier des charges, dimensionnement et choix de la cartouche."], ["03", "Intégrer", "Maquette CATIA V5, interfaces, encombrement et risques."]].map(([n,title,text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><i>↗</i></article>)}</div>
      </div>
    </section>
  </main>;
}
