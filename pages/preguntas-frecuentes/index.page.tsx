import { AccordionSummary, Typography, AccordionDetails, Box } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import { faqsData } from 'dh-marvel/components/faqs/faqsData'
import * as next from 'next'


const Faq : next.NextPage = ()=>{

    return (
        <Box  sx={{
        width: "100%",
        padding:"5%"
      }}>
            {faqsData.map((faq)=>{
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
            })}
        </Box>
    )
}
export default Faq