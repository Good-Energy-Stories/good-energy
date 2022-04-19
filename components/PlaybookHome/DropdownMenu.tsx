import HamburgerIcon from '../../public/hamburger.svg';
import ArrowIcon from '../../public/arrow.svg';

import SearchIcon from '../../public/search.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Link from 'next/link';
import { SearchButton } from '../Landing';
import { useState } from 'react';
import { useRouter } from 'next/router';
import css from 'styled-jsx/css';
import { AnimatePresence, motion } from 'framer-motion';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
import { SECONDARY_MENU_HEIGHT } from './SecondaryNavMenu';
const DROPDOWN_MIN_WIDTH = 240;
function getStyles(offset) {
  return css.resolve`
    div {
      min-width: ${DROPDOWN_MIN_WIDTH}px;
      position: absolute;
      left: ${offset}px;
      top: ${SECONDARY_MENU_HEIGHT}px;
      z-index: 1000;
      display: flex;
      flex-direction: column;

      background-color: var(--blueFive);

      border-bottom: 1px solid var(--black);
      border-left: 1px solid var(--black);
      border-right: 1px solid var(--black);
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 0;
      }
    }
  `;
}

const variants = {
  open: {},
  closed: {},
};

const DropdownSubsection = ({ title, contents }) => {
  return (
    <div className="container">
      <div className="playbook-toc-nav-link-small">{title}</div>
      {contents.map((s) => {
        const { _type, title, slug } = s;

        return (
          <motion.div key={title} whileHover={{ opacity: 0.6 }}>
            <Link href={`/playbook/${slug}`}>
              <a className="playbook-toc-nav-link-extra-small">{title}</a>
            </Link>
          </motion.div>
        );
      })}
      <style jsx>{`
        .container {
          padding: 0.625rem 0.625rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 0 0.625rem;
          border-bottom: 1px solid var(--greyBlue);
        }
        .playbook-toc-nav-link-small {
          color: var(--black);
          margin-bottom: 0.3125rem;
        }
        .playbook-toc-nav-link-extra-small {
          color: var(--black);

          padding: 5px 0;
        }
        .playbook-toc-nav-link-small:last-of-type {
          border: 0;
        }
        div {
          display: flex;
          align-items: center;
        }
        span {
        }
        .border {
          border-right: 4px solid var(--black);
          cursor: pointer;
        }

        @media only screen and (max-width: 768px) {
          div {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

const DropdownMenu = observer(
  ({
    expanded,
    offset,
    articles,
  }: {
    expanded: boolean;
    offset: number;
    articles: any;
  }) => {
    const store = useStore();
    const {
      uiStore: { windowWidth },
    } = store;

    const menuOffset =
      offset > windowWidth - DROPDOWN_MIN_WIDTH
        ? -200
        : offset < 200
        ? 20
        : -40;

    const { className, styles } = getStyles(menuOffset);

    return (
      <>
        <AnimatePresence>
          {expanded && (
            <motion.div
              className={className}
              variants={variants}
              animate={expanded ? 'open' : 'closed'}
            >
              {articles.map((s) => {
                const { _type, title, slug } = s;

                if (_type === 'playbookSubsection') {
                  return (
                    <DropdownSubsection
                      key={s.title}
                      title={title}
                      contents={s.contents}
                    />
                  );
                } else {
                  return (
                    <Link href={`/playbook/${slug}`} key={title}>
                      <a className="playbook-toc-nav-link-small">
                        <motion.span whileHover={{ opacity: 0.6 }}>
                          {title}
                        </motion.span>
                      </a>
                    </Link>
                  );
                }
              })}
            </motion.div>
          )}
        </AnimatePresence>
        {styles}
        <style jsx>{`
          .playbook-toc-nav-link-small {
            color: var(--black);
            margin: 0 0.625rem;
            padding: 0.625rem 0.625rem;
            border-bottom: 1px solid var(--greyBlue);
          }
          .playbook-toc-nav-link-small:last-of-type {
            border: 0;
          }
          div {
            display: flex;
            align-items: center;
          }
          span {
          }
          .border {
            border-right: 4px solid var(--black);
            cursor: pointer;
          }

          @media only screen and (max-width: 768px) {
            div {
              display: none;
            }
          }
        `}</style>
      </>
    );
  },
);

export default DropdownMenu;
