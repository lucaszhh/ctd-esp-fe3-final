import { getComic } from "services/marvel/marvel.service"
import type { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import Head from "next/head"
import { IComic } from "types"
import { Box, Stack } from "@mui/material"
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout"
import StepperForm from "dh-marvel/components/forms/stepper-form.component"
import CardCheckoutProduct from "dh-marvel/components/card-checkout-product/card-checkout-product"

type Props = {
    comic: IComic
}

const Checkout: NextPage<Props> = ({ comic }: Props) => {


    return (
        <>
            <Head>
                <title>DH-MARVEL</title>
                <meta
                    name="description"
                    content={`Comic de Marvel.${comic?.title}.${comic?.series}`}
                />
            </Head>
            <Box
                sx={{
                    padding: { xs: "80px 20px", sm: "100px 20px" },
                }}
            >
                <Stack
                    direction={{ sm: "column", md: "row-reverse" }}
                    spacing={{ xs: 15, sm: 15, md: 8, xl: 20 }}
                    alignItems={{ xs: "center", sm: "center", md: "self-start" }}
                >
                    <Box sx={{ backgroundColor: "#f3f3f3", height: "100%", padding: "30px", }}>
                        <CardCheckoutProduct comic={comic} />
                    </Box>
                    <Box>
                        <StepperForm comic={comic} />
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
(Checkout as any).Layout = LayoutCheckout;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const id = context.query?.id?.toString() || "0"
    const comic = await getComic(parseInt(id))
    return { props: { comic } }
}

export default Checkout
