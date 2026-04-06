import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Slide Viewer', () => {
  it('renders the first slide title', () => {
    render(<App />)
    expect(screen.getByText(/Clase 4: Configuración de Terraform/i)).toBeInTheDocument()
  })

  it('navigates to the next slide on button click', () => {
    render(<App />)
    const nextButton = screen.getByLabelText(/Next slide/i)
    fireEvent.click(nextButton)
    expect(screen.getByText(/Tabla de Contenidos/i)).toBeInTheDocument()
  })

  it('navigates to the next slide on space key press', () => {
    render(<App />)
    fireEvent.keyDown(window, { key: ' ', code: 'Space' })
    expect(screen.getByText(/Tabla de Contenidos/i)).toBeInTheDocument()
  })
})
