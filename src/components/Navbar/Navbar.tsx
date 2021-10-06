import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionTitle, StyledNavbar } from './NavbarStyles'
import iconPaw from '../../assets/icons/icon-paw.svg'
import iconDog from '../../assets/icons/icon-dog.svg'
import iconCat from '../../assets/icons/icon-cat.svg'
import iconCloud from '../../assets/icons/icon-cloud.svg'
import { BreakStatement } from 'typescript'
import { BreakPointContext } from '../../App'
import { isMobile, useBreakpoint } from '../../customHooks/useBreakpoint'
import iconMenu from '../../assets/icons/icon-menu.svg'
import iconClose from '../../assets/icons/icon-close.svg'

const mySections = [
    {name: "HOME",
     link: "/",
     icon: iconPaw,
     isActive: false,
     id: 0},
    {name: "PAGE1",
     link: "/page1",
     icon: iconDog,
     isActive: false,
     id: 1},
    {name: "PAGE2",
     link: "/page2",
     icon: iconCat,
     isActive: false,
     id: 2},
    {name: "PAGE3",
     link: "/page3",
     icon: iconCloud,
     isActive: false,
     id: 3},
];

export interface SectionTitleI {
    isActive: boolean,
    onClick: Function,
};

export interface MySectionsI {
    name: string,
    link: string,
    icon: string,
    isActive?: boolean
};

export interface BreakPointI {
    breakpoint: boolean,
}

export interface StyledNavbarI extends BreakPointI{
    isToggled?: boolean,
}

const Navbar = () => {
    const breakPointContext = useContext(BreakPointContext);
    const [mySetcions, setMySections] = useState(mySections);
    const [isToggled, setIsToggled] = useState(false);
    const [isToggledAnimate, setIsToggledAnimate] = useState(false);
    const navBarRef = useRef(null);
    const setActiveHandle = (id: number) => {
            // TODO: change to ref
            mySections.forEach((section)=>{
                if(section.id != id) {
                    document.getElementById(section.id.toString())?.classList.remove("active");
                    console.log("!= " + section.id + " " + id);
                }
                else {
                    document.getElementById(section.id.toString())?.classList.add("active");
                    console.log("== " + section.id + " " + id);
                }
            })
            
    }

    useEffect(() => {
        //TODO: Rozwiazanie tymczasowe, zmienic
        if(window.location.href == "http://localhost:3000/")
            document.getElementById("0")?.classList.add("active");
    }, []);

    const toggleNavbar = () => {
        if(!isToggled) {
        setIsToggled(!isToggled);
        setIsToggledAnimate(!isToggledAnimate);
        }
        if(isToggled) {
            setIsToggledAnimate(!isToggledAnimate);
            setTimeout(() => setIsToggled(!isToggled), 1000);
        }
        console.log(isToggledAnimate);
    }
    
    return (<>
            {!isMobile() && <StyledNavbar breakpoint={breakPointContext}>
                {mySections.map(({link, name, icon, isActive, id})=>{
                    return (
                        <Link to={link} style={{ textDecoration: 'none' }} key={id}>
                        <SectionTitle isActive={isActive} onClick={()=>setActiveHandle(id)} id={id.toString()}>
                            <h2>{name}</h2><img src={icon} alt ="iconPaw"></img>
                        </SectionTitle>
                        </Link>
                    )
                })}
            </StyledNavbar>}
            {isMobile() && <div> 
                <img style={{width: "45px", margin: "10px", position:"fixed"}} src={iconMenu} onClick={toggleNavbar} alt="OPEN"/>
                { !isToggled ?
                ""
                :
                <section>
                <StyledNavbar breakpoint={breakPointContext} ref={navBarRef} isToggled={isToggledAnimate}>
                    <img style={{width: "40px", margin: "10px", display: "flex", alignContent: "right"}} src={iconClose} alt="CLOSE" 
                    onClick={toggleNavbar} id="closeImg"/>
                     {mySections.map(({link, name, icon, isActive, id})=>{
                    return (
                        <Link to={link} style={{ textDecoration: 'none' }} key={id}>
                        <SectionTitle isActive={isActive} onClick={()=>setActiveHandle(id)} id={id.toString()}>
                            <h2>{name}</h2><img src={icon} alt ="iconPaw"></img>
                        </SectionTitle>
                        </Link>
                    )
                })}
                </StyledNavbar>
                </section>
                }
                </ div>}
            </>
    )
}

export default Navbar
