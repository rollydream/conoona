import React, { useState,useEffect } from 'react'
import { TextField, List, ListItem, ListItemText, Typography, Box, Divider,Button } from '@mui/material'
import usePhoneBookStore from '../stores_250413/usePhoneBookStore'

const ContactList = () => {
  const { phoneBook, searchContactsByName ,removeContact } = usePhoneBookStore()
  const [query, setQuery] = useState('')
  const [filteredContacts, setFilteredContacts] = useState(phoneBook)

  // 검색어가 비어있다면 전체 목록을 보여주고, 
  // 입력되었다면 검색 결과 보여줌
  const handleSearch = () => {
    if (query.trim() === '') {
      setFilteredContacts(phoneBook)
    } else {
      const result = searchContactsByName(query)
      setFilteredContacts(result)
    }
  }

  // 추가/ 삭제할 때 값 동기화해서 항상 최신화
  useEffect(() => {
    setFilteredContacts(phoneBook)
  }, [phoneBook])

  return (
    <Box>
      {/*  fontSize: 'clamp(16px, 2.5vw, 20px)' 반응형 폰트 */}
      <Typography
        variant="h2"
        sx={{
          color: '#c2185b',
          mb: 1,
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          fontWeight: 'bold',
        }}
      >
        연락처 목록
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          mb: 2,
        }}
      >
        <TextField
          fullWidth
          label="검색할 이름 입력"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          size="small"
          sx={{
            bgcolor: 'white',
            borderRadius: 2,
          }}
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          sx={{
            width: 120, 
            bgcolor: '#f06292',
            '&:hover': { bgcolor: '#ec407a' },
            borderRadius: 3,
            fontWeight: 'bold',
            px: 3,
          }}
        >
          검색
        </Button>
      </Box>
      <List sx={{ height: 300,maxHeighteight: 300, overflowY: 'auto',borderRadius: 3, border: '1px solid',borderColor: 'grey.300',bgcolor: 'white', }}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem
                secondaryAction={
                  <Button variant="contained" sx={{
                    borderRadius: 3,
                    fontWeight: 'bold',
                    px: 3,
                  }} onClick={() => removeContact(item.id)}> 삭제 </Button>
                }
              >
                <ListItemText
                  primary={item.name}
                  secondary={item.phoneNumber}
                  slotProps={{
                    primary: {
                      fontWeight: 'bold',
                      color: '#d81b60',
                    },
                  }}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))
        ) : query.trim() !== '' ? (
          <Typography color="text.secondary" sx={{ textAlign: 'center' }}>검색 결과 "{query}"는 없는 이름입니다</Typography>
        ) : null}
      </List>
    </Box>
  )
}

export default ContactList
