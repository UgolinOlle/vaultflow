import { Icons } from '~/lib/icons';

/**
 * @function CompanyList
 * @description This component is responsible for rendering the list of companies.
 * @example <CompanyList />
 * @returns {JSX.Element} JSX.Element
 * @exports CompanyList
 */
export const CompanyList: React.FC = (): JSX.Element => { // -- Render
  return (
    <ul className="flex flex-row gap-6 items-center w-full justify-center">
      <li>
        <Icons.dell />
      </li>
      <li>
        <Icons.zendesk />
      </li>
      <li>
        <Icons.rakuten />
      </li>
      <li>
        <Icons.pacificFunds />
      </li>
      <li>
        <Icons.ncr />
      </li>
      <li>
        <Icons.lattice />
      </li>
      <li>
        <Icons.ted />
      </li>
    </ul>
  );
};
