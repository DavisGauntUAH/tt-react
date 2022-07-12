import { Container} from '@mui/material'
import React from 'react'
import Task from './Task'

const Tasks = () => {
  return (
    <Container display='flex' justifyContent='center'>
        <Task />
        <Task />
        <Task />
    </Container>
  )
}

export default Tasks