import TeamMemberCard from '../Cards/TeamMember/TeamMemberCard';
import Information from './Information/Information';

import styles from './TeamSection.module.css';
const TeamSection = ({ data }: any) => {
  const { teamMembers } = data;
  const renderTeamCards = (content) => {
    return content?.map((f, i) => {
      return <TeamMemberCard key={i} data={f} index={i} />;
    });
  };

  return (
    <>
      {data?.description && (
        <Information
          title={data.title}
          description={data.description}
          image={data.image}
        />
      )}
      <div className={styles.container}>{renderTeamCards(teamMembers)}</div>
    </>
  );
};

export default TeamSection;
