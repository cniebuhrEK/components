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
      selectProps: { error }
    } = state

    return {
      margin: '30px 0',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      position: 'relative',
      borderWidth: '1px',
      borderStyle: 'solid',
      fontSize: '13px',
      padding: '0 14px',
      borderColor: error ? theme.palette.red05 : 'transparent',
      borderRadius: theme.shape.borderRadiusNormal,
      fontFamily: theme.typography.fontFamily,
      minHeight: theme.dimensions.inputHeight,
      color: error ? theme.palette.red05 : theme.palette.brown01,
      backgroundColor: theme.palette.grey09,
      transition: `all 200ms ${theme.transitions.easing.easeInOut} 0ms`,
      '&:hover': {
        cursor: 'text',
        borderColor: error ? theme.palette.red05 : theme.palette.brown01
      },
      '&:focus-within': {
        borderWidth: '1px',
        borderColor: error ? theme.palette.red05 : theme.palette.orange04,
        color: error ? theme.palette.red05 : theme.palette.brown01
      }
    }
  },
  input: (_provided, _state) => {
    return {
      fontSize: '13px',
      backgroundColor: 'transparent',
      border: 'none',
      color: theme.palette.brown01,
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
      color: theme.palette.brown01,
      fontFamily: theme.typography.fontFamily,
      zIndex: theme.zIndex.dropdown,
      cursor: 'pointer',
      fontSize: '13px',
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
      borderRadius: theme.shape.borderRadiusNormal,
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
      color: theme.palette.brown01,
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
      color: theme.palette.brown01,
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
      color: theme.palette.brown01,
      cursor: 'pointer'
    }
  },
  loadingIndicator: (_provided, _state) => {
    return {
      color: theme.palette.brown01,
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
        return props.theme.palette.red05
      case props.isFocused:
      default:
        return props.theme.palette.brown01
    }
  }};
  position: absolute;
  left: ${props => (props.isFocusedOrHasValue ? '-1px' : '14px')};
  top: ${props => (props.isFocusedOrHasValue ? '-19px' : '14px')};
  font-size: ${props => (props.isFocusedOrHasValue ? '12px' : '16px')};
  line-height: ${props => (props.isFocusedOrHasValue ? '12px' : '16px')};
  background-color: transparent;
  transition: all 200ms ${props => props.theme.transitions.easing.easeInOut}
  0ms;
`

const ErrorText = styled.div`
  display: ${props => (props.error ? 'block' : 'none')};
  color: ${props => props.theme.palette.red05};
  font-size: 12px;
  position: absolute;
  left: -1px;
  bottom: -20px;
  z-index: 1;
`
