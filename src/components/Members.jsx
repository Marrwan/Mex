import  { useState } from "react";
import Swipe from "react-easy-swipe";
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa6';
import members from "../assets/members.png";
import John from "../assets/12.png";
import Marylin from "../assets/13.png";
import Eliso from "../assets/14.png";
import line1 from "../assets/3@2x.png";

function Members() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const CarouselData = [
    {
      image: John,
      name: "John Smith",
      position: "CO-FOUNDER",
    },
    {
      image: Marylin,
      name: "Marylin Wilcox",
      position: "CFO",
    },
    {
      image: Eliso,
      name: "Eliso Tyson",
      position: "CHO",
    },
  ];
  const nextSlide = () => {
    let newSlide =
      currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide =
      currentSlide === 0 ? CarouselData.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="mt-20 sm:px-10 xs:px-[2.5rem] h-min ">
      <div className="mt-5 mb-3 text-center px-auto py-auto">
        <p className="text-2xl font-semibold leading-relaxed tracking-wider scale-y-125 ">
          How to get Started?
        </p>
 
        <img
          className="absolute -mt-[5rem] ml-[29rem] w-[25rem] "
          src={members}
          alt="Members"
        />
      </div>
      <Swipe className="flex justify-around overflow-hidden sm:items-center xs:items-baseline lg:hidden"> 
      <div onClick={prevSlide} className="text-white cursor-pointer h-8  bg-[#6D49FD] p-2 w-max px-6 ">
          
<FaArrowLeft /> 
        </div>
        {CarouselData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "block mb-10" : "hidden"}
              key={slide.name}
            >
              <img
                src={slide.image}
                alt={slide.name}
                className="w-[13rem] p-4 mb-3 bg-white rounded-2xl"
              />

              <p className="font-medium leading-loose text-center text-md">
                {" "}
                {slide.name}
              </p>
              <p className="mb-2 text-sm text-center">{slide.position}</p>
              <p className="mb-2 text-sm w-[15rem]">
                Donec imperdiet leo ac quam pellentesque, sit amet fermentum
                lorem gravida. Donec sed nec nunc cursus, varius eros at,
                vehicula erat.
              </p>
              <img
                src={line1}
                alt="Line"
                className="absolute sm:-mt-[5rem] xs:-mt-[3rem] -ml-10 lg:-mt-[10rem] "
              />
            </div>
          );
        })} 
        <div onClick={nextSlide} className="cursor-pointer text-white h-8 bg-[#6D49FD] p-2 w-max px-6">
          
<FaArrowRight />
        </div>
      </Swipe> 
      
      <div className="justify-around hidden overflow-hidden lg:flex ">
        <div className="mb-10">
          <img
            src={John}
            alt="John Smith"
            className="w-[13rem] p-4 mb-3 bg-white rounded-2xl"
          />

          <p className="font-medium leading-loose text-center text-md">
            {" "}
            John Smith
          </p>
          <p className="mb-2 text-sm text-center">CO-FOUNDER</p>
          <p className="mb-2 text-sm w-[15rem]">
            Donec imperdiet leo ac quam pellentesque, sit amet fermentum lorem
            gravida. Donec sed nec nunc cursus, varius eros at, vehicula erat.
          </p>
          <img
            src={line1}
            alt="Line"
            className="absolute sm:-mt-[5rem] xs:-mt-[3rem] -ml-10 lg:-mt-[10rem] "
          />
        </div>
        <div className="mb-10">
          <img
            src={Marylin}
            alt="Marylin Wilcox"
            className="w-[13rem] p-4 mb-3 bg-white rounded-2xl"
          />

          <p className="font-medium text-center text-md"> Marylin Wilcox</p>
          <p className="mb-2 font-medium text-center">CFO </p>
          <p className="mb-2 text-sm w-[15rem]">
            Donec imperdiet leo ac quam pellentesque, sit amet fermentum lorem
            gravida. Donec sed nec nunc cursus, varius eros at, vehicula erat.
          </p>
        </div>
        <div className="mb-10">
          <img
            src={Eliso}
            alt="Eliso Tyson"
            className="w-[13rem] p-4 mb-3 bg-white rounded-2xl"
          />

          <p className="font-medium text-center text-md"> Elisa Tyson</p>
          <p className="mb-3 font-medium text-center">CHO</p>
          <p className="mb-2 text-sm w-[15rem]">
            Donec imperdiet leo ac quam pellentesque, sit amet fermentum lorem
            gravida. Donec sed nec nunc cursus, varius eros at, vehicula erat.{" "}
          </p>
        </div>
      </div>
      
       
    </div>
  );
}

export default Members;
