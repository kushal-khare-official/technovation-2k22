import React from 'react'
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
  Box,
} from '@mui/material'

const EventForm = ({
  eventList,
  selectedEvents,
  setSelectedEvents,
  price,
  setPrice,
}) => {
  const onChange = (i) => {
    let newSelected = selectedEvents
    let newPrice = price

    if (!selectedEvents[i]) {
      newSelected = { ...newSelected, i: eventList[i] }
      newPrice = newPrice + eventList[i].price
    } else {
      newSelected = delete newSelected.i
      newPrice = newPrice - eventList[i].price
    }

    setSelectedEvents(newSelected)
    setPrice(newPrice)
  }

  return (
    <FormGroup>
      {Object.keys(eventList).map((i) => {
        const e = eventList[i]
        return (
          <FormControlLabel
            key={i}
            sx={{
              '& span.MuiTypography-root': {
                width: '100%',
                maxWidth: '250px',
              },
            }}
            control={
              <Checkbox
                checked={selectedEvents[i]}
                onChange={() => onChange(i)}
              />
            }
            label={
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography component="div">{e.name}</Typography>
                <Typography component="div">₹ {e.price}</Typography>
              </Box>
            }
          />
        )
      })}
    </FormGroup>
  )
}

export default EventForm
