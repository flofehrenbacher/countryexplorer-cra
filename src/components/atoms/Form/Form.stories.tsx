import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { Form } from './Form'

storiesOf('Atoms', module).add('Form', () => (
  <Form
    label="Label"
    value=""
    handleSubmit={event => {
      event.preventDefault()
      return Promise.resolve(alert('submit'))
    }}
  />
))
