import type { Metadata } from "next";
import AxisHero from "../AxisHero";

export const metadata: Metadata = { title: "Évaluation technico-économique et mise en œuvre" };

export default function DecisionPage() {
  const steps = [
    ["01", "Campagne de mesures", "Pressions, température maximale, débit de fuite, vibrations, faux-rond, déplacement axial et interfaces des deux côtés.", "Terrain"],
    ["02", "Consultation", "Transmettre au fournisseur le fluide, les conditions de service, le diamètre réel et les interfaces complètes.", "Fournisseur"],
    ["03", "Validation", "Confirmer matériaux, exécution Ø 74,6 mm, Plan 11 et dimensions sur un plan certifié.", "Revue"],
    ["04", "Préparation", "Fabriquer les adaptations, préparer les deux branches de rinçage et rédiger la gamme de montage.", "Méthodes"],
    ["05", "Installation", "Contrôler l’arbre, monter les deux cartouches et raccorder les branches de rinçage.", "Maintenance"],
    ["06", "Mise en service", "Purger, effectuer la rotation manuelle puis surveiller fuites, températures et vibrations au démarrage.", "Exploitation"],
    ["07", "Pilote", "Comparer les indicateurs techniques et économiques sur une période et une base d’heures représentatives.", "Suivi"],
  ];

  const pilotCriteria = [
    ["Fuite visible", "Aucune fuite anormale continue"],
    ["Eau perdue", "Réduction proposée ≥ 90 %"],
    ["OT d’étanchéité", "Réduction proposée ≥ 50 % / 1 000 h"],
    ["OT SAFETY", "Aucun pendant le pilote"],
    ["État dynamique", "Aucune dérive thermique ou vibratoire"],
  ];

  const missingData = ["Heures de marche", "Durées d’intervention", "Débit de fuite", "Coût de l’eau", "Prix des consommables", "Devis des deux cartouches", "Coût des adaptations", "Coût d’indisponibilité"];

  return <main className="axis-page">
    <AxisHero number="07" eyebrow="Économie & mise en œuvre" title="Une base technique cohérente." accent="Pas encore un achat autorisé." description="La méthode de calcul est définie, mais le coût annuel et le temps de retour ne peuvent pas être chiffrés sans données réelles. La prochaine décision porte sur la consultation et le pilote." previous="/risques" next="/" />

    <section className="economics section">
      <div className="container">
        <div className="section-heading split-heading"><div><p className="overline">ÉVALUATION ÉCONOMIQUE</p><h2>Structurer les coûts.<br /><span>Refuser les chiffres fictifs.</span></h2></div><p>Les six OT terminés sur 02CEX202PO prouvent la récurrence, mais ne donnent ni les heures de travail, ni les volumes d’eau, ni les coûts unitaires nécessaires au calcul.</p></div>
        <div className="economic-formulas">
          <article><small>COÛT ANNUEL ACTUEL</small><strong>C<sub>actuel</sub></strong><p>Main-d’œuvre + consommables + eau + indisponibilité</p></article>
          <article><small>INVESTISSEMENT INITIAL</small><strong>I<sub>0</sub></strong><p>2 cartouches + adaptations + Plan 11 + montage + essais + stock</p></article>
          <article><small>TEMPS DE RETOUR</small><strong>T<sub>retour</sub></strong><p>I<sub>0</sub> / (C<sub>actuel</sub> − C<sub>futur</sub>), uniquement si le gain est positif</p></article>
        </div>
        <div className="economic-status"><div><small>STATUT DU CALCUL</small><strong>Non chiffrable de manière fiable</strong></div><p>Un résultat fondé sur des prix supposés ne peut pas soutenir une décision d’investissement.</p></div>
        <div className="missing-data"><span>Données à collecter</span><div>{missingData.map(item => <b key={item}>{item}</b>)}</div></div>
      </div>
    </section>

    <section className="pilot section">
      <div className="container pilot-grid">
        <div><p className="overline">CRITÈRES DU PILOTE</p><h2>Comparer avant et après<br /><span>sur 1 000 heures.</span></h2><p>Les objectifs proposés doivent encore être validés par TAQA Morocco et le fournisseur avant le démarrage du pilote.</p></div>
        <div className="pilot-criteria">{pilotCriteria.map(([label,value], index) => <article key={label}><span>0{index + 1}</span><div><small>{label}</small><strong>{value}</strong></div></article>)}</div>
      </div>
    </section>

    <section className="decision section container"><div className="section-heading decision-heading"><p className="overline">PLAN DE MISE EN ŒUVRE</p><h2>Sept phases.<br /><span>Un pilote traçable.</span></h2><p>Chaque phase produit un livrable contrôlable avant le passage à la suivante.</p></div>
      <ol className="roadmap">{steps.map(([n,title,text,owner]) => <li key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><em>{owner}</em></li>)}</ol>
      <div className="decision-card"><small>Statut de l’étude</small><strong>GO conditionnel</strong><span>Vers consultation et essai pilote — pas vers commande directe</span></div>
    </section>
  </main>;
}
