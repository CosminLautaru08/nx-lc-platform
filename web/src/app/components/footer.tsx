export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-16 border-t border-slate-800 bg-slate-900 text-slate-100"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
            Detailing Axis Studio
          </p>
          <p className="text-2xl font-semibold text-slate-100">
            Detailing care respecta programul tau si vopseaua ta.
          </p>
          <p className="text-sm text-slate-300">
            Programari mobile si in studio. Pregatim, protejam si explicam
            intretinerea astfel incat masina sa arate bine mult dupa ce pleaca
            din boxa.
          </p>
        </div>
        <div className="grid gap-6 text-sm md:grid-cols-2">
          <div>
            <h4 className="text-xs uppercase tracking-[0.14em] text-slate-400">
              Contact
            </h4>
            <div className="mt-2 space-y-1">
              <a
                className="block font-semibold text-slate-100 hover:text-brand-red"
                href="tel:+14085551212"
              >
                (408) 555-1212
              </a>
              <a
                className="block font-semibold text-slate-100 hover:text-brand-red"
                href="mailto:detail@axis.studio"
              >
                detail@axis.studio
              </a>
              <p className="text-slate-300">Luni-Sambata | 8-18</p>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.14em] text-slate-400">
              Studio
            </h4>
            <p className="mt-2 text-slate-300">
              415 Detail Lane
              <br />
              San Jose, CA 95112
            </p>
            <p className="mt-3 text-slate-300">
              Acoperire mobila in Bay Area. Intreaba de predare dupa program.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-800 py-4 text-center text-xs text-slate-400">
        (c) {new Date().getFullYear()} Detailing Axis Studio. Facut cu grija.
      </div>
    </footer>
  );
}

export default Footer;
