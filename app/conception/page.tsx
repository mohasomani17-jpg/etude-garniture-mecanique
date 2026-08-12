import type { Metadata } from "next";
import AxisHero from "../AxisHero";
import GarnitureViewer from "../GarnitureViewer";

export const metadata: Metadata = { title: "Conception CATIA V5 et modèle 3D" };

export default function ConceptionPage() {
  return <main className="axis-page">
    <AxisHero number="05" eyebrow="CATIA V5 & Plan 11" title="De l’hypothèse" accent="à l’inspection 3D." description="La maquette d’étude contrôle l’architecture, l’empilement, les interfaces et l’encombrement. Elle ne remplace ni un plan fournisseur certifié ni un dossier de fabrication." previous="/solution" next="/risques" />
    <section className="cad section container"><div className="section-heading split-heading"><div><p className="overline">MAQUETTE NUMÉRIQUE</p><h2>Tourner. Zoomer.<br /><span>Inspecter.</span></h2></div><p>Utilisez la souris ou l’écran tactile, choisissez une vue normalisée et passez en plein écran pour examiner l’assemblage.</p></div>
      <GarnitureViewer />
      <div className="cad-grid"><figure className="cad-main"><img src="/assets/maquette-catia.png" alt="Maquette CATIA V5 de la garniture mécanique" /><figcaption><span>Maquette numérique</span><b>Assemblage avec matériaux affectés</b></figcaption></figure><div className="cad-stats"><article><strong>18</strong><span>références distinctes</span></article><article><strong>40</strong><span>occurrences</span></article><article><strong>2,97</strong><span>kg · masse CAO</span></article><article><strong>3</strong><span>plans de définition</span></article></div><figure className="cad-exploded"><img src="/assets/vue-eclatee.png" alt="Vue éclatée de la garniture" /><figcaption><span>Livrable CAO</span><b>Vue éclatée & nomenclature</b></figcaption></figure></div>

      <div className="fit-check">
        <div className="fit-copy"><p className="overline">CONTRÔLE D’ENCOMBREMENT</p><h2>Une intégration possible,<br /><span>encore à confirmer sur site.</span></h2><p>La comparaison distingue l’enveloppe engagée dans la chambre, la longueur globale et les espaces réellement disponibles dans le corps de pompe.</p></div>
        <div className="fit-values">
          <article><small>JEU RADIAL THÉORIQUE</small><strong>5,38 mm</strong><p>Ø 99 mm dans un logement disponible de Ø 109,75 mm.</p></article>
          <article><small>MARGE AXIALE GLOBALE</small><strong>2,75 mm</strong><p>Longueur globale de 63,25 mm pour environ 66 mm disponibles.</p></article>
          <article><small>PARTIE ENGAGÉE</small><strong>19,25 mm</strong><p>À l’intérieur du corps, soit 46,75 mm d’espace restant.</p></article>
        </div>
      </div>
    </section>

    <section className="flush-plan section">
      <div className="container">
        <div className="section-heading split-heading on-dark"><div><p className="overline">CIRCUIT DE RINÇAGE</p><h2>Plan 11.<br /><span>Deux branches à valider.</span></h2></div><p>Le fluide propre est prélevé au refoulement, limité par un orifice calibré puis injecté dans chacune des deux chambres. Le Plan 13 reste une alternative à réexaminer selon les pressions mesurées.</p></div>
        <div className="flush-flow" aria-label="Chaîne fonctionnelle du Plan 11">
          <article><span>01</span><small>PRÉLÈVEMENT</small><strong>Refoulement</strong><p>Hypothèse provisoire&nbsp;: 36 bar</p></article>
          <i aria-hidden="true">→</i>
          <article className="flush-focus"><span>02</span><small>RESTRICTION</small><strong>≈ 3,4 mm</strong><p>Par branche · 12 L/min visés</p></article>
          <i aria-hidden="true">→</i>
          <article><span>03</span><small>INJECTION</small><strong>2 chambres</strong><p>Branches indépendantes en DN 15</p></article>
        </div>
        <div className="flush-warning"><b>À ne pas confondre</b><p>Le passage de 12,2 mm modélisé dans le chapeau est un diamètre de raccordement. L’orifice hydraulique de restriction est un élément calibré distinct, estimé à 3,4 mm par branche.</p></div>
      </div>
    </section>
  </main>;
}
