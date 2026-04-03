import { Link } from 'react-router-dom';
import type { Service } from '../data/services';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 w-full overflow-hidden bg-slate-900">
        <img
          src={service.image}
          alt={service.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gray/70 via-brand-gray/20 to-transparent" />
        {service.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-red shadow">
            {service.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300">
          <span>{service.duration}</span>
          <span className="h-1 w-1 rounded-full bg-slate-500" />
          <span>De la ${service.priceFrom}</span>
        </div>

        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-100">
              {service.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">
              {service.shortDescription}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-red">
            <span className="text-base">${service.priceFrom}</span>
            <span className="text-xs uppercase tracking-wide text-slate-400">
              de la
            </span>
          </div>
          <Link
            to={`/services#${service.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-brand-red/40 px-4 py-2 text-sm font-semibold text-brand-red transition hover:border-brand-red hover:bg-brand-red/10"
          >
            Detalii
            <span aria-hidden>-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
