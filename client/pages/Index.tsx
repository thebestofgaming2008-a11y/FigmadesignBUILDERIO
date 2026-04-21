import { Link } from "react-router-dom";

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
      {/* Hero Section */}
      <section className="bg-brand-bg relative overflow-hidden">
        {/* Decorative background logos */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c3769c8d71c434536e5bdd13bcd3f22ab9659f3a?width=480"
            alt=""
            className="absolute drop-shadow-md w-[200px] md:w-[260px] lg:w-[300px]"
            style={{
              transform: "rotate(-34.567deg)",
              left: "-60px",
              top: "10px",
            }}
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3c78276e6e8098e15efb985fffbc5a17f928bebe?width=367"
            alt=""
            className="absolute drop-shadow-md w-[160px] md:w-[200px] lg:w-[240px]"
            style={{
              transform: "rotate(37.125deg)",
              right: "-30px",
              top: "10px",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-10 pb-14 md:pt-16 md:pb-20 max-w-screen-xl mx-auto">
          {/* Headline */}
          <h1 className="font-philosopher font-bold italic text-[30px] md:text-[40px] lg:text-[50px] text-black tracking-[-0.6px] leading-[168%]">
            SEEK KNOWLEDGE
          </h1>

          {/* Sub-headline */}
          <h2 className="font-philosopher font-normal text-[45px] md:text-[60px] lg:text-[72px] text-[#000D37] leading-[168%] -mt-6 md:-mt-8">
            AFFORDABLY.
          </h2>

          {/* Tagline */}
          <p className="font-philosopher text-[14px] text-black/60 tracking-[-0.84px] leading-[95%] -mt-3">
            Seeking knowledge made easy.
          </p>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-3">
            <span className="font-philosopher text-[14px] text-black/50 tracking-[-0.84px] leading-[95%]">
              Authentic titles
            </span>
            <span className="font-philosopher text-[14px] text-black/50 tracking-[-0.84px] leading-[95%]">
              International shipping
            </span>
            <span className="font-philosopher text-[14px] text-black/50 tracking-[-0.84px] leading-[95%]">
              Secure checkout
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-0 mt-6 w-full max-w-[268px]">
            <Link
              to="/products"
              className="w-full flex items-center justify-center gap-[5px] bg-brand-dark text-white font-philosopher font-bold text-[18px] tracking-[-0.54px] leading-[153%] py-[5px] px-6 rounded-[3px] hover:bg-brand-dark/90 transition-colors"
            >
              Browse products
              <ArrowRightIcon />
            </Link>

            <Link
              to="/products"
              className="font-philosopher font-bold text-[18px] text-brand-dark tracking-[-0.54px] leading-[153%] py-[4px] hover:opacity-70 transition-opacity"
            >
              Check out categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="bg-white px-6 pt-6 pb-10 md:px-10 lg:px-16">
        <div className="max-w-screen-xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-philosopher font-normal text-[18px] text-black tracking-[-0.54px] leading-[153%]">
              Featured Items
            </h3>
            <Link
              to="/products"
              className="flex items-center font-philosopher text-[10px] text-black tracking-[-0.3px] leading-[153%] hover:opacity-70 transition-opacity"
            >
              View all
              <ViewAllArrow />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 md:grid-cols-4 lg:grid-cols-5">
            {placeholderProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#D9D9D9] rounded-[7px] aspect-[101/150] md:aspect-[2/3] hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
