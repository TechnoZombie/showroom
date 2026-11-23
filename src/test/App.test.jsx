import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import App from '../App.jsx'
import Header from '../components/Header.jsx'
import Button from '../components/Button.jsx'
import GitHubButtonAndTechTag from '../utils/GitHubButtonAndTechTag.jsx'
import ImageGallery from '../utils/ImageGallery.jsx'
import MarkdownRenderer from '../utils/MarkdownRenderer.jsx'
import ScrollToTop from '../utils/ScrollToTop.jsx'

const renderApp = (path = '/') => render(
  <MemoryRouter initialEntries={[path]}>
    <App />
  </MemoryRouter>,
)

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.dataset.theme = ''
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  })

  afterEach(() => {
    document.body.style.overflow = ''
  })

  it('starts in light mode when no valid theme is saved', () => {
    window.localStorage.setItem('showroom-theme', 'unrecognized')
    const user = userEvent.setup()
    renderApp()

    expect(document.documentElement.dataset.theme).toBe('light')
    expect(window.localStorage.getItem('showroom-theme')).toBe('light')
    expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toHaveAttribute('aria-pressed', 'false')
    return user.click(screen.getByRole('button', { name: 'Switch to dark mode' })).then(() => {
      expect(document.documentElement.dataset.theme).toBe('dark')
      expect(window.localStorage.getItem('showroom-theme')).toBe('dark')
    })
  })

  it('restores a saved dark theme and persists a toggle back to light', async () => {
    window.localStorage.setItem('showroom-theme', 'dark')
    const user = userEvent.setup()
    renderApp()

    expect(document.documentElement.dataset.theme).toBe('dark')
    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(window.localStorage.getItem('showroom-theme')).toBe('light')
  })

  it('shows the homepage and all project index links', () => {
    renderApp()

    expect(screen.getByRole('heading', { name: /a collection of experiments/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(9)
    expect(screen.getByRole('link', { name: /deadparrot/i })).toHaveAttribute('href', '/DeadParrot')
  })

  it.each([
    ['/About', 'heading', 'About'],
    ['/this', 'heading', "TechnoZombie's Showroom"],
    ['/DeadParrot', 'heading', /DeadParrot/],
    ['/CurrencyConverter', 'title', 'Currency Converter'],
    ['/QRCodeGenerator', 'title', 'QRCode Generator'],
    ['/ChuckNorrisFacts', 'title', 'Chuck Norris: Facts.'],
    ['/Spacenewzz', 'title', 'Spacenewzz'],
    ['/PixelPainter', 'heading', 'PixelPainter'],
    ['/PixelPainterEnhanced', 'heading', /PixelPainter: Enhanced!/],
    ['/Simplegraphz', 'heading', 'SimplegraphZ!'],
  ])('renders the page at %s', (path, role, expected) => {
    renderApp(path)
    const pageElement = role === 'title'
      ? screen.getByTitle(expected)
      : screen.getByRole(role, { name: expected })
    expect(pageElement).toBeInTheDocument()
  })

  it('falls back to the homepage for an unknown route', () => {
    renderApp('/not-a-project')

    expect(screen.getByRole('heading', { name: /a collection of experiments/i })).toBeInTheDocument()
  })

  it('renders project embeds and repository links', () => {
    renderApp('/CurrencyConverter')

    expect(screen.getByTitle('Currency Converter')).toHaveAttribute(
      'src',
      'https://technozombie.github.io/CurrencyConverter/',
    )
    expect(screen.getByRole('button', { name: /view on github/i })).toBeInTheDocument()
    expect(screen.getByAltText('javascript badge')).toBeInTheDocument()
  })

  it('renders project galleries and markdown descriptions', () => {
    renderApp('/PixelPainterEnhanced')

    expect(screen.getByAltText('Main Screen')).toBeInTheDocument()
    expect(screen.getByAltText('Color Select Menu')).toBeInTheDocument()
    expect(screen.getByText(/pixel art creation tool/i)).toBeInTheDocument()
  })

  it('marks the current sidebar destination as the active page', () => {
    renderApp('/About')

    expect(screen.getByRole('button', { name: /about/i })).toHaveAttribute('aria-current', 'page')
  })
})

describe('Button', () => {
  it('navigates to internal routes', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/']}>
        <Button link="/destination">Go</Button>
        <Routes>
          <Route path="/destination" element={<p>Destination reached</p>} />
        </Routes>
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('button', { name: 'Go' }))
    expect(screen.getByText('Destination reached')).toBeInTheDocument()
  })

  it('opens external links safely and still invokes its click handler', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    const open = vi.spyOn(window, 'open').mockImplementation(() => null)
    render(
      <MemoryRouter>
        <Button link="https://example.com" onClick={onClick}>External</Button>
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('button', { name: 'External' }))
    expect(onClick).toHaveBeenCalledOnce()
    expect(open).toHaveBeenCalledWith('https://example.com', '_blank', 'noopener,noreferrer')
  })

  it('supports an unlinked button, default class, id, and current-page state', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(
      <MemoryRouter>
        <Button id="action" ariaCurrent="page" onClick={onClick}>Action</Button>
      </MemoryRouter>,
    )

    const button = screen.getByRole('button', { name: 'Action' })
    expect(button).toHaveClass('unstyled-button')
    expect(button).toHaveAttribute('id', 'action')
    expect(button).toHaveAttribute('aria-current', 'page')
    await user.click(button)
    expect(onClick).toHaveBeenCalledOnce()
  })
})

describe('Header', () => {
  it('renders the site heading', () => {
    render(<Header />)
    expect(screen.getByRole('heading', { name: "TechnoZombie's Projects" })).toBeInTheDocument()
  })
})

describe('GitHubButtonAndTechTag', () => {
  it('renders known badges and labels unsupported technologies', () => {
    render(
      <MemoryRouter>
        <GitHubButtonAndTechTag link="https://example.com/repo" techs={['react', 'unknown-tech']} />
      </MemoryRouter>,
    )

    expect(screen.getByAltText('react badge')).toHaveAttribute(
      'src',
      'https://img.shields.io/badge/react-gray?logo=react',
    )
    expect(screen.getByText('Unknown: unknown-tech')).toBeInTheDocument()
  })
})

describe('ImageGallery', () => {
  const images = [
    { src: '/first.png', alt: 'First image' },
    { src: '/second.png', alt: 'Second image' },
  ]

  it('opens the lightbox, wraps navigation, and restores scrolling when closed', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <ImageGallery images={images} />
      </MemoryRouter>,
    )

    await user.click(screen.getByAltText('First image'))
    expect(screen.getAllByAltText('First image')).toHaveLength(2)
    expect(document.body.style.overflow).toBe('hidden')

    await user.click(document.querySelector('.nav-btn.nav-btn-left'))
    expect(screen.getAllByAltText('Second image')).toHaveLength(2)
    await user.click(document.querySelector('.nav-btn.nav-btn-right'))
    expect(screen.getAllByAltText('First image')).toHaveLength(2)
    await user.click(document.querySelector('.nav-btn.nav-btn-right'))
    expect(screen.getAllByAltText('Second image')).toHaveLength(2)
    await user.click(document.querySelector('.nav-btn.nav-btn-left'))
    expect(screen.getAllByAltText('First image')).toHaveLength(2)

    await user.click(document.querySelector('.close-btn'))
    expect(document.body.style.overflow).toBe('auto')
    expect(document.querySelector('.lightbox')).not.toBeInTheDocument()
  })

  it('closes when the overlay is clicked and uses a fallback thumbnail alt', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <ImageGallery images={[{ src: '/untitled.png' }]} />
      </MemoryRouter>,
    )

    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
    await user.click(screen.getByAltText('Image 1'))
    await user.click(document.querySelector('.lightbox'))
    expect(document.querySelector('.lightbox')).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('auto')
  })
})

describe('MarkdownRenderer', () => {
  it('renders markdown, inline code, fenced code, and images with the requested class', () => {
    const { container } = render(
      <MarkdownRenderer
        imageClassName="article-image"
        markdownContent={'# Heading\n\nA `small` sample.\n\n```js\nconst answer = 42\n```\n\n![A picture](/picture.png)'}
      />,
    )

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeInTheDocument()
    expect(container.querySelector('code')).toHaveTextContent('small')
    expect(container).toHaveTextContent('const answer = 42')
    expect(screen.getByAltText('A picture')).toHaveClass('article-image')
  })

  it('uses an empty alt value when markdown omits image alt text', () => {
    const { container } = render(<MarkdownRenderer markdownContent="![](/picture.png)" />)
    expect(container.querySelector('img')).toHaveAttribute('alt', '')
  })
})

describe('ScrollToTop', () => {
  beforeEach(() => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  })

  it('scrolls the window and showcase to the top when the route changes', () => {
    const user = userEvent.setup()
    const { container } = render(
      <MemoryRouter initialEntries={['/first']}>
        <ScrollToTop />
        <div className="showcase" />
        <Button link="/second">Change route</Button>
      </MemoryRouter>,
    )
    const showcase = container.querySelector('.showcase')
    showcase.scrollTop = 100

    return user.click(screen.getByRole('button', { name: 'Change route' })).then(() => {
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
      expect(showcase.scrollTop).toBe(0)
    })
  })

  it('scrolls the window when there is no showcase container', () => {
    render(
      <MemoryRouter>
        <ScrollToTop />
      </MemoryRouter>,
    )

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
  })
})
