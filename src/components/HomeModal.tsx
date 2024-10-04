import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { HomePlanType } from "../types";
import heartImage from "./../assets/images/heart.png";

export const HomeModal = ({
  homeModalId,
  homePlans,
  handleSaveHome,
}: {
  homeModalId: string;
  homePlans: HomePlanType[];
  handleSaveHome: (homePlanId: number) => void;
}) => {
  const navigate = useNavigate();
  const home = homePlans.find(
    (home) => home.homePlanId === Number(homeModalId)
  );

  const [favoriteHighlighted, setFavoriteHighlighted] = useState(false);

  const onFavoriteClick = (e: MouseEvent) => {
    e.preventDefault();
    handleSaveHome(Number(homeModalId));
    setFavoriteHighlighted(!favoriteHighlighted);
  };

  return (
    home && (
      <div id="modal-container">
        <div className="screen" onClick={() => navigate("/homes")}></div>
        <div id="modal">
          <div className="modalContainer">
            <div className="selectedCardContainer">
              <div className="modalImageContainer">
                <img src={home.image} alt={home.name} />
              </div>
              <div className="modalInformationContainer">
                <div className="homeInfoContainer">
                  <h3>{home.name}</h3>
                  <p id="homeDetails">
                    {home.numBeds} beds - {home.numBaths} baths - {home.sqft}{" "}
                    sqft
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
            </div>
            <div className="compatibleOptionsContainer">
              <div id="compatibleOptionsTitle">
                <p>Compatible Lots</p>
              </div>
              {/* <div className="compatibleOptionsList">
                <a href="/lots?selectedLot=123-example-ln">
                  <div className="cardContainer">
                    <div className="cardImageContainer">
                      <img
                        src="https://storage.googleapis.com/plot_images/1018314458"
                        alt="123-example-ln"
                      />
                      <div>
                        <button className="favoriteButton" id="false">
                          <img src="heart.png" alt="heart icon" />
                        </button>
                      </div>
                    </div>
                    <div className="lotInfoContainer">
                      <h2>123 Example Ln</h2>
                      <p id="cityState">Charlotte, NC</p>
                      <p id="acreage">1.6 acres - 69,696 sqft</p>
                      <p className="lotDescription">
                        This sprawling lot is located on the outskirts of
                        Charlotte, with nearby boat access to Example Lake and a
                        straight shot to downtown Charlotte via Example Highway.
                      </p>
                    </div>
                  </div>{" "}
                </a>
                <a href="/lots?selectedLot=123-sample-ln">
                  <div className="cardContainer">
                    <div className="cardImageContainer">
                      <img
                        src="https://storage.googleapis.com/plot_images/1018937216"
                        alt="123-sample-ln"
                      />
                      <div>
                        <button className="favoriteButton">
                          <img src="heart.png" alt="heart icon" />
                        </button>
                      </div>
                    </div>
                    <div className="lotInfoContainer">
                      <h2>123 Sample Ln</h2>
                      <p id="cityState">Raleigh, NC</p>
                      <p id="acreage">0.7 acres - 30,492 sqft</p>
                      <p className="lotDescription">
                        This spacious lot is in the gorgeous Example
                        Neighborhood, surrounded by historic landmarks such as
                        The Cool Things Museum and The Very Old House.
                      </p>
                    </div>
                  </div>{" "}
                </a>
                <a href="/lots?selectedLot=123-test-ct">
                  <div className="cardContainer">
                    <div className="cardImageContainer">
                      <img
                        src="https://storage.googleapis.com/plot_images/1043665691"
                        alt="123-test-ct"
                      />
                      <div>
                        <button className="favoriteButton highlighted">
                          <img src="heart.png" alt="heart icon" />
                        </button>
                      </div>
                    </div>
                    <div className="lotInfoContainer">
                      <h2>123 Test Ct</h2>
                      <p id="cityState">Charlotte, NC</p>
                      <p id="acreage">0.28 acres - 12,197 sqft</p>
                      <p className="lotDescription">
                        This cozy lot is directly next to downtown Charlotte -
                        from your front yard you can walk to uptown. Be sure to
                        check out The Average Bowling Alley or one of the plenty
                        of restaurants nearby!
                      </p>
                    </div>
                  </div>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
