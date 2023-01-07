import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`

export const HotelWrapper = styled.div`
  width: 100%;
  max-width: 103rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const Address = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    display: flex;
    align-items: center;
    gap: 1rem;

    > svg {
      width: 1.2rem;
    }
  `}
`

export const Distance = styled.span``

export const HotelDistance = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.higher};
  `}
`

export const HotelPrice = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-weight: ${theme.font.higher};
  `}
`

export const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ImgWrapper = styled.div`
  width: 33%;

  > img {
    width: 100%;
    object-fit: cover;
  }
`

export const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const HotelDetailsTexts = styled.div`
  flex: 3;
`

export const HotelDetailsPrice = styled.div`
  flex: 1;
`

export const PriceTitle = styled.h3``

export const HotelTitle = styled.h1``

export const PriceDescription = styled.span``

export const Price = styled.span``

export const PriceHotelDetails = styled.span``

export const HotelDesc = styled.p``
