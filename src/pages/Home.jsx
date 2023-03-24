import { useState } from "react";
import Form from "../components/Form";
import Popup from "../components/Popup";

export default function Home() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };
  return (
    <div className="h-screen pt-10">
    <h1 className="text-[50px] font-medium -tracking-wider text-center">Digital Nomad</h1>
      <div>
        <Form text={text} handleChange={handleChange} />
        {text ? <Popup text={text} /> : <h1 className="text-2xl font-semibold text-gray-400 max-w-lg mx-auto mt-10">Search for countries on the African continent and get amazing destination for your next travel</h1>}
      </div>
    </div>
  );
}