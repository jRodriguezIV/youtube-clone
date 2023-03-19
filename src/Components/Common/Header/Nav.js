import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import ytLogo from '../Header/ytLogo.png';

export default function Nav() {
    return (
        <div className='nav'>
        {/* <Stack 
            direction='row' 
            alignItems='center' 
            p={2}  
            sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }} >
            
            <Link to="/About" style={{ display: 'flex', alignItems: 'center'}}>About
            <Link to='/'>
            <img src={ytLogo} alt="logo" height={45} />
            </Link>
            </Stack> */}
        </div>
    )
}

