import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServiceSection from '../components/service-section';
import { services } from '../data/services';

export function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const handle = window.setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return () => window.clearTimeout(handle);
  }, [hash]);

  return (
    <div className="space-y-10 py-12 text-slate-100">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
          Servicii si preturi
        </p>
        <h1 className="text-3xl font-semibold text-slate-100 md:text-4xl">
          Gandite sa primeasca date live din API.
        </h1>
        <p className="max-w-3xl text-base text-slate-300 md:text-lg">
          Fiecare sectiune corespunde unu-la-unu unui obiect de serviciu: nume,
          slug/id, descriere, priceFrom, durata, imagine, highlights. Cand
          soseste API-ul, inlocuiesti array-ul static fara sa atingi logica UI.
        </p>
      </header>

      <div className="space-y-10">
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      <div className="rounded-3xl border border-brand-red/40 bg-slate-800 p-8 shadow-inner md:flex md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-slate-100">
            Ai nevoie de ceva personalizat?
          </h3>
          <p className="mt-2 text-sm text-slate-300 md:text-base">
            Spune-ne despre flote, pregatire de eveniment, preluare dupa PPF sau
            planuri de mentenanta. Putem extinde modelul cu optiuni si add-on-uri.
          </p>
        </div>
        <a
          href="mailto:detail@axis.studio"
          className="mt-4 inline-flex items-center rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-slate-100 shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-red/90 md:mt-0"
        >
          Vorbeste cu un specialist
        </a>
      </div>
    </div>
  );
}

export default ServicesPage;
