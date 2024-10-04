import { useState, MouseEvent } from "react";
import heartImage from "./../assets/images/heart.png";
import { HomePlanType } from "../types";
import { Link } from "react-router-dom";

export const HomePlan = ({
  home,
  handleSaveHome,
}: {
  home: HomePlanType;
  handleSaveHome: (homePlanId: number) => void;
}) => {
  const [favoriteHighlighted, setFavoriteHighlighted] = useState(false);

  const onFavoriteClick = (e: MouseEvent) => {
    e.preventDefault();
    handleSaveHome(home.homePlanId);
    setFavoriteHighlighted(!favoriteHighlighted);
  };

  return (
    <Link to={"/homes?home=" + home.homePlanId}>
      <div className="cardContainer">
        <div className="cardImageContainer">
          <img src={home.image} alt={home.name} />
          <div>
            <button
              className={
                favoriteHighlighted
                  ? "favoriteButton highlighted"
                  : "favoriteButton"
              }
              onClick={onFavoriteClick}
            >
              <img src={heartImage} alt="heart icon" />
            </button>
          </div>
        </div>
        <div className="homeInfoContainer">
          <h3>{home.name}</h3>
          <p id="homeDetails">
            {home.numBeds} beds - {home.numBaths} baths - {home.sqft} sqft
          </p>
          <div className="tagsContainer">
            {home.tags.map((tag) => (
              <p className="tags" key={tag}>
                {tag}
              </p>
            ))}
          </div>
          <p className="description">{home.description}</p>
        </div>
      </div>
    </Link>
  );
};
