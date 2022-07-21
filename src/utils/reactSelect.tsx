import React from 'react'
import { getTheme } from '../theme'
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
      return getTheme().colors.selects.disabled.borderActive
    case error:
      return getTheme().colors.main.error500
    default:
      return getTheme().colors.selects.input.borderActive
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
    case disabled:
      return getTheme().colors.selects.disabled.border
    case error:
      return getTheme().colors.main.error500
    default:
      return getTheme().colors.selects.input.border
  }
}

const getInputTextColor = (disabled: boolean, error: boolean) => {
  switch (true) {
    case disabled:
      return getTheme().colors.selects.disabled.font
    case error:
      return getTheme().colors.main.error500
    default:
      return getTheme().colors.selects.input.font
  }
}

const getFontColor = (isFocused: boolean, isDisabled: boolean) => {
  switch (true) {
    case isFocused && !isDisabled:
      return getTheme().colors.selects.input.fontActive
    case isDisabled:
      return getTheme().colors.selects.disabled.font
    default:
      return getTheme().colors.selects.input.font
  }
}

const getBackgroundColor = (isFocused: boolean, isDisabled: boolean) => {
  switch (true) {
    case isFocused && !isDisabled:
      return getTheme().colors.selects.input.backgroundActive
    case isDisabled:
      return getTheme().colors.selects.disabled.background
    default:
      return getTheme().colors.selects.input.background
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
      margin: removeMargin ? 0 : '25px 0 15px',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      position: 'relative',
      backgroundColor: isDisabled
        ? getTheme().colors.selects.disabled.background
        : getTheme().colors.selects.input.background,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: getTheme().shape.borderRadiusNormal,
      borderColor: getBorderColor(isDisabled, error),
      color: getInputTextColor(isDisabled, error),
      fontSize: '13px',
      padding: '0 14px',
      fontFamily: getTheme().typography.fontFamily,
      height:
        size === SELECT_SIZES.small
          ? getTheme().dimensions.inputSmallHeight
          : getTheme().dimensions.inputHeight,
      transition: `all 200ms ${getTheme().transitions.easing.easeInOut} 0ms`,
      '&:hover': {
        cursor: getHoverCursor(isDisabled, isSearchable),
        borderColor: getHoverBorderColor(isDisabled, error)
      },
      '&:focus-within': {
        background: getTheme().colors.selects.input.backgroundActive,
        borderWidth: '1px',
        borderColor: getBorderColor(isDisabled, error),
        color: error
          ? getTheme().colors.main.error500
          : getTheme().colors.selects.input.fontActive
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
      backgroundColor: getTheme().colors.selects.option.background,
      boxShadow: getTheme().shadows.mainShadow,
      zIndex: getTheme().zIndex.dropdown
    }
  },
  menuList: (_provided, _state) => {
    return {
      backgroundColor: getTheme().colors.selects.option.background,
      maxHeight: '300px',
      overflowY: 'auto',
      boxSizing: 'border-box',
      zIndex: getTheme().zIndex.dropdown
    }
  },
  option: (_provided, state: { isFocused: boolean }) => {
    const { isFocused } = state
    return {
      color: getTheme().colors.selects.option.font,
      fontFamily: getTheme().typography.fontFamily,
      zIndex: getTheme().zIndex.dropdown,
      cursor: 'pointer',
      fontSize: '14px',
      padding: '6px 16px',
      lineHeight: '1.5',
      overflow: 'visible',
      whiteSpace: 'nowrap',
      backgroundColor: isFocused
        ? getTheme().colors.selects.option.backgroundActive
        : getTheme().colors.selects.option.background,
      transition: `background-color 200ms ${
        getTheme().transitions.easing.easeInOut
      } 0ms`,
      '&:hover': {
        backgroundColor: getTheme().colors.selects.option.backgroundActive
      },
      '&:active': {
        backgroundColor: getTheme().colors.selects.option.backgroundActive
      },
      '&:focus': {
        backgroundColor: getTheme().colors.selects.option.backgroundActive
      }
    }
  },
  valueContainer: (_provided, _state) => {
    return {
      boxSizing: 'border-box',
      padding: '3px 0',
      marginRight: 0,
      width: '90%',
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
          ? getTheme().colors.selects.disabled.fontActive
          : getTheme().colors.selects.input.fontActive
      },
      fontSize: '14px',
      wordBreak: 'keep-all',
      maxWidth: '99%',
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
      backgroundColor: getTheme().colors.main.grey300,
      borderRadius: getTheme().shape.borderRadiusSmall,
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
        color: getTheme().colors.main.white
      }
    }
  },
  noOptionsMessage: (_provided, _state) => {
    return {
      color: getTheme().colors.selects.option.font,
      fontFamily: getTheme().typography.fontFamily,
      zIndex: getTheme().zIndex.dropdown,
      cursor: 'pointer',
      fontSize: '13px',
      padding: '6px 16px',
      lineHeight: '1.5',
      overflow: 'visible',
      whiteSpace: 'nowrap',
      backgroundColor: getTheme().colors.selects.option.background
    }
  },
  loadingMessage: (_provided, _state) => {
    return {
      color: getTheme().colors.selects.option.font,
      fontFamily: getTheme().typography.fontFamily,
      zIndex: getTheme().zIndex.dropdown,
      cursor: 'pointer',
      fontSize: '13px',
      padding: '6px 16px',
      lineHeight: '1.5',
      overflow: 'visible',
      whiteSpace: 'nowrap',
      backgroundColor: getTheme().colors.selects.option.background
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
      color: isFocused
        ? getTheme().colors.selects.input.fontActive
        : getTheme().colors.selects.input.font,
      cursor: 'pointer'
    }
  },
  loadingIndicator: (_provided, _state) => {
    return {
      color: getTheme().colors.selects.input.font,
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
        // error={selectProps.error} <- It creates additional label during validation which is not needed here.
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
  right: 10px;
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
        return theme.colors.main.error500
      case isDisabled:
        return theme.colors.selects.disabled.font
      case isValueContainer:
      case isFocusedOrHasValue && removeTopLabel:
        return 'transparent'
      case isFocused && !removeTopLabel:
      default:
        return theme.colors.selects.input.font
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
  color: ${({ theme }) => theme.colors.main.error500};
  font-size: 12px;
  position: absolute;
  left: -1px;
  bottom: -20px;
  z-index: 1;
  white-space: nowrap;
`
