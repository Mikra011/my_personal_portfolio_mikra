import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate, MemoryRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import RingText from '../src/components/RingText';
import Footer from '../src/components/Footer';
import ProjectsImageGallery from '../src/components/ProjectsImageGallery';
import CallToContact from '../src/components/CallToContact';
import Contacts from '../src/components/Contacts';
import ProjectData from '../src/components/ProjectData';

jest.mock('../src/components/AnimatedInView', () => ({ children }) => <div>{children}</div>);

jest.mock('../src/assets/projectData', () => [
  {
    name: 'arcade_clone',
    images: [
      'img1',
      'img2',
      'img3'
    ],
    description: 'This is a JavaScript challenge website...',
  },
])

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

// Mock the setDarkMode function
const mockSetDarkMode = jest.fn()

const mockNavigate = jest.fn()

describe('Navbar Component', () => {
  beforeEach(() => {
    // Ensure that the mocked useNavigate returns the mocked function
    useNavigate.mockReturnValue(mockNavigate)

    render(
      <Router>
        <Navbar darkMode={false} setDarkMode={mockSetDarkMode} />
      </Router>
    )
  })

  test('renders navbar and menu items', () => {
    expect(screen.getAllByText(/Home/i).length).toBe(2)
    expect(screen.getAllByText(/About/i).length).toBe(2)
    expect(screen.getAllByText(/Projects/i).length).toBe(2)
    expect(screen.getAllByText(/Contacts/i).length).toBe(2)
  })

  test('calls setDarkMode when the toggle button is clicked', () => {
    const toggleButton = screen.getByTestId('theme-toggle-button')
    fireEvent.click(toggleButton)
    expect(mockSetDarkMode).toHaveBeenCalledWith(true)
  })

  test('toggles the mobile menu', () => {
    // Simulate small screen size
    window.innerWidth = 500
    window.dispatchEvent(new Event('resize'))

    const burgerButton = screen.getByTestId('navbar-burger')
    fireEvent.click(burgerButton)

    // Select the menu manually by test ID or another selector
    const menu = screen.getByTestId('mobile-menu')

    expect(menu).toHaveClass('flex') // Check if it's open

    fireEvent.click(burgerButton)

    expect(menu).toHaveClass('hidden') // Check if it's closed
  })

  test('navigates to the correct path when "Home" menu items are clicked', () => {
    const homeButtons = screen.getAllByText(/Home/i)
    expect(homeButtons.length).toBe(2);

    fireEvent.click(homeButtons[0])
    expect(mockNavigate).toHaveBeenCalledWith('/home')

    fireEvent.click(homeButtons[1])
    expect(mockNavigate).toHaveBeenCalledWith('/home')
  })

  test('navigates to the correct path when "About" menu items are clicked', () => {
    const aboutButtons = screen.getAllByText(/About/i)
    expect(aboutButtons.length).toBe(2)

    fireEvent.click(aboutButtons[0])
    expect(mockNavigate).toHaveBeenCalledWith('/about')

    fireEvent.click(aboutButtons[1])
    expect(mockNavigate).toHaveBeenCalledWith('/about')
  })

  test('navigates to the correct path when "Projects" menu items are clicked', () => {
    const projectButtons = screen.getAllByText(/Projects/i);
    expect(projectButtons.length).toBe(2)

    fireEvent.click(projectButtons[0])
    expect(mockNavigate).toHaveBeenCalledWith('/projects')

    fireEvent.click(projectButtons[1])
    expect(mockNavigate).toHaveBeenCalledWith('/projects')
  })

  test('navigates to the correct path when "Contacts" menu items are clicked', () => {
    const contactButtons = screen.getAllByText(/Contacts/i)
    expect(contactButtons.length).toBe(2)

    fireEvent.click(contactButtons[0])
    expect(mockNavigate).toHaveBeenCalledWith('/contacts')

    fireEvent.click(contactButtons[1])
    expect(mockNavigate).toHaveBeenCalledWith('/contacts')
  })
})

describe('RingText Component', () => {
  const mockNavigate = jest.fn()

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('navigates to the correct path when button is clicked', () => {
    const href = 'test'
    render(<RingText text="Test" btnText="Click Me" href={href} font="font-class" />)

    const button = screen.getByRole('button', { name: /Click Me/i })
    fireEvent.click(button)

    // Check if the navigation happened with the correct URL
    expect(mockNavigate).toHaveBeenCalledWith(`/${href}`)
  })

  test('updates rotation on scroll', () => {
    render(<RingText text="Test" btnText="Click Me" href="test" font="font-class" />)

    // Mock scroll event
    window.scrollY = 100
    fireEvent.scroll(window)

    const spans = screen.getAllByText(/./)

    spans.forEach((span) => {
      // Extract the rotate values from the transform property
      const transform = span.style.transform
      const rotateMatch = transform.match(/rotate\(([\d.]+)deg\)/g)

      if (rotateMatch) {
        // Care about the second rotate (the one applying scroll rotation)
        const secondRotation = rotateMatch[1]

        // Convert the string "rotate(25.75deg)" to a number like 25.75
        const rotationValue = parseFloat(secondRotation.match(/([\d.]+)/)[0])

        // Ensure the second rotation is close to 25 degrees (handling decimals)
        expect(rotationValue).toBeCloseTo(25, 1)
      }
    })
  })
})

// describe('ProjectsImageGallery Component', () => {
//   test('renders the first image initially', () => {
//     render(<ProjectsImageGallery />)
//     const imgElement = screen.getByRole('img')
//     expect(imgElement).toHaveAttribute('src', 'img1') // Check if the first image is displayed
//   })

//   test('changes to the next image when right arrow is clicked', () => {
//     render(<ProjectsImageGallery />)

//     // Click the right arrow
//     const rightArrow = screen.getByText('❯')
//     fireEvent.click(rightArrow)

//     const imgElement = screen.getByRole('img')
//     expect(imgElement).toHaveAttribute('src', 'img2') // Check if the second image is displayed
//   })

//   test('changes to the previous image when left arrow is clicked', () => {
//     render(<ProjectsImageGallery />)

//     // Click the right arrow twice to go to the second image, then back to the first
//     const rightArrow = screen.getByText('❯')
//     fireEvent.click(rightArrow) // First click to go to image2
//     fireEvent.click(rightArrow) // Second click to go to image3

//     const leftArrow = screen.getByText('❮')
//     fireEvent.click(leftArrow) // Go back to image2

//     const imgElement = screen.getByRole('img')
//     expect(imgElement).toHaveAttribute('src', 'img2') // Ensure we're back to the second image
//   })

//   test('cycles to the first image after clicking the right arrow from the last image', () => {
//     render(<ProjectsImageGallery />)

//     // Click the right arrow twice to go to the second and third images
//     const rightArrow = screen.getByText('❯')
//     fireEvent.click(rightArrow) // First click to go to image2
//     fireEvent.click(rightArrow) // Second click to go to image3

//     // Now click the right arrow again to check if it cycles back to the first image
//     fireEvent.click(rightArrow) // Should cycle back to image1

//     const imgElement = screen.getByRole('img')
//     expect(imgElement).toHaveAttribute('src', 'img1') // Ensure we're back to the first image
//   })

//   test('changes to the correct image when a dot is clicked', () => {
//     render(<ProjectsImageGallery />)

//     // Click the dot for the second image
//     const dotElements = screen.getAllByTestId('dot') // Use the data-testid to select the dots
//     fireEvent.click(dotElements[1]) // Click the second dot

//     const imgElement = screen.getByRole('img')
//     expect(imgElement).toHaveAttribute('src', 'img2')
//   })
// })

describe('ProjectData Component', () => {
  test('renders the project name', () => {
    render(<ProjectData />)
    const nameElement = screen.getByText('arcade_clone')
    expect(nameElement).toBeInTheDocument() // Check if the project name is displayed
  })

  test('renders the project description', () => {
    render(<ProjectData />)
    const descriptionElement = screen.getByText(/This is a JavaScript challenge website.../)
    expect(descriptionElement).toBeInTheDocument() // Check if the project description is displayed
  })

  // test('renders the ProjectsImageGallery component', () => {
  //   render(<ProjectData />)
  //   const galleryElement = screen.getByRole('img') // Check if the image is rendered
  //   expect(galleryElement).toBeInTheDocument()
  // })

  test('renders GitHub link with correct URL', () => {
    render(<ProjectData />)
    const githubLink = screen.getByRole('link', { name: /Github/i })
    expect(githubLink).toBeInTheDocument() // Check if the GitHub link is rendered
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Mikra011/arcade_clone') // Check the URL
  })

  test('renders Try it link with correct URL', () => {
    render(<ProjectData />)
    const tryItLink = screen.getByRole('link', { name: /Try it/i })
    expect(tryItLink).toBeInTheDocument() // Check if the Try it link is rendered
    expect(tryItLink).toHaveAttribute('href', 'https://arcade-clone-front.onrender.com') // Check the URL
  })

  test('GitHub button is clickable and redirects to the correct URL', () => {
    render(<ProjectData />)

    // Find the GitHub link
    const githubLink = screen.getByRole('link', { name: /Github/i })

    // Check if the href attribute matches the expected URL
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Mikra011/arcade_clone')

    // Check if the link opens in a new tab (target="_blank")
    expect(githubLink).toHaveAttribute('target', '_blank')

    // Simulate click (check that it doesn't throw an error)
    fireEvent.click(githubLink)
  })

  test('Try it button is clickable and redirects to the correct URL', () => {
    render(<ProjectData />)

    // Find the Try it link
    const tryItLink = screen.getByRole('link', { name: /Try it/i })

    // Check if the href attribute matches the expected URL
    expect(tryItLink).toHaveAttribute('href', 'https://arcade-clone-front.onrender.com')

    // Check if the link opens in a new tab (target="_blank")
    expect(tryItLink).toHaveAttribute('target', '_blank')

    // Simulate click (check that it doesn't throw an error)
    fireEvent.click(tryItLink)
  })
})

describe('Footer Component', () => {
  test('renders correctly on non-landing pages', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/about']}>
        <Footer />
      </MemoryRouter>
    )

    // Check if the GitHub and LinkedIn links are rendered
    expect(getByTestId('github-link')).toBeInTheDocument()
    expect(getByTestId('linkedin-link')).toBeInTheDocument()
    expect(getByTestId('resume-link')).toBeInTheDocument()
  })

  test('does not render on the landing page', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Footer />
      </MemoryRouter>
    )

    // Check if the footer has the 'hidden' class
    const footerElement = container.firstChild // Get the first child (the footer)
    expect(footerElement).toHaveClass('hidden') // Check for the 'hidden' class
  })

  test('links open in a new tab', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/about']}>
        <Footer />
      </MemoryRouter>
    )

    // Check if the links have the target attribute
    expect(getByTestId('github-link')).toHaveAttribute('target', '_blank')
    expect(getByTestId('linkedin-link')).toHaveAttribute('target', '_blank')
    expect(getByTestId('resume-link')).toHaveAttribute('target', '_blank')
  })

  test('renders the correct href for GitHub and LinkedIn links', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/about']}>
        <Footer />
      </MemoryRouter>
    )

    // Check the href attributes
    expect(getByTestId('github-link')).toHaveAttribute('href', 'https://github.com/Mikra011')
    expect(getByTestId('linkedin-link')).toHaveAttribute('href', 'https://www.linkedin.com/in/toth-ludanyi-robert-376ab92a4/')
    expect(getByTestId('resume-link')).toHaveAttribute('href', 'test-file-stub') // Update to match the mock value
  })
})

describe('CallToContact Component', () => {
  beforeEach(() => {
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockImplementation(() => mockNavigate)
  })

  afterEach(() => {
    jest.clearAllMocks() // Clear any mock calls between tests
  })

  test('renders the Contact Me button and it is visible', () => {
    render(
      <MemoryRouter>
        <CallToContact />
      </MemoryRouter>
    )

    // Check if the button is in the document
    const buttonElement = screen.getByRole('button', { name: /Contact Me Here/i })
    expect(buttonElement).toBeInTheDocument() // Check if the button is rendered
    expect(buttonElement).toBeVisible() // Check if the button is visible
  })

  test('clicking the Contact Me button navigates to the contacts page', () => {
    render(
      <MemoryRouter initialEntries={['/']}> {/* Initial route is the home page */}
        <Routes>
          <Route path="/" element={<CallToContact />} />
          <Route path="/contacts" element={<Contacts />} /> {/* Define the contacts route */}
        </Routes>
      </MemoryRouter>
    )

    // Find the button
    const buttonElement = screen.getByRole('button', { name: /Contact Me Here/i });

     // Assert that the button is clickable (not disabled)
    expect(buttonElement).not.toBeDisabled()

    // Simulate a click on the button
    fireEvent.click(buttonElement)

    // Now check if the Contacts component has been rendered
    // You can assert based on any text or element that is present in the Contacts component
    expect(screen.getByText(/contact me/i)).toBeInTheDocument() // Assuming there's text in Contacts that confirms it's rendered
  })
})

describe('Contacts Component', () => {
  test('renders the Send button and it is visible', () => {
    render(<Contacts />)

    // Check if the Send button is in the document
    const buttonElement = screen.getByRole('button', { name: /Send/i })
    expect(buttonElement).toBeInTheDocument() // Check if the button is rendered
    expect(buttonElement).toBeVisible() // Check if the button is visible
  })
})

