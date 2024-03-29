import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import ytLogo from '../Header/ytLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import MicIcon from '@mui/icons-material/Mic';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Header ({searchState, setSearchState}) {

    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchState(searchInput);
        setSearchInput('');
    }


    return (
        <div className='header-wrapper'>
        <div className='header-left'>
            <MenuIcon />
            <Link to='/'>
            <img className='header-logo' src={ytLogo} alt='youtube-logo' />
            </Link>
        </div>
        <div className='header-input'>
            <div className='header-middle'>
            <input className='SearchInput' placeholder='Search...' type='text' value={searchInput} onChange={handleChange} />
            <SearchIcon type='submit' className='header-searchBtn' onClick={handleSubmit} sx={{color: 'red'}} />
            </div>
        
            <MicIcon className='header-icons'/>
        </div>
        <div className='header-right'>
            <VideoCallIcon className='header-icons'/>
            <AppsIcon className='header-icons'/>
            <NotificationsIcon className='header-icons'/>
            <Link to='/about'>
            <Avatar
            src="http://uniformsandmore.in/wp-content/uploads/2018/02/abt.png" alt="about_icon"/>
            </Link>    
        </div>
        </div>
    )
}