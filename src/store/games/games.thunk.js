import { createAsyncThunk } from "@reduxjs/toolkit";
import UsersService from "apis/UsersService";


export const editUserApi = createAsyncThunk(
    "users/editUserApi",
    async function (
        user,
        { rejectWithValue, dispatch }
    ) {
        try {
            const response = await UsersService.editUser(user).catch((e) => {
                processError(e, dispatch);
                throw new Error("error");
            });


            return response?.data;
        } catch (error) {
            return rejectWithValue("error");
        }
    }
);
