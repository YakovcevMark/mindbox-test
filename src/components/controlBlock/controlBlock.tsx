import {Button} from "@mui/material";
import React, {Dispatch, memo, useCallback} from "react";
import {changeToDoListFilter, clearCompletedTasks, ReducerActions} from "reducer/tasksReducer";
import {Filter} from "reducer/initialState";
import Grid from '@mui/material/Unstable_Grid2';
import {EButton, SConrtolBlock, STypography} from "components/controlBlock/styles";

type PT = {
    dispatch: Dispatch<ReducerActions>,
    filter: Filter,
    countTasksLeft: number,
    countOfTasks:number
};
const buttonsData = ["All", "Active", "Completed"] as Array<Filter>
export const ControlBlock = memo(
    ({
         countOfTasks,
         filter,
         dispatch,
         countTasksLeft
     }: PT) => {

        const onHandleChangeFilter = useCallback(
            (filterValue: Filter) =>
                () => dispatch(changeToDoListFilter(filterValue)),
            [dispatch]
        );
        const handleClearCompleted = useCallback(
            () => dispatch(clearCompletedTasks()),
            [dispatch]
        );

        return (
            <SConrtolBlock>
                <STypography>
                     {countTasksLeft} items left
                </STypography>

                <Grid>
                    {
                        buttonsData.map((b: Filter) =>
                            <Button
                                key={b}
                                variant={filter === b ? "outlined" : undefined}
                                onClick={onHandleChangeFilter(b)}
                                disableRipple>
                                {b}
                            </Button>
                        )
                    }
                </Grid>

                <EButton
                    disabled={countOfTasks === countTasksLeft}
                    onClick={handleClearCompleted}
                    disableRipple>
                    Clear completed
                </EButton>
            </SConrtolBlock>
        );
    }
);
