// import { Routes, Route } from "react-router-dom";
// import { Nav } from "./Nav";
import { HomesList } from "./HomesList";
import { HomePlanType } from "../types";
import { HomeModal } from "./HomeModal";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState, MouseEvent } from "react";

export const Homes = ({
  homePlans,
  showSavedHomes,
  setShowSavedHomes,
  savedHomePlans,
  handleSaveHome,
}: {
  homePlans: HomePlanType[];
  showSavedHomes: boolean;
  setShowSavedHomes: (x: boolean) => void;
  savedHomePlans: number[];
  handleSaveHome: (id: number) => void;
}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // SRDJAN should we be using navigate and useNavigate?? Deprecated??

  const homeModalId = searchParams.get("home");

  return (
    <>
      <div className="homesListContainer">
        <button
          className="button"
          onClick={() => setShowSavedHomes(!showSavedHomes)}
        >
          {showSavedHomes ? "Show All Homes" : "Show Saved Homes"}
        </button>

        {/* USE a Router here instead so that it catches the homes?home=1 route?? instead of click on a */}
        {homeModalId && (
          <HomeModal
            homeModalId={homeModalId}
            homePlans={homePlans}
            handleSaveHome={handleSaveHome}
          />
        )}

        <HomesList
          homePlans={
            showSavedHomes
              ? homePlans.filter((home) =>
                  savedHomePlans.includes(home.homePlanId)
                )
              : homePlans
          }
          handleSaveHome={handleSaveHome}
        />
      </div>
    </>
  );
};
