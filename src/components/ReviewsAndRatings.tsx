import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from './redux/actions';

interface Review {
  rating: number;
  comment: string;
}

function ReviewForm() {
  const [review, setReview] = useState<Review>({ rating: 0, comment: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addReview(review));
    setReview({ rating: 0, comment: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <input
          type="number"
          min={1}
          max={5}
          value={review.rating}
          onChange={(e) =>
            setReview({ ...review, rating: Number(e.target.value) })
          }
        />
      </label>
      <br />
      <label>
        Comment:
        <textarea
          value={review.comment}
          onChange={(e) =>
            setReview({ ...review, comment: e.target.value })
          }
        />
      </label>
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
}

// in the reducer
const initialState = {
    reviews: []
};

export function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    default:
      return state;
  }
}

// in the actions
export function addReview(payload: Review) {
  return { type: 'ADD_REVIEW', payload };
}
