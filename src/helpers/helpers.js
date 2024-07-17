import { breakpoints } from "constants/breakpoints";

export const isMobile = (breakpoint) => {
  return (
    breakpoint === breakpoints.extraSmall || breakpoint === breakpoints.small
  );
};

export const isMobileLandscape = (breakpoint) => {
  return breakpoint === breakpoints.small;
};

export const isTablet = (breakpoint) => {
  return breakpoint === breakpoints.medium;
};

export const isPortable = (breakpoint) => {
  return isTablet(breakpoint) || isMobile(breakpoint);
};

export const isDesktop = (breakpoint) => {
  return (
    breakpoint === breakpoints.large ||
    breakpoint === breakpoints.extraLarge ||
    breakpoint === breakpoints.extraExtraLarge
  );
};

export const isDesktopLarge = (breakpoint) => {
  return breakpoint === breakpoints.extraExtraLarge;
};

export const getBreakpoint = (width) => {
  let breakpoint = breakpoints.extraSmall;

  if (width >= 1920) {
    breakpoint = breakpoints.extraExtraLarge;
  } else if (width >= 1280) {
    breakpoint = breakpoints.extraLarge;
  } else if (width >= 1024) {
    breakpoint = breakpoints.large;
  } else if (width >= 992) {
    breakpoint = breakpoints.medium;
  } else if (width >= 640) {
    breakpoint = breakpoints.small;
  }

  return breakpoint;
};
