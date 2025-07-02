import { use, useEffect } from "react";
import { useState } from "react";

function Stopwatch() {
  let [time, settime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      settime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  function runtimer() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let meridian = hours < 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
    return `${setzero(hours)}:${setzero(minutes)}:${setzero(seconds)}  ${meridian}`;
  }
  function setzero(n) {
    return (n < 10 ? "0" : "") + n;
  }
  return <p className="text-white  font-semibold text-[10vw]  sm:text-[15vw]">{runtimer()}</p>;
}

export default Stopwatch;
