import {FormGroup} from "@mui/material";
import React, {Dispatch, memo, useCallback, useMemo} from "react";
import {Filter, Tasks} from "reducer/initialState";
import {SCheckbox, SDel, SDoneOutlinedIcon, SFormControlLabel} from "components/tasksBlock/styles";
import {changeTaskStatus, ReducerActions} from "reducer/tasksReducer";


type PT = {
    stateTasks: Tasks,
    filter: Filter,
    dispatch: Dispatch<ReducerActions>
};

export const TasksBlock = memo(
    ({stateTasks, filter, dispatch}: PT) => {

        const arrayTasks = useMemo(() => {

            const tasksToArray = [];

            for (let id in stateTasks)
                tasksToArray.push({id, ...stateTasks[id]});

            return tasksToArray;

        }, [stateTasks]);


        const filteredTasks = useMemo(() => {

            if (filter === 'Active')
                return arrayTasks.filter(t => !t.isDone);

            if (filter === 'Completed')
                return arrayTasks.filter(t => t.isDone);

            return arrayTasks;

        }, [filter, arrayTasks])

        const onHandleChangeTaskStats = useCallback(
            (id: string) =>
                () => dispatch(changeTaskStatus(id)),
            [dispatch]
        );
        return (
            <FormGroup>

                {filteredTasks.map(t => (
                    <SFormControlLabel
                        key={t.id}
                        control={
                            <SCheckbox
                                onClick={onHandleChangeTaskStats(t.id)}
                                icon={<svg/>}
                                checkedIcon={<SDoneOutlinedIcon/>}
                                checked={t.isDone}
                            />}
                        label={t.isDone
                            ? <SDel>
                                {t.body}
                            </SDel>
                            : t.body}
                    />

                ))}

            </FormGroup>
        );
    }
);

