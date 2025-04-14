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
    const isNameValid = validateName(name)
    const isPhoneValid = validatePhoneNumber(phoneNumber)

    setNameError(!isNameValid)
    setPhoneNumberError(!isPhoneValid)

    if (!isNameValid || !isPhoneValid) return

    addContact(name.trim(), phoneNumber.trim())
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
        onBlur={() => setNameError(!validateName(name))}
        fullWidth
        sx={{ bgcolor: 'white', borderRadius: 2 }}
        size="small"
        error={nameError}
        helperText={nameError ? '한글과 영문만 입력 가능합니다.' : ''}
        inputProps={{ inputMode: 'text' }}
      />

      <TextField
        label="전화번호"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        onBlur={() => setPhoneNumberError(!validatePhoneNumber(phoneNumber))}
        fullWidth
        sx={{ bgcolor: 'white', borderRadius: 2 }}
        size="small"
        error={phoneNumberError}
        helperText={phoneNumberError ? '숫자만 입력해주세요.' : ''}
        inputProps={{ inputMode: 'numeric' }}
      />

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
