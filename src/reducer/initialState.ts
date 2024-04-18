import {v1} from "uuid";

export type Tasks = { [p: string]: { isDone: boolean, body: string } };
export type Filter = "All" | "Completed" | "Active"
export type State = typeof initialState;

const getLocalStorageData = () => {
    const state = localStorage.getItem("'myFantasticToken'state");

    if (state) {
        return JSON.parse(state);
    }

    return false;
}

export const initialState = getLocalStorageData() || {
    tasks:{
        [v1()]: {isDone: false, body: "Тестовое задание"},
        [v1()]: {isDone: true, body: "Прекрасный код"},
        [v1()]: {isDone: false, body: "Покрытие тестами"},
    },
    countTasksLeft: 2,
    filter: "All" as Filter
};






