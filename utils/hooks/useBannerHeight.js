import { useEffect } from 'react';
import { animate, useMotionValue } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';

export const BANNER_HEIGHT = 50;
export const BANNER_HEIGHT_MOBILE = 70;

const useBannerHeight = () => {
  const bannerHeight = useMotionValue(0);
  useEffect(() => {
    animate(bannerHeight, isMobile ? BANNER_HEIGHT_MOBILE : BANNER_HEIGHT, {
      ...FRAMER_TRANSITION_EASEOUT,
      delay: 1,
    });
  }, []);
  return bannerHeight;
};

export default useBannerHeight;
