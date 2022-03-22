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
  { label: 'Library of Experts', link: '' },
  { label: 'Partner Organizations', link: '' },
  { label: 'Additional Resources', link: '' },
];

const team = [
  { label: 'Team', link: '' },
  { label: 'Partners', link: '' },
  { label: 'Contact', link: '' },
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
      `}</style>
    </>
  );
};

export default Links;
