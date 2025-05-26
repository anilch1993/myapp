import { createContext } from "react";

interface AppContextType {
    toggle: boolean;
    toggleSideBar: () => void;
}

export const AppContext = createContext<AppContextType | null>(null);

