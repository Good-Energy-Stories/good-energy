import HamburgerIcon from '../../public/small-hamburger.svg';
import ArrowIcon from '../../public/arrow.svg';

import SearchIcon from '../../public/small-search.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Link from 'next/link';
import { SearchButton } from '../Landing';
import { useState } from 'react';
import { useRouter } from 'next/router';
import css from 'styled-jsx/css';
import { motion } from 'framer-motion';

import DropdownMenu from './DropdownMenu';
import { SECONDARY_MENU_HEIGHT } from './SecondaryNavMenu';

const MenuTab = ({ label, firstArticle, articles, color }) => {
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
          <motion.div whileHover={{ opacity: 0.6 }}>
            <Link href={`/playbook/${firstArticle?.slug}`}>
              <a>
                <div className="playbook-toc-nav-link-small">{label}</div>
              </a>
            </Link>
          </motion.div>
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
          @media only screen and (max-width: 768px) {
            .right {
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default MenuTab;
