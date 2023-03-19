import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

export default function Nav() {
    return (
        <div className='nav'>
        <Stack 
            direction='row' 
            alignItems='center' 
            p={2}  
            sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }} >
            
            {/* <img src={ require('./ytLogo.png') } alt='youtube-logo' /> */}
            <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>Home</Link>
            <Link to="/About" style={{ display: 'flex', alignItems: 'center'}}>About</Link>
            </Stack>
        </div>
    )
}

