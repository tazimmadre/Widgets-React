import React,{ useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is Frontend JS Framework",
  },
  {
    title: "Why use React?",
    content: "React is favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
];

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The skyish Blue", value: "blue" },
  { label: "The Green shade", value: "green" },
];

export default () => {
  const [selected,setSelected]= useState(options[0]);
  // return <div><Accordion items={items}/></div>
  // return <div><Search/></div>
  return (
    <div>
      <Dropdown 
      selected={selected}
      onSelectedChange={setSelected}
       options={options}/>
    </div>
  );
};
