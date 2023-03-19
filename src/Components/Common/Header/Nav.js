// import { useState, useEffect } from 'react';
import { Divider, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

import './Nav.css';

export default function Nav() {
    return (
        <div className='nav'>
        <Stack 
            direction='row'
            justifyContent='center'
            alignItems='center'
            // divider={<Divider orientation='vertical' flexItem />}
            spacing={2}
            >
            <HomeIcon /> <p>Home</p>
            <WhatshotIcon /> <p>Trending</p>
            <SubscriptionsIcon /> <p>Subscription</p>
            <LibraryAddIcon /> <p>Library</p>
            <HistoryIcon /> <p>History</p>
            <OndemandVideoIcon /> <p>Your Videos</p>
            <WatchLaterIcon /> <p>Watch Later</p>
          </Stack>
        </div>
    )
}

