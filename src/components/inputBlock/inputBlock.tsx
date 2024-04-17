import React, {KeyboardEvent, Dispatch, memo, MouseEvent, useState, ChangeEvent} from "react";
import {addTask, ReducerActions} from "reducer/tasksReducer";
import {SInput} from "components/inputBlock/styles";

type PT = {
    dispatch: Dispatch<ReducerActions>
};
export const InputBlock = memo(
    ({dispatch}: PT) => {
        const [title, setTitle] = useState("");
        const handleOnKeyUp = (e:KeyboardEvent<HTMLInputElement>) => {
            if (e.key === `Enter`){
                dispatch(addTask(title));
                setTitle("");
            }
        };
        const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
            setTitle(e.currentTarget.value)
        };
        const handleOnClick = (e:MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
        };

        return (
            <SInput
                placeholder={"What needs to be done?"}
                fullWidth
                onKeyUp={handleOnKeyUp}
                onClick={handleOnClick}
                onChange={handleOnChange}
                value={title}
                disableUnderline
                />
        )
    }
);
