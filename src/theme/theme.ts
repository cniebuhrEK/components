export default {
  palette: {
    black: '#000',
    white: '#fff',
    brown01: '#2E241F',
    brown02: '#58453B',
    grey07: '#4F4B49',
    grey08: '#A9A9A9',
    grey09: '#EAE9E8',
    grey10: '#F2F1F0',
    biege: '#FCFBFA',
    orange04: '#F38800',
    orange05: '#FF9E33',
    orange10: '#FFE6C6',
    red05: '#E83E2E',
    red10: '#FFDFDC',
    green04: '#447D29',
    green05: '#71C700',
    green10: '#D9EFBB',
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
    beigeShadow: '0px 10px 20px rgba(33, 26, 22, 0.1)'
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
    fontFamily: "'Milliard', sans-serif",
    fontSizeNormal: '16px',
    fontSizeSmall: '14px'
  },
  dimensions: {
    inputHeight: '43px',
    buttonNormalHeight: '43px',
    buttonNormalMinWidth: '114px',
    buttonSmallHeight: '32px',
    buttonSmallMinWidth: '32px'
  },
  breakpointsMedia: {
    mobile: '@media (max-width: 768px)',
    smallDesktop: '@media (max-width: 1024px)'
  }
}
