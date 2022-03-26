import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { getAuth, signOut } from "firebase/auth";
import Logo from "../../../Images/pharmacy/logo";
import i18next from "i18next";
import cookies from "js-cookie";
import SigninModal from "./SigninModal";
import "./PHeader.css";
import { useHistory } from "react-router-dom";

export default function PHeader() {
    const history = useHistory();
    const [btn, setBtn] = useState(false);
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(localStorage.getItem('authUserID'))
    }, [user])

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                localStorage.removeItem('Cart');
                localStorage.removeItem('authUserID');
                history.push('/pharmacy');
            })
            .catch((error) => {
                console.log(error);
            });
        window.location.reload();
    };

    const Languages = [
        {
            code: "ar",
            dir: "ltr",
        },
        {
            code: "en",
            dir: "rtl",
        },
    ];

    const currentLangCode = cookies.get("i18next") || "ar";
    const currentLang = Languages.find((l) => l.code === currentLangCode);
    const { t } = useTranslation();

    useEffect(() => {
        document.body.dir = currentLang.dir || "rtl";
    }, [currentLang]);

    return (
        <>
            <Navbar
                className="d-flex flex-row-reverse justify-content-between"
                style={{ background: "rgb(1, 114, 203)" }}
                expand="md"
            >
                <Navbar.Brand href="/pharmacy">
                    <img src={Logo} alt="logo" />
                </Navbar.Brand>
                <Nav className="nav pe-5">
                    <Nav.Link className="me-3 text-light fs-6">
                        {t("NavBar_Call")}
                    </Nav.Link>
                    <Nav.Link
                        className="me-5 text-light fs-6"
                        onClick={() =>
                            i18next.changeLanguage(currentLang.code === "ar" ? "en" : "ar")
                        }
                    >
                        {t("NavBar_Lang")}
                    </Nav.Link>
                    {user == null ? (
                        <Button className="btn-login" onClick={() => setBtn(!btn)}>
                            {t("NavBar_Enter")}
                        </Button>
                    ) : (
                        <Button className="btn-login" onClick={handleSignOut}>
                            {t("NavBar_Exit")}
                        </Button>
                    )}
                </Nav>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
                    <Offcanvas.Header closeButton closeVariant="white"></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav>
                            <Nav.Link className="offcanvas-links">
                                {t("NavBar_Call")}
                            </Nav.Link>
                            <Nav.Link
                                className="offcanvas-links"
                                onClick={() =>
                                    i18next.changeLanguage(Languages.code === "ar" ? "en" : "ar")
                                }
                            >
                                {t("NavBar_Lang")}
                            </Nav.Link>
                            {user == null ? (
                                <Nav.Link
                                    className="offcanvas-links"
                                    onClick={() => setBtn(!btn)}
                                >
                                    {t("NavBar_Enter")}
                                </Nav.Link>
                            ) : (
                                <Nav.Link
                                    className="offcanvas-links"
                                    onClick={handleSignOut}
                                    style={{ color: "white" }}
                                >
                                    {t("NavBar_Exit")}
                                </Nav.Link>
                            )}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
            <SigninModal btn={btn} />
        </>
    );
}
