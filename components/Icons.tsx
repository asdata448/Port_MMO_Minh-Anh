import type { ReactNode, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function LineIcon({
  children,
  className = 'w-5 h-5',
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUp(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="m12 19 0-14" />
      <path d="m5 12 7-7 7 7" />
    </LineIcon>
  );
}

export function BriefcaseBusiness(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
      <path d="M12 12v2" />
    </LineIcon>
  );
}

export function CalendarDays(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </LineIcon>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="m9 18 6-6-6-6" />
    </LineIcon>
  );
}

export function Clock3(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </LineIcon>
  );
}

export function ExternalLink(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </LineIcon>
  );
}

export function Globe2(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </LineIcon>
  );
}

export function GraduationCap(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="m22 10-10-5-10 5 10 5 10-5Z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
      <path d="M22 10v6" />
    </LineIcon>
  );
}

export function Handshake(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="m2 12 5-5 4 4" />
      <path d="m22 12-5-5-4 4" />
      <path d="M8 12h3l2 2a3 3 0 0 0 4.2 0l.8-.8" />
      <path d="m9 16 2 2" />
      <path d="m13 17 1 1a2 2 0 0 0 3 0l2-2" />
    </LineIcon>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className ?? 'w-5 h-5'}
      aria-hidden="true"
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </LineIcon>
  );
}

export function MapPin(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </LineIcon>
  );
}

export function Menu(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </LineIcon>
  );
}

export function MessageCircle(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.8-.9L3 21l1.9-5a8.5 8.5 0 1 1 16.1-4.5Z" />
      <path d="M8 10h8" />
      <path d="M8 14h5" />
    </LineIcon>
  );
}

export function Monitor(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </LineIcon>
  );
}

export function Phone(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92Z" />
    </LineIcon>
  );
}

export function Presentation(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M3 4h18" />
      <rect x="4" y="4" width="16" height="12" rx="1" />
      <path d="M12 16v4" />
      <path d="m8 20 4-4 4 4" />
    </LineIcon>
  );
}

export function Puzzle(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M14 7h3a2 2 0 0 1 2 2v3h-2a2 2 0 1 0 0 4h2v3a2 2 0 0 1-2 2h-3v-2a2 2 0 1 0-4 0v2H7a2 2 0 0 1-2-2v-3h2a2 2 0 1 0 0-4H5V9a2 2 0 0 1 2-2h3V5a2 2 0 1 1 4 0v2Z" />
    </LineIcon>
  );
}

export function RefreshCw(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M21 12a9 9 0 0 1-15.4 6.4L3 16" />
      <path d="M3 21v-5h5" />
      <path d="M3 12A9 9 0 0 1 18.4 5.6L21 8" />
      <path d="M21 3v5h-5" />
    </LineIcon>
  );
}

export function Send(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </LineIcon>
  );
}

export function Smartphone(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </LineIcon>
  );
}

export function Users(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </LineIcon>
  );
}

export function X(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </LineIcon>
  );
}
