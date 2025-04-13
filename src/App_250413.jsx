import React from 'react'
import { Grid, Typography, Paper, Box } from '@mui/material'
import ContactForm from './component_250413/ContactForm'
import ContactList from './component_250413/ContactList'
// mui 설치
// yarn add @mui/material @emotion/react @emotion/styled

const App_250413 = () => {
  return (
      // py: 위아래 /px 양옆 간격
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          background: 'linear-gradient(to right, #ffe3ec, #ffdce0)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 2,
          px: 2,
          overflowX: 'hidden',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 'md', mx: 'auto' }}>
          <Paper
            sx={{
              py: 2,
              borderRadius: 4,
              backgroundColor: '#fff0f5',
              width: '100%',
              maxWidth: '100%', 
            }}
          >
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }} sx={{display: 'flex', justifyContent: 'center',px: { xs: 2, sm: 4 } }}>
                <ContactForm />
              </Grid>
              <Grid size={{ xs: 12, md: 8 }} sx={{px: { xs: 2, sm: 4 }}}>
                <ContactList />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
  )
}

export default App_250413
