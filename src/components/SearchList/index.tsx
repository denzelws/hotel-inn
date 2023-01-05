import * as S from './styles'

type SearchListProps = {
  img: string
  title: string
  distance: string
  taxiOp?: string
  subtitle: string
  features: string
  cancelOption: string
  cancelSubtitle: string
}

const SearchList = () => {
  return (
    <S.SearchList>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/296619276.webp?k=641ba87d71f5f52c113ad8491dee61b2af4821428f4de8db7c721054318c36d4&o=&s=1"
        alt=""
      />
      <S.DescriptionBox>
        <S.Title>Orlanova Hotel</S.Title>
        <S.Distance>400 m da praia</S.Distance>
        <S.TaxiOption>Taxi grátis</S.TaxiOption>
        <S.Subtitle>Taxi grátis</S.Subtitle>
        <S.Features>Taxi grátis</S.Features>
      </S.DescriptionBox>
      <S.DetailsBox>details</S.DetailsBox>
    </S.SearchList>
  )
}

export default SearchList
