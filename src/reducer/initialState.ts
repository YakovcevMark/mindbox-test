import {v1} from "uuid";

const initialTasks = {
    [v1()]: {isDone: false, body: "Тестовое задание"},
    [v1()]: {isDone: false, body: "Прекрасный код"},
    [v1()]: {isDone: false, body: "Покрытие тестами"},
};

export const initialState = {
    tasks: initialTasks,
    countCompletedTasks: 0
};

export type State = typeof initialState;



