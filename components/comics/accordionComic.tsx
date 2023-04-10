import { Accordion, AccordionDetails, AccordionSummary, Button, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import { getIdfromURI } from "utils/getIdFromURI";
import { FC } from "react";
import { IComic } from "types";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface Props {
    comic: IComic;
}

const AccordionComic: FC<Props> = ({ comic }) => {
    return (
        <Stack spacing={2} >
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontWeight: "bold" }}>Descripción</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {comic?.description !== null && comic?.description !== ""
                            ? comic?.description
                            : "Sin descripción disponible."}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontWeight: "bold" }}>Personajes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {comic?.characters.items.length ? (
                        comic?.characters.items.map((character) => {
                            return (
                                <NextLink
                                    href={`/characters/${getIdfromURI(character.resourceURI)}`}
                                    key={character.name}
                                >
                                    <Button fullWidth >
                                        {character.name}
                                    </Button>
                                </NextLink>
                            );
                        })
                    ) : (
                        <Typography variant="body2">
                            Sin listado de personajes disponible.
                        </Typography>
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography sx={{ fontWeight: "bold" }}>Creadores</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {comic?.creators.items.length ? (
                        comic?.creators.items.map((creator) => {
                            return (
                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                        padding: "4px 5px",
                                    }}
                                    key={creator.name}
                                >
                                    {creator.name} - {creator.role}
                                </Typography>
                            );
                        })
                    ) : (
                        <Typography >
                            Sin listado de creadores disponible.
                        </Typography>
                    )}
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
};




export default AccordionComic;
