import { Link } from 'react-router-dom';
import type { Service } from '../data/services';

type ServiceSectionProps = {
  service: Service;
  reverse?: boolean;
};

export function ServiceSection({ service, reverse }: ServiceSectionProps) {
  return (
    <section
      id={service.slug}
      className="rounded-3xl border border-slate-800 bg-slate-800 shadow-lg text-slate-100"
    >
      <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10 md:items-center">
        <div className={reverse ? 'md:order-2' : ''}>
          <div className="relative overflow-hidden rounded-2xl bg-slate-900">
            <img
              src={service.image}
              alt={service.name}
              className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-gray/70 via-transparent to-transparent" />
            {service.badge ? (
              <span className="absolute left-3 top-3 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-red shadow">
                {service.badge}
              </span>
            ) : null}
          </div>
        </div>

        <div className={reverse ? 'md:order-1' : ''}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300">
            <span>De la ${service.priceFrom}</span>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <span>{service.duration}</span>
          </div>
          <h3 className="mt-2 text-2xl font-semibold text-slate-100 md:text-3xl">
            {service.name}
          </h3>
          <p className="mt-3 text-base text-slate-200">{service.description}</p>

          <ul className="mt-4 grid gap-2 text-sm text-slate-200">
            {service.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/#contact"
              className="inline-flex items-center rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-slate-100 shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-red/90"
            >
              Programeaza serviciul
            </Link>
            <Link
              to="/"
              className="text-sm font-semibold text-brand-red underline underline-offset-8"
            >
              Inapoi la acasa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
