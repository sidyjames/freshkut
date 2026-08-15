'use client'; // On indique que ce composant est un composant client, car il utilise des hooks ou des fonctionnalités côté client.

// On importe les icônes dont on a besoin depuis lucide-react.
import { ArrowRight, MapPin, Scissors, Search, Zap } from 'lucide-react';

// Ici on range les liens de la navbar dans un tableau.
// Comme ça, on peut les afficher plus bas avec un .map().
const navLinks = [
  'Pour les clients',
  'Pour les barbers',
  'Comment ça marche',
];

// Ceci est le composant principal de la landing page.
export default function LandingView() {
  return (
    // Le main prend toute la hauteur de l'écran et met le fond en noir mat.
    <main className="min-h-screen overflow-hidden bg-zinc-950 text-white">
      {/* Section Hero : c'est la première grande section visible de la page. */}
      <section className="relative min-h-[570px] border-b border-white/[0.03]">
        {/* Ce div crée la grille subtile en arrière-plan avec deux linear-gradient. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:38px_38px]" />

        {/* Ce div ajoute une lumière verte au centre et un fondu vers le noir. */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(163,230,53,0.18),transparent_34%),radial-gradient(circle_at_50%_45%,rgba(163,230,53,0.07),transparent_28%),linear-gradient(to_bottom,rgba(9,9,11,0)_0%,#09090b_92%)]" />

        {/* Navbar : elle contient le logo, les liens et les boutons à droite. */}
        <nav className="relative z-20 flex h-16 w-full items-center justify-between border-b border-white/[0.04] bg-[#09090b] px-5 sm:px-8 lg:px-10">
          {/* Logo FreshKut avec une icône ciseaux dans un carré vert lime. */}
          <a href="#" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-lime-400 text-zinc-950 shadow-[0_0_24px_rgba(163,230,53,0.35)]">
              <Scissors className="size-4" strokeWidth={3} />
            </span>
            <span className="text-sm font-black tracking-tight text-white">
              FRESH<span className="text-lime-400">KUT</span>
            </span>
          </a>

          {/* Liens du menu. Ils sont cachés sur mobile et visibles sur grand écran. */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Boutons à droite de la navbar. */}
          <div className="flex items-center gap-3">
            {/* Bouton secondaire pour les pros. */}
            <a
              href="#"
              className="hidden rounded-full border border-white/10 bg-[#09090b] px-5 py-2.5 text-sm font-bold text-zinc-300 shadow-inner shadow-white/[0.03] transition-colors hover:border-white/20 hover:text-white sm:inline-flex"
            >
              Espace Pro
            </a>

            {/* Bouton principal de connexion avec une petite flèche. */}
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-black text-zinc-950 shadow-[0_0_22px_rgba(163,230,53,0.28)] transition-transform hover:scale-[1.02]"
            >
              Se connecter
              <ArrowRight className="size-4" strokeWidth={3} />
            </a>
          </div>
        </nav>

        {/* Contenu central du Hero : tag, titre, texte et recherche. */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pt-16 text-center sm:px-8 sm:pt-20 lg:pt-[76px]">
          {/* Petit tag en haut du titre. */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-zinc-400 shadow-[0_0_35px_rgba(163,230,53,0.08)]">
            <span className="size-1.5 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.9)]" />
            LA RÉFÉRENCE DES barberS LOCAUX - PWA & WEB
          </div>

          {/* Titre principal. La deuxième ligne est en vert lime. */}
          <h1 className="mt-7 max-w-4xl text-5xl font-black uppercase leading-[0.93] tracking-normal text-white sm:text-6xl lg:text-[72px]">
            TROUVE TON barber
            <span className="block text-lime-400">AUTOUR DE TOI.</span>
          </h1>

          {/* Sous-titre explicatif sous le gros titre. */}
          <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-zinc-400 sm:text-lg">
            Réserve ton dégradé, tes contours ou ta barbe en quelques clics
            auprès des meilleurs barbers locaux.
          </p>

          {/* Barre de recherche avec l'icône localisation, le champ et le bouton. */}
          <form className="mt-9 flex w-full max-w-[550px] items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 p-2 pl-5 shadow-[0_18px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
            {/* Icône de localisation à gauche du champ. */}
            <MapPin className="size-5 shrink-0 text-lime-400" strokeWidth={2.4} />

            {/* Champ texte où l'utilisateur tape sa ville ou son quartier. */}
            <input
              aria-label="Localisation"
              className="min-w-0 flex-1 bg-transparent px-2 text-sm font-medium text-white outline-none placeholder:text-zinc-500"
              placeholder="Ex: Paris 11e, Lyon, Marseille..."
              type="text"
            />

            {/* Bouton vert pour lancer la recherche. */}
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-xs font-black uppercase text-zinc-950 shadow-[0_0_24px_rgba(163,230,53,0.24)] transition-transform hover:scale-[1.02]"
            >
              <Search className="size-4" strokeWidth={3} />
              <span className="hidden sm:inline">Trouver mon barber</span>
            </button>
          </form>

          {/* Petit texte de confiance sous la barre de recherche. */}
          <div className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-zinc-500">
            <Zap className="size-3.5 fill-lime-400 text-lime-400" strokeWidth={2.5} />
            Réservation instantanée • Acompte anti-no-show
          </div>
        </div>
      </section>
    </main>
  );
}
