import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { PrimaryButton } from './Button'

storiesOf('Atoms', module).add('Buttons', () => (
  <PrimaryButton>Primary</PrimaryButton>
))
