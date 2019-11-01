import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { CountryResult } from './CountryResult'

storiesOf('Atoms', module).add('Country Result', () => (
  <CountryResult
    flagSrc="https://restcountries.eu/data/col.svg"
    countryName="Columbia"
  />
))
