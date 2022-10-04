import { sanity } from '../../lib/sanity';
import { queries } from '../../data';
import TeamPage from '../../components/Team/TeamPage';

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(
    `
        *[_type == "teamPage" ] {
          "id": _id,
          seo {
            ${queries.pageSeo}
          },
          heroImage,
          title,
          description[]{
            ...,
            markDefs[]{
              ...,
              _type == "internalLink" => {
                "slug": @.reference->slug
              }
            }
          },
          teamMembers[]-> {
            ${queries.teamMember}
          },
          boardDescription[]{
            ...,
            markDefs[]{
              ...,
              _type == "internalLink" => {
                "slug": @.reference->slug
              }
            }
          },
          boardMembers[]-> {
            ${queries.teamMember}
          },
        }[0]
      `,
  );
  return {
    props: { pageData },
  };
};

export default TeamPage;
