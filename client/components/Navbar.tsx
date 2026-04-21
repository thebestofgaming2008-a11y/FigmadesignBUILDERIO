import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "All products" },
  { href: "/books", label: "Books" },
  { href: "/clothing", label: "Clothing" },
  { href: "/track-order", label: "Track order" },
];

function SearchIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
      <path
        d="M8.98333 9.625L6.09583 6.7375C5.86667 6.92083 5.60313 7.06597 5.30521 7.17292C5.00729 7.27986 4.69028 7.33333 4.35417 7.33333C3.52153 7.33333 2.81684 7.04497 2.2401 6.46823C1.66337 5.89149 1.375 5.18681 1.375 4.35417C1.375 3.52153 1.66337 2.81684 2.2401 2.2401C2.81684 1.66337 3.52153 1.375 4.35417 1.375C5.18681 1.375 5.89149 1.66337 6.46823 2.2401C7.04497 2.81684 7.33333 3.52153 7.33333 4.35417C7.33333 4.69028 7.27986 5.00729 7.17292 5.30521C7.06597 5.60313 6.92083 5.86667 6.7375 6.09583L9.625 8.98333L8.98333 9.625ZM4.35417 6.41667C4.92708 6.41667 5.41406 6.21615 5.8151 5.8151C6.21615 5.41406 6.41667 4.92708 6.41667 4.35417C6.41667 3.78125 6.21615 3.29427 5.8151 2.89323C5.41406 2.49219 4.92708 2.29167 4.35417 2.29167C3.78125 2.29167 3.29427 2.49219 2.89323 2.89323C2.49219 3.29427 2.29167 3.78125 2.29167 4.35417C2.29167 4.92708 2.49219 5.41406 2.89323 5.8151C3.29427 6.21615 3.78125 6.41667 4.35417 6.41667Z"
        fill="#1D1B20"
      />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M5.36242 15.6752C6.14159 15.0793 7.01242 14.6095 7.97492 14.2658C8.93742 13.922 9.94575 13.7502 10.9999 13.7502C12.0541 13.7502 13.0624 13.922 14.0249 14.2658C14.9874 14.6095 15.8583 15.0793 16.6374 15.6752C17.1721 15.0488 17.5885 14.3384 17.8864 13.5439C18.1843 12.7495 18.3333 11.9016 18.3333 11.0002C18.3333 8.96822 17.619 7.23801 16.1905 5.80954C14.7621 4.38107 13.0319 3.66683 10.9999 3.66683C8.96797 3.66683 7.23777 4.38107 5.80929 5.80954C4.38082 7.23801 3.66659 8.96822 3.66659 11.0002C3.66659 11.9016 3.81554 12.7495 4.11346 13.5439C4.41138 14.3384 4.8277 15.0488 5.36242 15.6752ZM10.9999 11.9168C10.0985 11.9168 9.33846 11.6075 8.71971 10.9887C8.10096 10.37 7.79159 9.60989 7.79159 8.7085C7.79159 7.80711 8.10096 7.04704 8.71971 6.42829C9.33846 5.80954 10.0985 5.50016 10.9999 5.50016C11.9013 5.50016 12.6614 5.80954 13.2801 6.42829C13.8989 7.04704 14.2083 7.80711 14.2083 8.7085C14.2083 9.60989 13.8989 10.37 13.2801 10.9887C12.6614 11.6075 11.9013 11.9168 10.9999 11.9168ZM10.9999 20.1668C9.73186 20.1668 8.5402 19.9262 7.42492 19.445C6.30964 18.9637 5.3395 18.3106 4.5145 17.4856C3.6895 16.6606 3.03638 15.6904 2.55513 14.5752C2.07388 13.4599 1.83325 12.2682 1.83325 11.0002C1.83325 9.73211 2.07388 8.54044 2.55513 7.42516C3.03638 6.30988 3.6895 5.33975 4.5145 4.51475C5.3395 3.68975 6.30964 3.03662 7.42492 2.55537C8.5402 2.07412 9.73186 1.8335 10.9999 1.8335C12.268 1.8335 13.4596 2.07412 14.5749 2.55537C15.6902 3.03662 16.6603 3.68975 17.4853 4.51475C18.3103 5.33975 18.9635 6.30988 19.4447 7.42516C19.926 8.54044 20.1666 9.73211 20.1666 11.0002C20.1666 12.2682 19.926 13.4599 19.4447 14.5752C18.9635 15.6904 18.3103 16.6606 17.4853 17.4856C16.6603 18.3106 15.6902 18.9637 14.5749 19.445C13.4596 19.9262 12.268 20.1668 10.9999 20.1668Z"
        fill="#1D1B20"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <g clipPath="url(#cart-clip)">
        <path
          d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z"
          stroke="#1E1E1E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="cart-clip">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="w-full sticky top-0 z-50">
      {/* ── Notice Bar — min-h 21px → 1.3125rem ── */}
      <div className="bg-brand-bg shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)] relative flex items-center justify-center min-h-[1.3125rem] px-4">
        <p className="font-philosopher text-[0.75rem] text-center text-black leading-[168%]">
          International orders may incur customs/import duties
        </p>
        <div className="absolute right-3 top-0 h-full flex items-center gap-1">
          <svg width="0.3125rem" height="0.6875rem" viewBox="0 0 5 11" fill="none" aria-hidden>
            <g clipPath="url(#arrow-clip)">
              <path
                d="M3.54159 4.58333L2.49992 6.875L1.45825 4.58333H3.54159Z"
                fill="#1D1B20"
              />
            </g>
            <defs>
              <clipPath id="arrow-clip">
                <rect
                  width="11"
                  height="5"
                  fill="white"
                  transform="matrix(0 -1 1 0 0 11)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="font-philosopher text-[0.75rem] text-black">INR</span>
          <span className="font-philosopher text-[0.75rem] text-black">₹</span>
        </div>
      </div>

      {/* ── Main Header Row ── */}
      <div className="bg-brand-header border border-black/[0.17]">
        <div className="flex items-center gap-2 px-3 py-2 max-w-screen-xl mx-auto">
          {/* Logo — h 52px → 3.25rem */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2f0e718599e645a7d577e6037bd1b30fc84324d7?width=150"
              alt="Hurayrah Essentials"
              className="h-[3.25rem] w-auto"
            />
          </Link>

          {/* Search Bar — gap 5px → 0.3125rem, px 6px → 0.375rem, py 2px → 0.125rem */}
          <div className="flex-1 flex items-center gap-[0.3125rem] bg-[#D9D9D9] border border-[rgba(154,154,154,0.30)] rounded-xl px-1.5 py-0.5 mx-1 md:mx-4 max-w-xs md:max-w-sm">
            <SearchIcon />
            <input
              type="text"
              placeholder="Imam Ahmad, Mutoon, etc"
              className="bg-transparent text-[0.5625rem] md:text-[0.75rem] font-philosopher text-[#4E5159] flex-1 outline-none placeholder:text-[#4E5159] min-w-0"
            />
          </div>

          {/* Account + Cart */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              aria-label="Account"
              className="hover:opacity-70 transition-opacity"
            >
              <AccountIcon />
            </button>
            <button
              aria-label="Cart"
              className="hover:opacity-70 transition-opacity"
            >
              <CartIcon />
            </button>
          </div>
        </div>

        {/* ── Nav Links ── */}
        <div className="bg-white/60 backdrop-blur-sm shadow-[0_0.5rem_2.5rem_0_rgba(0,0,0,0.20)]">
          <nav className="flex items-center justify-center gap-4 md:gap-5 py-1.5 overflow-x-auto max-w-screen-xl mx-auto px-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "font-philosopher text-[0.9375rem] whitespace-nowrap pb-0.5 relative transition-colors",
                    isActive
                      ? "text-brand-dark"
                      : "text-black hover:text-brand-dark/70"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-brand-dark rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
