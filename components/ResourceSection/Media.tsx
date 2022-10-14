import { useRef, useState } from 'react';
import { imageUrlFor } from '../../utils/imageUrlFor';

const Video = ({ data, className }: any) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const togglePlay = () => {
    if (playing) {
      videoRef.current?.pause();
      setPlaying(false);
    } else {
      videoRef.current?.play();
      setPlaying(true);
    }
  };
  return (
    <div data-playing={playing} className={'video'}>
      <video
        onClick={togglePlay}
        ref={videoRef}
        className={className}
        poster={imageUrlFor(data.thumbnail).url()}
        controls={false}
      >
        <source src={data.video.asset.url} type={data.video.asset.mimeType} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const Media = ({ data, className }: any) => {
  console.log(data);
  const { _type } = data;
  switch (_type) {
    case 'image':
      return <img className={className} src={imageUrlFor(data).url()} />;
    case 'video':
      return <Video data={data} className={className} />;
    default:
      return null;
  }
};

export default Media;
