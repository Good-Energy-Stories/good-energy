import { sanity } from '../../lib/sanity';
import { Layout, Meta, StickyNavBar } from '../../components';
import { queries } from '../../data';
import { Header } from '../../components/About';
import { Footer } from '../../components/Footer';
import { TeamMemberCard, TeamMemberCardSmall } from '../../components/Cards';

const Team = ({ pageData }) => {
  console.log(pageData);
  const { title, description, featuredTeamMembers, teamMembers } = pageData;

  return (
    <>
      <Meta />
      <StickyNavBar />
      <Layout key="team" paddingHorizontal={'7.5rem'}>
        <Header title={title} description={description} />
        <div className="featured-team">
          {featuredTeamMembers.map((f, i) => {
            return <TeamMemberCard key={i} data={f} index={i} />;
          })}
        </div>
        <div className="team">
          {teamMembers.map((f, i) => {
            return <TeamMemberCardSmall key={i} data={f} index={i} />;
          })}
        </div>
      </Layout>
      <Footer />
      <style jsx>{`
        .featured-team {
          grid-column: 1/5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 5rem;
        }
        .team {
          padding: 0 7.5rem;
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
          title,
          featuredTeamMembers[]-> {
            ${queries.teamMember}
          },
          teamMembers[]-> {
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
