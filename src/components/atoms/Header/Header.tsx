import * as React from 'react'
import * as Styled from './styled'

export interface Props {
  children: React.ReactNode
}

interface Header {
  children: string
}

export const Header = ({ children }: Props) => (
  <Styled.HeaderContainer>
    <Styled.Title>{children}</Styled.Title>
  </Styled.HeaderContainer>
)
