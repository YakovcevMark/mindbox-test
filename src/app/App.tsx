import React, {useEffect, useReducer} from 'react';
import {tasksReducer} from "reducer/tasksReducer";
import {initialState} from "reducer/initialState";
import {InputBlock} from "components/inputBlock/inputBlock";
import {TasksBlock} from "components/tasksBlock/tasksBlock";
import {ControlBlock} from "components/controlBlock/controlBlock";
import {SAccordion, SAccordionDetails, SAccordionSummary, SBox, SExpandMoreIcon, STypography} from "app/styles";

export const App = () => {

    const [state, dispatch] = useReducer(
        tasksReducer,
        initialState
    );

    const {
        tasks,
        filter,
        countTasksLeft
    } = state;

    useEffect(() => {
        localStorage.setItem("'myFantasticToken'state", JSON.stringify(state));
    }, [state]);

    return (
        <SBox>

            <STypography>
                todos
            </STypography>

            <SAccordion defaultExpanded>

                <SAccordionSummary
                    expandIcon={<SExpandMoreIcon/>}
                    aria-controls="panel1-header"
                    id="panel1-header"
                >

                    <InputBlock
                        dispatch={dispatch}/>

                </SAccordionSummary>

                <SAccordionDetails>

                    <TasksBlock
                        dispatch={dispatch}
                        tasks={tasks}
                        filter={filter}/>

                    <ControlBlock
                        dispatch={dispatch}
                        countTasksLeft={countTasksLeft}
                        countOfTasks={Object.keys(tasks).length}
                        filter={filter}/>

                </SAccordionDetails>
            </SAccordion>
        </SBox>
    );
}


