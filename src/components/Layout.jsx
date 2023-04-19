import { Outlet, useLoaderData } from "react-router-dom";

export async function loader() {
    const res = await fetch("https://izzet22.pythonanywhere.com/locations");
    const data = await res.json();
    return data;
}

export default function Layout({ children }) {
    const data = useLoaderData()
    return <Outlet context={{ locations: data}} />
}