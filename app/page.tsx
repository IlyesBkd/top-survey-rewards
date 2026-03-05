import Image from "next/image";
import ConversionButton from "./components/ConversionButton";

const introParagraphs = [
  "Les projecteurs d'aujourd'hui ne se limitent plus à projeter une image : ils sont devenus de véritables appareils intelligents. La plupart se connectent facilement à un smartphone, une tablette ou un ordinateur en Wi-Fi ou Bluetooth, ce qui permet de diffuser films, séries ou présentations en un instant, sans câbles ni complications.",
  "Autre avantage : leur design est désormais plus compact et léger. On peut les emporter partout — pour une soirée cinéma à la maison, une présentation pro, un week-end entre amis ou même une projection en plein air.",
  "C'est d'ailleurs pour cette polyvalence que de plus en plus de Français se tournent vers les vidéoprojecteurs.",
  "Mais une question revient souvent : 👉 comment choisir le bon modèle ? 👉 quels sont les vrais critères à regarder avant d'acheter ? 👉 et surtout, quel budget faut-il prévoir pour avoir une belle qualité d'image sans se ruiner ?",
  "J'ai passé plusieurs semaines à comparer, tester et analyser les meilleurs modèles du moment afin de créer ce guide d'achat clair et honnête — pour vous aider à trouver le projecteur qui correspond vraiment à vos besoins.",
];

const criteriaList = [
  "La qualité d'image (résolution et luminosité)",
  "Le son intégré",
  "La connectivité et la compatibilité",
  "La portabilité et la facilité d'installation",
  "L'autonomie et la durée de vie de la lampe",
];

const avoidList = [
  "Les projecteurs de 1080p et moins.",
  "Encombrant à utiliser",
  "Les modèles avec faible luminosité (< 2 500 lumens)",
  "Les projecteurs sans correction trapézoïdale ou focus auto",
  "Prix exagérés",
];

const products = [
  {
    id: 1,
    badge: "/projecteur-lp/badge-1.png",
    name: "NEXGEAR V12 4K",
    price: "129.99€",
    grade: "A+",
    productImage: "/projecteur-lp/product-nexgear.png",
    scoreImage: "/projecteur-lp/scores-top1.png",
    ratingLabel: "Note Globale",
    ratingImage: "/projecteur-lp/rating-9-9.png",
    ratingCaption: "Basé sur plus de 50 000 avis",
    originalPrice: "249€",
    expertTitle: "Avis d'expert :",
    advantages: [
      "✅ Assemblage et conditionnement en France",
      "✅ Qualité d'image 4K impressionnante",
      "✅ Technologie de réduction de lumière bleue",
      "✅ Prise en charge du partage d'écran de téléphone mobile sans fil",
      "✅ Mise au point automatique",
      "✅ Correction trapézoïdale très efficace",
      "✅ Plateforme smart intégrée (Google TV), Netflix, Disney+, Prime video ...",
      "✅ Excellent rapport qualité/prix",
    ],
    disadvantages: [
      "❌ Disponible uniquement en ligne",
      "❌ Très demandé, souvent en rupture de stock",
    ],
    description:
      "Parmi tous les modèles que nous avons testés cette année, le NEXGEAR s'est rapidement imposé comme l'une des plus belles découvertes. Dès la première prise en main, on ressent une vraie qualité de fabrication : matériaux agréables, finitions soignées et conception solide. Mais le plus impressionnant reste la qualité d'image. L'objectif offre une excellente clarté et une transmission lumineuse précise, avec des couleurs vives et naturelles. Autre atout notable : sa technologie de réduction de lumière bleue, rarement présente dans cette gamme de prix. Résultat : une image nette et confortable pour les yeux, même lors de longues séances cinéma. 4K réelle, le NEXGEAR séduit par sa reproduction fidèle des couleurs et sa facilité d'utilisation. La mise au point automatique, la correction trapézoïdale et son interface simple permettent une installation rapide, sans réglages compliqués. Idéal pour : - Créer une véritable expérience cinéma à la maison — que ce soit dans le salon, la chambre ou sur la terrasse. - Regarder Netflix, Prime Video ou YouTube en grand format, sans perte de qualité. - Jouer sur console ou PC avec une image fluide et des couleurs immersives. - Projeter des présentations ou contenus professionnels, grâce à sa clarté d'image et sa compatibilité universelle. - Emporter le projecteur en week-end ou en extérieur, grâce à son format compact et sa facilité d'installation. Et tout cela, pour un prix bien inférieur à celui des grandes marques. C'est ce parfait équilibre entre performance, design et accessibilité qui lui vaut sa première place dans notre sélection 2026.",
    editorialTip:
      "💡 Astuce de la rédaction : En cliquant sur notre lien ci-dessous, une remise de 20% s'applique souvent automatiquement sur leur site officiel selon les périodes.",
    url: "https://www.nex-gear.fr/",
  },
  {
    id: 2,
    badge: "/projecteur-lp/badge-2.png",
    name: "Dangbei Atom",
    price: "719€",
    grade: "A",
    productImage: "/projecteur-lp/product-dangbei.jpg",
    scoreImage: "/projecteur-lp/scores-top3.png",
    ratingLabel: "Note Globale",
    ratingImage: "/projecteur-lp/rating-9-2.png",
    advantages: [
      "✅ L'interface VIDAA",
      "✅ Portabilité",
      "✅ Longue durée de vie de la lampe",
      "✅ Connectivité polyvalente",
    ],
    disadvantages: [
      "❌ Un produit onéreux",
      "❌ Durée de vie limitée de la batterie",
      "❌ Qualité sonore",
      "❌ Contraste et noirs limités",
      "❌ Réglages automatiques imparfaits",
    ],
    url: "https://www.fnac.com/DANGBEI-Atom-1080P-Laser-Videoprojecteur-1200-ISO-Lumens-avec-Licence-systeme-Google-TV/a20510486/w-4?Origin=SEA_GOOGLE_FL_TV",
  },
  {
    id: 3,
    badge: "/projecteur-lp/badge-3.png",
    name: "LG CineBeam Q",
    price: "799€",
    grade: "B",
    productImage: "/projecteur-lp/product-lg.png",
    scoreImage: "/projecteur-lp/scores-top4.png",
    ratingLabel: "Note Globale",
    ratingImage: "/projecteur-lp/rating-8-7.png",
    advantages: [
      "✅ Image 4K avec source laser RGB",
      "✅ Installation simple — “place & play”",
      "✅ Compact, élégant et bien conçu",
      "✅ Mode de décalage d'entrée faible",
    ],
    disadvantages: [
      "❌ Luminosité trop limitée pour usage en lumière ambiante",
      "❌ Pas de prise en charge 4K",
      "❌ Haut-parleur mono très faible",
      "❌ Prix élevé pour un projecteur ultra-portable",
      "❌ Télécommande peu pratique",
    ],
    url: "https://www.darty.com/nav/achat/hifi_video/videoprojecteur-videoprojecteur/videoprojecteur_cinema/lg_hu710pb.html?ofmp=1050911565&dartycid=sem_free-listing_MP-tv--video--home-cinema_videoprojection",
  },
  {
    id: 4,
    badge: "/projecteur-lp/badge-4.png",
    name: "Formovie Xming Page One",
    price: "399€",
    grade: "B",
    productImage: "/projecteur-lp/product-formovie.png",
    scoreImage: "/projecteur-lp/scores-top5.png",
    ratingLabel: "Note Globale",
    ratingImage: "/projecteur-lp/rating-8-3.png",
    advantages: [
      "✅ Compact et simple à installer",
      "✅ La fluidité des mouvements",
      "✅ Google TV et Netflix intégrés",
    ],
    disadvantages: [
      "❌ Niveaux de noir et contraste",
      "❌ Décalage d'entrée",
      "❌ Calibrage des couleurs",
      "❌ Niveaux de bruit",
      "❌ Fuite de lumière",
    ],
    url: "https://www.boulanger.com/ref/9000688718",
  },
  {
    id: 5,
    badge: "/projecteur-lp/badge-5.png",
    name: "BenQ MW560 WXGA DLP",
    price: "389€",
    grade: "B-",
    productImage: "/projecteur-lp/product-benq.jpg",
    scoreImage: "/projecteur-lp/scores-top3.png",
    ratingLabel: "Rating",
    ratingImage: "/projecteur-lp/rating-7-8.png",
    advantages: [
      "✅ Définition Full HD 1080p",
      "✅ Diagonale image : 1 m à 3 m",
      "✅ Correction automatique",
    ],
    disadvantages: [
      "❌ Limites de luminosité",
      "❌ Performances au niveau du noir",
      "❌ Zoom et décalage d'objectif limités",
      "❌ Consommation électrique élevée",
    ],
    url: "https://www.fnac.com/mp47005776/BenQ-MW560-Projecteur-DLP-portable-3D-4000-ANSI-lumens-WXGA-1280-x-800-16-10-720p/w-4?oref=8d524139-d707-e0fb-8ddf-32bb2a6dc90a&Origin=CMP_GOOGLE_FL_TV",
  },
];

type Product = (typeof products)[number];

function ProductCard({ product }: { product: Product }) {
  const isNexgear = product.id === 1;
  return (
    <article className="relative rounded-2xl md:rounded-[32px] border border-zinc-200 bg-white p-4 sm:p-6 md:p-10 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={product.badge}
          alt={`Badge classement ${product.name}`}
          width={80}
          height={80}
          className="h-14 w-14 object-contain md:h-20 md:w-20"
        />
      </div>
      <div className="pt-8 md:pt-10">
        <div className="flex flex-col gap-1.5 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-zinc-900">
            {product.name}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs sm:text-sm font-semibold text-emerald-700">
              {product.grade}
            </span>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="flex items-center justify-center rounded-xl md:rounded-2xl bg-zinc-50 p-3 md:p-4">
            <Image
              src={product.productImage}
              alt={product.name}
              width={400}
              height={300}
              className="h-40 sm:h-56 md:h-64 w-auto object-contain"
            />
          </div>
          <div className="space-y-3 sm:space-y-5">
            <Image
              src={product.scoreImage}
              alt={`Scores ${product.name}`}
              width={500}
              height={150}
              className="w-full max-w-md"
            />
            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm font-semibold uppercase text-zinc-700">
                {product.ratingLabel}
              </p>
              <Image
                src={product.ratingImage}
                alt={`Note ${product.name}`}
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
              {product.ratingCaption ? (
                <p className="text-[11px] sm:text-xs text-zinc-500">{product.ratingCaption}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="text-center">
                {isNexgear && product.originalPrice ? (
                  <div className="mb-1.5 sm:mb-2">
                    <span className="line-through text-gray-400 text-base sm:text-lg">{product.originalPrice}</span>
                    <span className="text-xl sm:text-2xl font-bold text-orange-600 ml-2">{product.price}</span>
                  </div>
                ) : (
                  <div className="mb-1.5 sm:mb-2">
                    <span className="text-xl sm:text-2xl font-bold text-orange-600">{product.price}</span>
                  </div>
                )}
              </div>
              <ConversionButton url={product.url} isNexgear={isNexgear} trackConversion={isNexgear}>
                Vérifier le prix sur le site officiel
              </ConversionButton>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
          {product.expertTitle ? (
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900">{product.expertTitle}</h4>
          ) : null}
          <div className="grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-2">
            <div className="rounded-xl md:rounded-2xl bg-emerald-50 p-3 sm:p-4">
              <p className="text-sm sm:text-base font-semibold uppercase text-emerald-700">Avantages</p>
              <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-emerald-900">
                {product.advantages.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl md:rounded-2xl bg-rose-50 p-3 sm:p-4">
              <p className="text-sm sm:text-base font-semibold uppercase text-rose-600">Inconvénients</p>
              <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-rose-900">
                {product.disadvantages.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {product.description ? (
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700">{product.description}</p>
          ) : null}
          {product.editorialTip ? (
            <div className="bg-blue-50 p-2.5 sm:p-3 rounded-md text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700">
              {product.editorialTip}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:gap-6 px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8">
        <Image
          src="/projecteur-lp/avisconso.avif"
          alt="Avis Conso"
          width={200}
          height={40}
          priority
          className="h-8 sm:h-10 w-auto object-contain"
        />
        <div className="space-y-1.5 sm:space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight">
            5 Meilleurs Vidéoprojecteurs Testés 2026
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-zinc-700">
            Nous avons testé plus de 30 modèles pour identifier les 5 meilleurs Vidéoprojecteurs…
          </p>
        </div>
        <div className="rounded-2xl md:rounded-3xl border border-zinc-200 bg-white p-3 sm:p-4 md:p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center">
            <Image
              src="/projecteur-lp/author-david.jpg"
              alt="David Quentin"
              width={80}
              height={80}
              priority
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-4 border-white object-cover shadow"
            />
            <div className="space-y-1">
              <div className="flex items-center flex-wrap gap-1">
                <p className="text-base sm:text-lg md:text-xl font-semibold">David Quentin</p>
                <span className="text-green-600 text-[10px] sm:text-xs font-semibold bg-green-100 px-1.5 sm:px-2 py-0.5 rounded-full">✓ Testeur Certifié</span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
                David, 34 ans, ingénieur de formation, aime passer ses soirées à regarder des films comme au cinéma. Il recherche des appareils à la fois performants et faciles à utiliser, capables de transformer son salon en vraie salle de projection.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Mis à jour le 26 Février 2026</p>
            </div>
          </div>
        </div>
        <a
          className="text-center text-sm sm:text-base md:text-lg font-semibold text-blue-600"
          href="#classement"
        >
          ↓ Cliquez ici pour défiler jusqu'au classement ↓
        </a>
        <div className="relative w-full h-44 sm:h-56 md:h-72 rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/projecteur-lp/hero-projector.jpg"
            alt="Projection cinéma à la maison"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
        </div>
        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700">
          {introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          <div className="rounded-2xl md:rounded-3xl border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-emerald-900">
              Que faut-il rechercher ?
            </h3>
            <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base md:text-lg text-emerald-900">
              {criteriaList.map((item) => (
                <li key={item} className="leading-relaxed">
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl md:rounded-3xl border border-rose-200 bg-rose-50 p-4 sm:p-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-rose-700">À éviter :</h3>
            <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base md:text-lg text-rose-900">
              {avoidList.map((item) => (
                <li key={item} className="leading-relaxed">
                  ❌ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700">
          Après avoir passé des mois à tester différents modèles — du mini projecteur portable au home cinéma complet — j'ai enfin pu établir ma sélection finale des meilleurs projecteurs 2026, ceux qui méritent vraiment votre attention.
        </p>
        <a
          id="classement"
          className="rounded-full bg-blue-600 px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-200"
          href="#classement"
        >
          LES 5 MEILLEURS VIDEOPROJECTEURS DE 2026
        </a>
      </section>

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 sm:gap-16 px-4 pb-12 sm:pb-20 pt-4 sm:pt-6 sm:px-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
