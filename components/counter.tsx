import React, { FC, useRef } from "react";
import { useCountUp } from "react-countup";

interface CounterNewProps {
  styles?: React.CSSProperties | null;
  data: {
    startNum?: number;
    endNum: number;
    duration?: number;
    delay?: number;
  };
}

const easingFn = function (t: number, b: number, c: number, d: number): number {
  return c * (Math.pow(t / d - 1, 5) + 1) + b;
};

const CounterNew: FC<CounterNewProps> = (props) => {
  const {
    styles = null,
    data: { startNum = 0, endNum, duration = 5, delay = 1 },
  } = props;
  const countUpRef = useRef<HTMLDivElement>(null);

  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: startNum,
    end: endNum,
    separator: ",",
    smartEasingThreshold: 2000,
    smartEasingAmount: 30,
    easingFn,
    delay,
    duration,
  });

  return (
    <div >
      <div ref={countUpRef}>0</div>
    </div>
  );
};

export default CounterNew;