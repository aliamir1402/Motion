import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'; // Assuming you have a SearchIcon imported

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="menu"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ color: 'white' }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '100vw',
          },
        }}
      >
        <MenuItem>
          <div id="navsearch" className='bor flex navSearch'>
            <div className='bor flex justify-center items-center'>
              <SearchIcon /> {/* Render the SearchIcon */}
            </div>
            <div className='bor flex justify-center items-center'>
              <input type="text" name="" id="" placeholder='Search'/>
            </div>
          </div>
        </MenuItem>
        <MenuItem>
          <div id="navLogin" className='bor flex justify-center items-center'>
            <button>Log In</button>
          </div>
        </MenuItem>
        <MenuItem>
          <div id="navSignup" className='bor flex justify-center items-center'>
            <button>Get Started</button>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
