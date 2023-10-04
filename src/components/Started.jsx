/* eslint-disable react/no-unescaped-entities */
import worktext from "../assets/worktext.png";
import Works from "../assets/works.png";
import Behind from "../assets/behindthescene.png";
import one from '../assets/1.png';
import two from '../assets/3.png';
import three from '../assets/4.png';
import four from '../assets/5.png';
import five from '../assets/6.png';
function Started() {
  return (
    <div className="xs:-mt-[35rem] min-[380px]:-mt-[30rem] min-[450px]:-mt-[10rem] min-[400px]:-mt-[25rem]  sm:mt-7 ">
      <p className="text-3xl font-semibold tracking-widest text-center lg:-mt-[25rem] mb-[5rem]"> How it to get Started?
     <img
              className="xs:hidden lg:
              block absolute -mt-[4.5rem] lg:w-[52rem]  ml-[20.5rem]"
              src={worktext}
              alt="Started text"
            /> 
     <img
              className="min-[500px]:ml-[30%] lg:hidden absolute -mt-[5.5rem]  xs:w-[20rem] mx-5 "
              src={Behind}
              alt="Started text"
            /> 
             </p>

             <div className="grid grid-rows-5 xs:mx-[3rem] sm:mx-[10rem] place-content-center lg:hidden">
              <div className="grid grid-cols-2 py-[2%] place-content-center">
                <div>
                  <img className="w-[50%]" src={one} alt="Prepare and Ingest" />
                </div>
                <div className="my-auto">
                  <p>Prepare & Ingest</p>
                  <p className="min-[300px]:text-[0.5rem] min-[380px]:text-xs">Influencer creates a written profile</p>
                </div>
              </div>
              <div className="grid grid-cols-2 py-[2%] place-content-center">
                <div>
                  <img className="w-[50%]" src={two} alt="Upload Chat" />
                </div>
                <div className="my-auto">
                  <p>Upload Chat</p>
                  <p className="min-[300px]:text-[0.5rem] min-[380px]:text-xs">Influencer uploads examples of chat logs</p>
                </div>
              </div>
              <div className="grid grid-cols-2 py-[2%] place-content-center">
                <div>
                  <img className="w-[50%]" src={three} alt="Catalog and Curate" />
                </div>
                <div className="my-auto">
                  <p>Catalog & Curate</p>
                  <p className="min-[300px]:text-[0.5rem] min-[380px]:text-xs">MEX analyses & catalogs data</p>
                </div>
              </div>
              <div className="grid grid-cols-2 py-[2%] place-content-center">
                <div>
                  <img className="w-[50%]" src={four} alt="Enrich" />
                </div>
                <div className="my-auto">
                  <p>Enrich</p>
                  <p className="min-[300px]:text-[0.5rem] min-[380px]:text-xs">Data is augmented with LLM</p>
                </div>
              </div>
              <div className="grid grid-cols-2 py-[2%] place-content-center">
                <div>
                  <img className="w-[50%]" src={five} alt="Serve" />
                </div>
                <div className="my-auto">
                  <p>Serve</p>
                  <p className="min-[300px]:text-[0.5rem] min-[380px]:text-xs">Responses are served to audiences on chat</p>
                </div>
              </div>
             </div>
      
      
          <img
            className="w-full lg:block xs:hidden"
            src={Works}
            alt="image of two persons looking at each other and surprised"
          />
    </div>
  );
}

export default Started;
