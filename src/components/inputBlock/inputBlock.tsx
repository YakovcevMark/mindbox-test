import React, {KeyboardEvent, Dispatch, memo, MouseEvent, useState, ChangeEvent} from "react";
import {addTask, ReducerActions} from "reducer/tasksReducer";
import {SError, SInput, SInputBlock} from "components/inputBlock/styles";

type PT = {
    dispatch: Dispatch<ReducerActions>
};
export const InputBlock = memo(
    ({dispatch}: PT) => {
        const [title, setTitle] = useState("");
        const [error, setError] = useState("");
        const handleOnKeyUp = (e:KeyboardEvent<HTMLInputElement>) => {
            if (e.key === `Enter`){
                if(title.trim()){
                    dispatch(addTask(title));
                    setTitle("");
                } else {
                    setError("task can't be empty")
                }
            }
        };
        const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
            setTitle(e.currentTarget.value)
            error && setError("")
        };
        const handleOnClick = (e:MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
        };

        return (
            <SInputBlock>
                <SInput
                    placeholder={"What needs to be done?"}
                    fullWidth
                    onKeyUp={handleOnKeyUp}
                    onClick={handleOnClick}
                    onChange={handleOnChange}
                    value={title}
                    disableUnderline
                />
                {error && <SError>{error}</SError>}
            </SInputBlock>
        )
    }
);
