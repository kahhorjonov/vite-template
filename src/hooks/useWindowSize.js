import * as utils from "helpers/helpers";
import { throttle } from "lodash";
import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [breakpoint, setBreakPoint] = useState(
    utils.getBreakpoint(window.innerWidth)
  );

  const handleSize = throttle(
    () => setBreakPoint(utils.getBreakpoint(window.innerWidth)),
    200
  );

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, [handleSize]);

  return {
    breakpoint,
    isMobile: () => utils.isMobile(breakpoint),
    isMobileLandscape: () => utils.isMobileLandscape(breakpoint),
    isTablet: () => utils.isTablet(breakpoint),
    isPortable: () => utils.isPortable(breakpoint),
    isDesktop: () => utils.isDesktop(breakpoint),
    isDesktopLarge: () => utils.isDesktopLarge(breakpoint),
  };
};

useWindowSize.displayName = "useWindowSize";
