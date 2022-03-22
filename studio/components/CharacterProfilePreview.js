import React from 'react';
import PropTypes from 'prop-types';

const CharacterProfilePreview = ({ url }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        overflow: 'hidden',
      }}
    ></div>
  );
};
CharacterProfilePreview.propTypes = {
  url: PropTypes.node.isRequired,
};

export default CharacterProfilePreview;
