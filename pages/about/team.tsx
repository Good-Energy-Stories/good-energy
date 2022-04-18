import { sanity } from '../../lib/sanity';
import { Layout, Meta, NextUpPage, StickyNavBar } from '../../components';
import { queries } from '../../data';
import { Header } from '../../components/About';
import { Footer } from '../../components/Footer';
import { TeamMemberCard, TeamMemberCardSmall } from '../../components/Cards';
import {
  PageDivider,
  PageDividerLabelSize,
} from '../../components/PageDivider';
import { imageUrlFor } from '../../utils/imageUrlFor';

const Team = ({ pageData }) => {
  console.log(pageData);
  const {
    title,
    description,
    featuredTeamMembers,
    teamMembers,
    boardMembers,
    seo,
  } = pageData;

  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'about/team'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />
      <StickyNavBar />
      <Layout key="team" paddingHorizontal={'2.5rem'}>
        <Header title={title} description={description} />
        <div className="featured-team">
          {featuredTeamMembers?.map((f, i) => {
            return (
              <TeamMemberCard
                key={i}
                data={f}
                index={i}
                last={i === featuredTeamMembers?.length - 1}
              />
            );
          })}
        </div>
        {teamMembers && (
          <PageDivider
            label="Team Members"
            labelSize={PageDividerLabelSize.small}
            marginBottom={'2.5rem'}
          />
        )}
        <div className="team">
          {teamMembers?.map((f, i) => {
            return <TeamMemberCardSmall key={i} data={f} index={i} />;
          })}
        </div>
        {boardMembers && (
          <PageDivider
            label="Board Members"
            labelSize={PageDividerLabelSize.small}
            marginBottom={'2.5rem'}
          />
        )}
        <div className="team">
          {boardMembers?.map((f, i) => {
            return <TeamMemberCardSmall key={i} data={f} index={i} />;
          })}
        </div>
        <NextUpPage label={'Partners'} href={'/about/partners'} />
      </Layout>
      <Footer />
      <style jsx>{`
        .featured-team {
          grid-column: 1/5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .team {
          grid-column: 1/5;
          display: grid;

          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      `}</style>
    </>
  );
};

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(
    `
        *[_type == "teamPage" ] {
          "id": _id,
          seo {
            ${queries.pageSeo}
          },
          title,
          featuredTeamMembers[]-> {
            ${queries.teamMember}
          },
          teamMembers[]-> {
            ${queries.teamMember}
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

export default Team;
