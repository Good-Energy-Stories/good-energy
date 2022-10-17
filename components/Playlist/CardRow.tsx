import { Card } from '../Cards';
import { ShadowOverlay } from './';

const CardRow = ({
  playlist,
  shadowActive = false,
  onActionButtonClicked,
}: {
  playlist: any;
  shadowActive: boolean;
  onActionButtonClicked: (slug: string) => void;
}) => {
  if (!playlist) return null;
  return (
    <div className="row">
      <div className="row-inner">
        <ShadowOverlay active={shadowActive} />
        {playlist.map((c, i) => (
          <div key={i} className="card-wrapper">
            <Card index={i} content={c} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .row {
          grid-column: 1/-1;
          overflow: hidden;
        }
        .row-inner {
          display: flex;
          overflow-y: hidden;
          overflow-x: scroll;
        }
        .row-inner::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .row-inner {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .card-wrapper {
          margin: 0 1.25rem;
          min-width: 228px;
        }
        @media only screen and (max-width: 768px) {
        }
      `}</style>
    </div>
  );
};

export default CardRow;
