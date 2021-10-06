import React,{ useState,useRef} from "react";

const Dropdown=({options,selected,onSelectedChange})=>{
  const [open,setOpen]= useState(false);
  const ref=useRef();
  const renderedOptions=options.map((option)=>{
    if(option==selected){
      return null;
    }
      return (
        <div key={option.value} 
        className="item"
        onClick={()=>{onSelectedChange(option)}}
        >
            {option.label}
        </div>
      );
  })
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Color Selector</label>
        <div onClick={()=>{setOpen(!open)}}
         className={`ui selection dropdown  ${open?`visible active`:''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu  ${open?`visible transition`:''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dropdown;