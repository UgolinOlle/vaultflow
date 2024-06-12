import { cn } from "~/lib/utils";

/**
 * @interface BorderBeamProps
 * @property {string} [className] - Additional class class
 * @property {number} [size] - Size of the beam
 * @property {number} [duration] - Duration of the animation
 * @property {number} [borderWidth] - Width of the border
 * @property {number} [anchor] - Anchor point of the beam
 * @property {string} [colorFrom] - Start color of the beam
 * @property {string} [colorTo] - End color of the beam
 * @property {number} [delay] - Delay of the animation
 */
interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

/**
 * @function BorderBeam
 * @description - Border beam component
 * @param {BorderBeamProps} { className, size = 200, duration = 15, anchor = 90, borderWidth = 1.5, colorFrom = "#ffaa40", colorTo = "#9c40ff", delay = 0 } - Props of the BorderBeam component
 * @returns {JSX.Element} - React component
 * @exports BorderBeam
 */
export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps): JSX.Element => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )}
    />
  );
};
