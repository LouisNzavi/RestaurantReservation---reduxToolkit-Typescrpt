import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { redeemPoints } from "./redux/actions";

interface LoyaltyProgramState {
  points: number;
}

function LoyaltyProgram() {
  const [state, setState] = useState<LoyaltyProgramState>({ points: 0 });
  const dispatch = useDispatch();

  const handleRedeemPoints = () => {
    dispatch(redeemPoints(state.points));
    setState({ points: 0 });
  };

  return (
    <div>
      <h2>Loyalty Program</h2>
      <label>
        Points:
        <input
          type="number"
          value={state.points}
          onChange={(e) =>
            setState({ ...state, points: Number(e.target.value) })
          }
        />
      </label>
      <br />
      <button onClick={handleRedeemPoints}>Redeem Points</button>
    </div>
  );
}

// in the reducer
const initialState = {
  loyaltyProgram: { points: 0 },
};

export function loyaltyProgramReducer(
  state = initialState,
  action: 
) {
  switch (action.type) {
    case "REDEEM_POINTS":
      return {
        ...state,
        loyaltyProgram: {
          ...state.loyaltyProgram,
          points: state.loyaltyProgram.points - action.payload,
        },
      };
    default:
      return state;
  }
}

// in the actions
export function redeemPoints(points: number) {
  return { type: "REDEEM_POINTS", payload: points };
}

// This code uses a simple form that allows the user to enter the number of points they want to redeem.
// When the "Redeem Points" button is clicked, it dispatches the redeemPoints action with the number of points entered by the user.
// The loyaltyProgramReducer reduces the points in the state by the number of points redeemed.
//maximum points? points threshold?
