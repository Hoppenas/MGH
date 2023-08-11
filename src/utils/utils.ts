import { RefObject } from "react";

export const handleScrollTo = (ref: RefObject<HTMLDivElement>) => {
  ref.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};
