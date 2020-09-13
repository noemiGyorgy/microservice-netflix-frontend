import React from "react";
import OneReview from "./OneReview";

function Recommendation(reviews) {
  function getRatingNumbers(max) {
    const ratings: JSX.Element[] = [];

    for (let i = max; i >= 1; i--) {
      ratings.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return <React.Fragment>{ratings}</React.Fragment>;
  }

  const recommendation = (
    <div className="d-flex justify-content-center m-5">
      <form
        className="form-inline"
        action="http://localhost:8762/video/videos/addReview"
      >
        <select className="custom-select">{getRatingNumbers(5)}</select>
        <input
          type="text"
          className="form-control"
          aria-label="Review with rating"
        />
        <button type="button" className="btn btn-outline-light ml-2">
          Add
        </button>
      </form>
    </div>
  );

  const allReviews = (reviews) =>
    reviews.map((review) =>
      OneReview(review.id, review.rating, review.comment)
    );

  return (
    <div className="pt-3 pb-5">
      {recommendation}
      {allReviews(reviews)}
    </div>
  );
}

export default Recommendation;
