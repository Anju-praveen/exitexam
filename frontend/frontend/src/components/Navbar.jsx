import { AppBar, Autocomplete, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor:'black'}}>
          <Toolbar>
            <Link to={'/'}></Link>
            <Box sx={{ ml: 'auto' }}>
              <Button sx={{fontSize: '1.3rem', fontFamily: "Oswald", '& .MuiTouchRipple-root': {color: 'white'}}}><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
              <Button sx={{fontSize: '1.3rem', fontFamily: "Oswald", '& .MuiTouchRipple-root': {color: 'white'}, marginLeft: '2em' }}><Link to={'/form'} style={{ textDecoration: 'none', color: 'white' }}>Employee Form</Link></Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

    </div>
  )
}

export default NavBar