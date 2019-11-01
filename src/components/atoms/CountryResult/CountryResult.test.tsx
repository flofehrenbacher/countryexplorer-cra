import * as React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import { CountryResult } from './CountryResult'

describe('CountryResult', () => {
  it('should pass the test', () => {
    const { container } = render(
      <CountryResult flagSrc="#" countryName="Uruguay" />
    )
    expect(container.innerHTML).toHaveTextContent
  })
})
