import { Link } from "react-router-dom";
import React,{useState} from 'react';

import { useNavigate } from 'react-router-dom';
import './navBar.css'
import { toast } from "react-toastify";

import { AiOutlineBars } from "react-icons/ai";
import { IoPersonAdd } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import mono from '../../assests/image.png';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { NavDropdown } from 'react-bootstrap'
import { concat } from "lodash";

import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";

const NavBar = (props) => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const navigate = useNavigate();
    var handleRedirect = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("authToken")
        toast.success("logout Successfully")
        navigate("/login")
    }
    const user = localStorage.getItem("user")

     
    const Nav = styled.div`
      background: #15171c;
      height: 80px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `;
     
    const NavIcon = styled(Link)`
      margin-left: 2rem;
      font-size: 2rem;
      height: 80px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `;
     
    const SidebarNav = styled.nav`
      background: #15171c;
      width: 250px;
      height: 100vh;
      display: flex;
      justify-content: center;
      position: fixed;
      top: 0;
      left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
      transition: 350ms;
      z-index: 10;
    `;
     
    const SidebarWrap = styled.div`
      width: 100%;
    `;
    return (
        <div>
        <IconContext.Provider value={{ color: "#fff" }}>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
           
            <div style={{color: "white",marginLeft: "1px"}}> <FaIcons.FaBars onClick={showSidebar} /> </div>
          
                <div>  <img src={mono} className="mono" alt="iNoteBook" /></div>
                
                <div> {props.search}</div>
                <Link style={{ marginLeft: "1rem" }} className="navbar-brand" to="/">iNote <span className="sr-only">(current)</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" style={{ fontSize: "20px" }}>
                        <li className="nav-item"><Link className="nav-link" to="/Home">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
                      
                        <div className="notification-area"> <li className="nav-item"><Link className="nav-link" to="/About"><FiBell /></Link></li></div>
                        <div className="user-profile-dropdown">
                            <NavDropdown title=<AiOutlineBars /> id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"> Signed in as <Link style={{ color: "black" }} to="/user-profile" >{concat(JSON.parse(user).userDetials.FirstName, ' ', JSON.parse(user).userDetials.LastName)}</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item ><Link to="/login" style={{ color: "black" }} >  <IoPersonAdd /> Add another account</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#Setting">Setting</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleRedirect} >logout</NavDropdown.Item>
                            </NavDropdown></div>
                    </ul>
                </div>
            </nav>
           <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
          </IconContext.Provider>
        </div>
    );
}
export default NavBar;