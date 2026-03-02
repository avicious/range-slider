import { useState, useEffect, useRef, useCallback } from "react";
import "./RangeSlider.css";

const RangeSlider = ({ min = 0, max = 100, step = 10 }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);

  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxVal - step);
    setMinVal(value);
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minVal + step);
    setMaxVal(value);
  };

  return (
    <div className="range-slider-container">
      <div className="slider-box">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={handleMinChange}
          className="slider__input slider__left"
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={handleMaxChange}
          className="slider__input slider__right"
        />
      </div>

      <div className="slider__values">
        <span>Min: {minVal}</span>
        <span>Max: {maxVal}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
