import twitterIcon from './assets/twitter.svg';
import facebookIcon from './assets/facebook.svg';
import instagramIcon from './assets/instagram.svg';
import githubIcon from './assets/github.svg';

export default function Footer() {
    return (
        <div className="conatiner-icons">
            <img src={twitterIcon} alt="twitter icon" />
            <img src={facebookIcon} alt="facebook icon" />
            <img src={instagramIcon} alt="instagram icon" />
            <img src={githubIcon} alt="github icon" />
        </div>
    )
}