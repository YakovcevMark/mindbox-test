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
        countCompletedTasks: 0,
        filter:"all"
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
    expect(intermediateState.countCompletedTasks).toBe(startState.countCompletedTasks + 1);

    const endState = tasksReducer(intermediateState, action);
    expect(endState.tasks[initialRandomId].isDone).toBe(false);
    expect(endState.countCompletedTasks).toBe(intermediateState.countCompletedTasks - 1);

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
        countCompletedTasks: 0,
        filter:"all"
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

    let intermediateState = tasksReducer(startState, changeToDoListFilter("active"))
    const endState = tasksReducer(intermediateState, changeToDoListFilter("completed"));

    expect(intermediateState.filter).toBe("active");
    expect(endState.filter).toBe("completed");

});

