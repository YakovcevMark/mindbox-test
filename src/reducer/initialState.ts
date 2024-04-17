import {v1} from "uuid";

export type Tasks = { [p: string]: { isDone: boolean, body: string } };
export type Filter = "all" | "completed" | "active"
export type State = typeof initialState;

const initialTasks = {
    [v1()]: {isDone: false, body: "Тестовое задание"},
    [v1()]: {isDone: true, body: "Прекрасный код"},
    [v1()]: {isDone: false, body: "Покрытие тестами"},
};

export const initialState = {
    tasks: initialTasks,
    countCompletedTasks: 0,
    filter: "all" as Filter
};




