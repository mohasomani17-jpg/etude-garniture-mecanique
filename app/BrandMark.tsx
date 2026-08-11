type BrandMarkProps = {
  className?: string;
  title?: string;
};

export default function BrandMark({
  className = "",
  title = "Monogramme AM — Arts et Métiers et ingénierie mécanique",
}: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="62" height="62" rx="18" fill="#C8F43D" />
      <g fill="#0B1518">
        <rect x="29" y="5" width="6" height="12" rx="2" />
        <rect x="29" y="47" width="6" height="12" rx="2" />
        <rect x="47" y="29" width="12" height="6" rx="2" />
        <rect x="5" y="29" width="12" height="6" rx="2" />
        <rect x="29" y="5" width="6" height="12" rx="2" transform="rotate(45 32 32)" />
        <rect x="29" y="47" width="6" height="12" rx="2" transform="rotate(45 32 32)" />
        <rect x="47" y="29" width="12" height="6" rx="2" transform="rotate(45 32 32)" />
        <rect x="5" y="29" width="12" height="6" rx="2" transform="rotate(45 32 32)" />
        <path
          fillRule="evenodd"
          d="M32 12a20 20 0 1 1 0 40 20 20 0 0 1 0-40Zm0 10a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"
        />
      </g>
      <text
        x="32"
        y="36.2"
        fill="#0B1518"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11.5"
        fontWeight="900"
        letterSpacing="-1.25"
      >
        AM
      </text>
      <path d="M14 49.5h36" stroke="#0B1518" strokeWidth="1.5" strokeLinecap="round" opacity=".32" />
    </svg>
  );
}
