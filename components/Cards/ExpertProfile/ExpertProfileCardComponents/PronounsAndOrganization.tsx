import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
  div {
    margin-bottom: 0.625rem;
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const PronounsAndOrganization = ({
  pronouns,
  organization,
}: {
  pronouns: string;
  organization?: string;
}) => {
  const formatted = [pronouns, organization].join(
    pronouns && organization ? ' • ' : '',
  );
  return (
    <div className={className}>
      <div className="label-medium">{formatted}</div>

      <style jsx>{`
        .label-medium {
          color: var(--blueThree);
        }
      `}</style>
      {styles}
    </div>
  );
};

export default PronounsAndOrganization;
