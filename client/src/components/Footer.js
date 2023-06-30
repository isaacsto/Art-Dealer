import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const styles = {
  footerStyle: {
    display: 'flex',
    justifyContent: 'center',
    /* position: 'fixed', */
    /* bottom: 0, */
  },
};

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer className="footer" style={styles.footerStyle}>
      <div>
        <a href="https://www.instagram.com/isabellasaraceni_art/?hl=entarget="_target="blank">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}

export default Footer