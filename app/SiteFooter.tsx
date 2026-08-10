export default function SiteFooter() {
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-identity"><span className="brand-symbol">ME</span><div><b>Mohammed Essommani</b><small>Rapport de stage professionnel · 2026–2027</small></div></div>
        <a href="/">Retour à l’accueil ↑</a>
      </div>
      <div className="container logos"><img src="/assets/centrale-lyon.png" alt="Centrale Lyon" /><img src="/assets/ensam.png" alt="ENSAM Casablanca" /><img src="/assets/taqa.png" alt="TAQA Morocco" /></div>
      <p className="container footer-note">Synthèse interactive d’une étude préliminaire. Les valeurs de sélection ne remplacent ni les relevés terrain ni le plan certifié du fournisseur.</p>
    </footer>
  );
}
