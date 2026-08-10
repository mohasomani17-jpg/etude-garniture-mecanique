type AxisHeroProps = {
  number: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  previous: string;
  next: string;
};

export default function AxisHero({ number, eyebrow, title, accent, description, previous, next }: AxisHeroProps) {
  return (
    <section className="axis-hero">
      <div className="container axis-hero-grid">
        <div><p className="axis-kicker"><span>{number}</span>{eyebrow}</p><h1>{title}<br /><em>{accent}</em></h1></div>
        <div className="axis-hero-side"><p>{description}</p><div className="axis-pager"><a href={previous}>← Axe précédent</a><a href={next}>Axe suivant →</a></div></div>
      </div>
    </section>
  );
}
