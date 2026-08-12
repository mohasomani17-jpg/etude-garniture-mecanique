import type { Metadata } from "next";
import AxisHero from "../AxisHero";
import { comparison } from "../site-content";

export const metadata: Metadata = { title: "Comparaison technologique" };

export default function TechnologiePage() {
  return <main className="axis-page">
    <AxisHero number="03" eyebrow="Choix technologique" title="Changer de logique," accent="pas seulement de pièce." description="Le presse-étoupe fonctionne grâce à une fuite contrôlée qui lubrifie ses tresses. La garniture mécanique transfère cette fonction vers un film fluide très mince entre deux faces rodées." previous="/diagnostic" next="/solution" />
    <section className="technology section container">
      <div className="section-heading split-heading"><div><p className="overline">COMPARAISON FONCTIONNELLE</p><h2>Deux principes.<br /><span>Deux philosophies.</span></h2></div><p>La comparaison porte sur le comportement de l’étanchéité, la maintenance, l’impact sur l’arbre et le niveau de fuite attendu.</p></div>
      <div className="comparison"><div className="comparison-row comparison-head"><span>Critère</span><b>Presse-étoupe actuel</b><b className="selected">Cartouche proposée <i>Choix</i></b></div>{comparison.map(([criterion,current,proposed]) => <div className="comparison-row" key={criterion}><span>{criterion}</span><p>{current}</p><p className="selected">{proposed}</p></div>)}</div>
      <div className="technology-note"><span>Orientation retenue</span><p>Une garniture mécanique simple à cartouche répond au fluide propre et à l’objectif de maintenabilité. Le choix ne supprime pas les contraintes&nbsp;: pression, géométrie, matériaux, état de l’arbre et circulation auxiliaire restent à valider ensemble.</p></div>
      <div className="technology-principles">
        <article><span>01</span><h3>Limiter les fuites</h3><p>Faces rodées et joints secondaires adaptés.</p></article>
        <article><span>02</span><h3>Maintenir le contact</h3><p>Ressorts et poussée hydraulique contrôlée.</p></article>
        <article><span>03</span><h3>Autoriser la rotation</h3><p>Film fluide stable et faible frottement.</p></article>
        <article><span>04</span><h3>Faciliter le montage</h3><p>Ensemble préassemblé de type cartouche.</p></article>
      </div>
    </section>
  </main>;
}
