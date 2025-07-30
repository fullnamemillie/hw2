import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider sx={{
            color: '#00CC22',
            height: 4,
            '& .MuiSlider-rail': {
                backgroundColor: 'gray',
                opacity: 1,
            },
            '& .MuiSlider-track': {
                backgroundColor: '#00CC22',
                border: 'none',
            },
            '& .MuiSlider-thumb': {
                height: 24,
                width: 24,
                backgroundColor: 'white',
                border: '3px solid #00CC22',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#00CC22',
                },
                '&:hover': {
                    boxShadow: '0 0 0 6px rgba(0, 255, 0, 0.3)',
                },
                '&:focus, &.Mui-active': {
                    boxShadow: '0 0 0 8px rgba(0, 255, 0, 0.3)',
                },
            },
        }}
                {...props}
                {...props}
        />
    )
}

export default SuperRange
