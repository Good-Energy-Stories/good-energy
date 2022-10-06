import TeamMemberCard from '../Cards/TeamMember/TeamMemberCard';
import Information from './Information/Information';

import styles from './TeamSection.module.css';
const TeamSection = ({ data }: any) => {
  const { teamMembers } = data;
  console.log('heree', data);
  const renderTeamCards = (content) => {
    return content?.map((f, i) => {
      return <TeamMemberCard key={i} data={f} index={i} />;
    });
  };

  return (
    <>
      {data?.description && <Information description={data.description} />}
      <div className={styles.container}>{renderTeamCards(teamMembers)}</div>
    </>
  );
};

export default TeamSection;
