function Svg({ className = "h-6 w-6", children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      {children}
    </svg>
  );
}

export function ClockIcon({ className }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2" strokeLinecap="round" />
    </Svg>
  );
}

export function CardIcon({ className }) {
  return (
    <Svg className={className}>
      <rect x="4" y="3.5" width="16" height="17" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
    </Svg>
  );
}

export function SparkIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 3.5 13.6 9 19 10.5 13.6 12 12 17.5 10.4 12 5 10.5 10.4 9 12 3.5Z" strokeLinejoin="round" />
    </Svg>
  );
}

export function ListIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M8 7h11M8 12h11M8 17h11" strokeLinecap="round" />
      <path d="M4.5 7h.01M4.5 12h.01M4.5 17h.01" strokeLinecap="round" />
    </Svg>
  );
}

export function UsersIcon({ className }) {
  return (
    <Svg className={className}>
      <circle cx="9" cy="9" r="2.5" />
      <circle cx="16" cy="10" r="2" />
      <path d="M4.5 18c.6-2.2 2.4-3.4 4.5-3.4s3.9 1.2 4.5 3.4" strokeLinecap="round" />
      <path d="M13.5 14.7c1.4-.3 2.8.2 3.7 1.4.6.8 1 1.6 1.3 2.4" strokeLinecap="round" />
    </Svg>
  );
}

export function ChevronIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function UserIcon({ className }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="8" r="3" />
      <path d="M6 19c.8-2.8 2.8-4 6-4s5.2 1.2 6 4" strokeLinecap="round" />
    </Svg>
  );
}

export function PersonIcon({ className }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="8" r="3" />
      <path d="M7 19c.7-2.6 2.4-4 5-4s4.3 1.4 5 4" strokeLinecap="round" />
    </Svg>
  );
}

export function MenuIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </Svg>
  );
}

export function CloseIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
    </Svg>
  );
}

const icons = {
  clock: ClockIcon,
  card: CardIcon,
  spark: SparkIcon,
  list: ListIcon,
  users: UsersIcon,
};

export function IconByName({ name, className }) {
  const Icon = icons[name] || SparkIcon;
  return <Icon className={className} />;
}
