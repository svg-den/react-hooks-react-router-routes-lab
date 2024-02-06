import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Home Page</h1>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    color: '#801818', 
    fontSize: '60px', 
    fontWeight: 'bold',
    textAlign: 'center' 
  }
};

export default Home;
