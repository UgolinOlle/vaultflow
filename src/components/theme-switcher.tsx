import { MoonStar, SunIcon } from 'lucide-react';

import { useTheme } from '~/lib/providers/theme';
import { cn } from '~/lib/utils';

/**
 *
 * @interface IThemeSwitcherProps
 * @description Inteface for ThemeSwitcher component.
 * @extends {React.HTMLAttributes<HTMLButtonElement>}
 */
interface IThemeSwitcherProps extends React.HTMLAttributes<HTMLButtonElement> {}

/**
 * @function ThemeSwitcher
 * @description A simple theme switcher component.
 * @param {IThemeSwitcherProps} { className } - The props for the ThemeSwitcher component.
 * @example <ThemeSwitcher className="p-2 rounded-full bg-yellow-400 dark:bg-purple-900" />
 * @returns {React.ReactElement} - The ThemeSwitcher component.
 * @exports ThemeSwitcher
 */
export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({
  className,
}: IThemeSwitcherProps): React.ReactElement => {
  // -- Variables
  const { theme, toggleTheme } = useTheme();

  // -- Render
  return (
    <button
      className={cn(
        'p-2 rounded-full bg-yellow-400 dark:bg-purple-900',
        className
      )}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <SunIcon size="18" /> : <MoonStar size="18" />}
    </button>
  );
};
