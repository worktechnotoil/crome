import React from 'react';
import './DropDown.css';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';

const DropDown = () => {
  const [show, setShow] = React.useState(true)

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
const handleClick =()=>{
  setShow(!show); 
  myFunction();

}
  return (
    <div>
      <div className="dropdown">
      { show ?
        (<MenuSharpIcon onClick={handleClick} className="dropbtn " />):
        (<CloseSharpIcon onClick={()=>setShow(!show)}  className="dropbtn"/>) }
    
        <div id="myDropdown" className="dropdown-content">
          <h3>SHOP BY CATEGORY</h3>
          <ul className='m_d'>
            <li className='hoverLi'>
              <a href="/">Television & Accessories 
              <ArrowForwardIosSharpIcon style={{fontSize:'15',
               color:'white',marginBottom:'-9px', 
               marginLeft:'25px'}}/></a>
              <ul className='showContent content-list'>
                <li><a href="">LED TVs</a></li>
                <li><a href="">QLED TVs</a></li>
                <li><a href="">OLED TVs</a></li>
                <li><a href="">4KLED TVs</a></li>
                <li><a href="">FULL HD TVs</a></li>
                <li><a href="">SMART TVs</a></li>
                <li><a href="">LED TVs</a></li>
                <li><a href="">QLED TVs</a></li>
                <li><a href="">OLED TVs</a></li>
                <li><a href="">OLED TVs</a></li>
                <li><a href="">4KLED TVs</a></li>
                <li><a href="">FULL HD TVs</a></li>
                <li><a href="">SMART TVs</a></li>
              </ul>
            </li></ul>
            <ul className='m_d'>
            <li className='hoverLi'>
              <a href="/">Home Applience
              <ArrowForwardIosSharpIcon style={{fontSize:'15',
               color:'white',marginBottom:'-9px', 
               marginLeft:'83px'}}/></a>
              <ul className='showContent content-list'>
                <li><a href="">Air conditionar</a></li>
                <li><a href="">Inverter ACs</a></li>
                <li><a href="">Portable ACs</a></li>
                <li><a href="">Air conditionar</a></li>
                <li><a href="">Inverter ACs</a></li>
                <li><a href="">Portable ACs</a></li>
                <li><a href="">Air conditionar</a></li>
                <li><a href="">Inverter ACs</a></li>
                <li><a href="">Portable ACs</a></li>
                <li><a href="">Air conditionar</a></li>
                <li><a href="">Inverter ACs</a></li>
                <li><a href="">Portable ACs</a></li>
              </ul>
            </li></ul>
          <ul className='m_d'>
            <li className='hoverLi'>
              <a href="/">Phones & Wearables
              <ArrowForwardIosSharpIcon style={{fontSize:'15',
               color:'white',marginBottom:'-9px', 
               marginLeft:'52px'}}/>
              </a>
              <ul className='showContent content-list'>
                <li><a href="">Air conditionar</a></li>
                <li><a href="">Inverter ACs</a></li>
                <li><a href="">Portable ACs</a></li>
                <li><a href="">Air conditionar</a></li>
                <li><a href="">Inverter ACs</a></li>
                <li><a href="">Portable ACs</a></li>
                <li><a href="">Air conditionar</a></li>
                <li><a href="">Inverter ACs</a></li>
                <li><a href="">Portable ACs</a></li>
                <li><a href="">Air conditionar</a></li>
                <li><a href="">Inverter ACs</a></li>
                <li><a href="">Portable ACs</a></li>
              </ul>
            </li></ul>
          
        </div>
      </div>
    </div>
  )
}

export default DropDown