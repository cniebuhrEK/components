import React from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'

interface CalendarProps {
  id: string
  children: string | JSX.Element | JSX.Element[]
  [x: string]: any
}

const Calendar = (props: CalendarProps) => {
  const { id, children, ...rest } = props

  const onTriggerClick = () => {
    const inputElement = document.getElementById(id)
    // @ts-ignore
    inputElement.click()
  }

  return (
    <DatePickerContainer id={`${id}-container`}>
      <CalendarTrigger onClick={onTriggerClick}>{children}</CalendarTrigger>
      <DatePicker id={id} name={id} {...rest} />
    </DatePickerContainer>
  )
}

const CalendarTrigger = styled.div``

const DatePickerContainer = styled.div`
  display: inline-block;
  position: relative;

  .react-datepicker-wrapper {
    height: 1px;
  }

  .react-datepicker-popper {
    padding: 0;
  }

  .react-datepicker__input-container input {
    display: none;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker {
    border-color: ${({ theme }) => theme.colors.datePicker.border};
    background: ${({ theme }) => theme.colors.datePicker.background};
    border-radius: 8px;
    top: 100%;
  }

  .react-datepicker {
    color: ${({ theme }) => theme.colors.datePicker.font};

    .react-datepicker__day.react-datepicker__day--disabled {
      color: ${({ theme }) => theme.colors.datePicker.font};
      opacity: 0.3;

      &:hover {
        color: inherit !important;
        background: inherit !important;
      }
    }

    .react-datepicker__day.react-datepicker__day--weekend:hover,
    .react-datepicker__day.react-datepicker__day--disabled.react-datepicker__day--weekend:hover {
      color: ${({ theme }) => theme.colors.datePicker.weekendFont} !important;
    }

    .react-datepicker__day {
      outline: none !important;
      color: ${({ theme }) => theme.colors.datePicker.fontActive};
      &:hover {
        color: ${({ theme }) => theme.colors.datePicker.fontActive} !important;
        background: ${({ theme }) =>
          theme.colors.datePicker.selectedBackgroundHover};
      }
    }

    .react-datepicker__day.react-datepicker__day--outside-month {
      color: ${({ theme }) => theme.colors.datePicker.font};
    }

    .react-datepicker__day--today {
      color: ${({ theme }) => theme.colors.datePicker.todayFont};
    }

    .react-datepicker__day.react-datepicker__day--outside-month.react-datepicker__day--weekend,
    .react-datepicker__day.react-datepicker__day--disabled.react-datepicker__day--weekend,
    .react-datepicker__day--weekend {
      color: ${({ theme }) => theme.colors.datePicker.weekendFont};
    }

    .react-datepicker__day.react-datepicker__day--outside-month.react-datepicker__day--weekend,
    .react-datepicker__day.react-datepicker__day--weekend {
      &:hover {
        color: ${({ theme }) => theme.colors.datePicker.fontActive} !important;
        background: ${({ theme }) =>
          theme.colors.datePicker.selectedBackgroundHover};
      }
    }

    .react-datepicker__day.react-datepicker__day--keyboard-selected,
    .react-datepicker__day.react-datepicker__day--selected {
      background: ${({ theme }) => theme.colors.datePicker.selectedBackground};
      color: ${({ theme }) => theme.colors.datePicker.fontSelected} !important;

      &:hover {
        color: ${({ theme }) =>
          theme.colors.datePicker.fontSelected} !important;
        background: ${({ theme }) =>
          theme.colors.datePicker.selectedBackgroundHover};
      }
    }
  }

  .react-datepicker__header {
    background: ${({ theme }) => theme.colors.datePicker.background};
    border: none;
    padding: 16px;
    border-radius: 8px;

    .react-datepicker__current-month {
      margin-bottom: 8px;
    }
  }

  .react-datepicker__month {
    margin: 0;
    padding: 0 16px 16px;
  }

  .react-datepicker__navigation-icon::before {
    border-width: 2px 2px 0 0;
    width: 4px;
    height: 4px;
    top: 13px;
    border-color: ${({ theme }) => theme.colors.datePicker.arrowColor};
  }
`

export default Calendar
