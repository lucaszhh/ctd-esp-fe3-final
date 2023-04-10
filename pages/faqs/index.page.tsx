import { Box } from '@mui/material';
import FaqAccordion from 'dh-marvel/components/faqs/faq'
import * as next from 'next'
import Head from "next/head";
import { IFaqs } from 'types'


type Props = {
    data: IFaqs[]
}

const Faq: next.NextPage<Props> = ({ data }: Props) => {
    const faqsList = data.map((faq) => <FaqAccordion faq={faq} />)
    return (
        <>
            <Head>
                <title>DH-MARVEL</title>
                <meta
                    name="description"
                    content={`Preguntas frecuntes.${data.map((faq) => `pregunta: ${faq.question}. respuesta${faq.answer}` )}`}
                />
            </Head>
            <Box sx={{
                width: "100%",
                padding: "5%"
            }}>
                {faqsList}
            </Box>
        </>
    )
}

const URL_WEB = process.env.URL_WEB

export const getServerSideProps: next.GetServerSideProps= async ()=>{
    const response = await fetch(URL_WEB + "api/faqs")
    const data: IFaqs[] = await response.json()
    return {
        props: { data: data }
    }
}



export default Faq