import styled, { css } from 'styled-components'

export const PropertyPlace = styled.div`
  width: 100%;
  max-width: 103rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PropertyPlaceItem = styled.div`
  > img {
    width: 100%;
    height: 20rem;
  }
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
  `}
`

export const PriceDescription = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`
