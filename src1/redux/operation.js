import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://64818a3929fa1c5c503190c8.mockapi.io/contacts';

export const fetchAllContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const responce = await axios.get('/contacts');
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const responce = await axios.post('/contacts', contact);
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const responce = await axios.delete(`/contacts/${id}`);
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});