import Link from "next/link";
import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Logo = () => {
  return (
    <Link href="/" aria-label="Marius Herlea - Home">
      <span
        className={`${specialElite.className} text-[38px] leading-none`}
        style={{
          color: "#8CC63F",
          textShadow: "0 0 5px rgba(140, 198, 63, 0.35)",
        }}
      >
        MH
      </span>
    </Link>
  );
};

export default Logo;