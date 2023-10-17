import started from "../assets/started.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";
import line1 from "../assets/3@2x.png";

function Started() {
  return (
    <div id="started"  className=" sm:px-10 xs:px-[2.5rem] h-min">
      <div className="flex justify-between mt-5 mb-3 py-auto">
        {/* <div className="mt-20 mb-5"> */}
        <p className="text-2xl font-semibold leading-relaxed tracking-wider scale-y-125 ">
          How to get Started?
        </p>

        <img
          className="absolute -mt-[1.5rem] -ml-10 w-[15rem] "
          src={started}
          alt="Started text"
        />
        <button className="xs:hidden lg:block h-10 w-[9rem] xs:-ml-10 lg:ml-0 bg-[#6D49FD] text-white rounded-md ">
          {" "}
          Get Started{" "}
        </button>
      </div>
      <div className="grid-cols-3 gap-10 lg:grid xs:grid-row">
        <div className="mb-10">
          <img
            src={seven}
            alt="Data Set"
            className="w-20 p-4 mb-3 bg-white rounded-2xl"
          />
          <p className="mb-2 font-medium">Data Set</p>
          <p className="mb-2 text-sm">
            To create a unique and unforgettable experience for your fans, we
            need samples of your conversation to craft a digital copy of
            yourself. This dialogue should consist of a few conversational lines
            and could either be samples created by you, or from actual
            conversations which you can download from your usual chat platforms
            (WhatsApp/Telegram). We can work with you to build this sample for
            kickstarting your journey.
          </p>{" "}
          <p className="mb-2 text-sm">
            The conversation should have the same traits as what you would like
            to see in the digital copy, e.g. if you would like your AI to speak
            Singlish, give us a sample conversation where you speak Singlish.
            The more comprehensive your sample, the more personalized and
            engaging the experience will be for your fans!
          </p>
          <img src={line1} alt="Line" className="absolute  sm:-mt-[5rem] xs:-mt-[3rem] -ml-10 lg:-mt-[10rem] max-w-screen " />
        </div>
        <div className="mb-10">
          <img
            src={eight}
            alt="Security"
            className="w-20 p-4 mb-3 bg-white rounded-2xl"
          />
          <p className="mb-2 font-medium">Security </p>
          <p className="mb-2 text-sm">
            Your data security is our top priority! Our solution is build with
            SOC2 and PDPA standards in-mind. Lastly, our team provides to you a
            full control over your data. You always have an option to stop a bot
            and wipe out all loaded data.
          </p>
        </div>
        <div className="mb-10">
          <img
            src={nine}
            alt="Ingestion Template"
            className="w-20 p-4 mb-3 bg-white rounded-2xl"
          />
          <p className="mb-3 font-medium">Ingestion Template</p>
          <p className="mb-2 text-sm">
            To kickstart your AI journey, just use our ingestion template to
            upload requested information into our system. Our friendly team will
            respond to your request within next 8 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Started;
