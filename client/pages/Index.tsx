import { Link } from "react-router-dom";

// Correct Figma asset — calligraphy frame node 160-403
const CALLIGRAPHY_SRC =
  "https://www.figma.com/api/mcp/asset/a78b17ec-f5cf-4a30-a469-db78bc029a3e";

function ArrowRightIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <g clipPath="url(#arrow-up-clip)">
        <path
          d="M2.08341 5.00016H7.91675M7.91675 5.00016L5.00008 2.0835M7.91675 5.00016L5.00008 7.91683"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="arrow-up-clip">
          <rect
            width="10"
            height="10"
            fill="white"
            transform="matrix(0 1 -1 0 10 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function ViewAllArrow() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      aria-hidden
      className="ml-1"
    >
      <path
        d="M0 4H7.5M7.5 4L4.5 1M7.5 4L4.5 7"
        stroke="rgba(0,0,0,0.8)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const placeholderProducts = [
  { id: 1, title: "Featured Book" },
  { id: 2, title: "Featured Item" },
  { id: 3, title: "Featured Item" },
];

export default function Index() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="bg-brand-bg relative overflow-hidden">

        {/*
          ── Calligraphy background decorations ──
          Two instances of the Hurayrah Essentials calligraphy mark (Figma node 160-403).
          Positioned so they bleed off the left/right edges, behind all content.

          Figma reference (436px canvas → rem, base 16px):
            Left:  240px wide → 15rem, rotate -34.57°, center ≈ 1.5rem from left edge
            Right: 184px wide → 11.5rem, rotate +37.13°, center ≈ right edge

          clamp() scales proportionally at every breakpoint.
          The parent `overflow-hidden` clips the parts that bleed off screen.
        */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none z-0"
          aria-hidden
        >
          {/* Left calligraphy mark */}
          <img
            src={CALLIGRAPHY_SRC}
            alt=""
            style={{
              position: "absolute",
              width: "clamp(8rem, 38vw, 15rem)",
              transform: "rotate(-34.57deg)",
              left: "clamp(-6rem, -12vw, -3rem)",
              top: "0.625rem",
              filter: "drop-shadow(0 0.25rem 0.25rem rgba(0,0,0,0.25))",
            }}
          />

          {/* Right calligraphy mark */}
          <img
            src={CALLIGRAPHY_SRC}
            alt=""
            style={{
              position: "absolute",
              width: "clamp(6rem, 29vw, 11.5rem)",
              transform: "rotate(37.13deg)",
              right: "clamp(-4rem, -8vw, -1.5rem)",
              top: "0.625rem",
              filter: "drop-shadow(0 0.25rem 0.25rem rgba(0,0,0,0.25))",
            }}
          />
        </div>

        {/* ── Hero Content ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-10 pb-14 md:pt-16 md:pb-20 max-w-screen-xl mx-auto">

          {/* Headline — 30px → 1.875rem */}
          <h1 className="font-philosopher font-bold italic text-[1.875rem] md:text-[2.5rem] lg:text-[3.125rem] text-black tracking-[-0.0375rem] leading-[168%]">
            SEEK KNOWLEDGE
          </h1>

          {/* Sub-headline — 45px → 2.8125rem */}
          <h2 className="font-philosopher font-normal text-[2.8125rem] md:text-[3.75rem] lg:text-[4.5rem] text-[#000D37] leading-[168%] -mt-6 md:-mt-8">
            AFFORDABLY.
          </h2>

          {/* Tagline — 14px → 0.875rem */}
          <p className="font-philosopher text-[0.875rem] text-black/60 tracking-[-0.0525rem] leading-[95%] -mt-3">
            Seeking knowledge made easy.
          </p>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-3">
            {["Authentic titles", "International shipping", "Secure checkout"].map(
              (guarantee) => (
                <span
                  key={guarantee}
                  className="font-philosopher text-[0.875rem] text-black/50 tracking-[-0.0525rem] leading-[95%]"
                >
                  {guarantee}
                </span>
              )
            )}
          </div>

          {/* CTA Buttons — max-w 268px → 16.75rem */}
          <div className="flex flex-col items-center gap-0 mt-6 w-full max-w-[16.75rem]">
            {/* Primary — py 5px → 0.3125rem, rounded 3px → 0.1875rem */}
            <Link
              to="/products"
              className="w-full flex items-center justify-center gap-[0.3125rem] bg-brand-dark text-white font-philosopher font-bold text-[1.125rem] tracking-[-0.03375rem] leading-[153%] py-[0.3125rem] px-6 rounded-[0.1875rem] hover:bg-brand-dark/90 transition-colors"
            >
              Browse products
              <ArrowRightIcon />
            </Link>

            {/* Secondary — 18px → 1.125rem, py 4px → 0.25rem */}
            <Link
              to="/products"
              className="font-philosopher font-bold text-[1.125rem] text-brand-dark tracking-[-0.03375rem] leading-[153%] py-[0.25rem] hover:opacity-70 transition-opacity"
            >
              Check out categories
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Items Section ── */}
      <section className="bg-white px-6 pt-6 pb-10 md:px-10 lg:px-16">
        <div className="max-w-screen-xl mx-auto">

          {/* Section Header */}
          <div className="flex items-center justify-between mb-4">
            {/* 18px → 1.125rem, tracking -0.54px → -0.03375rem */}
            <h3 className="font-philosopher font-normal text-[1.125rem] text-black tracking-[-0.03375rem] leading-[153%]">
              Featured Items
            </h3>
            {/* 10px → 0.625rem, tracking -0.3px → -0.01875rem */}
            <Link
              to="/products"
              className="flex items-center font-philosopher text-[0.625rem] text-black tracking-[-0.01875rem] leading-[153%] hover:opacity-70 transition-opacity"
            >
              View all
              <ViewAllArrow />
            </Link>
          </div>

          {/* Product Cards — rounded 7px → 0.4375rem */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 md:grid-cols-4 lg:grid-cols-5">
            {placeholderProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#D9D9D9] rounded-[0.4375rem] aspect-[101/150] md:aspect-[2/3] hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
