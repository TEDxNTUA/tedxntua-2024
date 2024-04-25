import { usePathname } from "next/navigation";
import Link from "next/link";

function NavLink({ href, title }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      passHref
      className={`text-2xl lg:text-base font-semibold hover:text-our-purple ${
        path === href
          ? "text-our-purple" // Apply the active class
          : "text-white" // No additional class if not active
      }`}
    >
      {title}
    </Link>
  );
}

export default NavLink;
