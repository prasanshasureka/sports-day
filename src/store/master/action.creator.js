import { createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("master/getData", () => {
  return fetch("https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a")
    .then((resp) => resp.json())
    .then((resp) => resp);
});
