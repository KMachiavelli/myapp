import React from 'react'
import { Link } from 'react-router-dom'
import { SectionTitle, StyledNavbar } from './NavbarStyles'

const mySections = [
    {name: "HOME",
     link: "/",},
    {name: "PAGE1",
     link: "/page1",},
    {name: "PAGE2",
     link: "/page2",},
    {name: "PAGE3",
     link: "/page3",},
]

const Navbar = () => {
    return (
        <div>
            <StyledNavbar>
                {mySections.map((site)=>{
                    return (
                        <Link to={site.link} style={{ textDecoration: 'none' }}>
                        <SectionTitle>
                            <h1>{site.name}</h1>
                        </SectionTitle>
                        </Link>
                    )
                })}
            </StyledNavbar>
        </div>
    )
}

export default Navbar
