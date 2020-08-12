import { createContext, useContext } from "react";

export const PageContext = createContext<any>({});

export const usePage = () => {
  return useContext(PageContext);
};
