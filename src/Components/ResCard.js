import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;

  return (
    <div className="res-card">
      <div className="food-img">
        <img
          className="res-logo"
          alt="food"
          src={CDN_URL+cloudinaryImageId}
          
        />
      </div>
      <div className="Res-title">
        <h2>{name}</h2>
      </div>
      <h5>{cuisines.join(", ")}</h5>
      <h5>
        {avgRating}{" "}
        <img
          src="https://icons-for-free.com/iconfiles/png/512/favourite+like+rating+special+star+icon-1320086047224423788.png"
          className="rating-star"
          alt="ratingStar"
        />
      </h5>
      <h5>{sla?.deliveryTime} minutes</h5>
    </div>
  );
};

export default ResCard;



