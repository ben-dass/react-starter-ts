import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice.ts";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
	reducer: { counter: counterReducer },
});

export type RootState = ReturnType<typeof store.dispatch>;
export const useAppSelector = useSelector.withTypes<RootState>();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
