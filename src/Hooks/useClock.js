import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

useClock.propTypes = {};

function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const min = `0${date.getMinutes()}`.slice(-2);
  const sec = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${min}:${sec}`;
}

function useClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTime = formatDate(now);
      setTime(newTime);
    }, 1000);

    return () => {
      console.log("Has cleaned up after unmout");
      clearInterval(clockInterval);
    };
  }, []);

  // return <p style={{ fontSize: "42px" }}>{time}</p>;
  return { time };
}

export default useClock;
