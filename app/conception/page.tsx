import type { Metadata } from "next";
import AxisHero from "../AxisHero";
import GarnitureViewer from "../GarnitureViewer";

export const metadata: Metadata = { title: "Conception CATIA V5 et modèle 3D" };

export default function ConceptionPage() {
  return <main className="axis-page">
    <AxisHero number="05" eyebrow="Conception CATIA V5" title="De l’hypothèse" accent="à l’inspection 3D." description="La maquette contrôle l’architecture, l’empilement axial, les interfaces et l’encombrement. Elle peut être manipulée directement sous plusieurs perspectives." previous="/solution" next="/risques" />
    <section className="cad section container"><div className="section-heading split-heading"><div><p className="overline">MAQUETTE NUMÉRIQUE</p><h2>Tourner. Zoomer.<br /><span>Inspecter.</span></h2></div><p>Utilisez la souris ou l’écran tactile, choisissez une vue normalisée et passez en plein écran pour examiner l’assemblage.</p></div>
      <GarnitureViewer />
      <div className="cad-grid"><figure className="cad-main"><img src="/assets/maquette-catia.png" alt="Maquette CATIA V5 de la garniture mécanique" /><figcaption><span>Maquette numérique</span><b>Assemblage avec matériaux affectés</b></figcaption></figure><div className="cad-stats"><article><strong>18</strong><span>références</span></article><article><strong>40</strong><span>occurrences</span></article><article><strong>63,25</strong><span>mm axial</span></article><article><strong>203</strong><span>mm maxi.</span></article></div><figure className="cad-exploded"><img src="/assets/vue-eclatee.png" alt="Vue éclatée de la garniture" /><figcaption><span>Livrable CAO</span><b>Vue éclatée & nomenclature</b></figcaption></figure></div>
    </section>
  </main>;
}
