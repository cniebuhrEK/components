export default {
  palette: {
    //
    // New Palette
    //

    // Deep reds
    deepred01: '#a51417',
    deepred02: '#c8191c',
    deepred03: '#e42528',
    deepred04: '#e9494c',
    deepred05: '#ed6e70',
    deepred06: '#f29294',
    deepred07: '#f6b6b7',
    deepred08: '#fbdbdb',
    deepred09: '#fdeded',

    // Purples
    purple01: '#9b115f',
    purple02: '#9b115f',
    purple03: '#e72392',
    purple04: '#eb47a4',
    purple05: '#ef6cb6',
    purple06: '#f391c8',
    purple07: '#f7b6db',
    purple08: '#fbdaed',
    purple09: '#fdedf6',

    // Bright reds
    brightred01: '#e83e2e',
    brightred02: '#ed665a',
    brightred03: '#f1887e',
    brightred04: '#f5aaa3',
    brightred05: '#f9ccc8',
    brightred06: '#fdeeed',

    // Light blues
    lightblue01: '#1a7af8',
    lightblue02: '#4d98f9',
    lightblue03: '#75affa',
    lightblue04: '#9dc6fb',
    lightblue05: '#c4ddfd',
    lightblue06: '#ebf4fe',

    // Browns
    brown01: '#42210b',
    brown02: '#693512',
    brown03: '#8c4618',
    brown04: '#ae581e',
    brown05: '#d16923',
    brown06: '#de7f3f',
    brown07: '#e49662',
    brown08: '#eaad85',
    brown09: '#f0c5a8',
    brown10: '#f6dccb',

    // Dark blues
    darkblue01: '#0b2c42',
    darkblue02: '#124669',
    darkblue03: '#185d8c',
    darkblue04: '#1e74ae',
    darkblue05: '#238cd1',
    darkblue06: '#3f9fde',
    darkblue07: '#62b0e4',
    darkblue08: '#85c2ea',
    darkblue09: '#a8d3f0',
    darkblue10: '#cbe5f6',

    // Greens
    green01: '#119b4c',
    green02: '#16ca64',
    green03: '#23e778',
    green04: '#47eb8e',
    green05: '#6cefa5',
    green06: '#91f3bb',
    green07: '#b6f7d2',
    green08: '#dafbe8',
    green09: '#edfdf3',

    // Oranges
    orange01: '#f8961a',
    orange02: '#f9af4d',
    orange03: '#fac075',
    orange04: '#fbd29d',
    orange05: '#fde4c4',
    orange06: '#fef6eb',

    //
    // Old Palette
    //
    black: '#000',
    white: '#fff',
    grey05: '#AAAAAA',
    grey06: '#464240',
    grey07: '#9F9F9F',
    grey08: '#E7E6E5',
    grey09: '#F0EFEE',
    grey10: '#F2F1F0',
    grey11: '#F2F2F2',
    biege: '#FCFBFA',
    orange08: '#FFD5BB',
    orange09: '#FFC488',
    orange10: '#FFE6C6',
    orange11: '#FFE6C7',
    orange12: '#FFEFDD',
    orange13: '#FFF5EB',
    orange14: '#FCFBF9',
    red04: '#A72A1C',
    red05: '#E83E2E',
    red10: '#FFDBD8',
    green10: '#D2EDB5',
    gray1: '#2E2D2C',
    gray2: '#343432',
    gray3: '#848484',
    gray4: '#4D4D4D',
    overlay: 'rgba(252, 251, 250, 0.6)',
    inactive: '#979797',
    background: '#FCFBFA'
  },
  shape: {
    borderRadiusSmall: '2px',
    borderRadiusNormal: '4px',
    borderRadiusBig: '6px'
  },
  shadows: {
    beigeShadow: '0px 10px 20px rgba(33, 26, 22, 0.1)',
    greenShadow: '0px 4px 4px rgba(60, 85, 49, 0.2)',
    orangeShadow: '0px 4px 4px 0px rgba(249, 175, 77, 0.25)',
    blueShadow: '0px 4px 4px 0px rgba(11, 44, 66, 0.25)',
    headerShadow: '0px 2px 16px rgba(33, 26, 22, 0.04)',
    darkShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)'
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
    fontSizeNormal: '1rem',
    fontSizeSmall: '0.875rem',
    fontSizeExtraSmall: '0.75rem'
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
