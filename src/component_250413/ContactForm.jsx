import {
  TextField,
  Box,
  Button,
  Typography,
  FormHelperText,
} from '@mui/material'
import React, { useState } from 'react'
import usePhoneBookStore from '../stores_250413/usePhoneBookStore'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [nameError, setNameError] = useState(false)
  const [phoneNumberError, setPhoneNumberError] = useState(false)

  const addContact = usePhoneBookStore((state) => state.addContact)

  const validateName = (value) => /^[a-zA-Z가-힣]+$/.test(value.trim())
  const validatePhoneNumber = (value) => /^\d+$/.test(value.trim())

  const handleAddContact = () => {
    const trimmedName = name.trim()
    const trimmedPhone = phoneNumber.trim()
  
    const isNameValid = validateName(trimmedName)
    const isPhoneValid = validatePhoneNumber(trimmedPhone)
  
    setNameError(!isNameValid)
    setPhoneNumberError(!isPhoneValid)
  
    if (!isNameValid || !isPhoneValid) return
  
    addContact(trimmedName, trimmedPhone)
    setName('')
    setPhoneNumber('')
  }

  return (
    <Box display="flex" flexDirection="column" gap={1} sx={{ width: '100%' }}>
      <Typography
        variant="h2"
        sx={{
          color: '#c2185b',
          mb: 1,
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          fontWeight: 'bold',
        }}
      >
        연락처
      </Typography>

      <TextField
        label="이름"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{ bgcolor: 'white', borderRadius: 2 }}
        size="small"
        error={nameError}
        slotProps={{
          input: {
            inputMode: 'text',
          },
        }}
      />
      {nameError && (
        <FormHelperText sx={{ color: 'error.main', ml: 1 }}>
          문자만 입력해주세요.
        </FormHelperText>
      )}

      <TextField
        label="전화번호"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        fullWidth
        sx={{ bgcolor: 'white', borderRadius: 2 }}
        size="small"
        error={phoneNumberError}
        slotProps={{
          input: {
            inputMode: 'numeric',
          },
        }}
      />
      {phoneNumberError && (
        <FormHelperText sx={{ color: 'error.main', ml: 1 }}>
          숫자만 입력해주세요.
        </FormHelperText>
      )}

      <Button
        variant="contained"
        onClick={handleAddContact}
        sx={{
          mt: 1,
          bgcolor: '#f06292',
          '&:hover': { bgcolor: '#ec407a' },
          borderRadius: 3,
          fontWeight: 'bold',
        }}
      >
        연락처 추가
      </Button>
    </Box>
  )
}

export default ContactForm
