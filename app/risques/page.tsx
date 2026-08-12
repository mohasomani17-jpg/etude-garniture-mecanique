import type { Metadata } from "next";
import AxisHero from "../AxisHero";
import { riskRows, sealRiskRows } from "../site-content";

export const metadata: Metadata = { title: "Analyse AMDEC" };

export default function RisquesPage() {
  return <main className="axis-page axis-page-dark">
    <AxisHero number="06" eyebrow="Analyse AMDEC" title="Concevoir aussi" accent="la maîtrise du risque." description="Deux AMDEC distinguent les défaillances du presse-étoupe existant des risques prévisionnels introduits par la cartouche. La criticité C = G × O × D est notée sur 64." previous="/conception" next="/decision" />
    <section className="risks section"><div className="container risk-grid"><div className="risk-copy"><p className="overline">ACTIONS PRÉVENTIVES</p><h2>Réduire le risque<br /><span>avant la mise en service.</span></h2><p>Les valeurs résiduelles sont théoriques&nbsp;: elles supposent que chaque action est réalisée, contrôlée puis réévaluée après le pilote.</p><div className="risk-actions"><small>Actions structurantes</small><p>Mesurer les pressions · contrôler l’arbre et les paliers · valider le Plan 11 · certifier le diamètre · formaliser le montage</p></div></div>
      <div className="risk-boards">
        <div className="risk-board"><div className="risk-board-title"><small>SYSTÈME EXISTANT</small><h3>Presse-étoupe à tresses</h3></div><div className="risk-legend"><span><i className="before" />Initiale</span><span><i className="after" />Résiduelle</span></div>{riskRows.map((row,index) => <article className="risk-row" key={row.label}><span>0{index + 1}</span><b>{row.label}</b><div><i className="risk-bar before" style={{ width: `${row.before / 32 * 100}%` }}><em>{row.before}</em></i><i className="risk-bar after" style={{ width: `${row.after / 32 * 100}%` }}><em>{row.after}</em></i></div></article>)}</div>
        <div className="risk-board"><div className="risk-board-title"><small>SOLUTION PROPOSÉE</small><h3>Cartouche mécanique</h3></div><div className="risk-legend"><span><i className="before" />Initiale</span><span><i className="after" />Résiduelle</span></div>{sealRiskRows.map((row,index) => <article className="risk-row" key={row.label}><span>0{index + 1}</span><b>{row.label}</b><div><i className="risk-bar before" style={{ width: `${row.before / 32 * 100}%` }}><em>{row.before}</em></i><i className="risk-bar after" style={{ width: `${row.after / 32 * 100}%` }}><em>{row.after}</em></i></div></article>)}</div>
        <div className="risk-thresholds"><span><i className="low" />1–9 · Faible</span><span><i className="moderate" />10–19 · Modérée</span><span><i className="high" />20–29 · Élevée</span><span><i className="critical-risk" />30–64 · Critique</span></div>
      </div>
    </div></section>
  </main>;
}
