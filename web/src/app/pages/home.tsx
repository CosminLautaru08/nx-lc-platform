import { Link } from 'react-router-dom';
import HeroSlider from '../components/hero-slider';
import ServiceCard from '../components/service-card';
import { heroSlides, services } from '../data/services';

export function HomePage() {
  return (
    <div className="space-y-16 py-12 text-slate-100">
      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
              Platforma de detailing premium
            </p>
            <h1 className="text-3xl font-semibold text-slate-100 md:text-4xl">
              Mai mult luciu. Interioare curate. Fara batai de cap.
            </h1>
            <p className="max-w-2xl text-base text-slate-300 md:text-lg">
              Servicii curatoriate, preturi transparente si un proces usor de
              urmarit. Programezi o data, ramai protejat tot sezonul.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-slate-100 shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-red/90"
          >
            Vezi serviciile
          </Link>
        </div>

        <HeroSlider slides={heroSlides} />

        <div className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-800/80 p-4 text-sm text-slate-200 shadow-md md:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl bg-slate-900/80 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/20 text-brand-red">
              01
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                Consultatie
              </p>
              <p className="font-semibold text-slate-100">
                Ne spui cum folosesti masina.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-slate-900/80 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/20 text-brand-red">
              02
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                Detailing
              </p>
              <p className="font-semibold text-slate-100">
                Pregatim, corectam, protejam.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-slate-900/80 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/20 text-brand-red">
              03
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                Mentenanta
              </p>
              <p className="font-semibold text-slate-100">
                Ghid de ingrijire + kit de mentenanta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              Servicii
            </p>
            <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">
              Ajustate la modul in care folosesti masina.
            </h2>
            <p className="max-w-2xl text-base text-slate-300">
              Fiecare pachet este construit din pasi repetabili. Poti schimba
              ulterior sursa de date - fiecare sectiune stie deja de nume,
              descriere, pret, durata si imagini.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red underline underline-offset-8"
          >
            Vezi pagina de servicii
            <span aria-hidden>-&gt;</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-slate-800 bg-brand-gray text-slate-100 shadow-lg md:grid-cols-3">
        <div className="p-8 md:col-span-1">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-200">
            De ce raman clientii
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight">
            Suntem obsedati de proces, nu doar de luciu.
          </h3>
          <p className="mt-3 text-sm text-slate-200">
            Checklist modular, seturi foto inainte/dupa si note de predare
            ca sa vezi fiecare pas. Usor de conectat la raspunsurile API sau la
            un CMS mai tarziu.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 p-8 md:col-span-2 md:grid-cols-2">
          {[
            {
              title: 'Blocuri de timp clare',
              copy: 'Durata este parte din modelul de date, programarile raman previzibile.',
            },
            {
              title: 'Playbook de ingrijire',
              copy: 'Rutine post-serviciu cu fiecare pachet pentru a prelungi protectia.',
            },
            {
              title: 'Foto dovada',
              copy: 'Adaugi inainte/dupa si note de inspectie pentru fiecare serviciu.',
            },
            {
              title: 'Gata de API',
              copy: 'Inlocuiesti array-ul static cu raspunsuri live fara sa atingi logica UI.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-800/70 p-5 ring-1 ring-slate-700"
            >
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-100">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
