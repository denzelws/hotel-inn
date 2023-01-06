import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Container = styled.div``

export const HotelWrapper = styled.div``

export const Title = styled.h1``

export const Address = styled.div`
  ${({ theme }) => css`
    > svg {
      width: 1.2rem;
    }
  `}
`

export const Distance = styled.span``

export const HotelDistance = styled.span``

export const HotelPrice = styled.span``

export const HotelImages = styled.div``

export const ImgWrapper = styled.div``

export const HotelDetails = styled.div``

export const HotelDetailsTexts = styled.div``

export const HotelTitle = styled.h1``

export const HotelDesc = styled.p``
