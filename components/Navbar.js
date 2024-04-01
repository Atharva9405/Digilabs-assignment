import React, { useEffect, useState } from "react";
import { FaBatteryFull, FaWifi } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { GiNetworkBars } from "react-icons/gi";


export default function Navbar() {
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex justify-between items-center bg-black text-white">
      <div className="flex text-center align-center justify-between pr-4">
        <div className="flex items-center">
          <span className="font-bold">{time}</span>
          <span className="ml-2">
            <FiNavigation className="text-white w-10" />
          </span>
        </div>
      </div>
      <div className="flex align-center justify-between">
        <span>
          <GiNetworkBars className="text-white w-10" />
        </span>
        <span>
          <FaWifi className="text-white w-10" />
        </span>
        <span>
            <FaBatteryFull className="text-white w-10" />
        </span>
      </div>
    </div>
  );
}
