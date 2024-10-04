import React from "react";
import { useState } from "react";
import { HomePlanType } from "../types";
import { HomePlan } from "./HomePlan";

export const HomesList = ({
  homePlans,
  handleSaveHome,
}: {
  homePlans: HomePlanType[];
  handleSaveHome: (homePlanId: number) => void;
}) => {
  return (
    <div className="homesList">
      {homePlans.map((home: HomePlanType) => {
        return (
          <HomePlan
            home={home}
            handleSaveHome={handleSaveHome}
            key={home.homePlanId}
          />
        );
      })}
    </div>
  );
};
