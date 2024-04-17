import {styled} from "@mui/material/styles";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";

export const SAccordionSummary = styled(AccordionSummary)`
    flex-direction: row-reverse;
    
    svg {
        opacity: 0.7;
    }

    input {
        padding-left: 5px;
    }

    border-bottom: 1px solid rgba(0, 0, 0, 0.38);
    padding-left: 5px;
`

export const SAccordion = styled(Accordion)`
    &:last-of-type {
        border-radius: 1px;
    }
`
export const SBox = styled(Box)`
    margin: auto;
    width: 500px;
`
export const STypography = styled(Typography)`
    opacity: 0.7;
    color: #e7d7d6;
    text-align: center;
    font-size: 6rem;
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
`
export const SAccordionDetails = styled(AccordionDetails)`
    padding: 0;


    &::after, ::before {
        content: "";
        background-color: rgba(250, 250, 250);
        height: 20px;
        width: 98%;
        display: block;
        position: absolute;
        bottom: -5px;
        left: 0;

        margin: 0 3px;
        padding: 0;
        border-radius: 1px;
        border: 1px solid rgba(0, 0, 0, 0.23);
        z-index: -1;
    }

    &::before {
        width: 96%;
        bottom: -9px;
        left: 1%;
        z-index: -2;
    }
`
