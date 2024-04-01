import React from "react";
import { FaRegBell } from "react-icons/fa";

const Bell = () => {
  return (
    <div className="px-12 flex justify-center items-center h-[60vh]">
      <div className="h-22 w-22 rounded-full border-2 border-orange-300 p-3">
        <div className="h-22 w-22 rounded-full border-2 border-orange-300 p-3">
          <div className="h-22 w-22 rounded-full border-2 border-orange-300 p-3">
            <div className="h-22 w-22 rounded-full border-2 border-orange-300 p-3">
              <div className="text-white flex w-28 h-28 justify-center items-center p-3 bg-orange-400 rounded-full">
                <FaRegBell className="text-6xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bell;
