import { Box, Container, TextField, Typography, Grid, Checkbox, Button } from '@mui/material'
import React, { useState } from 'react'

const EventEntry = () => {
    const [task, setTask] = useState('')
    const [dayTime, setDayTime] = useState('')
    const [checked, setChecked] = useState(false)

    const handleSubmit = () => {
        if(task !== '' && dayTime !== ''){
            console.log(`${task}\n${dayTime} \n${checked}`)
            setTask('')
            setDayTime('')
            setChecked(false)
        }
        
    }

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
            <TextField 
                label='Add Task' 
                variant='outlined' 
                value={task}
                onKeyDown={event => event.key === 'Enter' ? handleSubmit(): ''}
                onChange={(event) => setTask(event.target.value)}
                sx={{width: '100%'}}/>
            <Typography variant='h5' component='h4'margin={1}>
                Day & Time
            </Typography>
            <TextField 
                label='Add Day & Time' 
                variant='outlined' 
                value = {dayTime}
                onKeyDown={event => event.key === 'Enter' ? handleSubmit(): ''}
                onChange={(event) => setDayTime(event.target.value)}
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
                    <Checkbox 
                        margin={1}
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}/>
                </Grid>
            </Grid>
            <Button
            variant='contained'
            onClick={handleSubmit}
            sx={{width:'100%', bgcolor: '#000000'}}
            >
                Save Task
            </Button>
        </Container>
    </Box>
  )
}

export default EventEntry