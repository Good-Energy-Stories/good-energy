import NavSection from './NavSection';
import NavLink from './NavLink';
import NavItems from './NavItems';

const NavItem = ({ data, depth }: any) => {
  const { _type } = data;

  switch (_type) {
    case 'playbookSection':
      switch (data.title) {
        case 'Climate Storytelling':
          return <NavItems data={data} depth={depth} />;
        default:
          return <NavSection data={data} depth={depth} />;
      }

    case 'article':
      switch (data.title) {
        case 'Credits':
          return null;
      }

    case 'twoWorldsArticle':
    case 'whyClimateArticle':
    case 'characterProfilesPage':
      return <NavLink data={data} />;
    default:
      return null;
  }
};

export default NavItem;
