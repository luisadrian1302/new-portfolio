import type { CSSProperties } from 'react';

const paths = {
  arrow: 'M7 17 17 7M7 7h10v10',
  right: 'M4 12h16m-6-6 6 6-6 6',
  down: 'M12 4v16m-6-6 6 6 6-6',
  close: 'm6 6 12 12M6 18 18 6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  mail: 'M3 5h18v14H3zM3 5l9 8 9-8',
  copy: 'M9 9h12v12H9zM15 9V3H3v12h6',
  check: 'm5 12 4 4L19 6',
  code: 'm8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16',
  mobile: 'M7 2h10v20H7zM10 18h4',
  server: 'M3 3h18v7H3zM3 14h18v7H3zM7 6h.01M7 17h.01',
  left: 'm14 6-6 6 6 6',
  chevron: 'm10 6 6 6-6 6',
  up: 'M12 20V4m-6 6 6-6 6 6',
};

export function Icon({
  name,
  size = 20,
  style,
}: {
  name: keyof typeof paths;
  size?: number;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      <path d={paths[name]} />
    </svg>
  );
}
