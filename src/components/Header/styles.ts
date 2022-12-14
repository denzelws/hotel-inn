import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
  `}
`

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 103rem;
`

export const Items = styled.div``

export const Description = styled.span``
