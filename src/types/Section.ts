import type { ReactNode, RefObject } from "react";

export interface Section {
  ref: RefObject<HTMLDivElement>;
  subject: string;
  description: ReactNode;
  image?: string;
}
