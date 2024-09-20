import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';

export default function Footer() {
    const location = useLocation()
    const isLandingPage = location.pathname === '/'

    return (
        <footer className={isLandingPage
            ? 'hidden'
            : 'bottom-0 fixed z-50 w-full flex flex-row justify-between p-2'}>
            <div className='flex flex-row space-x-1'>
                <a href='https://github.com/Mikra011' target='_blank' rel='noopener noreferrer'>
                    <div className='rounded-full p-1 bg-spring-100 dark:bg-amethyst-900'>
                        <FontAwesomeIcon className='fa-2x md:fa-3x p-1 transition-transform duration-200 hover:scale-125' icon={faSquareGithub} />
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/toth-ludanyi-robert-376ab92a4/' target='_blank' rel='noopener noreferrer'>
                    <div className='rounded-full p-1 bg-spring-100 dark:bg-amethyst-900'>
                        <FontAwesomeIcon className='fa-2x md:fa-3x p-1 transition-transform duration-200 hover:scale-125' icon={faLinkedin} />
                    </div>
                </a>
            </div>

            <a
                href="#"
                onClick={e => e.preventDefault()}
                className='
                    text-md font-play font-medium text-center border-2 p-2
                    rounded-full border-transparent
                    hover:border-oasis-600 hover:border-2
                    bg-spring-100 dark:bg-amethyst-900'>
                Resume
            </a>
        </footer>
    )
}
