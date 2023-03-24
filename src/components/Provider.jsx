import { createContext } from "react";
import locations from '../data'

export const context = createContext([]);

export default function Provider({ children }) {
  const data = [
    {
      name: "Gorilla mountains",
      id: 1,
      country: "Rwanda",
      countryId: "rwanda",
      location: "Musanze, Rwanda",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat.",
    },
    {
      name: "Lake Victoria",
      id: 2,
      country: "Uganda",
      countryId: "uganda",
      location: "Musanze, Rwanda",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat.",
    },
    {
      name: "Gorilla mountains",
      id: 3,
      country: "Rwanda",
      countryId: "rwanda",
      location: "Musanze, Rwanda",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat.",
    },
    {
      name: "Gorilla mountains",
      id: 4,
      country: "Rwanda",
      countryId: "rwanda",
      location: "Musanze, Rwanda",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat.",
    },
    {
      name: "Gorilla mountains",
      id: 5,
      country: "Rwanda",
      countryId: "rwanda",
      location: "Musanze, Rwanda",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat.",
    },
    {
      name: "Gorilla mountains",
      id: 6,
      country: "Rwanda",
      countryId: "rwanda",
      location: "Musanze, Rwanda",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat.",
    },
    {
      name: "Gorilla mountains",
      id: 7,
      country: "Rwanda",
      countryId: "rwanda",
      location: "Musanze, Rwanda",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat.",
    },
    {
      name: "Gorilla mountains",
      id: 8,
      country: "Rwanda",
      countryId: "rwanda",
      location: "Musanze, Rwanda",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat.",
    },
  ];
  return <context.Provider value={locations}>{children}</context.Provider>;
}
