import './footer.css'


function FooterMain() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Murojaat uchun</h3>
          <div className="social-icons">
           {/* <Facebook/>
           <Instagram/>
           <Twitter/>
           <Telegram/> */}
          </div>
        </div>
        <div className="address-info">
          <h3>Adress</h3>
          <p>O'zbekiston Respublikasi,</p>
          <p>Toshkent, Mo'minov ko'chasi, 7/2,</p>
          <p>Uzinfocom binosi ichida</p>
        </div>
        <div className="contact-info">
          <h3>Call Us</h3>
          <p>+998(55) 555-25-25</p>
          <p>infouz.com</p>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 NewLine</p>
        <div className="legal">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterMain

