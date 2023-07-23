import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";
import OverviewChart from "components/OverviewChart";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import { NavLink, useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import { CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import "./style.css";
const Dashboard = () => {
  const renderCrds = (item, key) => {
    return (
      <Card sx={{ maxWidth: 345 }} key={key} className="card-video mt-3">
        <CardHeader />
        <NavLink to={`annonce/`}>
          <video style={{ width: "100%", height: "30vh" }}>
            <source
              //src={`http://localhost:5000/api/url/video/${item.file}`}
              src={`https://www.youtube.com/watch?v=PzRi2JyRlvw&list=RDPzRi2JyRlvw&start_radio=1`}
              type="video/mp4"
            ></source>
          </video>
        </NavLink>
        <CardContent>
          <Typography variant="body" color="text.primary" style={{ display: "flex", justifyContent: "end" }}>
            <Button style={{ background: "red", fontSize: "10px" }}> Live</Button>
          </Typography>
        </CardContent>
        <Typography variant="body" color="text.primary" >
          <Typography variant='h5' ml={1}><span>Publicité 1 -</span>En cours de diffusion <CircularProgress color="error" size="10px" /></Typography>
          <Typography variant="p" ml={1} >30K vues<CircularProgress /> 12/04/2023 </Typography>
        </Typography>
      </Card>
    );
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("15/09/2023", "12:15:20", "Importation de pub numero 1"),
    createData("15/09/2023", "12:15:20", "Importation de pub numero 1"),
  ];
  const renderHistoric = (item, key) => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "red" }} >Date </TableCell>
              <TableCell style={{ color: "red" }} align="left">Heure</TableCell>
              <TableCell style={{ color: "red" }} align="left">Activité</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return (
    <Box ml="1rem" p="1rem" sx={{ boxShadow: 3 }} >
      <FlexBetween m="0 0 1rem">
        <Header title="" subtitle="Vos Dernoeres Videos" />
      </FlexBetween>
      <FlexBetween>
        {renderCrds()}
      </FlexBetween>
      <FlexBetween m="1.5rem "  >
        <Header title="" subtitle="Historique" />
      </FlexBetween>
      <FlexBetween p="1rem">
        {renderHistoric()}
      </FlexBetween>



    </Box>
  );
};

export default Dashboard;
