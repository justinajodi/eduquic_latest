import React, { FC, useEffect, useRef, useState } from 'react';
import { CountUp, CountUpOptions } from 'countup.js';
import { Plus } from 'lucide-react';

interface MyCountUpProps {
  startVal?: number;
  endVal: number;
  duration?: number;
  delay?: number;
  smartEasingAmount?: number;
  styles?: React.CSSProperties;
}

function easeInOutCubic(
  elapsed: number,
  initialValue: number,
  amountOfChange: number,
  duration: number
): number {
  if ((elapsed /= duration / 2) < 1) {
    return (amountOfChange / 2) * elapsed * elapsed * elapsed + initialValue;
  }
  return (
    (amountOfChange / 2) * ((elapsed -= 2) * elapsed * elapsed + 2) +
    initialValue
  );
}

const MyCountUp: FC<MyCountUpProps> = (props) => {
  const {
    startVal = 0,
    endVal,
    duration = 10,
    delay = 0,
    smartEasingAmount,
    styles,
  } = props;

  const [counterInstance, setCounterInstance] = useState<CountUp | null>(null);
  const countUpRef = useRef(null);

  const handleReplayClick = () => {
    if (counterInstance) {
      counterInstance.reset();
      counterInstance.start();
    }
  };

  useEffect(() => {
    const options: CountUpOptions = {
      delay,
      duration,
      smartEasingThreshold: 10000000000,
      smartEasingAmount,
      useEasing: true,
      easingFn: easeInOutCubic,
    };

    const countUp = new CountUp(countUpRef.current!, endVal, options);
    setCounterInstance(countUp);

    const test = setInterval(() => {
      if (countUpRef.current) {
        countUp.start();
      }
    }, delay * 1000);

    return function cleanup() {
      clearInterval(test);
      setCounterInstance(null);
    };
  }, [endVal, delay, duration, smartEasingAmount]);

  return (
<>
      <div ref={countUpRef}>{startVal} </div>
      </>
  );
};

export default MyCountUp;