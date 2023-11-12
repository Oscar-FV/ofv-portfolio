import NavBar from "../components/NavBar/NavBar";
import MainCard from "../components/MainCard/MainCard";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex justify-center items-center bg-[#EBEBEB] h-[100vh]">
      <div className="flex flex-col justify-center gap-4 w-[80%] h-[80%]">
        <NavBar />

        <MainCard>
          <Outlet />
        </MainCard>
      </div>
    </div>
  );
};

export default Root;
