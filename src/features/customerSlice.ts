import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  value: Customer[];
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface addFoodToCustomerPayload {
  food: string;
  id: string;
}

interface removeFoodFromCustomerPayload {
  id: string;
  index: number;
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<addFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
    removeFoodFromCustomer: (
      state,
      action: PayloadAction<removeFoodFromCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.splice(action.payload.index, 1);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer, removeFoodFromCustomer } =
  customerSlice.actions;

export default customerSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CustomerState {
//   value: Customer[];
// }

// interface Customer {
//   id: string;
//   name: string;
//   food: string[];
// }

// interface addFoodToCustomerPayload {
//   food: string;
//   id: string;
// }

// const initialState: CustomerState = {
//   value: [],
// };

// export const customerSlice = createSlice({
//   name: "customers",
//   initialState,
//   reducers: {
//     addCustomer: (state, action: PayloadAction<Customer>) => {
//       state.value.push(action.payload);
//     },
//     addFoodToCustomer: (
//       state,
//       action: PayloadAction<addFoodToCustomerPayload>
//     ) => {
//       state.value.forEach((customer) => {
//         if (customer.id === action.payload.id) {
//           customer.food.push(action.payload.food);
//         }
//       });
//     },
//   },
// });

// export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

// export default customerSlice.reducer;

// // in the actions
// export const removeFoodFromCustomer = (payload) => ({
//   type: 'REMOVE_FOOD_FROM_CUSTOMER',
//   payload
// });

// // in the reducer
// case 'REMOVE_FOOD_FROM_CUSTOMER': {
//       const { id, index } = action.payload;
//       const customers = [...state.customers];
//       customers.forEach(customer => {
//         if(customer.id === id) {
//           customer.food.splice(index, 1);
//         }
//       });
//       return {
//         ...state,
//         customers
//       }
//     }
