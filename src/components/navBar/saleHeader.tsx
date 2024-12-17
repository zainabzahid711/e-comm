import { useEffect } from "react";

import { useDispatch, UseDispatch, useSelector } from "react-redux";
import {
  setTimeLeft,
  resetTimeLeft,
} from "@/src/lib/features/timer/timerSlice";
const Header = () => {
  const dispatch = useDispatch();
  const timeLeft = useSelector((state: any) => state.timer.timeLeft);

  useEffect(() => {
    // Set the target time (12 hours from now)
    const targetTime = new Date().getTime() + 12 * 60 * 60 * 1000;

    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      // Calculate hours, minutes, and seconds left
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format time left as "HH:MM:SS"
      dispatch(setTimeLeft(`${hours}h ${minutes}m ${seconds}s`));

      // If the countdown ends, stop the interval
      if (distance < 0) {
        clearInterval(interval);
        dispatch(resetTimeLeft());
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [dispatch]);

  return (
    <div className="bg-[#D8DBE2] text-center p-2">
      <h4 className="text-lg text-black relative">
        <span className="text-lg font-semibold mr-3 cursor-pointer">
          {/* animate-blink  */}
          New Arrivals
        </span>
        <span className="mr-3">
          Up to 30% off on all products - Limited Time Only!
        </span>
        <span className="text-red-600 font-bold absolute">
          Hurry up! Only {timeLeft} left!
        </span>
      </h4>
    </div>
  );
};

export default Header;
