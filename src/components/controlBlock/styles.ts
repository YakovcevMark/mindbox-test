import {styled} from "@mui/material/styles";
import {Button, Typography,} from "@mui/material";
export const EButton = styled(Button)`
    justify-self: end;
`
export const SControlBlock = styled("section")`
    button {
        color: black;
        font-size: 0.6rem;
        text-transform: unset;
        border-color: rgba(219, 112, 147, 0.38);
        padding:5px;
        :hover{
            border-color: rgba(219, 112, 147, 0.38);
        }
    }
    margin:5px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
`
export const STypography = styled(Typography)`
    font-size: 0.7rem;
`