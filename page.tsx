import type { Metadata } from "next";
import AxisHero from "../AxisHero";
import { riskRows } from "../site-content";

export const metadata: Metadata = { title: "Analyse AMDEC" };

export default function RisquesPage() {
  return <main className="axis-page axis-page-dark">
    <AxisHero number="06" eyebrow="Analyse AMDEC" title="Concevoir aussi" accent="la maîtrise du risque." description="La criticité C = G × O × D est comparée avant et après les actions préventives. Les valeurs résiduelles restent théoriques jusqu’à leur validation sur le terrain." previous="/conception" next="/decision" />
    <section className="risks section"><div className="container risk-grid"><div className="risk-copy"><p className="overline">ACTIONS PRÉVENTIVES</p><h2>Réduire le risque<br /><span>avant la mise en service.</span></h2><p>La hiérarchisation montre l’effet attendu des mesures de conception, de contrôle et de surveillance.</p><div className="risk-actions"><small>Actions structurantes</small><p>Mesurer la pression · contrôler l’arbre · définir le rinçage · formaliser la mise en service</p></div></div>
      <div className="risk-board"><div className="risk-legend"><span><i className="before" />Initiale</span><span><i className="after" />Résiduelle</span></div>{riskRows.map((row,index) => <article className="risk-row" key={row.label}><span>0{index + 1}</span><b>{row.label}</b><div><i className="risk-bar before" style={{ width: `${row.before / 32 * 100}%` }}><em>{row.before}</em></i><i className="risk-bar after" style={{ width: `${row.after / 32 * 100}%` }}><em>{row.after}</em></i></div></article>)}</div>
    </div></section>
  </main>;
}
