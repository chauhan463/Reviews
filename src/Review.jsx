import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';






const Review = () => {
 const [index,setIndex]=useState(1);
 const {name,job,image,text}=people[index-1]


 const handleLeft=(index)=>{

  index===1?setIndex(4):setIndex(index-1)

}
const handleRight=(index)=>{
(index===4) ? setIndex(1):setIndex(index+1)

}
const handleSurprise=(index)=>{
 let new_index=(Math.floor(Math.random() * 4) + 1)

console.log(new_index)
 if (index===new_index){
  if (index!==4){
    setIndex(index+1)
  }
  else{
    setIndex(1)
  }

 }
 else{ setIndex(new_index)}



  
  }




  return ( <section >
    <article className='review'>
      <div className='img-container'>
      <img src={image} alt={name} className="person-img" />
      <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
 
    
    <h3 className='name'>{name}</h3>
    <h4 className='job'>{job}</h4>
    <p className='text'>{text}</p>


    <div>
      
      <button className="prev-btn" onClick={()=>handleLeft(index)}><FaChevronLeft /></button>
      <button className="next-btn" onClick={()=>handleRight(index)}><FaChevronRight /></button>
      
       </div>
       <button className="random-btn" onClick={()=>handleSurprise(index)}>Surprise me</button>
    </article>
   
      
      

  </section>);
};

export default Review;
