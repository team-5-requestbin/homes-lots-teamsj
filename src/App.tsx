import React, { useState } from "react";
// import { HomesList } from "./components/HomesList";
import { Error } from "./components/Error";
import API from "./services/apiClient";
import { ZodError } from "zod";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Homes } from "./components/Homes";
import {
  getHomePlansResponseSchema,
  getLotsResponseSchema,
  getCombinationsResponseSchema,
  HomePlanType,
  LotType,
  CombinationType,
} from "./types";
// <Homes> /homes
// <Modal> /homes?home=1
// <Lots> /lots
// <ShowSavedButton>
//

function App() {
  const [homePlans, setHomePlans] = useState<HomePlanType[]>([]);
  const [lots, setLots] = useState<LotType[]>([]);
  const [combinations, setCombinations] = useState<CombinationType[]>([]);

  const [savedHomePlans, setSavedHomePlans] = useState<number[]>([]);
  const [savedLots, setSavedLots] = useState<number[]>([]);

  const [showSavedHomes, setShowSavedHomes] = useState(false);

  const [error, setError] = useState(false);

  React.useEffect(() => {
    // fetch inital data
    const fetchHomePlans = async () => {
      try {
        const data = await API.getHomePlans();
        const homeData = getHomePlansResponseSchema.parse(data);
        setHomePlans(homeData);
      } catch (e) {
        if (e instanceof ZodError) {
          console.log("ZodError - Fetching Home Plans");
        }
        setError(true);
        console.error(e);
      }
    };

    const fetchLots = async () => {
      try {
        const data = await API.getLots();
        const lotData = getLotsResponseSchema.parse(data);
        setLots(lotData);
      } catch (e) {
        if (e instanceof ZodError) {
          console.log("ZodError - Fetching Lots");
        }
        setError(true);
        console.error(e);
      }
    };

    const fetchCombinations = async () => {
      try {
        const data = await API.getCombinations();
        const combinationsData = getCombinationsResponseSchema.parse(data);
        setCombinations(combinationsData);
      } catch (e) {
        if (e instanceof ZodError) {
          console.log("ZodError - Fetching Combinations");
        }
        setError(true);
        console.error(e);
      }
    };

    fetchHomePlans();
    fetchLots();
    fetchCombinations();
  }, []);

  const handleSaveHome = (homePlanId: number) => {
    if (savedHomePlans.includes(homePlanId)) {
      setSavedHomePlans(savedHomePlans.filter((id) => id !== homePlanId));
    } else {
      setSavedHomePlans([...savedHomePlans].concat([homePlanId]));
    }
  };

  if (error) {
    return <Error />;
  }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/homes"
          element={
            <Homes
              homePlans={homePlans}
              showSavedHomes={showSavedHomes}
              setShowSavedHomes={setShowSavedHomes}
              savedHomePlans={savedHomePlans}
              handleSaveHome={handleSaveHome}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
