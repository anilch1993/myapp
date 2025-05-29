import { createContext } from "react";

type toggle = boolean;

export const AppContext = createContext<toggle>(false);

