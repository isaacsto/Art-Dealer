import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const styles = {
  footerStyle: {
   /*  display: 'flex', */
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    textAlign: 'center',
  },
};

function Link({ currentPage, handlePageChange, link }) {
  return (
    <footer className="footer" style={styles.footerStyle}>
      <div>
      <a href={link} target="_blank" rel="noopener noreferrer" style={styles.footerStyle}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}

export default Link