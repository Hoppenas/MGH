import { useMediaQuery } from "@mui/material";

const smallScreenWidth = "574px";

const useIsSmallScreen = () => {
  const isLargeScreen = useMediaQuery(`(min-width: ${smallScreenWidth})`, {
    defaultMatches: true,
  });

  return !isLargeScreen;
};

export default useIsSmallScreen;
