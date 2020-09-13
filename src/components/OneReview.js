import React from "react";
import Stars from "./Stars";

function OneReview(reviewId, rating, comment) {
  return (
    <div key={reviewId} id={`review-{}`} className="pb-3">
      <hr className="my-2 bg-light mb-3" />
      <p>{Stars(rating)}</p>
      <p className="">{comment}</p>
    </div>
  );
}

export default OneReview;
