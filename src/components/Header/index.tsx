import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.ItemsContainer>
          <S.Items>
            <FontAwesomeIcon icon={faBed} />
            <S.Description>Stays</S.Description>
          </S.Items>

          <S.Items>
            <FontAwesomeIcon icon={faPlane} />
            <S.Description>Flights</S.Description>
          </S.Items>

          <S.Items>
            <FontAwesomeIcon icon={faCar} />
            <S.Description>Car rentals</S.Description>
          </S.Items>

          <S.Items>
            <FontAwesomeIcon icon={faBed} />
            <S.Description>Attractions</S.Description>
          </S.Items>

          <S.Items>
            <FontAwesomeIcon icon={faTaxi} />
            <S.Description>Airport taxis</S.Description>
          </S.Items>
        </S.ItemsContainer>
        <S.Title>Uma vida de descontos? Isso é genial</S.Title>
        <S.Description>
          Receba descontos por suas viagens - adquira imediatos descontos de até
          20% ou mais e ganhe uma conta grátis
        </S.Description>
        <S.Button>Sign In/ Register</S.Button>
        <S.HeaderSearch>
          <S.SearchItem>
            <FontAwesomeIcon icon={faBed} />
            <S.Input type="text" placeholder="Para onde está indo?" />
          </S.SearchItem>

          <S.SearchItem>
            <FontAwesomeIcon icon={faCalendarDays} />
            <S.Text>data</S.Text>
          </S.SearchItem>

          <S.SearchItem>
            <FontAwesomeIcon icon={faPerson} />
            <S.Text>2 adultos 2 crianças 1 quarto</S.Text>
          </S.SearchItem>

          <S.SearchItem>
            <S.Button>Search</S.Button>
          </S.SearchItem>
        </S.HeaderSearch>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
