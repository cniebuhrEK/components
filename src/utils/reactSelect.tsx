import React from 'react'
import theme from '../theme/theme'
import { components } from 'react-select'
import { isNotNilOrEmpty } from './ramda'
import styled from 'styled-components'
import ArrowDownIcon from '../icons/ArrowDown'

export const SELECT_SIZES = {
  normal: 'normal',
  small: 'small'
}

const getHoverBorderColor = (disabled: boolean, error: any) => {
  switch (true) {
    case disabled:
      return 'transparent'
    case error:
      return theme.palette.red05
    default:
      return theme.palette.darkblue01
  }
}

const getHoverCursor = (disabled: boolean, searchable: boolean) => {
  switch (true) {
    case disabled:
      return 'not-allowed'
    case !searchable:
      return 'pointer'
    default:
      return 'text'
  }
}

export const REACT_SELECT_STYLES = {
  control: (
    _provided,
    state: {
      selectProps: { error: boolean; size: string; isSearchable: boolean }
      isDisabled: boolean
    }
  ) => {
    const {
      selectProps: { error, size, isSearchable },
      isDisabled
    } = state
    return {
      margin: '30px 0 12px',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      position: 'relative',
      backgroundColor: isDisabled ? theme.palette.grey08 : theme.palette.white,
      borderColor: error ? theme.palette.red05 : theme.palette.darkblue01,
      borderRadius: theme.shape.borderRadiusSmall,
      borderStyle: 'solid',
      borderWidth: '1px',
      color: error ? theme.palette.red05 : theme.palette.darkblue01,
      fontSize: '13px',
      padding: '0 14px',
      fontFamily: theme.typography.fontFamily,
      minHeight:
        size === SELECT_SIZES.small
          ? theme.dimensions.inputSmallHeight
          : theme.dimensions.inputHeight,
      transition: `all 200ms ${theme.transitions.easing.easeInOut} 0ms`,
      '&:hover': {
        cursor: getHoverCursor(isDisabled, isSearchable),
        borderColor: getHoverBorderColor(isDisabled, error)
      },
      '&:focus-within': {
        background: theme.palette.darkblue01,
        borderWidth: '1px',
        borderColor: error ? theme.palette.red05 : theme.palette.darkblue01,
        color: error ? theme.palette.red05 : theme.palette.orange01
      },
      '& input': isSearchable ? {} : { height: '1px' }
    }
  },
  input: (_provided, _state) => {
    return {
      fontSize: '14px',
      backgroundColor: 'transparent',
      border: 'none',
      color: theme.palette.darkblue01,
      padding: '0',
      margin: '0',
      outline: 'none',
      width: 'auto'
    }
  },
  container: (_provided, _state) => {
    return {
      boxSizing: 'border-box',
      position: 'relative',
      width: '100%'
    }
  },
  menu: (_provided, _state) => {
    return {
      position: 'absolute',
      width: '100%',
      top: '100%',
      left: '0',
      margin: '0',
      backgroundColor: theme.palette.biege,
      boxShadow: theme.shadows.beigeShadow,
      zIndex: theme.zIndex.dropdown
    }
  },
  menuList: (_provided, _state) => {
    return {
      backgroundColor: theme.palette.biege,
      maxHeight: '300px',
      overflowY: 'auto',
      boxSizing: 'border-box',
      zIndex: theme.zIndex.dropdown
    }
  },
  option: (_provided, state: { isFocused: boolean }) => {
    const { isFocused } = state
    return {
      color: theme.palette.darkblue01,
      fontFamily: theme.typography.fontFamily,
      zIndex: theme.zIndex.dropdown,
      cursor: 'pointer',
      fontSize: '14px',
      padding: '6px 16px',
      lineHeight: '1.5',
      overflow: 'visible',
      whiteSpace: 'nowrap',
      backgroundColor: isFocused ? theme.palette.grey10 : theme.palette.biege,
      transition: `background-color 200ms ${theme.transitions.easing.easeInOut} 0ms`,
      '&:hover': {
        backgroundColor: theme.palette.grey10
      },
      '&:active': {
        backgroundColor: theme.palette.grey10
      },
      '&:focus': {
        backgroundColor: theme.palette.grey10
      }
    }
  },
  valueContainer: (_provided, _state) => {
    return {
      boxSizing: 'border-box',
      padding: '3px 0',
      width: '100%',
      display: 'inline-flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      flexGrow: '1'
    }
  },
  singleValue: (_provided, _state) => {
    return {
      '&:hover': {
        color: theme.palette.orange01
      },
      fontSize: '14px',
      wordBreak: 'keep-all'
    }
  },
  multiValue: (_provided, _state) => {
    return {
      margin: '3px 0',
      display: 'flex',
      alignItems: 'center',
      padding: '6px',
      backgroundColor: theme.palette.grey09,
      borderRadius: theme.shape.borderRadiusSmall,
      marginRight: '9px',
      wordBreak: 'keep-all'
    }
  },
  multiValueLabel: (_provided, _state) => {
    return {
      whiteSpace: 'nowrap'
    }
  },
  multiValueRemove: (_provided, _state) => {
    return {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '6px',
      cursor: 'pointer',
      transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
      '&:hover': {
        color: theme.palette.orange04
      }
    }
  },
  noOptionsMessage: (_provided, _state) => {
    return {
      color: theme.palette.darkblue01,
      fontFamily: theme.typography.fontFamily,
      zIndex: theme.zIndex.dropdown,
      cursor: 'pointer',
      fontSize: '13px',
      padding: '6px 16px',
      lineHeight: '1.5',
      overflow: 'visible',
      whiteSpace: 'nowrap',
      backgroundColor: theme.palette.biege
    }
  },
  loadingMessage: (_provided, _state) => {
    return {
      color: theme.palette.darkblue01,
      fontFamily: theme.typography.fontFamily,
      zIndex: theme.zIndex.dropdown,
      cursor: 'pointer',
      fontSize: '13px',
      padding: '6px 16px',
      lineHeight: '1.5',
      overflow: 'visible',
      whiteSpace: 'nowrap',
      backgroundColor: theme.palette.biege
    }
  },
  placeholder: (_provided, _state) => {
    return { display: 'none' }
  },
  indicatorSeparator: (_provided, _state) => {
    return { display: 'none' }
  },
  dropdownIndicator: (_provided, _state) => {
    return { display: 'none' }
  },
  indicatorsContainer: (_provided, _state) => {},
  clearIndicator: (_provided, _state) => {
    return {
      color: theme.palette.darkblue01,
      cursor: 'pointer'
    }
  },
  loadingIndicator: (_provided, _state) => {
    return {
      color: theme.palette.darkblue01,
      display: 'flex',
      alignItems: 'center',
      fontSize: '4px'
    }
  },
  menuPortal: (_provided, _state) => {},
  group: (_provided, _state) => {},
  groupHeading: (_provided, _state) => {}
}

export const CustomInput = (props: {
  selectProps: any
  onFocus: (e: any) => any
  onBlur: (e: any) => any
}): JSX.Element => {
  const { selectProps } = props
  const [isFocused, setIsFocused] = React.useState(false)
  const hasValue = isNotNilOrEmpty(selectProps.value)

  const handleOnFocus = (e: any) => {
    props.onFocus(e)
    setIsFocused(true)
  }
  const handleOnBlur = (e: any) => {
    props.onBlur(e)
    setIsFocused(false)
  }

  return (
    <React.Fragment>
      <components.Input
        {...props}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <InputLabel
        isFocused={isFocused}
        isFocusedOrHasValue={isFocused || hasValue}
        error={selectProps.error}
        size={selectProps.size}
      >
        {selectProps.label}
        {selectProps.required ? ' *' : ''}
      </InputLabel>
      <IconContainer size={selectProps.size}>
        <ArrowDownIcon />
      </IconContainer>
      <ErrorText id={`${selectProps.name}-error`} error={selectProps.error}>
        {selectProps.errorText}
      </ErrorText>
    </React.Fragment>
  )
}

export const CustomValueContainer = (props: {
  selectProps: any
  onFocus: (e: any) => any
  onBlur: (e: any) => any
}): JSX.Element => {
  const { selectProps } = props
  const [isFocused, setIsFocused] = React.useState(false)
  const hasValue = isNotNilOrEmpty(selectProps.value)

  const handleOnFocus = (e: any) => {
    props.onFocus(e)
    setIsFocused(true)
  }
  const handleOnBlur = (e: any) => {
    props.onBlur(e)
    setIsFocused(false)
  }

  return (
    <React.Fragment>
      <components.ValueContainer
        {...props}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <InputLabel
        isFocused={isFocused}
        isFocusedOrHasValue={isFocused || hasValue}
        error={selectProps.error}
        size={selectProps.size}
      >
        {selectProps.label}
        {selectProps.required ? ' *' : ''}
      </InputLabel>
      <IconContainer size={selectProps.size}>
        <ArrowDownIcon />
      </IconContainer>
      <ErrorText id={`${selectProps.name}-error`} error={selectProps.error}>
        {selectProps.errorText}
      </ErrorText>
    </React.Fragment>
  )
}

const IconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  right: 14px;
  top: ${({ isFocusedOrHasValue, size }) => {
    switch (true) {
      case isFocusedOrHasValue:
        return '-19px'
      case size === SELECT_SIZES.small:
        return '8px'
      default:
        return '14px'
    }
  }};
  font-size: 16px;
`

const InputLabel = styled.div`
  color: ${({ error, isFocused, theme }) => {
    switch (true) {
      case error:
        return theme.palette.red05
      case isFocused:
      default:
        return theme.palette.darkblue01
    }
  }};
  position: absolute;
  left: ${({ isFocusedOrHasValue }) => (isFocusedOrHasValue ? '-1px' : '14px')};
  top: ${({ isFocusedOrHasValue, size }) => {
    switch (true) {
      case isFocusedOrHasValue:
        return '-19px'
      case size === SELECT_SIZES.small:
        return '8px'
      default:
        return '14px'
    }
  }};
  font-size: ${({ isFocusedOrHasValue, size }) => {
    switch (true) {
      case isFocusedOrHasValue:
        return '12px'
      case size === SELECT_SIZES.small:
        return '14px'
      default:
        return '16px'
    }
  }};
  line-height: ${({ isFocusedOrHasValue }) =>
    isFocusedOrHasValue ? '12px' : '16px'};
  background-color: transparent;
  transition: all 200ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;
`

const ErrorText = styled.div`
  display: ${({ error }) => (error ? 'block' : 'none')};
  color: ${({ theme }) => theme.palette.red05};
  font-size: 12px;
  position: absolute;
  left: -1px;
  bottom: -20px;
  z-index: 1;
  white-space: nowrap;
`
