import React, { useState } from "react";
import OneReview from "./OneReview";
import axios from "axios";

function Recommendation(props) {
  const max = 5;
  const [rating, setRating] = useState(max);
  const [comment, setComment] = useState("");

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

  const handleSubmit = () => {
    if (comment !== "") {
      axios
        .post(
          `${process.env["REACT_APP_SERVER"]}${process.env["REACT_APP_ADD_REVIEW"]}`,
          {
            rating: rating,
            comment: comment,
            videoId: props.videoId,
          }
        )
        .then((response) => {
          document.getElementById("rating").value = max;
          document.getElementById("comment").value = "";
          props.setReviews([...props.reviews, response.data]);
          window.location.reload();
        });
    }
  };

  const recommendation = (
    <div className="d-flex justify-content-center m-5">
      <form className="form-inline">
        <select
          className="custom-select"
          id="rating"
          onChange={(event) => {
            setRating(event.target.value);
          }}
        >
          {getRatingNumbers(max)}
        </select>
        <input
          id="comment"
          type="text"
          className="form-control"
          aria-label="review"
          required
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-outline-light ml-2"
        >
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
      {allReviews(props.reviews)}
    </div>
  );
}

export default Recommendation;
