import profile from './assets/profile.png';
import mail from './assets/mail.svg';
import linkedin from './assets/linkedin.svg';

export default function Info() {
    return (
        <>
        <img src={profile} className='profile-image'></img>
        <h1>Frederico Silva</h1>
        <h3>Full Stack Developer</h3>
        <div className='container-buttons'>
           <button><img src={mail}></img>Email</button>
           <button><img src={linkedin}></img>LinkedIn</button>
        </div>
        </>
    )
}