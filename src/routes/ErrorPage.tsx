import MainCard from "../components/MainCard/MainCard";

const Root = () => {
  return (
    <div className="flex justify-center items-center bg-[#EBEBEB] h-[100vh]">
      <div className="flex flex-col justify-center gap-4 w-[80%] h-[80%]">
        <MainCard>
          <h3 className="font-titles text-[min(7vw,8vw)] h-[8vw]">
            <span className="text-primary-900">404</span> Error:
          </h3>
          <h1 className="font-subtitles text-[min(4vw,6vh)] h-[8vw]">
            Page is on a coffee break. ☕
          </h1>
        </MainCard>
      </div>
    </div>
  );
};

export default Root;
