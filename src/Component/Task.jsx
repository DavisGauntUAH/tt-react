import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'

const Task = () => {
  return (
    <Card sx={{width: '95%', margin: '10px', bgcolor: '#d9d9d9'}} variant='outlined'>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Typography variant='h6' component='h3' marginLeft={1}>
                    Event
                </Typography>
                <Typography variant='body2' component='subtitle1' marginLeft={2}>
                    date
                </Typography>
            </Grid>
            <Grid item xs={4}
            display='flex' 
            justifyContent='right'>
                <Button color='error'>
                    x
                </Button>
            </Grid>
        </Grid>
    </Card>
  )
}

export default Task