import { afterEach, describe, expect, it, vi } from 'vitest'

describe('application entry point', () => {
  afterEach(() => {
    vi.doUnmock('react-dom/client')
    vi.resetModules()
  })

  it('mounts the app under the hash router at the root element', async () => {
    const rootElement = document.createElement('div')
    rootElement.id = 'root'
    document.body.append(rootElement)
    const render = vi.fn()
    const createRoot = vi.fn(() => ({ render }))
    vi.doMock('react-dom/client', () => ({
      default: { createRoot },
    }))

    await import('../main.jsx')

    expect(createRoot).toHaveBeenCalledWith(rootElement)
    expect(render).toHaveBeenCalledOnce()
    expect(render.mock.calls[0][0].type.name).toBe('HashRouter')
  })
})
