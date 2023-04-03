import { configureStore } from '@reduxjs/toolkit';
import { logInApi } from './features/loginApi'
import { registerApi } from './features/registerApi';

const store = configureStore({
  reducer: {
    [logInApi.reducerPath] : logInApi.reducer,
    [registerApi.reducerPath] : registerApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(logInApi.middleware)
  .concat(registerApi.middleware),
});

export default store; 