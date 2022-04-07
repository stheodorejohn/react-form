// import './App.css';
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Register() {
  // for Select menu
  //   const [state, setState] = React.useState("");

  //   const handleChange = (event) => {
  //     setState(event.target.value);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >

      <Card
        variant="outlined"
        maxWidth="sm"
        sx={{
          p: 5,
          pt: 2,
          bgcolor: "info.main",
          display: "flex",
          boxShadow: 24,
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: 400,
          borderRadius: 5,

          m: 0,
        }}
      >

        <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,

              borderRadius: 1,
            }}
          >

            <Typography variant="h5" component="legend" sx={{ color: "white" }}>
              Registration Form
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              gap: 1,
              m: 1,
              pb: 0,
              mb: 0,
              borderRadius: 1,
            }}
          >
        
                  <TextField
              sx={{
                borderRadius: 1,

                boxShadow: 14,
                bgcolor: "white",
              }}
              id="filled-basic"
              label="First Name"
              fullWidth
              margin="dense"
              required
              variant="filled"
            />

            <TextField
              sx={{
                borderRadius: 1,

                boxShadow: 14,
                bgcolor: "white",
              }}
              id="filled-basic"
              label="Last Name"
              fullWidth
              margin="dense"
              required
              variant="filled"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              p: 1,
              m: 1,
              mb: 0,
              mt: 0,
              pt: 0,
              borderRadius: 1,
            }}
          >
            <TextField  
              sx={{
                borderRadius: 1,
                boxShadow: 14,
                bgcolor: "white",
                
                       
              }}
              id="filled-basic"
              label="User Name"
              fullWidth
              margin="dense"
              required
              variant="filled"
            />
            <TextField
              sx={{
                bgcolor: "white",
                boxShadow: 14,
                borderRadius: 1,
                color: "text.primary",
              }}
              required
              fullWidth
              id="password-input"
              label="Password"
              margin="dense"
              variant="filled"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              sx={{
                borderRadius: 1,
                boxShadow: 14,
                bgcolor: "white",
              }}
              id="outlined-basic"
              label="e-Mail ID"
              fullWidth
              margin="dense"
              required
              variant="filled"
            />
            <TextField
              sx={{
                borderRadius: 1,
                boxShadow: 14,
                bgcolor: "white",
              }}
              id="outlined-basic"
              label="Address"
              fullWidth
              margin="dense"
              required
              variant="filled"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              gap: 1,
              m: 1,
              pt: 0,
              mt: 0,
              pb: 0,
              mb: 0,
              borderRadius: 1,
            }}
          >
            <FormControl
              variant="filled"
              sx={{
                minWidth: 120,
                bgcolor: "white",
                borderRadius: 1,
                p: 0,
                m: 1,
                ml: 0,
                boxShadow: 14,
                mt: 0,
                mb: 2,
              }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                State
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"ap"}>Andhra Pradesh</MenuItem>
                <MenuItem value={"delhi"}>Delhi</MenuItem>
                <MenuItem value={"karnataka"}>Karnataka</MenuItem>
                <MenuItem value={"kerala"}>Kerala</MenuItem>
                <MenuItem value={"mumbai"}>Mumbai</MenuItem>
                <MenuItem value={"tamilnadu"}>TamilNadu</MenuItem>
                <MenuItem value={"up"}>Uttar Pradesh</MenuItem>
              </Select>
            </FormControl>

            <TextField
              sx={{
                borderRadius: 1,
                boxShadow: 14,
                bgcolor: "white",
                m: 1,
                mt: 0,
                mb: 2,
              }}
              id="basic"
              label="Pincode"
              type="number"
              fullWidth
              margin="dense"
              required
              variant="filled"
            />
          </Box>

          {/* //Register Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,

              borderRadius: 1,
            }}
          >
            <Button
              variant="filled"
              margin="dense"
              sx={{
                boxShadow: 20,
                justifyContent: "center",
                bgcolor: "success.main",
              }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default Register;
