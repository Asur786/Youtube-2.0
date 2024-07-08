import React, { useState } from 'react'
import "./_categoriesBar.scss"
import { useDispatch } from "react-redux";
import { getPopularVideo,getsearchVideo } from '../../redux/slice/videoSlice';
const category = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of Api',
  'Redux',
  'Music',
  'Algorithm Art',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Abhishek',
]
const CategoriesBar = () => {
  const [activeElement,setActiveElement]=useState('All')
  console.log(activeElement)

  const dispatch = useDispatch();
  const handleClick = (value)=>{
    setActiveElement(value);
    if (value==="All") {
      dispatch(getPopularVideo());
    }
    else{
      dispatch(getsearchVideo(value));
    }
  };

  return (
    <div className="CategoriesBar">

      {
        category.map((value,i)=>(
        <span
         onClick={()=> handleClick(value)}
         key={i}
         className={activeElement===value ? 'active' : ''}
         >
          {value}
         </span>)
      )}
    </div>
  );
}

export default CategoriesBar
