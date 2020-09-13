import React from "react";

function Stars(rating) {
  const stars: JSX.Element[] = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(<i className="fas fa-star" id={i} key={i} />);
  }

  return stars;
}

export default Stars;
