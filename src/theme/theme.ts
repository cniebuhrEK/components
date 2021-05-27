export default {
  palette: {
    black: '#000',
    white: '#fff',
    brown01: '#2E241F',
    brown02: '#58453B',
    brown03: '#6F574D',
    grey06: '#464240',
    grey07: '#9F9F9F',
    grey08: '#E7E6E5',
    grey09: '#F0EFEE',
    grey10: '#F2F1F0',
    biege: '#FCFBFA',
    orange04: '#FAAD4C',
    orange05: '#FF9E33',
    orange09: '#FFC488',
    orange10: '#FFE6C6',
    orange11: '#FFE6C7',
    orange12: '#FFEFDD',
    orange13: '#FFF5EB',
    orange14: '#FCFBF9',
    red04: '#A72A1C',
    red05: '#E83E2E',
    red10: '#FFDBD8',
    green04: '#447D29',
    green03: '#39B54A',
    green05: '#71C700',
    green10: '#D2EDB5',
    gray1: '#2E2D2C',
    gray2: '#343432',
    gray3: '#848484',
    overlay: 'rgba(0, 0, 0, 0.6)'
  },
  shape: {
    borderRadiusSmall: '2px',
    borderRadiusNormal: '4px',
    borderRadiusBig: '6px'
  },
  shadows: {
    greenShadow: '0px 4px 8px rgba(60, 85, 49, 0.2)',
    orangeShadow: '0px 4px 8px rgba(168, 129, 33, 0.201547)',
    beigeShadow: '0px 10px 20px rgba(33, 26, 22, 0.1)',
    headerShadow: '0px 2px 16px rgba(33, 26, 22, 0.04)'
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    dropdown: 1700
  },
  typography: {
    fontFamily: "'Arial', 'Milliard', sans-serif",
    fontFamilySecondary: "'Alfa Slab One', sans-serif",
    fontSizeNormal: '16px',
    fontSizeSmall: '14px',
    fontSizeExtraSmall: '12px'
  },
  dimensions: {
    inputHeight: '43px',
    inputSmallHeight: '32px',
    buttonNormalHeight: '43px',
    buttonNormalMinWidth: '114px',
    buttonSmallHeight: '32px',
    buttonSmallMinWidth: '32px',
    adminSideNavWidth: '276px',
    studentSideNavWidth: '276px',
    studentTopNavHeight: '64px',
    adminTopNavHeight: '48px'
  },
  breakpointsMedia: {
    mobile: '@media (max-width: 768px)',
    smallDesktop: '@media (max-width: 1024px)'
  }
}
