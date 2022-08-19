import Link from 'next/link';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { SECONDARY_MENU_HEIGHT } from './SecondaryNavMenu';

const SecondaryMenuTab = ({ label, firstArticle, articles, color }) => {
  const [expanded, setExpanded] = useState(false);
  const [offset, setOffset] = useState(0);

  return (
    <>
      <div
        className="tab"
        onMouseEnter={(e) => {
          setOffset(e.clientX);
          setExpanded(true);
        }}
        onMouseLeave={(e) => {
          setExpanded(false);
        }}
      >
        <div className="tab-inner">
          <Link href={`/playbook/${firstArticle?.slug}`}>
            <a>
              <div className="playbook-toc-nav-link-small">{label}</div>
            </a>
          </Link>
        </div>
        {articles?.length > 1 && (
          <DropdownMenu
            expanded={expanded}
            offset={offset}
            articles={articles}
          />
        )}
        <style jsx>{`
          .tab {
            position: relative;
          }
          .tab-inner {
            height: ${SECONDARY_MENU_HEIGHT}px;
            display: flex;
            align-items: center;
            text-align: center;
            padding-top: var(--spacing-xxsmall);
            transition: 0.3s ease;
          }
          .tab-inner:hover {
            opacity: 0.6;
          }
          .playbook-toc-nav-link-small {
            color: ${color};
            text-transform: uppercase;
            cursor: pointer;
          }
          @media only screen and (max-width: 1080px) {
            .tab {
              display: none;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default SecondaryMenuTab;
