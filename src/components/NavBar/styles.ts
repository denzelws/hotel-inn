import styled, { css } from 'styled-components'

export const Navbar = styled.nav`
  ${({ theme }) => css`
    height: 50px;
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
  `}
`

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 103rem;
  color: white;
`

export const Logo = styled.h1`
  font-weight: 600;
`

export const Items = styled.div``

export const Button = styled.button``
