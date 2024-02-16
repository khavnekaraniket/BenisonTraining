import React from 'react';
import '../css/FooterPage.css'; 

function FooterPage() {
  return (
    <div className='footerDiv'>
      <footer className="footerPage">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Registration">About</a></li>
        </ul>
        <p className="text-center">© 2024 Benison Technologies</p>
      </footer>
    </div>
  );
}

export default FooterPage;
