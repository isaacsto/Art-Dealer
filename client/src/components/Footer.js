import React from 'react';

import '../Styles/Footer.css';



const styles = {
    footerStyle: {
      display: 'flex',
      justifyContent: 'center'
    },
    linkStyle: {
      padding: '5px',
      color: 'black'
    }
  };

  function Footer({currentPage, handlePageChange}) {
    return(
  <footer className="footer" style={styles.footerStyle}>
    <div >
  <a href="https://github.com/Cashew1337/Art-Dealer" target="blank"><i class="fab fa-github" style={styles.linkStyle}></i></a>
  <a href="https://www.linkedin.com/school/uconn-boot-camps/about/" target="blank" style={styles.linkStyle}><i class="fab fa-linkedin"></i></a>
 
  </div>
  </footer>
    )}

export default Footer