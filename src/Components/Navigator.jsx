import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Tabs, Tab, Box } from "@mui/material";

const Navigator = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate("/mybid/all"); 
    } else if (newValue === 1) {
      navigate("/mybid/booked");
    } else {
      navigate("/mybid"); 
    }
  };

  return (
    <div>
      <div className="overflow-y-auto overflow-x-hidden">
        <Header name="My Bid List" />
        <div className="flex justify-center">
          <div>
            <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="bid status tabs">
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
      </div>
    </div>
  );
};

export default Navigator;