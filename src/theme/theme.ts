export default {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      gray100: '#ffffff1a',
      gray200: '#ffffff33',
      gray300: '#ffffff4d',
      gray400: '#ffffff66',
      gray500: '#ffffff80',
      gray600: '#ffffff99',
      gray700: '#ffffffb3',
      gray800: '#ffffffcc',
      gray900: '#ffffffe6'
    },
    background: {
      paper: '#3b3b39',
      default: '#343432'
    },
    primary: {
      main: '#faad4c',
      light: '#faad4cb3',
      dark: '#9e5a04',
      contrastText: '#ffffffe6'
    },
    secondary: {
      main: '#74c708',
      light: '#74c708b3',
      dark: '#396304',
      contrastText: '#ffffffe6'
    },
    tertiary: {
      main: '#2ebec4',
      light: '#5adbe0',
      dark: '#1d9ca0',
      contrastText: '#fff'
    },
    error: {
      light: '#FFA28D',
      main: '#FF7768',
      dark: '#DB4E4C',
      contrastText: '#ffffffe6'
    },
    warning: {
      light: '#FFF275',
      main: '#DBC833',
      dark: '#DBC833',
      contrastText: '#ffffffe6'
    },
    info: {
      light: '#40DDF4',
      main: '#04BEED',
      dark: '#0294CB',
      contrastText: '#ffffffe6'
    },
    success: {
      light: '#8AEF87',
      main: '#60E567',
      dark: '#46C458',
      contrastText: '#ffffffe6'
    },
    text: {
      main: '#ffffff'
    }
  },
  shape: {
    borderRadius: '2px'
  },
  shadows: {
    main: '4px 0 20px 0 rgba(37, 38, 94, 0.1)',
    paper: '0 4px 24px 0 rgba(37, 38, 94, 0.1)'
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
    fontFamily: '\'Nunito\', \'Open Sans\', sans-serif'
  },
  dimensions: {
    navHeight: '60px',
    bottomNavHeight: '54px',
    footerHeight: '54px',
    footerHeightMobile: '46px',
    navigationFullDrawerWidth: '240px',
    navigationShrinkDrawerWidth: '59px',
    authFormWidth: '600px',
    authRightSideBarWidth: '350px',
    inputHeight: '48px',
    buttonNormalHeight: '35px',
    buttonSmallHeight: '19px',
    buttonLargeHeight: '47px'
  },
  breakpoints: {
    mobile: 768,
    smallDesktop: 1024
  },
  breakpointsMedia: {
    mobile: '@media (max-width: 768px)',
    smallDesktop: '@media (max-width: 1024px)'
  }
}
