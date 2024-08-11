import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <footer className="bottom-0 z-50 w-full flex flex-row justify-between p-2">
            <div>
                <FontAwesomeIcon className='fa-2x md:fa-3x p-1 transition-transform duration-200 hover:scale-125' icon={faSquareGithub} />
                <FontAwesomeIcon className='fa-2x md:fa-3x p-1 transition-transform duration-200 hover:scale-125' icon={faLinkedin} />
            </div>
            {/* <p className='font-kurale text-sm md:text-lg'>Robert Toth-Ludanyi 2024</p> */}
            <a
                href="#"
                onClick={e => e.preventDefault()}
                className='
            text-md font-play font-medium text-center border-2 p-2
            rounded-full border-transparent
            hover:border-oasis-600 hover:border-2'>
                Resume
            </a>
        </footer>
    )
}
