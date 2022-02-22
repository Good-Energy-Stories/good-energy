import React, { useState, useEffect } from "react";

const useAnimatingValue = (end, duration) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === end) return;
    var range = end - value;
    var current = value;
    var increment = end > value ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));

    var timerID = setInterval(function () {
      current += increment;
      setValue(current);
      if (current == end) {
        clearInterval(timerID);
      }
    }, stepTime);

    return () => {
      clearInterval(timerID);
    };
  }, [end]);

  return value;
};

export default useAnimatingValue;
