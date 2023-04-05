import { configureStore } from '@reduxjs/toolkit';
import { logInApi } from './features/loginApi'
import { registerApi } from './features/registerApi';
import { usersApi } from './features/usersApi'
import { userSearchSlice } from './slices/userSearchSlice';

const store = configureStore({
  reducer: {
    searchUser : userSearchSlice.reducer,
    [logInApi.reducerPath] : logInApi.reducer,
    [registerApi.reducerPath] : registerApi.reducer,
    [usersApi.reducerPath] : usersApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(logInApi.middleware)
  .concat(registerApi.middleware)
  .concat(usersApi.middleware),
});

export default store; 