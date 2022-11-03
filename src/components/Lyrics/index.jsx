import React, { useEffect, useRef } from 'react';

const Lyrics = ({ lines, currentLineIndex }) => {
  const lineRef = useRef();

  useEffect(() => {
    if (lineRef.current !== undefined) {
      lineRef.current.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [currentLineIndex]);

  return lines.map((line, index) => (
    <p
      key={index}
      ref={currentLineIndex === index ? lineRef : null}
      className={currentLineIndex === index ? 'current-line' : ''}
    >
      {line.text}
    </p>
  ));
};

export default Lyrics;
