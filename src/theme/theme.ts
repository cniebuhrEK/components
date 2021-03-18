export default {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      gray100: '#F8F8F9',
      gray200: '#F1F1F3',
      gray300: '#D8D9DB',
      gray400: '#B5B6B8',
      gray500: '#868789',
      gray600: '#616775',
      gray700: '#434B62',
      gray800: '#2A334F',
      gray900: '#192141'
    },
    background: {
      paper: '#fff',
      default: '#fafafa'
    },
    primary: {
      main: '#ff9347',
      light: '#ffb37d',
      dark: '#fc6e08',
      contrastText: '#fff',
      transparent: '#ffb06b26'
    },
    secondary: {
      main: '#8653D0',
      light: '#A27DD9',
      dark: '#62399c',
      contrastText: '#fff'
    },
    tertiary: {
      main: '#2ebec4',
      light: '#5adbe0',
      dark: '#1d9ca0',
      contrastText: '#fff'
    },
    error: {
      light: '#FF7F69',
      main: '#FF4538',
      dark: '#DB282C',
      contrastText: '#fff'
    },
    warning: {
      light: '#FFE882',
      main: '#ffdd59',
      dark: '#DBB841',
      contrastText: '#282166'
    },
    info: {
      light: '#36DBD2',
      main: '#00bec4',
      dark: '#0095A8',
      contrastText: '#fff'
    },
    success: {
      light: '#A8EF8E',
      main: '#82E569',
      dark: '#5CC44C',
      contrastText: '#282166'
    },
    text: {
      main: '#282166'
    }
  },
  shape: {
    borderRadius: '4px'
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
    fontFamily: '\'Montserrat\', \'Open Sans\', sans-serif'
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
    buttonNormalHeight: '48px',
    buttonSmallHeight: '32px',
    buttonLargeHeight: '60px'
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
