import { Box, Container, TextField, Typography, Grid, Checkbox } from '@mui/material'
import React from 'react'

const EventEntry = () => {
  return (
    <Box display='flex' 
    justifyContent='left' 
    marginLeft={1} 
    marginRight={2}
    marginBottom={3}>
        <Container >
            <Typography variant='h5' component='h4'margin={1}>
                Task
            </Typography>
            <TextField label='Add Task' variant='outlined' sx={{width: '100%'}}/>
            <Typography variant='h5' component='h4'margin={1}>
                Day & Time
            </Typography>
            <TextField 
                label='Add Day & Time' 
                variant='outlined' 
                sx={{width: '100%'}}/>
            <Grid container spacing={2}>
                <Grid item xs={6} >
                <Typography variant='h5' component='h4'margin={1}>
                    Day & Time
                </Typography>
                </Grid>
                <Grid item xs={6}
                display='flex' 
                justifyContent='center'>
                    <Checkbox margin={1}/>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default EventEntry