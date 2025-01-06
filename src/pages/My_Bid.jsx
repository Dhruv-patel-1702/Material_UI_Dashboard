import React from "react";
import Header from "../Components/Header";
import { Tabs, Tab, Box } from "@mui/material";
import { Card, CardContent, Typography, Button, Grid} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const My_Bid = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="overflow-y-auto overflow-x-hidden ">
      <Header name="My Bid List" />
      <div className="flex justify-center">
        <div>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="bid status tabs"
            >
              <Tab label="ALL (3)" />
              <Tab label="BOOKED (0)" />
              <Tab label="SUBMIT (14)" />
              <Tab label="REJECT (2)" />
              <Tab label="SAVE (6)" />
              <Tab label="EXPIRE (7)" />
              <Tab label="BOOKED ANOTHER PACKAGE (0)" />
            </Tabs>
          </Box>
        </div>
      </div>
      <div className="flex w-full space-x-6 ml-4 mt-5">
        <div className="w-[48%]">
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="green">
                  Status: Submit
                </Typography>
                <Typography variant="body1">
                  <PersonIcon /> Rakesh Parmar
                </Typography>
                <Typography variant="body1">
                  <FlightTakeoffIcon /> Departure: Ertert
                </Typography>
                <Typography variant="body1">
                  <FlightLandIcon /> Destination: Ertert
                </Typography>
                <Typography variant="body1">
                  <CalendarTodayIcon /> Travel Between: 06/01/2025 to 10/01/2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  
                  My Bid: ₹ 242424
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
        <div className="w-[48%]">
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="green">
                  Status: Submit
                </Typography>
                <Typography variant="body1">
                  <PersonIcon /> Rakesh Parmar
                </Typography>
                <Typography variant="body1">
                  <FlightTakeoffIcon /> Departure: Ertert
                </Typography>
                <Typography variant="body1">
                  <FlightLandIcon /> Destination: Ertert
                </Typography>
                <Typography variant="body1">
                  <CalendarTodayIcon /> Travel Between: 06/01/2025 to 10/01/2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  My Bid: ₹ 242424
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </div>
      <div className="flex w-full space-x-6 ml-4 mt-5">
        <div className="w-[48%]">
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="green">
                  Status: Submit
                </Typography>
                <Typography variant="body1">
                  <PersonIcon /> Rakesh Parmar
                </Typography>
                <Typography variant="body1">
                  <FlightTakeoffIcon /> Departure: Ertert
                </Typography>
                <Typography variant="body1">
                  <FlightLandIcon /> Destination: Ertert
                </Typography>
                <Typography variant="body1">
                  <CalendarTodayIcon /> Travel Between: 06/01/2025 to 10/01/2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  My Bid: ₹ 242424
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
        <div className="w-[48%]">
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="green">
                  Status: Submit
                </Typography>
                <Typography variant="body1">
                  <PersonIcon /> Rakesh Parmar
                </Typography>
                <Typography variant="body1">
                  <FlightTakeoffIcon /> Departure: Ertert
                </Typography>
                <Typography variant="body1">
                  <FlightLandIcon /> Destination: Ertert
                </Typography>
                <Typography variant="body1">
                  <CalendarTodayIcon /> Travel Between: 06/01/2025 to 10/01/2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  My Bid: ₹ 242424
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </div>
      <div className="flex w-full space-x-6 ml-4 mt-5">
        <div className="w-[48%]">
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="green">
                  Status: Submit
                </Typography>
                <Typography variant="body1">
                  <PersonIcon /> Rakesh Parmar
                </Typography>
                <Typography variant="body1">
                  <FlightTakeoffIcon /> Departure: Ertert
                </Typography>
                <Typography variant="body1">
                  <FlightLandIcon /> Destination: Ertert
                </Typography>
                <Typography variant="body1">
                  <CalendarTodayIcon /> Travel Between: 06/01/2025 to 10/01/2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  My Bid: ₹ 242424
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
        <div className="w-[48%]">
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="green">
                  Status: Submit
                </Typography>
                <Typography variant="body1">
                  <PersonIcon /> Rakesh Parmar
                </Typography>
                <Typography variant="body1">
                  <FlightTakeoffIcon /> Departure: Ertert
                </Typography>
                <Typography variant="body1">
                  <FlightLandIcon /> Destination: Ertert
                </Typography>
                <Typography variant="body1">
                  <CalendarTodayIcon /> Travel Between: 06/01/2025 to 10/01/2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  My Bid: ₹ 242424
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
        
      </div>
      <div className="flex w-full space-x-6 ml-4 mt-5">
        <div className="w-[48%]">
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="green">
                  Status: Submit
                </Typography>
                <Typography variant="body1">
                  <PersonIcon /> Rakesh Parmar
                </Typography>
                <Typography variant="body1">
                  <FlightTakeoffIcon /> Departure: Ertert
                </Typography>
                <Typography variant="body1">
                  <FlightLandIcon /> Destination: Ertert
                </Typography>
                <Typography variant="body1">
                  <CalendarTodayIcon /> Travel Between: 06/01/2025 to 10/01/2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  My Bid: ₹ 242424
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
        <div className="w-[48%]">
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="green">
                  Status: Submit
                </Typography>
                <Typography variant="body1">
                  <PersonIcon /> Rakesh Parmar
                </Typography>
                <Typography variant="body1">
                  <FlightTakeoffIcon /> Departure: Ertert
                </Typography>
                <Typography variant="body1">
                  <FlightLandIcon /> Destination: Ertert
                </Typography>
                <Typography variant="body1">
                  <CalendarTodayIcon /> Travel Between: 06/01/2025 to 10/01/2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  My Bid: ₹ 242424
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
        
      </div>
      <div className="flex w-full space-x-6 ml-4 mt-5">
        <div className="w-[48%]">
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="green">
                  Status: Submit
                </Typography>
                <Typography variant="body1">
                  <PersonIcon /> Rakesh Parmar
                </Typography>
                <Typography variant="body1">
                  <FlightTakeoffIcon /> Departure: Ertert
                </Typography>
                <Typography variant="body1">
                  <FlightLandIcon /> Destination: Ertert
                </Typography>
                <Typography variant="body1">
                  <CalendarTodayIcon /> Travel Between: 06/01/2025 to 10/01/2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  My Bid: ₹ 242424
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
        <div className="w-[48%]">
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="green">
                  Status: Submit
                </Typography>
                <Typography variant="body1">
                  <PersonIcon /> Rakesh Parmar
                </Typography>
                <Typography variant="body1">
                  <FlightTakeoffIcon /> Departure: Ertert
                </Typography>
                <Typography variant="body1">
                  <FlightLandIcon /> Destination: Ertert
                </Typography>
                <Typography variant="body1">
                  <CalendarTodayIcon /> Travel Between: 06/01/2025 to 10/01/2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  My Bid: ₹ 242424
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
        
      </div>
      
    </div>
  );
};

export default My_Bid;
