import styled, { css } from 'styled-components'

export const SearchList = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  justify-content: space-between;
  border: 0.1rem solid lightgray;
  gap: 2rem;
  margin-bottom: 2rem;

  > img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
  }
`

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 2;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.secondary};
  `}
`

export const Distance = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.darkGray};
  `}
`

export const TaxiOption = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    background-color: ${theme.colors.green};
    padding: 0.3rem;
    border-radius: 0.5rem;
    color: white;
    width: max-content;
  `}
`

export const DetailsBox = styled.div`
  flex: 1;
`

export const Subtitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: bold;
  `}
`

export const Features = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const CancelOption = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.green};
    font-weight: bold;
  `}
`

export const RatingBox = styled.div``

export const Rating = styled.span``

export const DetailsText = styled.div``

export const Price = styled.span``

export const TaxOp = styled.span``

export const Check = styled.span``

export const CheckButton = styled.button``
