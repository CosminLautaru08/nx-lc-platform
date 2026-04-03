import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Acasa', to: '/' },
  { label: 'Servicii', to: '/services' },
  { label: 'Contact', to: '/#contact' },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:py-4 text-slate-100">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-red text-sm font-bold uppercase text-slate-100 shadow-glow">
            DX
          </span>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
              Detailing
            </p>
            <p className="text-lg font-semibold text-slate-100">Axis Studio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'transition-colors hover:text-brand-red',
                  isActive ? 'text-brand-red' : 'text-slate-200',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/services"
            className="hidden rounded-full border border-brand-red/50 px-4 py-2 text-sm font-semibold text-brand-red transition hover:border-brand-red hover:bg-brand-red/10 md:inline-flex"
          >
            Vezi serviciile
          </Link>
          <Link
            to="/#contact"
            className="inline-flex items-center rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-slate-100 shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-red/90"
          >
            Programeaza
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
