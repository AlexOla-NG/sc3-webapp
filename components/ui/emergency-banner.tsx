import { AlertTriangle, BarChart3, BrainCircuit, Dumbbell, Target } from "lucide-react";
import { Alert, AlertDescription } from "./alert";

type IconType = "Target" | "AlertTriangle" | "BrainCircuit" | "Dumbbell" | "BarChart";

function renderIcon({
	icon,
	iconClassName,
}: {
	icon?: IconType;
	iconClassName?: string;
}) {
	const className = `h-4 w-4 ${iconClassName || ""}`;

	switch (icon) {
		case "Target":
			return <Target className={className} />;
		case "BarChart":
			return <BarChart3 className={className} />;
		case "BrainCircuit":
			return <BrainCircuit className={className} />;
		case "Dumbbell":
			return <Dumbbell className={className} />;
		case "AlertTriangle":
			return <AlertTriangle className={className} />;
		default:
			// Fallback: render a generic icon (e.g., AlertTriangle)
			return <AlertTriangle className={className} />;
	}
}

export default function EmergencyBanner({
	title,
	description,
	icon,
	className,
	iconClassName,
	descriptionClassName,
}: {
	title: React.ReactNode;
	description: React.ReactNode;
	icon?: IconType;
	className?: string;
	iconClassName?: string;
	descriptionClassName?: string;
}) {
	return (
		<Alert
			className={`border-l-4 border-l-red-500 bg-red-50 rounded-none ${
				className || ""
			}`}
		>
			{renderIcon({ icon, iconClassName })}
			<AlertDescription
				className={`text-red-800 ${descriptionClassName || ""}`}
			>
				<strong>{title}</strong> {description}
			</AlertDescription>
		</Alert>
	);
}

