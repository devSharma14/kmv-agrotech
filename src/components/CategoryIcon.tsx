import { Waves, CloudRain, Sprout, Compass, Mountain, type LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  Waves,
  CloudRain,
  Sprout,
  Compass,
  Mountain,
};

export function CategoryIcon({
  name,
  className,
  strokeWidth = 2,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = map[name] ?? Waves;
  return <Icon className={className} strokeWidth={strokeWidth} />;
}
