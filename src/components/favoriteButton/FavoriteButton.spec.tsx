import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FavoriteButton from './FavoriteButton'

describe('renders FavoriteButton', () => {
  it('renders FavoriteButton with filled star icon when isFavorite is true', async () => {
    const component = render(
      <FavoriteButton isFavorite={true} onClick={() => {}} />
    )

    expect(
      component.getByTestId('favorite-button-filled-star')
    ).toBeInTheDocument()

    const svgElement = screen.getByTestId('favorite-button-filled-star')
    const classAttributeValue = svgElement.getAttribute('class')
    expect(classAttributeValue).toContain('fa-star')
  })

  it('Render FavoriteButton with empty star icon when isFavorite is false', async () => {
    const component = render(
      <FavoriteButton isFavorite={false} onClick={() => {}} />
    )

    expect(
      component.getByTestId('favorite-button-empty-star')
    ).toBeInTheDocument()

    const svgElement = screen.getByTestId('favorite-button-empty-star')
    const classAttributeValue = svgElement.getAttribute('class')
    expect(classAttributeValue).toContain('fa-star')
  })
})
