import {FormGroup} from "@mui/material";
import React, {Dispatch, memo, useCallback, useMemo} from "react";
import {Filter, Tasks} from "reducer/initialState";
import {SCheckbox, SDel, SDoneOutlinedIcon, SFormControlLabel} from "components/tasksBlock/styles";
import {changeTaskStatus, ReducerActions} from "reducer/tasksReducer";


type PT = {
    tasks: Tasks,
    filter: Filter,
    dispatch: Dispatch<ReducerActions>
};

export const TasksBlock = memo(
    ({tasks, filter, dispatch}: PT) => {

        const filteredIds = useMemo(() => {

            const getKeys = Object.keys;

            if (filter === 'Active')
                return getKeys(tasks).filter(id => !tasks[id].isDone);

            if (filter === 'Completed')
                return getKeys(tasks).filter(id => tasks[id].isDone);

            return getKeys(tasks);

        }, [filter, tasks])

        const onHandleChangeTaskStats = useCallback(
            (id: string) =>
                () => dispatch(changeTaskStatus(id)),
            [dispatch]
        );

        return (
            <FormGroup>

                {filteredIds.map(id => (
                    <SFormControlLabel
                        key={id}
                        control={
                            <SCheckbox
                                onClick={onHandleChangeTaskStats(id)}
                                icon={<svg/>}
                                checkedIcon={<SDoneOutlinedIcon/>}
                                checked={tasks[id].isDone}
                            />}
                        label={tasks[id].isDone
                            ? <SDel>
                                {tasks[id].body}
                            </SDel>
                            : tasks[id].body}
                    />

                ))}

            </FormGroup>
        );
    }
);

