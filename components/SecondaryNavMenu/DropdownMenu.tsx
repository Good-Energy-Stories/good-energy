import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Link from 'next/link';
import css from 'styled-jsx/css';
import { AnimatePresence, motion } from 'framer-motion';
import { SECONDARY_MENU_HEIGHT } from './SecondaryNavMenu';
import DropdownSubsection from './DropdownSubsection';
import SectionLabelLink from './SectionLabelLink';
import DropdownMenuSerializer from './DropdownMenuSerializer';
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

    const margin = 200;

    const menuOffset =
      offset > windowWidth - DROPDOWN_MIN_WIDTH
        ? -margin
        : offset < margin
        ? 20
        : -40;

    const { className, styles } = getStyles(menuOffset);

    return (
      <>
        <AnimatePresence>
          {expanded && (
            <motion.div className={className}>
              {articles.map((a) => (
                <DropdownMenuSerializer key={a.slug} {...a} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {styles}
      </>
    );
  },
);

export default DropdownMenu;
