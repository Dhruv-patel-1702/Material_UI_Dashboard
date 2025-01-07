import React from 'react'
import { Card, CardContent, Typography, Button, Grid} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Navigator from './Navigator'

const booked = () => {
  return (
    <div>
      <Navigator/>
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
      </div>
    </div>
  )
}

export default booked
