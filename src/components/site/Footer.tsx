import { Instagram, Youtube, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border bg-[oklch(0.02_0_0)] pt-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl tracking-[0.35em] text-foreground">FOCUL</span>
              <span className="font-display text-2xl tracking-[0.35em] text-gold">STAR</span>
            </div>
            <p className="mt-6 max-w-md font-serif-lux text-xl font-light italic text-foreground/75">
              Where stars are created.
            </p>
            <p className="mt-4 max-w-md text-xs font-light leading-relaxed text-foreground/50">
              A luxury modeling, talent and fashion agency curated for the next generation
              of icons. A house of Flash N Fashion LLP.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Youtube, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  data-cursor
                  className="grid h-10 w-10 place-items-center border border-border text-foreground/60 transition-all duration-500 hover:border-gold hover:text-gold"
                >
                  <Icon size={15} strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-light uppercase tracking-[0.35em] text-gold">Atelier</h4>
            <ul className="mt-6 space-y-3 text-sm font-light text-foreground/65">
              {["About", "Models", "Services", "Training Academy", "Events", "Gallery", "Blog"].map((l) => (
                <li key={l}><a href="#" className="transition-colors hover:text-gold">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-light uppercase tracking-[0.35em] text-gold">Contact</h4>
            <ul className="mt-6 space-y-4 text-sm font-light text-foreground/65">
              <li className="flex items-start gap-3"><MapPin size={14} className="mt-1 text-gold" /> Flash N Fashion LLP<br/>Bandra West, Mumbai 400050</li>
              <li className="flex items-center gap-3"><Mail size={14} className="text-gold" /> hello@foculstar.in</li>
              <li className="flex items-center gap-3"><Phone size={14} className="text-gold" /> +91 98XXX XXXXX</li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-20" />

        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-[10px] font-light uppercase tracking-[0.3em] text-foreground/40">
            © {new Date().getFullYear()} Flash N Fashion LLP · All rights reserved
          </p>
          <div className="flex gap-6 text-[10px] font-light uppercase tracking-[0.3em] text-foreground/40">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>

      {/* Mega-mark */}
      <div className="overflow-hidden">
        <div className="select-none whitespace-nowrap font-display text-[18vw] font-light leading-none tracking-tighter text-gradient-gold opacity-[0.06]">
          FOCUL STAR · FOCUL STAR
        </div>
      </div>
    </footer>
  );
}