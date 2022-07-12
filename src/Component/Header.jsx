import React from 'react'
import { Button, Grid, Typography } from '@mui/material';

const Header = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={8}>
            <Typography variant='h4' component='h2' margin={2}>
                Task Tracker
            </Typography>
        </Grid>
        <Grid item xs={4} 
        display='flex' 
        justifyContent='center'>
            <Button variant='contained' color='success' sx={{margin:'auto'}}>
                add
            </Button>
        </Grid>
    </Grid>
  )
}

export default Header