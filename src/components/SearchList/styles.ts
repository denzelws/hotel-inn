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

export const Distance = styled.span``

export const TaxiOption = styled.span``

export const DetailsBox = styled.div`
  flex: 1;
`

export const Subtitle = styled.span``

export const Features = styled.span``
