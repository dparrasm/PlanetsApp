import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Card from './Card'

describe('Card', () => {
  it('Render Card', () => {
    render(
      <Card title="React" info={['Info1', 'Info2']} removeCard={() => {}} />
    )

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Info1')).toBeInTheDocument()
    expect(screen.getByText('Info2')).toBeInTheDocument()
  })
})
