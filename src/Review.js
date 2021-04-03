import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  // هذه الخاصية حتي لا يتخطي العدد الموجود فى المصفوفه ويحدث خطاء ما نقوم بتحجيمه
  const checkNumber = (number) => {
    if(number > people.length -1){
      return 0
    }
    if (number < 0 ){
      return people.length -1;
    }
    return number
  }
// فى حال ضغط على التالي يتنقل بين البيانات
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex);
    }) 
  }
  //  فى حال ضغط على السابق يتنقل بين البيانات الي الشخص الاسبق

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex);
    }) 
  }
  // هنا نقوم بتشغيل زر يمكنا من اختيار اظهار البيانات بطريقه عشوائية
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index){
     // بنجمع البيانات العشوائية +1 عشان ميطلعش بيانات شبه بعض
      randomNumber = index + 1
    }
    // هنا عشان ميكونش الرقم العشوائي اخر رقم فى البيانات ويجمع ويحصل ايرور 
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomPerson}>
          suprise me
        </button>
      </div>
    </article>
  )
};

export default Review;
