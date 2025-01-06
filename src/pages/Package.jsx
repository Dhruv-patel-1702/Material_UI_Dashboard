import React from "react";
import Header from "../Components/Header";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrainIcon from "@mui/icons-material/Train";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CategoryIcon from "@mui/icons-material/Category";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Package = () => {
  const packages = [
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
    {
      name: "Dhruv Patel",
      destination: "Gujarat",
      travelBy: "Train",
      categories: "Historical, Wildlife",
      duration: "2D/1N",
      price: 5000,
      status: "Active",
    },
  ];
  return (
    <>
      <div>
        <div>
          <Header name="My Package List" />
          <button className="float-end bg-[#1a73e8] px-8 mt-2 py-2 rounded-lg text-white">
            Add button
          </button>
        </div>

        <div>
          <Box padding={2}>
            <Grid container spacing={2}>
              {packages.map((pkg, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    variant="outlined"
                    sx={{ borderRadius: 2, boxShadow: 3 }}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {pkg.name}
                      </Typography>
                      <Typography variant="body1">
                        <LocationOnIcon color="primary" /> Destination:{" "}
                        {pkg.destination}
                      </Typography>
                      <Typography variant="body1">
                        {pkg.travelBy === "Train" && (
                          <TrainIcon color="secondary" />
                        )}
                        {pkg.travelBy === "Flight" && (
                          <FlightTakeoffIcon color="error" />
                        )}
                        {pkg.travelBy === "Car" && (
                          <DirectionsCarIcon color="action" />
                        )}
                        Travel By: {pkg.travelBy}
                      </Typography>
                      <Typography variant="body1">
                        <CategoryIcon color="success" /> Categories:{" "}
                        {pkg.categories}
                      </Typography>
                      <Typography variant="body1">
                        <AccessTimeIcon color="warning" /> Duration:{" "}
                        {pkg.duration}
                      </Typography>
                      <Typography variant="body1">
                        <AttachMoneyIcon color="success" /> Price per Person:{" "}
                        {pkg.price}
                      </Typography>
                      <Typography variant="body1" color="green">
                        <CheckCircleIcon /> Status: {pkg.status}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Package;
