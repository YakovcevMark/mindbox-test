import React, {useReducer} from 'react';
import {tasksReducer} from "reducer/tasksReducer";
import {initialState} from "reducer/initialState";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {InputBlock} from "components/inputBlock/inputBlock";
import {TasksBlock} from "components/tasksBlock/tasksBlock";
import {ControlBlock} from "components/controlBlock/controlBlock";
import {SAccordion, SAccordionDetails, SAccordionSummary, SBox, STypography} from "app/styles";

export const App = () => {

    const [{
        tasks,
        filter,
        countTasksLeft
    }, dispatch] = useReducer(tasksReducer, initialState);


    return (
        <SBox>

            <STypography>
                todos
            </STypography>

            <SAccordion>

                <SAccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-header"
                    id="panel1-header"
                >

                 <InputBlock
                     dispatch={dispatch}/>

                </SAccordionSummary>

                <SAccordionDetails>

                    <TasksBlock
                        dispatch={dispatch}
                        stateTasks={tasks}
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


