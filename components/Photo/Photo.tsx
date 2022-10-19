import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useInView } from 'framer-motion';
import { buildSrcSet, buildSrc } from '../../lib/imageHelpers';
import styles from './Photo.module.css';
const Photo = ({
  photo,
  width,
  height,
  srcSizes = [400, 600, 800, 1000, 1200],
  sizes = '(min-width: 940px) 50vw, 100vw',
  layout = 'intrinsic',
  quality = 80,
  hasPlaceholder = true,
  forceLoad,
  onLoad,
  className,
  style,
  customAspect,
}: any) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // define our aspect ratio if not a background fill
  const aspect =
    typeof width === 'number' && typeof height === 'number'
      ? (height / width) * 100
      : 100 / (customAspect || photo.imageAspect);

  const aspectCustom =
    layout === 'intrinsic' ? { paddingTop: `${aspect}%` } : null;

  // define our src and srcset
  const src = buildSrc(photo, {
    ...{ width },
    ...{ height },
    ...{ quality },
  });

  const srcset = buildSrcSet(photo, {
    ...{ srcSizes },
    ...{ aspect },
    ...{ quality },
  });

  // handle our image onLoad
  function handleLoad() {
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }

  // trigger any onLoad callbacks
  useEffect(() => {
    if (isLoaded) onLoad?.();
  }, [isLoaded, onLoad]);
  if (!photo?.asset) return null;
  return (
    <figure style={style} className={cx(styles.figure, className ?? null)}>
      <div
        className={cx(styles.layout, {
          'has-fill': layout === 'fill' || layout === 'contain',
        })}
        style={aspectCustom}
      >
        <picture className={styles.picture}>
          <img
            ref={ref}
            width={width}
            height={height}
            src={forceLoad || inView ? src : null}
            srcSet={forceLoad || inView ? srcset : null}
            sizes={sizes}
            decoding="async"
            onLoad={handleLoad}
            alt={photo.alt || photo.asset?.altText}
            className={cx(
              getSize(layout),
              styles.image,
              isLoaded && styles.loaded,
            )}
          />
        </picture>

        {hasPlaceholder && (
          <div className={cx(styles.placeholder)}>
            <img
              className={cx(styles.placeholderImage, isLoaded && styles.loaded)}
              src={photo.lqip}
              alt=""
              role="presentation"
            />
          </div>
        )}
      </div>
    </figure>
  );
};

const getSize = (layout) => {
  switch (layout) {
    case 'intrinsic':
      return 'object-cover';
    case 'fill':
      return 'object-cover';
    case 'contain':
      return 'object-contain';
  }
};

export default Photo;
