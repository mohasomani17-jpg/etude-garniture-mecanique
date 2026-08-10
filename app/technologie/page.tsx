import type { Metadata } from "next";
import AxisHero from "../AxisHero";
import { comparison } from "../site-content";

export const metadata: Metadata = { title: "Comparaison technologique" };

export default function TechnologiePage() {
  return <main className="axis-page">
    <AxisHero number="03" eyebrow="Technologie" title="Changer de logique," accent="pas seulement de pièce." description="Le passage à une cartouche remplace une étanchéité dépendante du réglage par une interface fonctionnelle maîtrisée et plus simple à surveiller." previous="/diagnostic" next="/solution" />
    <section className="technology section container">
      <div className="section-heading split-heading"><div><p className="overline">COMPARAISON FONCTIONNELLE</p><h2>Deux principes.<br /><span>Deux philosophies.</span></h2></div><p>La comparaison porte sur le comportement de l’étanchéité, la maintenance, l’impact sur l’arbre et le niveau de fuite attendu.</p></div>
      <div className="comparison"><div className="comparison-row comparison-head"><span>Critère</span><b>Presse-étoupe actuel</b><b className="selected">Cartouche proposée <i>Choix</i></b></div>{comparison.map(([criterion,current,proposed]) => <div className="comparison-row" key={criterion}><span>{criterion}</span><p>{current}</p><p className="selected">{proposed}</p></div>)}</div>
      <div className="technology-note"><span>Résultat</span><p>La cartouche réduit la dépendance au réglage manuel et supprime le frottement direct de la tresse sur la chemise d’arbre.</p></div>
    </section>
  </main>;
}
