import { VariantProps, cva } from 'class-variance-authority';

// -- Heading variants
const headingVariants = cva('font-[500] text-4xl leading-[80px]', {
  variants: {
    variant: {
      h1: 'text-[80px]',
      h2: 'text-[48px]',
      h3: 'text-[32px]',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

/**
 * @interface IHeadingProps
 * @description The props for the Heading component.
 * @extends {React.HTMLAttributes<HTMLHeadingElement>}
 * @extends {VariantProps<typeof headingVariants>}
 * @exports IHeadingProps
 */
export interface IHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

/**
 * @function Heading
 * @description A simple heading component.
 * @param {IHeadingProps} { className, variant, props } - The props for the Heading component.
 * @example <Heading className="text-4xl font-bold" variant="h1">Hello world!</Heading>
 * @example <Heading variant="h2">Hello world!</Heading>
 * @example <Heading variant="h3">Hello world!</Heading>
 * @returns {React.ReactElement} - The Heading component.
 * @exports Heading
 */
export function Heading({
  className,
  variant,
  ...props
}: IHeadingProps): React.ReactElement {
  // -- Render
  return <h1 className={headingVariants({ className, variant })} {...props} />;
}
