import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=3");
        return response.json();
    }
);

export const initialState = {
    entities: [],
    loading: false,
    value: 10
} as any; 

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // state.entities = action.payload[0];
            // if entities is an array, use this instead:
            state.entities.push(...action.payload);
            state.loading = false;
        });
    }
});

export const {increment} = userSlice.actions;

export default userSlice.reducer;