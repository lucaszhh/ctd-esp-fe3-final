import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material"
import { IFaqsType } from "types"

type props = {
    faq : IFaqsType
}

const FaqAccordion = ({faq}:props) => {
    
    return(
        <Accordion key={faq.id}>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{fontWeight: "bold"}}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{faq.answer}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default FaqAccordion