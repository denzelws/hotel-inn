import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './styles'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns'

const Header = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })
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
            <S.Text onClick={() => setOpenDate(!openDate)}>{`${format(
              date[0].startDate,
              'dd/MM/yyyy'
            )} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</S.Text>
            {openDate && (
              <S.DateCalendar
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </S.SearchItem>

          <S.SearchItem>
            <FontAwesomeIcon icon={faPerson} />
            <S.Text>{`${options.adult} adult
            - ${options.children}
            children
            - ${options.room} room`}</S.Text>
            <S.Options>
              <S.OptionItem>
                <S.Text>Adult</S.Text>
                <S.OptionButtonCounter>-</S.OptionButtonCounter>
                <S.OptionCounterNumber>1</S.OptionCounterNumber>
                <S.OptionButtonCounter>+</S.OptionButtonCounter>
              </S.OptionItem>

              <S.OptionItem>
                <S.Text>Children</S.Text>
                <S.OptionButtonCounter>-</S.OptionButtonCounter>
                <S.OptionCounterNumber>0</S.OptionCounterNumber>
                <S.OptionButtonCounter>+</S.OptionButtonCounter>
              </S.OptionItem>

              <S.OptionItem>
                <S.Text>Room</S.Text>
                <S.OptionButtonCounter>-</S.OptionButtonCounter>
                <S.OptionCounterNumber>1</S.OptionCounterNumber>
                <S.OptionButtonCounter>+</S.OptionButtonCounter>
              </S.OptionItem>
            </S.Options>
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
