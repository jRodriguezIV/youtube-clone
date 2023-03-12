import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import ytLogo from '../Header/ytLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import MicIcon from '@mui/icons-material/Mic';


export default function Header () {

    return (
        <div className='header-wrapper'>

            <h1>Header</h1>
            <MenuIcon />
            <img src={ytLogo} alt="youtube-logo"/>
            <input className='SearchInput' placeholder='Search' type="text" />
            <SearchIcon />
            <MicIcon />
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar
            src="https://yt3.ggpht.com/yti/AHXOFjWWkjVTtLxjm-A-O5oPCvWX7stmuGEH5o5lR1NN=s88-c-k-c0x00ffffff-no-rj-mo" alt="epps-yt"/>
        </div>
    )
}