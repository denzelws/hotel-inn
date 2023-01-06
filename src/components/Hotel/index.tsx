import Header from '../Header'
import NavBar from '../NavBar'
import * as S from './styles'

import { LocationDot as LocationIcon } from '@styled-icons/fa-solid/LocationDot'

const photos = [
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1'
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1'
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1'
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1'
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1'
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1'
  }
]

const Hotel = () => {
  return (
    <S.Wrapper>
      <NavBar />
      <Header type="list" list />
      <S.Container>
        <S.HotelWrapper>
          <S.Title>Hotel Grand</S.Title>
        </S.HotelWrapper>
        <S.Address>
          <LocationIcon />
          <S.Distance>Elton St 125 New York</S.Distance>
        </S.Address>

        <S.HotelDistance>
          Excelente localização - 500m de distância
        </S.HotelDistance>

        <S.HotelPrice>
          Reserve uma estadia de valor superior a R$ 2 488 e receba um táxi
          gratuito do aeroporto
        </S.HotelPrice>
        <S.HotelImages>
          {photos.map((photo, index) => (
            <S.ImgWrapper key={index}>
              <img src={photo.src} alt="" />
            </S.ImgWrapper>
          ))}
        </S.HotelImages>
        <S.HotelDetails>
          <S.HotelDetailsTexts>
            <S.HotelTitle>
              Experimente a melhor acomodação do bairro
            </S.HotelTitle>
            <S.HotelDesc>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              nobis animi dolorem, sint dicta impedit est consequatur asperiores
              soluta quam repellendus. Earum, voluptas sint! Voluptatem nostrum
              corrupti minus sed error harum nisi corporis, perspiciatis
              praesentium. Voluptas, atque magni sapiente suscipit est illum
              necessitatibus quas neque distinctio repudiandae deleniti in
              eligendi incidunt accusamus ducimus doloribus, facere rem
              molestias labore accusantium soluta et ratione a. Ea vero, natus
              tenetur atque accusamus repudiandae officiis voluptates laudantium
              quis deleniti. Atque explicabo dolor soluta voluptatum tempore
              ipsa natus pariatur distinctio veritatis provident voluptates,
              accusamus deleniti vel culpa tempora, quos maxime quas accusantium
              optio? Error aut corrupti id necessitatibus, facere distinctio
              alias? Dolorem, nemo numquam. Labore veniam molestias quis
              adipisci totam vero, modi facere. Eius magni harum sit ipsam,
              officia totam at debitis aut excepturi quo accusantium odit porro.
              Obcaecati consequatur culpa ipsa magnam recusandae mollitia illum
              saepe amet! Temporibus quis quibusdam vero provident ullam
              cupiditate, quidem esse. Recusandae iste suscipit perspiciatis aut
              consequatur nemo dolorem cum doloribus deleniti optio aliquam
              distinctio quasi est, veritatis atque nam ratione ea asperiores
              reiciendis minus molestias doloremque! Illum, explicabo placeat
              sequi quibusdam perspiciatis quaerat nobis est cum iure, mollitia
              minima. Quasi placeat ad eligendi repellat necessitatibus corporis
              laudantium eum.
            </S.HotelDesc>
          </S.HotelDetailsTexts>
        </S.HotelDetails>
      </S.Container>
    </S.Wrapper>
  )
}

export default Hotel
