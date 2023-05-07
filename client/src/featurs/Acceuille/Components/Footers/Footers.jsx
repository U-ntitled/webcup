import { CopyrightOutlined, Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Button, Link, styled, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const StyledButton = styled(Button)({
    '&:hover': {
      backgroundColor: '#C525EA',
      color:'white',
      border:'none',

      boxShadow: 'none',
    },
    
  
  })

const Footer = () => {
    const date = new Date()
    const CssTextField = styled(TextField)({
      '& label':{
          color:"#f2f2f2"
      },
      '& label.Mui-focused':{
        color:"#f2f2f2",
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#C525EA',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          height: '10vh',
          color:'#66ACFF',
          borderColor:'#C525EA',
        },
        '&:hover fieldset': {
          borderColor: '#C525EA',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#C525EA',
        },
        
      },
    });
  return (
     <>  
        <Stack direction='row' bgcolor='#251B3C' className='font-Exo2' height='40vh' justifyContent='space-around' alignItems='center'>
          
          <Box display='flex' flexDirection='column'gap={2}> 
               <Typography variant='h5' className='text-white'>
                     USEFULl LINKS
                </Typography>
               <Link href='/about'underline='none' sx={{color:'#fff'}}>
                     <Typography variant='subtitle2'>About us</Typography>
               </Link>
               <Link href='/project' underline='none'sx={{color:'#fff'}}>
                   <Typography variant='subtitle2'>Our project</Typography>
                </Link>
               <Link href='/signUp' underline='none'sx={{color:'#fff'}}>
                        <Typography variant='subtitle2'> Join Us</Typography>
               
                </Link>
               <Link href='/donation'underline='none'sx={{color:'#fff'}}>
                    <Typography variant='subtitle2'> Make a donation</Typography>
               
               </Link>
         </Box>
            <Stack sx={{width:350}} gap={2}>
                    <Typography variant='h5' sx={{textAlign:'center'}} className='text-white'>
                            NEWSLETTER
                     </Typography>
                     <CssTextField className='text-white'
                         fullWidth 
                         label="Enter your emaila address " 
                        //  id="fullWidth" 
                    />
                     <StyledButton 
                         variant='outlined'
                         sx={{color:'#C525EA', border:'1px solid #C525EA'}}
                    > 
                       Subscribe Now
                    </StyledButton>

                 
            </Stack>
          
            <Stack direction='column' gap={13}>    
                <Typography variant='h5' className='text-white'>
                     CONTACT US
                </Typography>

                <Box  display='flex' direction='row' color='#16F2F2' gap={4} justifyContent='center'>
                    <Instagram />
                    <Twitter/>
                    <Facebook/>
                </Box>

            </Stack>
          
         
           
        </Stack>
        <Stack bgcolor='#09081A' height='10vh' flexDirection='row' justifyContent='center' alignItems='center'>
             <Typography variant='h6' className='text-white' >
                  <CopyrightOutlined/>
                  Copyright {date.getFullYear()}
             </Typography>
               
        </Stack> 


         
     </>
    
  )
}

export default Footer