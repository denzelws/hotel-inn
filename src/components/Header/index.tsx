import {
  faBed,
  faCar,
  faPlane,
  faTaxi
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
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
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
