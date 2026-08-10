import type { Metadata } from "next";
import AxisHero from "../AxisHero";
import { maintenanceData } from "../site-content";

export const metadata: Metadata = { title: "Diagnostic GMAO" };

export default function DiagnosticPage() {
  return <main className="axis-page axis-page-dark">
    <AxisHero number="02" eyebrow="Diagnostic GMAO" title="La récurrence" accent="est mesurable." description="Sur 100 ordres de travail terminés concernant les quatre pompes CEX, 37 sont directement associés au presse-étoupe. La fréquence justifie une amélioration structurée." previous="/contexte" next="/technologie" />
    <section className="diagnostic section"><div className="container">
      <div className="section-heading split-heading on-dark"><div><p className="overline">HISTORIQUE DE MAINTENANCE</p><h2>Lire les données<br /><span>sans les surinterpréter.</span></h2></div><p>Les ordres de travail démontrent une récurrence, mais les heures de marche et les durées d’arrêt restent nécessaires pour calculer le MTBF et le MTTR.</p></div>
      <div className="diagnostic-grid"><article className="chart-card dark-card"><div className="card-head"><div><small>Part des OT presse-étoupe</small><h3>Par équipement</h3></div><span>GMAO · 02.08.2026</span></div><div className="bars">{maintenanceData.map(item => <div className="bar-item" key={item.name}><div className="bar-label"><b>{item.name}</b><small>{item.seal} / {item.total} OT</small></div><div className="bar-track"><i style={{ width: `${item.rate}%` }} /></div><strong>{item.rate.toFixed(1).replace(".", ",")} %</strong></div>)}</div></article>
      <div className="insight-stack"><article className="signal-card"><div className="signal-ring"><span /></div><small>Signal critique</small><strong>1,4 jour</strong><p>Intervalle minimal entre deux signalements sur 02CEX202PO.</p></article><article className="method-card"><span>Lecture responsable</span><h3>Une preuve de récurrence, pas un MTBF.</h3><p>Sans heures de marche ni durées d’arrêt, les intervalles calendaires ne permettent pas de calculer le MTBF ou le MTTR.</p></article></div></div>
    </div></section>
  </main>;
}
