import { LinkColumn } from './';

const playbook = [
  { label: 'Introduction', link: '' },
  { label: 'The Why', link: '' },
  { label: 'Climate Storytelling', link: '' },
  { label: 'Solutions on Screen', link: '' },
  { label: 'Characters', link: '' },
  { label: 'Story World', link: '' },
  { label: 'Climate Storytelling', link: '' },
  { label: 'Credits', link: '' },
];

const resources = [
  { label: 'Library of Experts', link: '/about/library-of-experts' },
  { label: 'Partner Organizations', link: '/about/partners' },
];

const team = [
  { label: 'Team', link: '/about/team' },
  { label: 'Contact', link: '/about/contact' },
];

const links = [
  { label: 'Playbook', links: playbook },
  { label: 'Resources', links: resources },
  { label: 'Team', links: team },
];

const Links = () => {
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
};

export default Links;
