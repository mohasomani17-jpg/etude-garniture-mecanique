type BrandMarkProps = {
  className?: string;
  title?: string;
};

export default function BrandMark({
  className = "",
  title = "Monogramme cinétique M — Arts et Métiers et ingénierie mécanique",
}: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="92" height="92" rx="28" fill="#F4EFE6" />
      <path
        d="M17 61.5A34 34 0 0 1 71.5 21"
        fill="none"
        stroke="#243C78"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <path
        d="M79 34.5A34 34 0 0 1 24.5 75"
        fill="none"
        stroke="#C77B3D"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <path
        d="M27 66V34.5L48 57L69 34.5V66"
        fill="none"
        stroke="#0B1518"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="48" cy="57" r="8.5" fill="#F4EFE6" stroke="#0B1518" strokeWidth="4.5" />
      <circle cx="48" cy="57" r="2.7" fill="#C77B3D" />
      <path d="M18 77.5h13" stroke="#243C78" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M65 18.5h13" stroke="#C77B3D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
