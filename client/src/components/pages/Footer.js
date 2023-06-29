import React from 'react';

const styles = {
  footerStyle: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
  },
};

function Footer({currentPage, handlePageChange}) {
    return(
  <footer className="footer" style={styles.footerStyle}>
    <div >
        FOOTER
  </div>
  </footer>
    )}

export default Footer