
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/signup',
  async (obj, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', { ...obj });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (obj, { rejectWithValue }) => {
    try {
      const responce = await axios.post('/users/login', { ...obj });
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       const responce = await axios.post('/users/logout');
//       clearAuthHeader();
//       return responce.data;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    if (state.auth.token === null) {
      return rejectWithValue();
    }

    setAuthHeader(state.auth.token);

    const responce = await axios.get('/users/current');
    return responce.data;
  }
);

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, {rejectWithValue}) => {
//     try {
//       const res = await axios.post('/users/signup', {credentials});
//       // After successful registration, add the token to the HTTP header
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// /*
//  * POST @ /users/login
//  * body: { email, password }
//  */
// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, {rejectWithValue}) => {
//     try {
//       const res = await axios.post('/users/login', {credentials});
//       // After successful login, add the token to the HTTP header
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios.post('/users/logout');
      clearAuthHeader();
      return responce.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// /*
//  * GET @ /users/current
//  * headers: Authorization: Bearer token
//  */
// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     // Reading the token from the state via getState()
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       // If there is no token, exit without performing any request
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       // If there is a token, add it to the HTTP header and perform the request
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/users/me');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );