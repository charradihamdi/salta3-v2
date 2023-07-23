import React, { useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { useGetCustomersQuery, useDeleteUserMutation } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import "./index.css";
import { useDispatch } from "react-redux";
import FlexBetween from "components/FlexBetween";
import { AspectRatio } from "@mui/icons-material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import logo from "../../assets/profile.jpeg";
const Profil = () => {
  const dispatch = useDispatch();

  return (
    <Box ml="1rem" p="1rem" sx={{ boxShadow: 0 }}>
      <Header title="" subtitle="" />
      <FlexBetween pl={3}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ width: "90%" }}
        >
          <Grid xs={4}>
            <Box variant="outlined" className="profilImage">
              <img src={logo} alt={logo} />
              <Button className="changeImage">
                <AddAPhotoIcon />
                Changer le photo de profil
              </Button>
            </Box>
          </Grid>
          <Grid xs={7} mt={5}>
            <Typography className="dangerLine" />
            <Button variant="contained" p={3} sx={{
              color: 'white', background: 'red', marginY: '1rem',
              '& :hover': {
                color: 'red', background: 'white', marginY: '1rem',
              },
            }}>Modifier mon Profil</Button>
          </Grid>
        </Grid>
      </FlexBetween>



      <FlexBetween pl={3} mt={2}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ width: "90%" }}
        >
          <Grid xs={6} className="forumUser">
            <Typography className='infoUser'>Nom de compte annoncer</Typography>
            <Typography className='infoUser'>Nom </Typography>
            <Typography className='infoUser'>Prénom</Typography>
            <Typography className='infoUser'>Domain d'activité</Typography>
            <Typography className='infoUser'>Adresse Email</Typography>
          </Grid>
          <Grid xs={6} className="forumUser">
            <Typography className='infoUser'>charradi</Typography>
            <Typography className='infoUser'>hamdi</Typography>
            <Typography className='infoUser'>dev</Typography>
            <Typography className='infoUser'>+216 25 832 500</Typography>
            <Typography className='infoUser'>Salta3</Typography>
            <Typography className='infoUser'>hamdi.charradi@astrolab-agency.com</Typography>
          </Grid>
        </Grid>
      </FlexBetween>
    </Box>
  );
};

export default Profil;
