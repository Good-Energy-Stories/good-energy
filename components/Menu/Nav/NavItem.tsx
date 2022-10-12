import NavLink from './NavLink';
import PlaybookControl from './PlaybookControl';

const NavItem = ({ data }: any) => {
  const { _type } = data;
  switch (_type) {
    case 'playbookHome':
      return <PlaybookControl />;
    default:
      return <NavLink data={data} />;
  }
};

export default NavItem;
