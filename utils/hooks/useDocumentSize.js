import { useMobxStores } from '../../stores/store';
import { useEffect } from 'react';
import debounce from 'lodash/debounce';

const useDocumentSize = () => {
  const {
    uiStore: { getPageHeight, updateWindowWidth, updateWindowHeight },
  } = useMobxStores();
  const handleResize = () => {
    updateWindowWidth(window.innerWidth);
    updateWindowHeight(window.innerHeight);
    getPageHeight();
  };
  useEffect(() => {
    getPageHeight();
    window.addEventListener('resize', debounce(handleResize, 300), false);
    return () => {
      window.removeEventListener('resize', debounce(handleResize, 300), false);
    };
  }, []);
};

export default useDocumentSize;
