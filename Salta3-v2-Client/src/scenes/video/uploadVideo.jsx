import React, { useState } from "react";
import { Box, Button, Grid, Paper, Step, StepContent, StepLabel, Stepper, Typography, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import FlexBetween from "components/FlexBetween";
import logo from '../../assets/png/logo 1.png'
const UploadVideo = (activeStep) => {
    switch (activeStep) {
        case 0:
            (<>
                <Grid
                    xs display="flex" justifyContent="center" alignItems="center">
                    <img src={logo} alt='logo' />
                    <Header
                        title="Salta3"
                        subtitle="Soyez le bienvenue dans l'espace publicitaire Salta3 !"
                    />

                </Grid>

                <Typography >
                    Pour importer votre vidéo publicitaire, il vous suffit de suivre quelques étapes simples et efficaces. <br />Tout d'abord, sur la première interface, vous pouvez importer votre vidéo publicitaire et ajouter des informations basiques telles que le nom de la publicité, sa description ciblée, ainsi que vos informations de contact pour être facilement joignable.<br /> Ensuite, sur la deuxième interface, vous pouvez définir votre audience en utilisant des critères tels que la localisation géographique, les centres d'intérêts, la tranche d'âge et le genre. Avec la troisième interface, vous pouvez classer vos critères de ciblage selon leur priorité et choisir la durée pendant laquelle l'algorithme de ciblage passe d'une phase à une autre.<br /> Vous pouvez également planifier le moment précis où vous souhaitez que votre publicité soit diffusée en utilisant le calendrier et l'horloge dans la dernière interface.<br /> Vous pouvez également sélectionner le nombre de vues que vous souhaitez acheter pour votre publicité. Enfin, une interface supplémentaire est disponible pour les annonceurs qui souhaitent ajouter des quiz ou des questionnaires QCM à leur publicité.<br /> Dans cette interface, les annonceurs peuvent écrire des questions qui vérifient si les utilisateurs ont bien compris les informations clés de la publicité, comme les détails du produit ou du service à promouvoir. <br />Les données collectées à travers cette interface peuvent être utilisées pour évaluer l'efficacité de la publicité et pour aider les annonceurs à mieux comprendre leur marché cible.
                    <Box
                        xs display="flex" justifyContent="center" alignItems="center"
                    >
                        <Button
                            variant="contained"
                            sx={{ mt: 1, mr: 1, color: 'white', background: 'red' }}
                        >
                            Demarer
                        </Button>
                    </Box>
                </Typography></>)

            break;
    }

};

export default UploadVideo;
