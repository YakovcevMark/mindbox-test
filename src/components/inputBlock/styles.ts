import {styled} from "@mui/material/styles";
import {Input} from "@mui/material";

export const SInput = styled(Input)`
   
    input::-webkit-input-placeholder {
        font-style: italic;
    }
    input:-moz-placeholder {
        font-style: italic;
    }
    input::-moz-placeholder {
        font-style: italic;
    }
    input:-ms-input-placeholder {
        font-style: italic;
    }
`
export const SError = styled("div")`
    font-size: 0.7rem;
    font-style: italic;
    color: rgba(245, 122, 122, 0.52);
`
export const SInputBlock = styled("div")`
    padding-left: 5px;
    width: 100%;
`