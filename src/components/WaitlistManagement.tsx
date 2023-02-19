import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { joinWaitlist } from "./redux/actions";

function Waitlist() {
  const [name, setName] = useState("");
  const [partySize, setPartySize] = useState(1);
  const dispatch = useDispatch();

  const handleJoinWaitlist = () => {
    dispatch(joinWaitlist({ name, partySize }));
  };

  return (
    <div>
      <h2>Join Waitlist</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Party Size:
        <input
          type="number"
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleJoinWaitlist}>Join Waitlist</button>
    </div>
  );
}

// in the reducer
const initialState = {
  waitlist: [],
};
