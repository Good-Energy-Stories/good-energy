import NavSection from './NavSection';
import NavLink from './NavLink';

const NavItem = ({ data, showAll, parentExpanded }: any) => {
  const { _type } = data;
  switch (_type) {
    case 'playbookSection':
      return <NavSection data={data} showAll={showAll} />;
    case 'article':
    case 'twoWorldsArticle':
    case 'whyClimateArticle':
    case 'characterProfilesPage':
      return <NavLink data={data} parentExpanded={parentExpanded} />;
    default:
      return null;
  }
};

export default NavItem;
