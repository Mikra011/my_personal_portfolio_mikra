import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <footer className="bottom-0 z-50 w-full flex flex-row justify-around p-6 border-2">
            <div>
                <FontAwesomeIcon icon={faSquareGithub} />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <p className='font-alex text-sm'>Robert Toth-Ludanyi 2024</p>
            <a href="" className='text-sm font-play font-medium'>Resume</a>
        </footer>
    )
}
