import { useState } from "react";
import Form from "../components/Form";
import Popup from "../components/Popup";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const [text, setText] = useState("");
  const { locations } = useOutletContext()
  console.log(locations)
  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };
  return (
    <div className="h-screen pt-10 px-5">
    <h1 className="text-[50px] font-medium -tracking-wider text-center">Afri-Nomad</h1>
      <div>
        <Form text={text} handleChange={handleChange} />
        {text ? <Popup locations={locations} text={text} /> : <h1 className="text-lg md:text-2xl font-semibold text-gray-400 max-w-lg mx-auto mt-10">Search for countries on the African continent and get amazing destination for your next travel</h1>}
      </div>
    </div>
  );
}
