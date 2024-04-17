import {v1} from "uuid";

export type Tasks = { [p: string]: { isDone: boolean, body: string } };
export type Filter = "All" | "Completed" | "Active"
export type State = typeof initialState;

const initialTasks = {
    [v1()]: {isDone: false, body: "Тестовое задание"},
    [v1()]: {isDone: true, body: "Прекрасный код"},
    [v1()]: {isDone: false, body: "Покрытие тестами"},
};

export const initialState = {
    tasks: initialTasks,
    countTasksLeft: 2,
    filter: "All" as Filter
};




