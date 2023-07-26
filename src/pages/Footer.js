import logo_footer from '../logo/logo_footer.png';
import '../reset.css'
import '../style.css';

function Footer() {
  return (
    <div className="footer">
      <img className="logo-footer" src={logo_footer} alt="logo" />
      <p className='text-footer'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
  
export default Footer;
  