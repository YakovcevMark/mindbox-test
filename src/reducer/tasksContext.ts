import {createContext} from "react";
import {initialState} from "reducer/initialState";

export const taskContext = createContext(initialState)