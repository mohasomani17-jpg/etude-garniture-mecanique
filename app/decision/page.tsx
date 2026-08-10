import type { Metadata } from "next";
import AxisHero from "../AxisHero";

export const metadata: Metadata = { title: "Décision industrielle" };

export default function DecisionPage() {
  const steps = [["01", "Mesurer", "Pression de chambre, transitoires, dimensions et état dynamique.", "Terrain"], ["02", "Faire certifier", "Point de fonctionnement, matériaux et plan pour Ø 74,63 mm.", "Fournisseur"], ["03", "Définir le rinçage", "Pression, débit, instrumentation et contrôle avant démarrage.", "Méthodes"], ["04", "Lancer un pilote", "Suivre fuite, vibration, température et OT par 1 000 h.", "Exploitation"]];
  return <main className="axis-page">
    <AxisHero number="07" eyebrow="Décision industrielle" title="Présélection validée." accent="Commande non autorisée." description="Quatre validations doivent encore verrouiller l’intégration avant l’achat. La conclusion est favorable, mais explicitement conditionnelle." previous="/risques" next="/" />
    <section className="decision section container"><div className="section-heading decision-heading"><p className="overline">FEUILLE DE ROUTE</p><h2>Quatre verrous<br /><span>avant le pilote.</span></h2><p>Chaque action est associée à un responsable opérationnel afin de transformer l’étude préliminaire en décision industrielle traçable.</p></div>
      <ol className="roadmap">{steps.map(([n,title,text,owner]) => <li key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><em>{owner}</em></li>)}</ol>
      <div className="decision-card"><small>Statut de l’étude</small><strong>GO conditionnel</strong><span>Sous réserve des validations listées</span></div>
    </section>
  </main>;
}
