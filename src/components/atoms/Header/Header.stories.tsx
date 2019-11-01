import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { Header } from './Header'

storiesOf('Atoms', module).add('Page header', () => (
  <Header>CountryFacts</Header>
))
