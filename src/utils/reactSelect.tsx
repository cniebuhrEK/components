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
      return theme.palette.panelBackground
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

const getBorderColor = (disabled: boolean, error: boolean) => {
  switch (true) {
    case error:
      return theme.palette.red05
    case disabled:
      return theme.palette.panelBackground
    default:
      return theme.palette.darkblue01
  }
}

const getFontColor = (isFocused: boolean, isDisabled: boolean) => {
  switch (true) {
    case isFocused:
      return theme.palette.orange01
    case isDisabled:
      return theme.palette.disabledFont
    default:
      return theme.palette.darkblue01
  }
}

const getBackgroundColor = (isFocused: boolean, isDisabled: boolean) => {
  switch (true) {
    case isFocused:
      return theme.palette.darkblue01
    case isDisabled:
      return theme.palette.disabledBackground
    default:
      return theme.palette.panelBackground
  }
}

export const REACT_SELECT_STYLES = {
  control: (
    _provided,
    state: {
      selectProps: {
        error: boolean
        size: string
        isSearchable: boolean
        removeMargin: boolean
      }
      isDisabled: boolean
    }
  ) => {
    const {
      selectProps: { error, size, isSearchable, removeMargin },
      isDisabled
    } = state

    return {
      margin: removeMargin ? 0 : '30px 0 12px',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      position: 'relative',
      backgroundColor: isDisabled
        ? theme.palette.disabledBackground
        : theme.palette.panelBackground,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '6px',
      borderColor: getBorderColor(isDisabled, error),
      color: getBorderColor(isDisabled, error),
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
        borderColor: getBorderColor(isDisabled, error),
        color: error ? theme.palette.red05 : theme.palette.orange01
      },
      '& input': isSearchable ? {} : { height: '1px' }
    }
  },
  input: (_provided, state: { isFocused: boolean; isDisabled: boolean }) => {
    const { isFocused, isDisabled } = state

    return {
      fontSize: '14px',
      backgroundColor: getBackgroundColor(isFocused, isDisabled),
      border: 'none',
      color: getFontColor(isFocused, isDisabled),
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
      minWidth: '100%',
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
      backgroundColor: theme.palette.panelBackground,
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
      backgroundColor: isFocused
        ? theme.palette.grey10
        : theme.palette.panelBackground,
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
  singleValue: (_provided, state: { isDisabled: boolean }) => {
    const { isDisabled } = state

    return {
      '&:hover': {
        color: isDisabled
          ? theme.palette.panelBackground
          : theme.palette.orange01
      },
      fontSize: '14px',
      wordBreak: 'keep-all',
      maxWidth: 'calc(100% - 25px)',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
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
      backgroundColor: theme.palette.panelBackground
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
      backgroundColor: theme.palette.panelBackground
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
  clearIndicator: (_provided, state: { isFocused: boolean }) => {
    const { isFocused } = state
    return {
      color: isFocused ? theme.palette.orange01 : theme.palette.darkblue01,
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
  const { isClearable, removeTopLabel, isDisabled } = selectProps

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
        isFocused={isFocused}
      />
      <InputLabel
        removeTopLabel={removeTopLabel}
        isFocused={isFocused}
        isFocusedOrHasValue={isFocused || hasValue}
        error={selectProps.error}
        size={selectProps.size}
        isDisabled={isDisabled}
      >
        {selectProps.label}
        {selectProps.required ? ' *' : ''}
      </InputLabel>
      <IconContainer
        hasValue={hasValue}
        isClearable={isClearable}
        size={selectProps.size}
      >
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
  const { isClearable, removeTopLabel, isDisabled } = selectProps

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
        isFocused={isFocused}
      />
      <InputLabel
        isValueContainer
        isFocused={isFocused}
        isFocusedOrHasValue={isFocused || hasValue}
        error={selectProps.error}
        size={selectProps.size}
        removeTopLabel={removeTopLabel}
        isDisabled={isDisabled}
      >
        {selectProps.label}
        {selectProps.required ? ' *' : ''}
      </InputLabel>
      <IconContainer
        hasValue={hasValue}
        isClearable={isClearable}
        size={selectProps.size}
      >
        <ArrowDownIcon />
      </IconContainer>
      <ErrorText id={`${selectProps.name}-error`} error={selectProps.error}>
        {selectProps.errorText}
      </ErrorText>
    </React.Fragment>
  )
}

const IconContainer = styled.div`
  visibility: ${({ isClearable, hasValue }) =>
    hasValue && isClearable ? 'hidden' : 'visible'};
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
  color: ${({
    error,
    isFocused,
    removeTopLabel,
    theme,
    isValueContainer,
    isFocusedOrHasValue,
    isDisabled
  }) => {
    switch (true) {
      case error:
        return theme.palette.red05
      case isDisabled:
        return theme.palette.disabledFont
      case isValueContainer:
      case isFocusedOrHasValue && removeTopLabel:
        return 'transparent'
      case isFocused && !removeTopLabel:
      default:
        return theme.palette.textDark
    }
  }};
  position: absolute;
  left: ${({ isFocusedOrHasValue, removeTopLabel }) =>
    isFocusedOrHasValue && !removeTopLabel ? '-1px' : '14px'};
  top: ${({ isFocusedOrHasValue, removeTopLabel, size }) => {
    switch (true) {
      case isFocusedOrHasValue && !removeTopLabel:
        return '-19px'
      case size === SELECT_SIZES.small:
        return '8px'
      default:
        return '14px'
    }
  }};
  font-size: ${({ isFocusedOrHasValue, removeTopLabel, size }) => {
    switch (true) {
      case isFocusedOrHasValue && !removeTopLabel:
        return '12px'
      case size === SELECT_SIZES.small:
        return '14px'
      default:
        return '16px'
    }
  }};
  line-height: ${({ isFocusedOrHasValue, removeTopLabel }) =>
    isFocusedOrHasValue && !removeTopLabel ? '12px' : '16px'};
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
