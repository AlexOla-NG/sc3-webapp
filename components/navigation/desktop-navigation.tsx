import { navlinks } from "./data";
import Navlink from "./navlink"

const DesktopNavigation = () => {
  return (
		<nav className="hidden lg:flex space-x-6 text-sm items-center px-4">
			{navlinks.map((navlink) => (
				<Navlink
					key={navlink.link}
					className="text-[#0065bd]"
					link={navlink.link}
					title={navlink.title}
				/>
			))}
		</nav>
  );
}

export default DesktopNavigation;