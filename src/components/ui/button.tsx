import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '~/lib/utils';

// -- Button variants
const buttonVariants = cva('text-md font-medium rounded-md shadow-sm', {
  variants: {
    variant: {
      default:
        'bg-white text-black transition-all ease-in-out duration-200 hover:bg-purplePrimary hover:text-white',
      outline: 'bg-transparent border text-white border-white',
      link: 'text-black underline underline-offset-4',
    },
    size: {
      default: 'text-md md:text-lg lg:text-xl px-6 py-2',
      small: 'text-sm md:text-md px-6 py-1',
      large: 'text-lg px-10 py-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

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
