import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { FRAMER_TRANSITION_EASEOUT } from '../lib/framer/framer-animations';
import CloseButtonIcon from '../public/close-button.svg';
import ListArrowIcon from '../public/list-arrow.svg';
import Link from 'next/link';
import { Search } from '.';
import { isMobile } from 'react-device-detect';
const { className, styles } = css.resolve`
  div {
    height: calc(100vh - 0rem);
    width: 100%;
    border: 12px solid var(--pink);
    background-color: var(--black);
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1000;
    padding: 1.25rem 2.5rem;
    padding-bottom: 2.5rem;
    min-width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: hidden;
  }
  @media only screen and (max-width: 768px) {
    div {
      width: 100%;
      padding: 1.25rem 1.25rem;

      grid-column-gap: 0;
    }
  }
`;

const variants = {
  in: {
    x: '-12px',
  },
  out: {
    x: 'calc(-100% - 10rem)',
  },
};

const mobileVariants = {
  in: {
    x: '0',
  },
  out: {
    x: 'calc(-100% - 10rem)',
  },
};

const CloseNavButton = observer(() => {
  const store = useStore();
  const {
    uiStore: { closeNavOverlay, closePlaybookNavOverlay },
  } = store;
  return (
    <>
      <div
        onClick={() => {
          closeNavOverlay();
          closePlaybookNavOverlay();
        }}
      >
        <CloseButtonIcon />
      </div>
      <style jsx>{`
        div {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          cursor: pointer;
        }

        @media only screen and (max-width: 768px) {
          div {
          }
          img {
          }
        }
      `}</style>
    </>
  );
});

const ListItemLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <>
      <Link href={href}>
        <a>
          <div className="playbook-toc-nav-link">{label}</div>
        </a>
      </Link>
      <style jsx>{`
        div {
          color: var(--white);
          margin: 0.3125rem 0;
          margin-bottom: 10px;
        }
        .arrow {
          margin-right: 12px;
        }
        @media only screen and (max-width: 768px) {
          div {
          }
          img {
          }
        }
      `}</style>
    </>
  );
};

const TOCSubsection = ({ content }) => {
  return (
    <div>
      <h4>{content?.title}</h4>
      <TOCSection content={content?.contents} />
      <style jsx>{`
        div {
          margin-bottom: 0.625rem;
          width: 100%;
          margin-right: 1.25rem;
        }
        h4 {
          color: var(--white);
          margin-top: 0;
          margin-bottom: 12px;
          text-transform: none;
        }
      `}</style>
    </div>
  );
};

const TOCSubsubsection = ({ content }) => {
  console.log(content);
  return (
    <div>
      <div className="playbook-toc-nav-link">{content?.title}</div>
      <ul>
        {content?.contents?.map((content, index) => {
          return (
            <li key={content.title}>
              {
                <ListItemLink
                  label={content.title}
                  href={`/playbook/${content.slug}`}
                />
              }
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        div {
        }
        .playbook-toc-nav-link {
          color: var(--white);
        }
        ul {
          margin: 0;
          paddding: 0;
        }
        li {
          color: var(--white);
          margin: 0;
        }
        h4 {
          color: var(--white);
          margin-top: 0;
          margin-bottom: 0.625rem;
        }
      `}</style>
    </div>
  );
};

const TOCSection = ({ content }) => {
  if (!content) return null;
  return content.map((e, i) => <TOCSerializer key={i} content={e} index={i} />);
};

const TOCSerializer = ({ content, index }) => {
  const type = content._type;

  switch (type) {
    case 'article':
      return (
        <ListItemLink
          label={content.title}
          href={`/playbook/${content.slug}`}
        />
      );
    case 'playbookSection':
      return <TOCSubsection content={content} />;
    case 'playbookSubsection':
      return <TOCSubsubsection content={content} />;

    case 'characterProfilePage':
      return null;
    default:
      return null;
  }
};

const PlaybookNavOverlay = observer(() => {
  const store = useStore();
  const {
    dataStore: { playbookNavTableOfContents },
    uiStore: { playbookNavOverlayOpen },
  } = store;
  console.log('playbookNavTableOfContents : ', playbookNavTableOfContents);
  if (!playbookNavTableOfContents) return null;
  return (
    <>
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        initial={'out'}
        animate={playbookNavOverlayOpen ? 'in' : 'out'}
        variants={isMobile ? mobileVariants : variants}
        className={className}
      >
        <div className="container">
          <h2 className="title">Playbook Contents</h2>
          <div className="section introduction">
            <div>
              <h3>Introduction</h3>
              <TOCSection content={playbookNavTableOfContents.introduction} />
            </div>
            <div className="section resources-desktop">
              <h3>{"What's Next and Resources"}</h3>
              <TOCSection content={playbookNavTableOfContents.whatsNext} />
              <ListItemLink
                label="Library of Experts"
                href="/about/library-of-experts"
              />
              <ListItemLink
                label="Partners and Recommended Organizations"
                href="/about/partners"
              />
            </div>
          </div>
          <div className="section resources-mobile">
            <h3>{"What's Next and Resources"}</h3>
            <TOCSection content={playbookNavTableOfContents.whatsNext} />
            <ListItemLink
              label="Library of Experts"
              href="/about/library-of-experts"
            />
            <ListItemLink
              label="Partners and Recommended Organizations"
              href="/about/partners"
            />
          </div>

          <div className="section why">
            <h3>The Why</h3>
            <TOCSection content={playbookNavTableOfContents.why} />
          </div>
          <div className="section climate-storytelling">
            <h3 className="climate-storytelling-title">Climate Storytelling</h3>

            <TOCSection
              content={playbookNavTableOfContents.climateStorytelling}
            />
            <div className="climate-storytelling-scroll-affordance" />
          </div>
        </div>

        <img src="/fern-small.png" alt="Fern" />
        {styles}
        <style jsx>{`
          .container {
            height: 100vh;
            display: grid;
            grid-template-columns: var(--grid-col);
          }
          .introduction {
            grid-column: 1/2;
            grid-row-start: 2;
          }
          .resources-desktop {
            margin-top: 2.5rem;
            display: block;
          }
          .resources-mobile {
            display: none;
          }
          .why {
            grid-column: 2/3;
            grid-row-start: 2;
          }
          .title {
            grid-column: 1/4;
            grid-row-start: 1;
            margin-bottom: 1.5rem;
          }

          .climate-storytelling {
            grid-column: 3/5;
            overflow: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            padding-bottom: 5rem;
            position: relative;
          }
          .climate-storytelling-scroll-affordance {
            width: 100%;
            position: fixed;
            height: 100px;
            right: 0;
            left: 0;
            bottom: -5rem;
            box-shadow: 0px -45px 45px var(--black);
            z-index: 1000;
          }
          .climate-storytelling::-webkit-scrollbar {
            display: none;
          }

          .climate-storytelling-title {
            grid-column: span 2;
            grid-row-start: 1;
            position: sticky;
            top: 0;
            background-color: var(--black);
          }
          .home {
            opacity: 0.5;
            margin-bottom: 1.5rem;
          }
          h2 {
            margin: 0;
            margin-bottom: 1.5rem;
            color: var(--white);
          }
          h3 {
            margin: 0;
            color: var(--white);
            padding-bottom: 0.625rem;
            margin-bottom: 1.25rem;
            border-bottom: 1px solid var(--blueThree);
            margin-right: 1.25rem;
          }
          img {
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: -1;
          }
          .section {
            margin-bottom: 1.25rem;
            margin-right: 1.25rem;
          }

          @media only screen and (max-width: 768px) {
            h2 {
              margin-right: 5rem;
              opacity: 0.4;
            }
            .introduction {
              grid-column: 1/5;
              grid-row-start: 2;
            }
            .why {
              grid-column: 1/5;
              grid-row-start: 3;
            }
            .climate-storytelling {
              grid-column: 1/5;
              grid-row-start: 4;
              overflow: visible;
              padding-bottom: 0;
            }
            .climate-storytelling-title {
              position: relative;

              background-color: transparent;
            }
            .climate-storytelling-scroll-affordance {
              display: none;
            }
            .resources-desktop {
              display: none;
            }
            .resources-mobile {
              display: block;
              grid-column: 1/5;
              grid-row-start: 5;
            }
            .container {
              overflow: scroll;
              scrollbar-width: none;
            }
            .container::-webkit-scrollbar {
              display: none;
            }
          }
        `}</style>
        <CloseNavButton />
      </motion.div>
    </>
  );
});

export default PlaybookNavOverlay;
