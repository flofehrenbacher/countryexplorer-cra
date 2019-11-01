import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { MyMap } from './Map'

storiesOf('Atoms', module).add('MapboxMap', () => <MyMap latlng={[40, 10]} />)
