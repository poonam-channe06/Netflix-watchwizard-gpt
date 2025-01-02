import playbutton from "../images/playbutton.png";
import infobutton from "../images/information.png"

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg  w-1/2">{overview}</p>
      <div className="flex">
        <button className="bg-white p-4 px-16 text-lg text-black flex items-center justify-center  rounded-lg hover:bg-opacity-80">
          <img src={playbutton} alt="Play Icon" className="w-4 h-4 mr-2" />
          Play
        </button>
        <button className="mx-2 bg-gray-500   p-4 px-12 text-lg flex text-white  justify-center  rounded-lg hover:bg-opacity-100">
        <img src={infobutton} alt="Play Icon" className="w-4 h-4 mt-2 mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

