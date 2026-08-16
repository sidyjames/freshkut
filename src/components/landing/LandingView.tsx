'use client'; // On indique que ce composant est un composant client, car il utilise des hooks ou des fonctionnalités côté client.

// On importe les icônes dont on a besoin depuis lucide-react.
import {
  ArrowRight,
  CalendarCheck,
  CalendarClock,
  Grid2X2,
  MapPin,
  Scissors,
  Search,
  ShieldCheck,
  Star,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

// Ici on range les liens de la navbar dans un tableau.
// Comme ça, on peut les afficher plus bas avec un .map().
const navLinks = [
  {
    label: 'Pour les clients',
    href: '#pour-les-clients',
  },
  {
    label: 'Pour les coiffeurs',
    href: '#pour-les-barbers',
  },
  {
    label: 'Comment ça marche',
    href: '#comment-ca-marche',
  },
];

// Filtres rapides affichés dans le Hero.
// Chaque filtre a un id pour pouvoir être sélectionné avec React.
const quickFilters = [
  {
    id: 'all',
    label: 'Tous',
  },
  {
    id: 'barber',
    label: 'Barber',
  },
  {
    id: 'female',
    label: 'Coiffure Femme',
  },
  {
    id: 'home',
    label: 'Domicile',
  },
];

// Les 3 étapes de la section "Comment ça marche".
// Chaque objet représente une carte : numéro, icône, titre et texte.
const steps = [
  {
    number: '01',
    icon: MapPin,
    title: 'Géolocalise',
    description: 'Trouve les barbers disponibles près de chez toi ou à domicile.',
  },
  {
    number: '02',
    icon: Scissors,
    title: 'Choisis ton style',
    description: 'Consulte le portfolio photo, les avis et les prestations.',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Réserve & Paye',
    description: 'Bloque ton créneau instantanément avec acompte anti-no-show.',
  },
];

// Données mockées pour la section "Pour les clients".
// Plus tard, ces données pourront venir d'une API ou d'une base de données.
const topBarbers = [
  {
    name: 'Alex Fade',
    shop: 'Fade Society',
    district: 'Paris 11e',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80',
    avatar:
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=160&q=80',
    category: 'barber',
    isHome: false,
  },
  {
    name: 'Diego Cuts',
    shop: 'À domicile',
    district: 'Paris 10e',
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=80',
    avatar:
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=160&q=80',
    category: 'barber',
    isHome: true,
  },
  {
    name: 'Maya Braids',
    shop: 'Studio Glow',
    district: 'Paris 3e',
    rating: '4.7',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=80',
    category: 'female',
    isHome: false,
  },
];

// Données mockées pour la section "Espace Pro".
// Chaque item représente un avantage mis en avant pour les barbers.
const proFeatures = [
  {
    icon: ShieldCheck,
    title: 'Fini les no-shows',
    description: 'Réduis les rendez-vous manqués grâce aux acomptes payés en ligne.',
  },
  {
    icon: Grid2X2,
    title: 'Vitrine portfolio',
    description: 'Mets en avant ton travail avec une galerie photo et tes avis clients.',
  },
  {
    icon: CalendarClock,
    title: 'Planning simplifié',
    description: 'Gère tes créneaux et tes prestations depuis une interface claire.',
  },
];

// Ceci est le composant principal de la landing page.
export default function LandingView() {
  // Catégorie sélectionnée dans les filtres rapides du Hero.
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Liste filtrée des pros affichés dans la section clients.
  const filteredBarbers = topBarbers.filter((barber) => {
    if (selectedCategory === 'all') {
      return true;
    }

    if (selectedCategory === 'home') {
      return barber.isHome;
    }

    return barber.category === selectedCategory;
  });

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
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Boutons à droite de la navbar. */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Bouton secondaire pour les pros. */}
            <a
              href="/pro"
              className="inline-flex px-2 py-1 text-xs font-medium text-zinc-300 transition-colors hover:text-white sm:rounded-full sm:border sm:border-white/10 sm:bg-[#09090b] sm:px-5 sm:py-2.5 sm:text-sm sm:font-bold sm:shadow-inner sm:shadow-white/[0.03] sm:hover:border-white/20"
            >
              Espace Pro
            </a>

            {/* Bouton principal de connexion avec une petite flèche. */}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full bg-lime-400 px-4 py-2.5 text-xs font-black text-zinc-950 shadow-[0_0_22px_rgba(163,230,53,0.28)] transition-transform hover:scale-[1.02] sm:gap-2 sm:px-5 sm:text-sm"
            >
              Se connecter
              <ArrowRight className="size-3.5 sm:size-4" strokeWidth={3} />
            </a>
          </div>
        </nav>

        {/* Contenu central du Hero : tag, titre, texte et recherche. */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pt-16 text-center sm:px-8 sm:pt-20 lg:pt-[76px]">
          {/* Petit tag en haut du titre. */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-zinc-400 shadow-[0_0_35px_rgba(163,230,53,0.08)]">
            <span className="size-1.5 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.9)]" />
            LA RÉFÉRENCE DES PROS DE LA COIFFURE
          </div>

          {/* Titre principal. La dernière partie est en vert lime. */}
          <h1 className="mt-7 max-w-4xl text-5xl font-black uppercase leading-[0.93] tracking-normal text-white sm:text-6xl lg:text-[72px]">
            TROUVE TA COIFFEUSE OU BARBER
            <span className="block text-lime-400">AUTOUR DE TOI.</span>
          </h1>

          {/* Sous-titre explicatif sous le gros titre. */}
          <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-zinc-400 sm:text-lg">
            Réserve ton dégradé, ton lissage, ton brushing ou tes tresses en
            quelques clics auprès des meilleurs pros locaux.
          </p>

          {/* Filtres rapides pour chercher par type de prestation ou de pro. */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {quickFilters.map((filter) => {
              // On vérifie si ce filtre est celui sélectionné.
              const isActive = selectedCategory === filter.id;

              return (
                // Petit bouton pill cliquable pour filtrer la recherche.
                <button
                  key={filter.id}
                  onClick={() => setSelectedCategory(filter.id)}
                  type="button"
                  className={
                    isActive
                      ? 'rounded-full bg-lime-400 px-4 py-2 text-xs font-bold text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                      : 'rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-xs font-bold text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white'
                  }
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Barre de recherche avec l'icône localisation, le champ et le bouton. */}
          <form className="mt-4 flex w-full max-w-[550px] items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 p-2 pl-5 shadow-[0_18px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
            {/* Icône de localisation à gauche du champ. */}
            <MapPin className="size-5 shrink-0 text-lime-400" strokeWidth={2.4} />

            {/* Champ texte où l'utilisateur tape sa ville ou son quartier. */}
            <input
              aria-label="Localisation"
              className="min-w-0 flex-1 bg-transparent px-2 text-sm font-medium text-white outline-none placeholder:text-zinc-500"
              placeholder="Ex: Paris 11e, Lissage, Dégradé, Braids..."
              type="text"
            />

            {/* Bouton vert pour lancer la recherche. */}
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-xs font-black uppercase text-zinc-950 shadow-[0_0_24px_rgba(163,230,53,0.24)] transition-transform hover:scale-[1.02]"
            >
              <Search className="size-4" strokeWidth={3} />
              <span className="hidden sm:inline">Trouver un salon</span>
            </button>
          </form>

          {/* Petit texte de confiance sous la barre de recherche. */}
          <div className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-zinc-500">
            <Zap className="size-3.5 fill-lime-400 text-lime-400" strokeWidth={2.5} />
            Réservation instantanée • Acompte anti-no-show
          </div>
        </div>
      </section>

      {/* Section expliquant le fonctionnement en 3 étapes simples. */}
      <section
        id="comment-ca-marche"
        className="relative overflow-hidden bg-[#09090b] px-5 py-14 sm:px-8 lg:px-10 lg:py-16"
      >
        {/* Grille subtile en haut de la section */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:38px_38px] opacity-70" />

        {/* Dégradé pour fondre doucement la grille dans le fond noir. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent to-[#09090b]" />

        {/* Conteneur qui limite la largeur du contenu au centre de la page. */}
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* En-tête de la section avec le petit label vert et le titre. */}
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-lime-400">
              SIMPLE & RAPIDE
            </p>
            <h4 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Comment ça marche
            </h4>
          </div>

          {/* Grille des cartes : 1 colonne sur mobile, 3 colonnes sur grand écran. */}
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {steps.map((step) => {
              // On récupère l'icône de l'étape dans une variable avec une majuscule.
              const StepIcon = step.icon;

              return (
                // Carte d'une étape.
                <article
                  key={step.number}
                  className="relative flex flex-col items-center rounded-2xl border border-white/10 bg-zinc-900/55 p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:items-start md:text-left lg:min-h-[220px]"
                >
                  {/* Numéro de l'étape en haut à droite, discret et hors du flux. */}
                  <p className="absolute right-5 top-4 font-mono text-3xl font-black text-zinc-800">
                    {step.number}
                  </p>

                  {/* Carré vert sombre avec l'icône lime, centré sur mobile. */}
                  <div className="mt-7 flex size-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">
                    <StepIcon className="size-7" strokeWidth={2.8} />
                  </div>

                  {/* Titre de la carte. */}
                  <h3 className="mt-7 text-xl font-black tracking-tight text-white">
                    {step.title}
                  </h3>

                  {/* Description de la carte. */}
                  <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-zinc-400">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section clients */}
      <section
        id="pour-les-clients"
        className="relative overflow-hidden bg-[#09090b] px-5 py-14 sm:px-8 lg:px-10 lg:py-16"
      >
        {/* Conteneur principal : même largeur que la section précédente. */}
        <div className="mx-auto max-w-6xl">
          {/* Ligne du haut : label, titre compact et lien vers la PWA. */}
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            {/* Bloc texte de gauche. */}
            <div>
              {/* Petit label vert au-dessus du titre. */}
              <p className="text-[11px] font-black uppercase tracking-[0.26em] text-lime-400">
                POUR LES CLIENTS
              </p>

              {/* Titre principal de la section clients */}
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Les meilleurs pros près de chez toi
              </h2>
            </div>

            {/* Lien vers la Progressive Web App client. */}
            <a
              href="/app"
              className="inline-flex items-center gap-2 text-base font-black text-lime-400 transition-colors hover:text-lime-300"
            >
              Voir tous les coiffeurs
              <ArrowRight className="size-4" strokeWidth={3} />
            </a>
          </div>

          {/* Grille des cartes barbers : 1 colonne mobile, 3 colonnes desktop. */}
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {filteredBarbers.map((barber) => (
              // Chaque carte est un lien vers la PWA client.
              <a
                key={barber.name}
                href="/app"
                className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/70 hover:shadow-[0_0_35px_rgba(163,230,53,0.12),inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                {/* Image principale de la coupe / du salon. */}
                <div
                  className="relative h-56 bg-cover bg-center sm:h-64 lg:h-[255px]"
                  style={{ backgroundImage: `url(${barber.image})` }}
                >
                  {/* Dégradé sombre pour rendre les textes lisibles sur l'image. */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/25 to-transparent transition-colors group-hover:from-[#09090b]/95" />

                  {/* Infos du barber posées en bas de l'image. */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end gap-3 p-5">
                    {/* Avatar rond du barber. */}
                    <div
                      className="size-11 shrink-0 rounded-full border border-white/10 bg-cover bg-center shadow-[0_10px_25px_rgba(0,0,0,0.45)]"
                      style={{ backgroundImage: `url(${barber.avatar})` }}
                    />

                    {/* Nom et salon du barber. */}
                    <div>
                      <h3 className="text-lg font-black tracking-tight text-white">
                        {barber.name}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-zinc-400">
                        {barber.shop}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bas de carte : localisation à gauche et note à droite. */}
                <div className="flex items-center justify-between bg-zinc-900 px-5 py-4">
                  {/* Localisation du barber. */}
                  <div className="flex items-center gap-2 text-zinc-400">
                    <MapPin className="size-4" strokeWidth={2.4} />
                    <span className="text-sm font-medium">{barber.district}</span>
                  </div>

                  {/* Note du barber avec étoile lime. */}
                  <div className="flex items-center gap-1.5 text-white">
                    <Star
                      className="size-4 fill-lime-400 text-lime-400"
                      strokeWidth={2.4}
                    />
                    <span className="text-sm font-black">{barber.rating}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section pro : parle aux barbers qui veulent rejoindre FreshKut. */}
      <section
        id="pour-les-barbers"
        className="bg-[#09090b] px-5 py-14 sm:px-8 lg:px-10 lg:py-16"
      >
        {/* Grand bloc encadré, comme une carte de conversion. */}
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[28px] border border-white/10 bg-zinc-900/55 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:grid-cols-[0.9fr_1.1fr] md:p-12 lg:p-14">
          {/* Colonne gauche : texte commercial et bouton d'action. */}
          <div className="flex flex-col justify-center">
            {/* Petit label vert au-dessus du titre. */}
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-lime-400">
              ESPACE PRO
            </p>

            {/* Titre principal de la section pro. */}
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Vous êtes coiffeur ?
            </h2>

            {/* Texte qui explique la promesse pour les barbers. */}
            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-zinc-400">
              Développez votre clientèle locale, remplissez votre planning et
              sécurisez vos revenus avec les acomptes anti-no-show.
            </p>

            {/* Bouton qui envoie vers l'espace pro de l'application. */}
            <a
              href="/pro"
              className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-lime-400 px-7 py-4 text-base font-black text-zinc-950 shadow-[0_0_24px_rgba(163,230,53,0.22)] transition-transform hover:scale-[1.02]"
            >
              Rejoindre la plateforme
              <ArrowRight className="size-5" strokeWidth={3} />
            </a>
          </div>

          {/* Colonne droite : liste des avantages pro. */}
          <div className="grid gap-4">
            {proFeatures.map((feature) => {
              // On récupère l'icône de l'avantage dans une variable avec une majuscule.
              const FeatureIcon = feature.icon;

              return (
                // Carte d'un avantage pro.
                <article
                  key={feature.title}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-[#09090b]/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  {/* Carré vert sombre avec l'icône lime. */}
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">
                    <FeatureIcon className="size-7" strokeWidth={2.6} />
                  </div>

                  {/* Texte de l'avantage. */}
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer : dernière ligne de navigation de la landing page. */}
      <footer className="border-t border-white/10 bg-[#09090b] px-5 py-10 sm:px-8 lg:px-10">
        {/* Conteneur du footer pour garder la même largeur que les sections. */}
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo FreshKut dans le footer. */}
          <a href="#" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-lime-400 text-zinc-950">
              <Scissors className="size-5" strokeWidth={3} />
            </span>
            <span className="text-xl font-black tracking-tight text-white">
              FRESH<span className="text-lime-400">KUT</span>
            </span>
          </a>

          {/* Liens de navigation du footer. */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-zinc-400">
            <a href="#pour-les-clients" className="transition-colors hover:text-white">
              Pour les clients
            </a>
            <a href="#pour-les-barbers" className="transition-colors hover:text-white">
              Pour les coiffeurs
            </a>
            <a href="#comment-ca-marche" className="transition-colors hover:text-white">
              Comment ça marche
            </a>
            <a href="/app" className="transition-colors hover:text-white">
              L&apos;application
            </a>
          </div>

          {/* Copyright de la landing. */}
          <p className="text-sm font-medium text-zinc-500">© 2026 FRESHKUT</p>
        </div>
      </footer>
    </main>
  );
}
