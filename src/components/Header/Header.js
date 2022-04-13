import React from 'react';
// import MenuSharpIcon from '@material-ui/icons/MenuSharp';
// import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import RoomSharpIcon from '@material-ui/icons/RoomSharp';
import './Header.css'
// import MenuList from './MenuList';
import DropDown from './DropDown';

const url = "https://media.croma.com/video/upload/v1648185258/Croma%20Assets/UI%20Assets/IPL_logo/Croma_IPL_Logo.mp4";
const pathUrl = "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/video/upload/v1648185258/Croma%20Assets/UI%20Assets/IPL_logo/Croma_IPL_Logo.mp4/v_muted,mxw_128,s_vp9,s_av1,f_auto"



const Header = () => {
    // const [showMenu, setShowMenu] = useState(true);
    // const [showList , setShowList] = useState(false)

// const handleMenu =() =>{
//     setShowMenu(!showMenu)
//     setShowList(!showList)
// }

// const handleClose =() =>{
//     setShowMenu(true)
// }

    return (

        <div className='header-container'>
            <div className='link_container'>
                <a className='logo' href='/'>
                    <video style={{ width: "100%", height: "100%" }}
                        autoPlay={true} loop muted
                        data-speedsize-src={url}
                        playsInline={true} loading="lazy" src={pathUrl}>
                        <source src={url} /></video>
                </a>
                   <DropDown />
                   {/* <MenuList /> */}
                <div className='menu_st'>
                    <span>  Menu</span>
                </div>
                <div className='ac-container'>
                    <div className="form-body">
                        <input className="form-control-b" type="search" placeholder="What are you looking for ?" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <div className='icon-mg'>
                        <span>
                        <RoomSharpIcon style={{color:'white'}}/>
                           
                        </span>
                        <span style={{ color: 'white', fontSize: '14px' }}> Mumbai,  400049, .</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="white" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                            </svg>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-person-fill user-icon" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Header;












                   
               
    // ) :
    //  (
    //      
    //      <MenuList handleMenu={[showMenu, setShowMenu]}/>
      
    //  )