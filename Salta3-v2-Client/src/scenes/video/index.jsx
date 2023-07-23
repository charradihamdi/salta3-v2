import React, { useState } from "react";
import datamaps from "./maps/TunisGeo.json";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import CheckboxTree from "react-checkbox-tree";
import { TextareaAutosize } from "@mui/base";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import FlexBetween from "components/FlexBetween";
import logo from "../../assets/png/logo 1.png";
import { AccountCircle } from "@mui/icons-material";
import { DropzoneArea } from "material-ui-dropzone";
const Video = () => {
  const theme = useTheme();
  const [forumVideo, setForumVideo] = useState({
    upload: false
  });
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const steps = [
    {
      label: "importez votre publicité.",
    },
    {
      label: "selectionez votre audiance",
    },
    {
      label: "personalisez votre critére de ciblage",
    },
    {
      label: "planifiez vore publicité",
    },
    {
      label: "QCM",
    },
    {
      label: "Payer et lancez-vous",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const renderAreas = (areas) => {
    let myAreas = [];
    for (let area of areas) {
      myAreas.push({
        label: area.name,
        value: area.name,
      });
    }
    return myAreas;
  };
  const renderVideoUploadSteps = () => {
    return (
      <Box sx={{ maxWidth: 400 }} sx={{ marginY: "1rem" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === steps?.length - 1 ? (
                    <Typography variant="caption">Dernière étape</Typography>
                  ) : null
                }
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 10,
                    marginLeft: -6,
                    marginRight: 1,
                  }}
                >
                  {index + 1}
                </Button>{" "}
                {step.label}
              </StepLabel>
              {forumVideo.upload && (
                <StepContent>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              )}
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>
              Toutes les étapes sont terminées - vous avez terminé
            </Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    );
  };

  const handleUploadClick = () => {
    // When the button is clicked, update the state to set 'upload' to true
    setForumVideo((prevVideo) => ({
      ...prevVideo,
      upload: true,
    }));
  };

  const textareaStyle = {
    width: "100%", // Set your desired width
    height: "20rem",
    minHeight: "100px", // Set your desired minimum height
    maxHeight: "32vh", // Set your desired maximum height
    resize: "vertical", // Allow vertical resizing
    padding: "8px", // Add some padding for better appearance
    border: "1px solid #ccc", // Add a border for better visibility
    borderRadius: "4px", // Optional: Add border radius for better appearance
    fontSize: "16px", // Optional: Set font size
  };

  const renderFilterBar = () => {
    return (
      <CheckboxTree
        nodes={renderAreas(datamaps.gouvernorats)}
        checked={checked}
        expanded={expanded}
        onCheck={(checked) => setChecked(checked)}
        onExpand={(expanded) => setExpanded(expanded)}
      />
    );
  };
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="" subtitle="Ajouter une Video." />
      <FlexBetween pl={3}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ width: "90%" }}
        >
          <Grid xs={3}>{renderVideoUploadSteps()}</Grid>
          <Grid xs={9}>
            {!forumVideo.upload && (
              <>
                <Grid
                  xs
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={logo} alt="logo" />
                  <Header
                    title="Salta3"
                    subtitle="Soyez le bienvenue dans l'espace publicitaire Salta3 !"
                  />
                </Grid>

                <Typography>
                  Pour importer votre vidéo publicitaire, il vous suffit de
                  suivre quelques étapes simples et efficaces. <br />
                  Tout d'abord, sur la première interface, vous pouvez importer
                  votre vidéo publicitaire et ajouter des informations basiques
                  telles que le nom de la publicité, sa description ciblée,
                  ainsi que vos informations de contact pour être facilement
                  joignable.
                  <br /> Ensuite, sur la deuxième interface, vous pouvez définir
                  votre audience en utilisant des critères tels que la
                  localisation géographique, les centres d'intérêts, la tranche
                  d'âge et le genre. Avec la troisième interface, vous pouvez
                  classer vos critères de ciblage selon leur priorité et choisir
                  la durée pendant laquelle l'algorithme de ciblage passe d'une
                  phase à une autre.
                  <br /> Vous pouvez également planifier le moment précis où
                  vous souhaitez que votre publicité soit diffusée en utilisant
                  le calendrier et l'horloge dans la dernière interface.
                  <br /> Vous pouvez également sélectionner le nombre de vues
                  que vous souhaitez acheter pour votre publicité. Enfin, une
                  interface supplémentaire est disponible pour les annonceurs
                  qui souhaitent ajouter des quiz ou des questionnaires QCM à
                  leur publicité.
                  <br /> Dans cette interface, les annonceurs peuvent écrire des
                  questions qui vérifient si les utilisateurs ont bien compris
                  les informations clés de la publicité, comme les détails du
                  produit ou du service à promouvoir. <br />
                  Les données collectées à travers cette interface peuvent être
                  utilisées pour évaluer l'efficacité de la publicité et pour
                  aider les annonceurs à mieux comprendre leur marché cible.
                  <Box
                    xs
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      variant="contained"
                      sx={{ mt: 1, mr: 1, color: "white", background: "red" }}
                      onClick={handleUploadClick}
                    >
                      Demarer
                    </Button>
                  </Box>
                </Typography>
              </>
            )}
            {forumVideo.upload && activeStep == 0 && (
              <>
                <Header title="" subtitle="Importer" />
                <FormControl
                  variant="standard"
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  sx={{
                    width: 800,
                    maxWidth: "100%",
                    margin: "1rem",
                  }}
                >
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Nom de votre compagne
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl
                  variant="standard"
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  sx={{
                    width: 900,
                    maxWidth: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid xs={5}>
                    <DropzoneArea />
                  </Grid>
                  <Grid
                    xs={5}
                    sx={{
                      maxHeight: "60vh",
                    }}
                  >
                    <TextareaAutosize
                      required
                      id="outlined-required"
                      label="Description"
                      defaultValue="description ..."
                      style={textareaStyle}
                    />
                  </Grid>
                </FormControl>
                <FormControl
                  variant="standard"
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  sx={{
                    width: 900,
                    maxWidth: "100%",
                    margin: "1rem",
                  }}
                >
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Nom de votre publicité
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                  />
                </FormControl>
                <Header title="" subtitle="Contact" />
                <FormControl
                  variant="standard"
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  sx={{
                    width: 900,
                    maxWidth: "100%",
                  }}
                >
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Nom de votre publicité
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                  />
                </FormControl>
                <Grid xs={8}>
                  <FormControl
                    variant="standard"
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"

                  >
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Nom de votre publicité
                    </InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl
                    variant="standard"
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"

                  >
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Nom de votre publicité
                    </InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>{" "}

              </>
            )}


            {forumVideo.upload && activeStep == 1 && (
              <>
                <Header title="" subtitle="Filtrage par zone geographique" />
                <Grid xs={4}>
                  {renderFilterBar()}

                </Grid>
                <Grid
                  xs={8}
                  sx={{
                    maxHeight: "60vh",
                  }}
                >

                </Grid>

              </>
            )}
          </Grid>
        </Grid>
      </FlexBetween>
    </Box >
  );
};

export default Video;
