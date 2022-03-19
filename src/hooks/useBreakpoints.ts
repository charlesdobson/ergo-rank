import useMediaQuery from './useMediaQuery';
import BREAKPOINTS from 'constants/breakpoints';

interface IUseBreakpoints {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useBreakpoints = (): IUseBreakpoints => {
  return {
    isMobile: useMediaQuery(BREAKPOINTS.MOBILE),
    isTablet: useMediaQuery(BREAKPOINTS.TABLET),
    isDesktop: useMediaQuery(BREAKPOINTS.DESKTOP),
  };
};

export default useBreakpoints;
