import React from 'react';

const Team = () => {
  return (
    <div className="team-container" style={{height:'100vh'}}>
      <h1 className="team-title">Meet Our Team</h1>
      <p className="team-description">
        We are a dedicated team of individuals committed to delivering
        high-quality work and achieving success together.
      </p>
      <div className="team-members">
        <div className="team-member">
          <h2>Venkatesh</h2>
          <p>Role: Developer</p>
        </div>
        <div className="team-member">
          <h2>Prem</h2>
          <p>Role: Content Writer</p>
        </div>
        <div className="team-member">
          <h2>Krishna</h2>
          <p>Role: Content Writer</p>
        </div>
        <div className="team-member">
          <h2>Hemanth</h2>
          <p>Role: Content Writer</p>
        </div>
        <div className="team-member">
          <h2>Philip</h2>
          <p>Role: Content Writer</p>
        </div>
        <div className="team-member">
          <h2>Narendra</h2>
          <p>Role: Content Writer</p>
        </div>
        <div className="team-member">
          <h2>Meera Hussain</h2>
          <p>Role: Content Writer</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
