import React from "react";
import { useState } from "react";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";


const VerticalSlider = (props) => {
  const location = useLocation();
  let found = props.pages.findIndex(element => element.path === location.pathname);
  const [activeID, setActiveID] = useState(props.pages[found].id);
  const classes = useStyles();
  let navigate = useNavigate(); 



  const handleClick = (props) => {
 
    if (props.id !== props.activeID) {
         changeActive(props.id);
    } else {
      return;
    }
  };

  const Selector = (props) => {
    let componentClass = classes.selector;
    let activeClass = false
    if (props.activeID === props.id) {
       activeClass =  true;
    }


    return (
      <div className={activeClass? classes.active: null}>
      <div
        className={componentClass}
        onClick={() => handleClick(props)}
      ></div></div>
    );
  };

  

  const changeActive = (id) => {
     setActiveID(id);
     navigate(props.pages[id].path);

  };


  useEffect(() => {
     if(location.pathname !== props.pages[activeID].path){
     var found = props.pages.findIndex(element => element.path === location.pathname);
    setActiveID(props.pages[found].id)}
  }, [location.pathname, props, activeID])

 

  return (
    <div className={classes.selectors}>
      {props.pages.map((item) => (
        <Selector
          key={item.id}
          id={item.id}
          handleClick={handleClick}
          changeActive={changeActive}
          activeID={activeID}
        />
      ))}
    </div>
  );
};

export default VerticalSlider;
