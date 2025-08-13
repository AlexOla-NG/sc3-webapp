"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({
	link,
	className,
	title,
	onClick
}: {
	link: string;
	className?: string;
	onClick?: () => void;
	title: string;
}) {
	const pathname = usePathname();

	const isActive = pathname === link;
	const activeClass = isActive ? "font-bold" : "";
	const customClass = className ? className : "";
	const hoverClass = "hover:underline";
	const classNames = `${hoverClass} ${activeClass} ${customClass} transition duration-400 ease-in`;

	return (
		<Link href={link} className={classNames} onClick={onClick}>
			{title}
		</Link>
	);
}
