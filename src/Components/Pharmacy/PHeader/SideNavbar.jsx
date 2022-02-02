import React, { useState } from 'react';
import { NavDropdown, Offcanvas, Button } from 'react-bootstrap';

export default function SideNavbar(props) {
    const [showNav, setShowNav] = useState(false);

    const handleCloseNav = () => setShowNav(false);
    const handleShowNav = () => setShowNav(true);
    return (
        <>
            <Button variant="primary" onClick={handleShowNav}>
                Launch
            </Button>

            <Offcanvas showNav={showNav} onHide={handleCloseNav}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li>
                            <NavDropdown.Divider />
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}