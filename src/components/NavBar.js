import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div style={styles.navbar}>
      <NavLink to="/" style={styles.link}>Home</NavLink>
      <NavLink to="/movies" style={styles.link}>Movies</NavLink>
      <NavLink to="/directors" style={styles.link}>Directors</NavLink>
      <NavLink to="/actors" style={styles.link}>Actors</NavLink>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#801818',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#fff',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
  }
};

export default NavBar;
 