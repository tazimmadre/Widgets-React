import React from "react";
import Accordion  from "./components/Accordion";
import Search  from "./components/Search";

const items=[
  {
    title:'What is React?',
    content:'React is Frontend JS Framework'
  },
  {
    title:'Why use React?',
    content:'React is favorite JS library among engineers'
  },
  {
    title:'How do you use React?',
    content:'You use react by creating components'
  }
]
export default ()=>{
  // return <div><Accordion items={items}/></div>
  return <div><Search/></div>
};