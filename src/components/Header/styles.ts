import styled, { css } from 'styled-components'

import { DateRange } from 'react-date-range'

export const DateCalendar = styled(DateRange)`
  position: absolute;
  top: 5rem;
`

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `}
`

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 103rem;
  margin: 20px 0px 100px 0px;
`

export const ItemsContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 5rem;
`

export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Title = styled.h1``

export const Description = styled.p`
  margin: 2rem 0;
`

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: white;
    font-weight: 500;
    border: none;
    padding: 1rem;
    cursor: pointer;

    &:hover {
      transition: 0.6s;
      background-color: ${theme.colors.lightBlue};
    }
  `}
`
export const HeaderSearch = styled.div`
  ${({ theme }) => css`
    height: 3rem;
    background: ${theme.colors.white};
    border: 0.3rem solid ${theme.colors.yellow};
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 0;
    border-radius: 0.5rem;
    position: absolute;
    bottom: -2.5rem;
    width: 100%;
    max-width: 103rem;
  `}
`

export const SearchItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    > svg {
      color: ${theme.colors.darkGray};
    }
  `}
`

export const Input = styled.input`
  border: none;
  outline: none;
`

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    cursor: pointer;
  `}
`
export const Options = styled.div`
  position: absolute;
  top: 5rem;
  background-color: white;
  color: gray;
  border-radius: 0.5rem;
`

export const OptionItem = styled.div``

export const OptionButtonCounter = styled.button``

export const OptionCounterNumber = styled.button``
