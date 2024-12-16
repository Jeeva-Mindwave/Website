import '../styles/footer.css';
import FooterImage from '../icon/Footerdesign_img.svg';
import FooterLogo from '../icon/Footer_logo.svg'
import FbIcon from '../icon/Fb_icon.svg'
import InstIcon from '../icon/instagram.svg'
import TwitterIcon from '../icon/Twitter_icon.svg'


interface FooterProps {
  footerText?: string;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer-blk">
    <div className='pink-border' />
     <div className='foot-design'><FooterImage /></div>
     <div className='footer-option'>
        <span>About CYMHS HertsHub</span>
        <span>Contact</span>
        <span>Feedback</span>
        <span>Get Urgent Help</span>
     </div>
     <div className='logo-section'>
        <FooterLogo />
     </div>
     <div className='social-blk'>
        <div>Follow JustTalk at</div>
        <div className='icon'>
            <FbIcon />
            <InstIcon />
            <TwitterIcon />
        </div>
     </div>
    </footer>
  );
};

export default Footer;