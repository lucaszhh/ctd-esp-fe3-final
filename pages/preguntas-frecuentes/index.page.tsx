import { Box } from '@mui/material'
import FaqAccordion from 'dh-marvel/components/faqs/faq'
import { faqsData } from 'dh-marvel/components/faqs/faqsData'
import * as next from 'next'


const Faq : next.NextPage = ()=>{
    const faqsList = faqsData.map((faq) => <FaqAccordion faq={faq}/>)
    return (
        <Box  sx={{
        width: "100%",
        padding:"5%"
        }}>
            {faqsList}
        </Box>
    )
}

export const getStaticProps: next.GetStaticProps = async () => {
    const data = faqsData;
    return {
        props: { data: data }
    }
}

export default Faq