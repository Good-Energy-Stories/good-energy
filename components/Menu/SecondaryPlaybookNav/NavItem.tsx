import NavSection from './NavSection';
import NavLink from './NavLink';
import NavItems from './NavItems';

const NavItem = ({ data, depth, setSubmenuExpanded }: any) => {
  const { _type } = data;

  switch (_type) {
    case 'playbookSection':
      switch (data.title) {
        case 'Climate Storytelling':
          return (
            <NavItems
              data={data}
              depth={depth}
              setSubmenuExpanded={setSubmenuExpanded}
            />
          );
        default:
          return (
            <NavSection
              data={data}
              depth={depth}
              setSubmenuExpanded={setSubmenuExpanded}
            />
          );
      }

    case 'article':
      if (depth === 0) {
        return <NavSection data={data} depth={depth} />;
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
