import React from "react";
import styles from "./main.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler,
  NavLink,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { createUserAC } from "../store/auth/actions";

const MainNav =  () => {
  //Check if user isAuth
  const isAuth = useSelector((store) => store.auth.user);
  console.log(isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onOutHandler = async () => {
    await fetch("/auth/out", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch(createUserAC(null));
    navigate('/');
  }
  
  //Component
  return (
    <div /* className={styles.wrapper} */>
      <Navbar expand="md"  className={styles.navbar}>
        <NavbarBrand className={styles.navbarbrand}>
          <Link className={styles.navlink} to="/">Своя Игра</Link>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            {/* IF Auth is false */}
            {isAuth === null && (
              <NavItem className={styles.navitem}>
                <NavLink>
                  <Link className={styles.navlink} to="/auth/signup">Sign Up</Link>
                </NavLink>
              </NavItem>
            )}

            {isAuth === null && (
              <NavItem className={styles.navitem}>
                <NavLink>
                  <Link className={styles.navlink} to="/auth/signin">Sign In</Link>
                </NavLink>
              </NavItem>
            )}

            {/* IF Auth is true */}
            {isAuth && (
              <NavItem className={styles.navitem} onClick={onOutHandler}>
                <NavLink>
                  <Link className={styles.navlink} to="#">Выйти</Link>
                </NavLink>
              </NavItem>
            )}

            {isAuth && (
              <NavItem className={styles.navitem}>
                <NavLink>
                  <Link className={styles.navlink} to="/profile">Профиль</Link>
                </NavLink>
              </NavItem>
            )}

            {isAuth && (
              <NavItem className={styles.navitem}>
                <NavLink>
                  <Link className={styles.navlink} to="/game/resume">Продолжить игру</Link>
                </NavLink>
              </NavItem>
            )}

            {isAuth && (
              <NavItem className={styles.navitem}>
                <NavLink>
                  <Link className={styles.navlink} to="/game/new">Начать новую игру</Link>
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNav;
