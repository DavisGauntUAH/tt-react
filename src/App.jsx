import React from 'react'
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box';
import Header from './Component/Header';
import Tasks from './Component/Tasks';
import EventEntry from './Component/EventEntry';
import { useSelector} from 'react-redux'


const App = () => {

  const addFlag = useSelector(state => state.addFlag.value)  

  return (
    <div>
      <CssBaseline />
      <Box display='flex' justifyContent='center' marginTop={2}>
        <Paper elevation={3} sx={{width:'500px'}}>
            <Header />
            {addFlag ? <EventEntry /> : ''}            
            <Tasks/>
        </Paper>
      </Box>
    </div>
  )
}

export default App