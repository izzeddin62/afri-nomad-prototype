import { createContext } from "react";
import locations from '../data'

export const context = createContext([]);

export default function Provider({ children }) {
  return <context.Provider value={locations}>{children}</context.Provider>;
}
