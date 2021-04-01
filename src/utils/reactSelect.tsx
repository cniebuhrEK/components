import React, { useState, Fragment } from 'react'
import theme from '../theme/theme'
import { components } from 'react-select'
import { isNotNilOrEmpty } from './ramda'
import styled from 'styled-components'

export const REACT_SELECT_STYLES = {
  control: (
    _provided,
    state: { selectProps: { error: boolean }; isDisabled: boolean }
  ) => {
    const {
      selectProps: { error },
      isDisabled,
    } = state

    return {
      margin: error ? '10px 0 23px 0' : '10px 0',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      position: 'relative',
      borderWidth: '1px',
      borderStyle: 'solid',
      fontSize: '13px',
      padding: '0 14px',
      borderColor: error
        ? theme.palette.error.main
        : theme.palette.common.gray400,
      borderRadius: theme.shape.borderRadius,
      fontFamily: theme.typography.fontFamily,
      minHeight: theme.dimensions.inputHeight,
      color: theme.palette.text.main,
      backgroundColor: isDisabled
        ? theme.palette.common.gray200
        : 'transparent',
      transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
      '&:hover': {
        cursor: 'text',
        borderColor: error ? theme.palette.error.main : theme.palette.text.main,
      },
      '&:focus-within': {
        borderWidth: '2px',
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.primary.main,
        color: error ? theme.palette.error.main : theme.palette.text.main,
      },
    }
  },
  input: (_provided, _state) => {
    return {
      fontSize: '13px',
      backgroundColor: 'transparent',
      border: 'none',
      color: theme.palette.text.main,
      padding: '0',
      margin: '0',
      outline: 'none',
      width: 'auto',
    }
  },
  container: (_provided, _state) => {
    return {
      boxSizing: 'border-box',
      position: 'relative',
      width: '100%',
    }
  },
  menu: (_provided, _state) => {
    return {
      position: 'absolute',
      width: '100%',
      top: '100%',
      left: '0',
      margin: '8px 0',
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows.main,
      zIndex: theme.zIndex.dropdown,
    }
  },
  menuList: (_provided, _state) => {
    return {
      backgroundColor: theme.palette.common.white,
      maxHeight: '300px',
      overflowY: 'auto',
      boxSizing: 'border-box',
      zIndex: theme.zIndex.dropdown,
    }
  },
  option: (_provided, state: { isFocused: boolean }) => {
    const { isFocused } = state
    return {
      color: theme.palette.text.main,
      fontFamily: theme.typography.fontFamily,
      zIndex: theme.zIndex.dropdown,
      cursor: 'pointer',
      fontSize: '13px',
      padding: '6px 16px',
      lineHeight: '1.5',
      overflow: 'visible',
      whiteSpace: 'nowrap',
      backgroundColor: isFocused
        ? theme.palette.common.gray200
        : theme.palette.common.white,
      transition: `background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms`,
      '&:hover': {
        backgroundColor: theme.palette.common.gray200,
      },
      '&:active': {
        backgroundColor: theme.palette.common.gray200,
      },
      '&:focus': {
        backgroundColor: theme.palette.common.gray400,
      },
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
      flexGrow: '1',
    }
  },
  singleValue: (_provided, _state) => {
    return {
      wordBreak: 'keep-all',
    }
  },
  multiValue: (_provided, _state) => {
    return {
      margin: '3px 0',
      display: 'flex',
      alignItems: 'center',
      padding: '6px',
      backgroundColor: theme.palette.common.gray200,
      borderRadius: theme.shape.borderRadius,
      marginRight: '9px',
      wordBreak: 'keep-all',
    }
  },
  multiValueLabel: (_provided, _state) => {
    return {
      whiteSpace: 'nowrap',
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
        color: theme.palette.primary.main,
      },
    }
  },
  noOptionsMessage: (_provided, _state) => {
    return {
      color: theme.palette.text.main,
      fontFamily: theme.typography.fontFamily,
      zIndex: theme.zIndex.dropdown,
      cursor: 'pointer',
      fontSize: '13px',
      padding: '6px 16px',
      lineHeight: '1.5',
      overflow: 'visible',
      whiteSpace: 'nowrap',
      backgroundColor: theme.palette.common.white,
    }
  },
  loadingMessage: (_provided, _state) => {
    return {
      color: theme.palette.text.main,
      fontFamily: theme.typography.fontFamily,
      zIndex: theme.zIndex.dropdown,
      cursor: 'pointer',
      fontSize: '13px',
      padding: '6px 16px',
      lineHeight: '1.5',
      overflow: 'visible',
      whiteSpace: 'nowrap',
      backgroundColor: theme.palette.common.white,
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
      color: theme.palette.common.gray500,
      cursor: 'pointer',
    }
  },
  loadingIndicator: (_provided, _state) => {
    return {
      color: theme.palette.common.gray500,
      display: 'flex',
      alignItems: 'center',
      fontSize: '4px',
    }
  },
  menuPortal: (_provided, _state) => {},
  group: (_provided, _state) => {},
  groupHeading: (_provided, _state) => {},
}

export const CustomInput = (props: {
  selectProps: any
  onFocus: (e) => any
  onBlur: (e) => any
}): JSX.Element => {
  const { selectProps } = props
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = isNotNilOrEmpty(selectProps.value)

  const handleOnFocus = e => {
    props.onFocus(e)
    setIsFocused(true)
  }
  const handleOnBlur = e => {
    props.onBlur(e)
    setIsFocused(false)
  }

  return (
    <Fragment>
      <components.Input
        {...props}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <InputLabel
        isFocused={isFocused}
        isFocusedOrHasValue={isFocused || hasValue}
        error={selectProps.error}
      >
        {selectProps.label}
        {selectProps.required ? ' *' : ''}
      </InputLabel>
      <ErrorText id={`${selectProps.name}-error`} error={selectProps.error}>
        {selectProps.errorText}
      </ErrorText>
    </Fragment>
  )
}

const InputLabel = styled.div`
  color: ${props => {
    switch (true) {
      case props.error:
        return props.theme.palette.error.main
      case props.isFocused:
        return props.theme.palette.primary.main
      default:
        return props.theme.palette.common.gray400
    }
  }};
  position: absolute;
  left: 14px;
  top: ${props => (props.isFocusedOrHasValue ? '-9px' : '16px')};
  font-size: ${props => (props.isFocusedOrHasValue ? '10px' : '13px')};
  line-height: ${props => (props.isFocusedOrHasValue ? '10px' : '13px')};
  padding: ${props => (props.isFocusedOrHasValue ? '0 5px' : '0')};
  background-color: ${props =>
    props.isFocusedOrHasValue
      ? props.theme.palette.background.default
      : 'transparent'};
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`

const ErrorText = styled.div`
  display: ${props => (props.error ? 'block' : 'none')};
  color: ${props => props.theme.palette.error.main};
  font-size: 9px;
  position: absolute;
  top: 105%;
  left: 14px;
  z-index: 1;
`
