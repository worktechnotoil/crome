import React, { useState } from 'react';
import './MenuList.css'
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import MultiLevel from './MultiLevel';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];
const ITEM_HEIGHT = 1000;


const MenuList = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [showList , setShowList] = useState(true)
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setShowList(!showList);
    };
  
    const handlelose = () => {
      setAnchorEl(null);
      setShowList(!showList);
    };
    // const handleClose =() =>{

    //     setShowList(!showList);
    // }

  return (
      <>  
     {
         showList ?
     
    <MenuSharpIcon className='menu_icon_first' onClick={ handleClick } />:
     
    <CloseSharpIcon className='menu_icon_first' onClick={ handlelose }/>
     }
  <div>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handlelose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT,
            width:'30ch',
            backgroundColor:'#121212',
            color:'#fff',

          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handlelose}>
            {option}  
          </MenuItem>
        ))}
      </Menu>
    </div>
    
      </>
  )
}

export default MenuList;