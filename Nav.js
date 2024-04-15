import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ search, setsearch }) => {
  return (
    <nav className='Nav'>
      <h1 style={{color:'#fff',paddingRight:'50px'}}>Book Website</h1>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/team" className="nav-link">Team</Link>
      <Link to="/about" className="nav-link">About</Link>
      <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="Search Blogs" className="search-label">Search Blogs</label>
        <input 
          autoFocus
          type="text"
          value={search}
          placeholder='Search'
          onChange={(e)=>setsearch(e.target.value)}
          className="search-input"
        />
      </form>
    </nav>
  );
}

export default Nav;
