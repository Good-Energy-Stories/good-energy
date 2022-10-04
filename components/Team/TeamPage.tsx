import { NextUpPage } from '..';
import { imageUrlFor } from '../../utils/imageUrlFor';
import Header from '../About/Header/Header';
import TeamMemberCard from '../Cards/TeamMember/TeamMemberCard';
import { Footer } from '../Footer';
import Layout from '../Layout';
import Meta from '../Meta';
import PageDivider from '../PageDivider';
import StickyNavBar from '../StickyNavBar';
import BoardMembers from './BoardMembers/BoardMembers';
import styles from './TeamPage.module.css';
const TeamPage = ({ pageData }) => {
  const {
    heroImage,
    title,
    description,
    boardDescription,

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
        <Header
          heroImage={heroImage}
          title={title}
          description={description}
          fittedText
        />

        {teamMembers && <PageDivider />}
        <div className={styles.layout}>
          {teamMembers?.map((f, i) => {
            return <TeamMemberCard key={i} data={f} index={i} />;
          })}
        </div>
        <PageDivider className={styles.bigDivider} />
        <div className={styles.layout}>
          {boardDescription && <BoardMembers description={boardDescription} />}
        </div>

        {boardMembers && <PageDivider />}
        <div className={styles.layout}>
          {boardMembers?.map((f, i) => {
            return <TeamMemberCard key={i} data={f} index={i} />;
          })}
        </div>

        <NextUpPage label={'Partners'} href={'/about/partners'} />
      </Layout>
      <Footer />
    </>
  );
};

export default TeamPage;
