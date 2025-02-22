import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material"
import { useState } from "react";


const EmpForm = () => {
    const [shrink, setShrink] = useState(false);
    return (
      <div>
        <Box
          component="form"
          sx={{display: 'flex', justifyContent: 'center', marginTop: "10rem",'& .MuiTextField-root': { m: 1, width: '30ch' } }}
          noValidate
          autoComplete="off">
          <div>
            <Typography variant="h3" sx={{fontFamily: "Oswald", display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>Employee Form</Typography>
            <TextField
              required
              id="Course id"
              label="Course id"
              InputLabelProps={{ style: { color: 'grey' } }}
              InputProps={{ style: { color: 'darkgrey' } }}
            />
            <br />
            <TextField
              id="Course name"
              label="Course name"
              InputLabelProps={{ style: { color: 'grey' } }}
              InputProps={{ style: { color: 'darkgrey' } }}
            />
            <br />
            <TextField
              required
              id="course duration"
              label="course duration"
              InputLabelProps={{ style: { color: 'grey' } }}
              InputProps={{ style: { color: 'darkgrey' } }}
            />
            <br />
            <TextField
              id="Rating"
              label="Rating"
              onFocus={() => setShrink(true)}
              onBlur={(e) => setShrink(!!e.target.value)}
              InputLabelProps={{ shrink, style: { color: 'grey' } }}
              InputProps={{ style: { color: 'darkgrey' }, startAdornment: (<InputAdornment position="start">₹</InputAdornment>) }}
            />
            <br />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Button variant="contained" sx={{fontFamily: "Oswald", backgroundColor: 'grey', width: '90%', fontSize: '1.2rem'}}>Submit</Button>
            </Box>
          </div>
        </Box>
      </div>
    )
  }
  
  export default DashBoard