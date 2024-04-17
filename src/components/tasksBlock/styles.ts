import {styled} from "@mui/material/styles";
import {Checkbox, FormControlLabel} from "@mui/material";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

export const SDel = styled("del")`
    opacity: 0.5;
`
export const SCheckbox = styled(Checkbox)`
    svg {
        border: 1px solid rgba(0, 0, 0, 0.29);
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
    }
`
export const SDoneOutlinedIcon = styled(DoneOutlinedIcon)`
    color: rgba(112, 243, 112, 0.8);
`
export const SFormControlLabel = styled(FormControlLabel)`
    border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    width: 100%;
    margin: 0;
`
