import { useState } from 'react';
import chunks from '../../../utils/chunks';
import PressCard, { PressCardType } from '../Cards/PressCard';
import PaginationControls from './PaginationControls';

const PAGE_SIZE = 12;

const PressSection = ({ data }) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const pressPages = chunks(data, PAGE_SIZE);

  const handleNextClick = () => {
    if (activePageIndex < pressPages.length - 1) {
      setActivePageIndex(activePageIndex + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevClick = () => {
    if (activePageIndex > 0) {
      setActivePageIndex(activePageIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  const pressPage = pressPages[activePageIndex];
  return (
    <>
      {pressPage.map((item, index) => (
        <PressCard type={PressCardType.Standard} data={item} key={index} />
      ))}
      <PaginationControls
        activePageIndex={activePageIndex}
        totalPages={pressPages.length}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
      />
    </>
  );
};

export default PressSection;
