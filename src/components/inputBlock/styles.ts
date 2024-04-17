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