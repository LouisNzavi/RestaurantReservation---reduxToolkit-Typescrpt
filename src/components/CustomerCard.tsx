// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addFoodToCustomer } from "../features/customerSlice";

// interface CustomerCardTypes {
//   id: string;
//   name: string;
//   food: string[];
// }

// export default function CustomerCard({ id, name, food }: CustomerCardTypes) {
//   const dispatch = useDispatch();
//   const [customerFoodInput, setcustomerFoodInput] = useState("");

//   return (
//     <div className="customer-food-card-container">
//       <p>{name}</p>
//       <div className="customer-foods-container">
//         <div className="customer-food">
//           {food.map((food) => {
//             return <p>{food}</p>;
//           })}
//         </div>
//         <div className="customer-food-input-container">
//           <input
//             value={customerFoodInput}
//             onChange={(e) => setcustomerFoodInput(e.target.value)}
//           />
//           <button
//             onClick={() => {
//               if (!customerFoodInput) return;
//               dispatch(
//                 addFoodToCustomer({
//                   id,
//                   food: customerFoodInput,
//                 })
//               );
//               setcustomerFoodInput("");
//             }}
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer, removeFoodFromCustomer } from "../features/customerSlice";

interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}

export default function CustomerCard({ id, name, food }: CustomerCardTypes) {
  const dispatch = useDispatch();
  const [customerFoodInput, setcustomerFoodInput] = useState("");

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food, index) => {
            return (
              <div className="food-item">
                <p>{food}</p>
                <button onClick={() => dispatch(removeFoodFromCustomer({ id, index }))}>Remove</button>
              </div>
            );
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setcustomerFoodInput(e.target.value)}
          />
          <button
            onClick={() => {
              if (!customerFoodInput) return;
              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFoodInput,
                })
              );
              setcustomerFoodInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

