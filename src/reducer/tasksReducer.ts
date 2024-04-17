import {v1} from "uuid";
import {Filter, State} from "reducer/initialState";

export const changeTaskStatus = (id: string) => ({
    type: "changeStatus",
    id
} as const);

export const changeToDoListFilter = (filter: Filter) => ({
    type: "changeFilter",
    filter
} as const);

export const addTask = (title: string) => ({
    type: "addTask",
    title,
    id: v1()
} as const);

export const clearCompletedTasks = () => ({
    type: "clearCompletedTasks",
} as const);

export type ReducerActions =
    ReturnType<typeof changeTaskStatus>
    | ReturnType<typeof clearCompletedTasks>
    | ReturnType<typeof addTask>
    | ReturnType<typeof changeToDoListFilter>

export const tasksReducer = (state: State, action: ReducerActions): State => {
    switch (action.type) {
        case "addTask": {
            return {
                ...state,
                tasks: {
                    [action.id]: {isDone: false, body: action.title},
                    ...state.tasks
                },
                countTasksLeft: state.countTasksLeft + 1
            };
        }
        case "changeStatus": {
            const taskNeedToChange = state.tasks[action.id];
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.id]: {
                        ...taskNeedToChange,
                        isDone: !taskNeedToChange.isDone
                    },
                },
                countTasksLeft: taskNeedToChange.isDone
                    ? state.countTasksLeft + 1
                    : state.countTasksLeft - 1
            };
        }
        case "clearCompletedTasks": {

            let countWithIsDoneFalseTasks = 0;

            for (let id in state.tasks) {
                state.tasks[id].isDone
                    ? delete state.tasks[id]
                    : countWithIsDoneFalseTasks++;
            }

            return {
                ...state,
                tasks: {...state.tasks},
                countTasksLeft: countWithIsDoneFalseTasks
            };
        }
        case "changeFilter": {
            return {
                ...state,
                filter: action.filter
            };
        }
        default: {
            return state;
        }
    }
};


