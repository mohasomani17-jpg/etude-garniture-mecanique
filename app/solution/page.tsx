"use client";

import { useState } from "react";
import AxisHero from "../AxisHero";
import { specs, type SpecKey } from "../site-content";

export default function SolutionPage() {
  const [activeSpec, setActiveSpec] = useState<SpecKey>("service");
  return <main className="axis-page axis-page-dark">
    <AxisHero number="04" eyebrow="Cahier des charges & présélection" title="Une architecture cohérente." accent="Une décision conditionnelle." description="La Chesterton 155 satisfait le tri conservateur en vitesse et en pression. Son point de fonctionnement combiné, son diamètre réel et ses matériaux doivent encore être validés par le fournisseur." previous="/technologie" next="/conception" />
    <section className="solution section"><div className="container solution-grid">
      <div className="solution-media"><span className="media-label">Coupe fonctionnelle</span><img src="/assets/chesterton-155.png" alt="Garniture mécanique à cartouche Chesterton 155" /><div className="model-card"><small>Modèle présélectionné</small><strong>Chesterton 155</strong><span>Cartouche simple · 2 ensembles</span></div></div>
      <div className="solution-copy"><p className="overline">DIMENSIONNEMENT</p><h2>Vérifier le service.<br /><span>Verrouiller l’interface.</span></h2><p className="solution-intro">Les caractéristiques sont organisées par famille pour distinguer les conditions de service, les dimensions d’intégration et la configuration retenue.</p>
        <div className="tabs" role="tablist" aria-label="Caractéristiques techniques">{(Object.keys(specs) as SpecKey[]).map(key => <button key={key} role="tab" aria-selected={activeSpec === key} onClick={() => setActiveSpec(key)}>{key === "service" ? "Service" : key === "interface" ? "Interface" : key === "configuration" ? "Configuration" : "Plan 11"}</button>)}</div>
        <div className="specs" role="tabpanel">{specs[activeSpec].map(([label,value]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}</div>
        <div className="capacity"><div><span><b>Vitesse</b><small>11,64 / 20 m/s</small></span><div><i style={{ width: "58.2%" }} /></div><strong>58,2 %</strong></div><div><span><b>Pression*</b><small>36 / 40 bar(g)</small></span><div className="warn"><i style={{ width: "90%" }} /></div><strong>90 %</strong></div></div><p className="fine-print">* Les limites générales ne sont pas des coefficients de sécurité. La pression de 36 bar est une enveloppe de tri ; la chambre est estimée à 30 bar et doit être mesurée.</p>
        <div className="validation-strip"><span>Statut</span><b>Compatible en première analyse</b><small>Point combiné et exécution Ø 74,6 mm à faire certifier</small></div>
      </div>
    </div></section>
    <section className="critical"><div className="container critical-inner"><div className="critical-value"><strong>0,37</strong><span>mm</span></div><div><p className="overline">ÉCART DIMENSIONNEL</p><h2>Le standard Ø 75 mm ne peut pas être commandé directement.</h2><p>La portée mesurée à 74,63 mm se situe hors de la tolérance 74,95–75,05 mm indiquée par la notice. Il faut une chemise intégrée adaptée ou une exécution explicitement approuvée par le fabricant.</p></div><span className="critical-mark">!</span></div></section>
  </main>;
}
