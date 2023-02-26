import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a"

export const getData = createAsyncThunk("master/getData", async (_, thunkAPI) => {
  return fetch(URL)
    .then((resp) => {
      if (!resp.ok) throw resp.status;
      return resp.json();
    })
    .then((resp) => resp)
    .catch((err) => {
      let message = "Oops... There was some error!";
      if (err === 404) message = "404 Not Found";
      return thunkAPI.rejectWithValue({ message: message });
    });
});
