import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '~/lib/utils';

// -- Button variants
const buttonVariants = cva(
  'text-md font-medium py-2 px-4 rounded-md shadow-sm',
  {
    variants: {
      variant: {
        default: 'bg-white text-black',
        outline: 'bg-transparent border text-white border-white',
        link: 'text-black underline underline-offset-4',
      },
      size: {
        default:
          'text-md md:text-lg lg:text-xl px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4',
        small:
          'text-sm md:text-md lg:text-lg px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3',
        large:
          'text-lg md:text-xl lg:text-2xl px-5 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

/**
 * @interface ButtonProps
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>}
 * @extends {VariantProps<typeof buttonVariants>}
 * @exports ButtonProps
 */
export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

/**
 * @function Button
 * @description A button component with multiple variants.
 * @param {IButtonProps} { className, size, variant, ...props } - Button props.
 * @returns {React.ReactElement} - The Button component
 * @example <Button variant="default" size="default">Click me</Button>
 * @example <Button variant="outline" size="small">Click me</Button>
 * @example <Button variant="link" size="large">Click me</Button>
 * @example <Button variant="default" size="default" onClick={() => alert("Hello!")}>Click me</Button>
 * @exports Button
 */
const Button: React.FC<IButtonProps> = ({
  className,
  size,
  variant,
  ...props
}: IButtonProps): React.ReactElement => {
  // -- Return
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};

export { Button, buttonVariants };
