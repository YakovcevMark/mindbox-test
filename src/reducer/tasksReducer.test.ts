import {addTask, changeTaskStatus, changeToDoListFilter, clearCompletedTasks, tasksReducer} from './tasksReducer';
import {State} from "reducer/initialState";
import {v1} from "uuid";

let startState = {} as State;
const initialRandomId = v1();
beforeEach(() => {
    startState = {
        tasks: {
            [initialRandomId]: {isDone: false, body: "Тестовое задание"}
        },
        countTasksLeft: 1,
        filter:"All"
    };
});

test('correct task should be added to state', () => {

    const newTaskBody = "New Task"
    const action = addTask(newTaskBody);
    const endState = tasksReducer(startState, action)

    let countOfTasks = 0;
    let newTask = {} as {body:string, isDone:boolean};

    for (let id in endState.tasks) {
        if (id !== initialRandomId) {
            newTask = endState.tasks[id];
        }
        countOfTasks++;
    }

    expect(countOfTasks).toEqual(2);
    expect(newTask.body).toEqual(newTaskBody);
    expect(newTask.isDone).toEqual(false);

});

test("task should change it's status", () => {

    const action = changeTaskStatus(initialRandomId);

    const intermediateState = tasksReducer(startState, action);
    expect(intermediateState.tasks[initialRandomId].isDone).toBe(true);
    expect(intermediateState.countTasksLeft).toBe(startState.countTasksLeft - 1);

    const endState = tasksReducer(intermediateState, action);
    expect(endState.tasks[initialRandomId].isDone).toBe(false);
    expect(endState.countTasksLeft).toBe(intermediateState.countTasksLeft + 1);

});

test('completed tasks should be cleared', () => {


    startState = {
        tasks: {
            [initialRandomId]: {isDone: false, body: "Тестовое задание"},
            [v1()]: {
                isDone: true,
                body: "Привет!"
            },
            [v1()]: {
                isDone: true,
                body: "Ого, ты даже полез проверить тесты?" +
                    "Очень приятно! :)"
            },
        },
        countTasksLeft: 1,
        filter:"All"
    };

    const action = clearCompletedTasks()
    const endState = tasksReducer(startState, action)

    let countOfTasks = 0;
    for (let _ in endState.tasks) {
        countOfTasks++;
    }

    expect(countOfTasks).toBe(1);
    expect(endState.tasks.hasOwnProperty(initialRandomId)).toBe(true);
});

test('filter should be changed', () => {

    expect(startState.filter).toBe("All");

    let stateWithActiveFilter = tasksReducer(startState, changeToDoListFilter("Active"))
    let stateWithCompletedFilter = tasksReducer(stateWithActiveFilter, changeToDoListFilter("Completed"))
    const endState = tasksReducer(stateWithCompletedFilter, changeToDoListFilter("All"));

    expect(stateWithActiveFilter.filter).toBe("Active");
    expect(stateWithCompletedFilter.filter).toBe("Completed");
    expect(endState.filter).toBe("All");

});

