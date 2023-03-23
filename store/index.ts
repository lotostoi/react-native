import { configureStore } from "@reduxjs/toolkit";

import token from "./auth/token";

export const store = configureStore({
  reducer: {
    token,
  },
});
