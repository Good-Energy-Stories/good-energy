import { LinkColumn } from './';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';

const playbook = [
  { label: 'Introduction', href: '' },
  { label: 'The Why', href: '' },
  { label: 'Climate Storytelling', href: '' },
  { label: 'Solutions on Screen', href: '' },
  { label: 'Characters', href: '' },
  { label: 'Story World', href: '' },
  { label: 'Climate Storytelling', href: '' },
  { label: 'Credits', href: '' },
];

const resources = [
  { label: 'Library of Experts', href: '/about/library-of-experts' },
  { label: 'Partner Organizations', href: '/about/partners' },
];

const team = [
  { label: 'Team', href: '/about/team' },
  { label: 'Contact', href: '/about/contact' },
];

const Links = observer(() => {
  const store = useStore();
  const {
    dataStore: { playbookSections },
  } = store;

  const links = [
    { label: 'Playbook', links: playbookSections },
    { label: 'Resources', links: resources },
    { label: 'Team', links: team },
  ];
  return (
    <>
      <div className="links">
        {links.map((l, i) => {
          return <LinkColumn key={i} label={l.label} links={l.links} />;
        })}
      </div>

      <style jsx>{`
        .links {
          display: flex;
        }
        @media only screen and (max-width: 768px) {
          .links {
            width: calc(100vw - 5rem);
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
});

export default Links;
