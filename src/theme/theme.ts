// colors from January 2022
const colors = {
  black: '#1A1A1A',
  darkGrey: '#444444',
  white: '#FFFFFF',
  grey200: '#F6F8FA',
  grey300: '#DDDFE1',
  grey400: '#C5C6C8',
  grey600: '#949596',
  grey700: '#7B7C7D',
  brown900: '#352822',
  red200: '#FFE3E0',
  red500: '#E83E2E',
  orange200: '#FFEEDF',
  orange300: '#FFDCBB',
  orange400: '#FFB86E',
  orange500: '#F8961A',
  orange600: '#D47B00'
}

const palette = {
  heading: '#1A1A1A',
  text: '#444444',
  primary200: '#FFEEDF',
  primary500: '#F8961A',
  primary600: '#D47B00',
  secondary200: '#D2E3ED',
  secondary500: '#316689',
  secondary600: '#0B2C42',
  tertinary200: '#FFF3ED',
  tertinary500: '#EFD8CB',
  tertinary600: '#352822',
  white: '#FFFFFF',
  grey200: '#F6F8FA',
  grey300: '#DDDFE1',
  grey600: '#949596',
  error200: '#FFE3E0',
  error500: '#E83E2E',
  success200: '#DAF1E4',
  success500: '#119B4C',
  currency200: '#E7FBDB',
  currency500: '#85BB65'
}

export default {
  colors: {
    main: {
      heading: palette.heading,
      text: palette.text,
      primary200: palette.primary200,
      primary500: palette.primary500,
      primary600: palette.primary600,
      secondary200: palette.secondary200,
      secondary500: palette.secondary500,
      secondary600: palette.secondary600,
      tertinary200: palette.tertinary200,
      tertinary500: palette.tertinary500,
      tertinary600: palette.tertinary600,
      white: palette.white,
      grey200: palette.grey200,
      grey300: palette.grey300,
      grey600: palette.grey600,
      error200: palette.error200,
      error500: palette.error500,
      success200: palette.success200,
      success500: palette.success500,
      currency200: palette.currency200,
      currency500: palette.currency500
    },
    buttons: {
      contained: {
        primary: {
          font: palette.secondary600,
          background: palette.primary500,
          border: 'transparent',
          fontActive: palette.white,
          backgroundActive: palette.primary600,
          borderActive: 'transparent'
        },
        secondary: {
          font: palette.primary500,
          background: palette.secondary600,
          border: 'transparent',
          fontActive: palette.white,
          backgroundActive: palette.secondary500,
          borderActive: 'transparent'
        },
        transparent: {
          font: palette.text,
          background: 'transparent',
          border: 'transparent',
          fontActive: palette.primary500,
          backgroundActive: 'transparent',
          borderActive: palette.primary500
        },
        green: {
          font: palette.success500,
          background: palette.success200,
          border: palette.success500,
          fontActive: palette.white,
          backgroundActive: palette.success500,
          borderActive: palette.success500
        },
        red: {
          font: palette.error500,
          background: palette.error200,
          border: palette.error500,
          fontActive: palette.white,
          backgroundActive: palette.error500,
          borderActive: palette.error500
        },
        black: {
          font: palette.white,
          background: palette.text,
          border: 'transparent',
          fontActive: palette.white,
          backgroundActive: palette.heading,
          borderActive: palette.heading
        },
        disabled: {
          font: palette.grey200,
          background: palette.grey300,
          border: palette.grey300,
          fontActive: palette.grey200,
          backgroundActive: palette.grey300,
          borderActive: palette.grey300
        }
      },
      outlined: {
        primary: {
          font: palette.primary500,
          background: palette.white,
          border: palette.primary500,
          fontActive: palette.white,
          backgroundActive: palette.primary500,
          borderActive: palette.primary500
        },
        green: {
          font: palette.success500,
          background: palette.white,
          border: palette.success500,
          fontActive: palette.white,
          backgroundActive: palette.success500,
          borderActive: palette.success500
        },
        secondary: {
          font: palette.tertinary500,
          background: palette.white,
          border: palette.tertinary500,
          fontActive: palette.white,
          backgroundActive: palette.tertinary500,
          borderActive: palette.tertinary500
        },
        transparent: {
          font: palette.text,
          background: 'transparent',
          border: palette.text,
          fontActive: palette.white,
          backgroundActive: palette.text,
          borderActive: palette.text
        },
        red: {
          font: palette.error500,
          background: palette.white,
          border: palette.error500,
          fontActive: palette.white,
          backgroundActive: palette.error500,
          borderActive: palette.error500
        },
        black: {
          font: palette.text,
          background: palette.white,
          border: palette.text,
          fontActive: palette.white,
          backgroundActive: palette.text,
          borderActive: palette.text
        },
        disabled: {
          font: palette.grey600,
          background: palette.grey200,
          border: palette.grey600,
          fontActive: palette.grey600,
          backgroundActive: palette.grey200,
          borderActive: palette.grey600
        }
      },
      // used for IconButtons (icons without background)
      transparent: {
        primary: {
          font: palette.primary500,
          background: 'transparent',
          border: 'transparent',
          fontActive: palette.primary600,
          backgroundActive: 'transparent',
          borderActive: 'transparent'
        },
        green: {
          font: palette.success500,
          background: 'transparent',
          border: 'transparent',
          fontActive: palette.success200,
          backgroundActive: 'transparent',
          borderActive: 'transparent'
        },
        secondary: {
          font: palette.tertinary600,
          background: 'transparent',
          border: 'transparent',
          fontActive: palette.tertinary500,
          backgroundActive: 'transparent',
          borderActive: 'transparent'
        },
        transparent: {
          font: palette.text,
          background: 'transparent',
          border: 'transparent',
          fontActive: palette.heading,
          backgroundActive: 'transparent',
          borderActive: 'transparent'
        },
        red: {
          font: palette.error500,
          background: 'transparent',
          border: 'transparent',
          fontActive: palette.error200,
          backgroundActive: 'transparent',
          borderActive: 'transparent'
        },
        black: {
          font: palette.text,
          background: 'transparent',
          border: 'transparent',
          fontActive: palette.heading,
          backgroundActive: 'transparent',
          borderActive: 'transparent'
        },
        disabled: {
          font: palette.grey600,
          background: 'transparent',
          border: 'transparent',
          fontActive: palette.grey600,
          backgroundActive: 'transparent',
          borderActive: 'transparent'
        }
      }
    }
  },
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
    purple02: '#ca167c',
    purple03: '#e72392',
    purple04: '#eb47a4',
    purple05: '#ef6cb6',
    purple06: '#f391c8',
    purple07: '#f7b6db',
    purple08: '#fbdaed',
    purple09: '#fdedf6',

    // Bright reds
    brightred01: colors.red500,
    brightred02: '#ed665a',
    brightred03: '#f1887e',
    brightred04: '#f5aaa3',
    brightred05: '#f9ccc8',
    brightred06: '#fdeeed',
    brightred07: colors.red200,

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
    green10: '#DAF1E4',

    // Oranges
    orange01: colors.orange500,
    orange02: '#f9af4d',
    orange03: '#fac075',
    orange04: '#fbd29d',
    orange05: '#fde4c4',
    orange06: '#fef6eb',
    orange07: '#FAAD14',
    orange15: '#FCC65A',

    // Math Purple
    mathPurple06: '#a5a6f6',
    mathPurple08: '#d6d7f1',

    // Aquamarine
    aquamarine06: '#d2e598',
    aquamarine08: '#dbe2c6',

    // Turquoise
    turquoise06: '#93f4f4',
    turquoise08: '#d6f1f1',

    // Yellow
    yellow06: '#ffc22a',
    yellow08: '#fde19d',

    // Grey
    gray01: '#c2c2c2',

    // Highlights
    highlightGreen: '#13fb03',
    highlightYellow: '#ffff00',

    //
    // Old Palette
    //
    black: '#000',
    black02: '#181C27',
    white: '#fff',
    grey03: '#E8E9ED',
    grey04: '#A4A3A8',
    grey05: '#AAAAAA',
    grey06: '#464240',
    grey07: '#9F9F9F',
    grey08: '#E7E6E5',
    grey09: '#F0EFEE',
    grey10: '#F2F1F0',
    grey11: '#F2F2F2',
    grey12: colors.grey300,
    grey13: colors.grey600,

    biege: '#FCFBFA',
    orange08: '#FFD5BB',
    orange09: '#FFC488',
    orange10: '#FFE6C6',
    orange11: '#FFE6C7',
    orange12: '#FFEFDD',
    orange13: '#FFF5EB',
    orange14: '#FCFBF9',
    red04: '#A72A1C',
    red05: colors.red500,
    red10: '#FFDBD8',
    gray1: '#2E2D2C',
    gray2: '#343432',
    gray3: '#848484',
    gray4: '#4D4D4D',
    overlay: 'rgba(252, 251, 250, 0.6)',
    inactive: '#B5B5B5',
    // background: '#FCFBFA',

    // new colors

    background: colors.grey200,
    panelBackground: colors.white,
    disabledBackground: colors.grey200,
    disabledFont: colors.grey400,
    textDark: colors.darkGrey,
    headingDark: colors.black,
    border: '#E3E5E7',
    placeholder: colors.grey600,
    scroller: colors.grey400,
    scrollerThumb: colors.grey700,
    adminHighlights: '#D9D9D9',
    divider: '#D7D7D7',
    proficiencyDrawer: '#D2E3ED',
    proficiencyDrawerBorder: '#316689',
    modalBackground: 'rgba(26, 26, 26, .6)', // #1A1A1A + opacity 0.6
    notificationWarningBackground: colors.orange200,
    notificationWarningFont: colors.orange600,
    notificationErrorBackground: colors.red200,
    notificationErrorFont: colors.red500,
    contentQuestionsRightAnswer: '#a635ff',
    dollarsFont: '#85BB65',
    dollarsBackground: '#E7FBDB',
    bookNavigationDarkBrown: '#EFD8CB',
    bookNavigationLightBrown: '#FFF3ED',
    freeTrialNotification: '#FFFDCD'
  },
  shape: {
    borderRadiusSmall: '2px',
    borderRadiusNormal: '4px',
    borderRadiusBig: '8px'
  },
  shadows: {
    beigeShadow: '0px 10px 20px rgba(33, 26, 22, 0.1)',
    greenShadow: '0px 4px 4px rgba(60, 85, 49, 0.2)',
    orangeShadow: '0px 4px 4px 0px rgba(249, 175, 77, 0.25)',
    blueShadow: '0px 4px 4px 0px rgba(11, 44, 66, 0.25)',
    headerShadow: '0px 2px 16px rgba(33, 26, 22, 0.04)',
    // darkShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    darkShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    mainShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    chartShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)'
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
    modal: 3030,
    snackbarToast: 3040, // please see EK-927
    snackbar: 1900,
    tooltip: 1500,
    dropdown: 1700,
    menu: 2000,
    navigation: 3000,
    mainOverlay: 3040, // please see EK-927
    mainMenu: 3050 // please see EK-927
  },
  typography: {
    fontFamily: "'Arial', 'Milliard', sans-serif",
    fontFamilySecondary: "'Alfa Slab One', sans-serif",
    fontFamilySalty: "'Comic Sans MS', 'Comic Sans', cursive",
    fontFamilyDigital: "'Digital', sans-serif",
    fontSizeBig: '22px',
    fontSizeNormal: '14px', // Changed because this font was too large
    fontSizeSmall: '14px',
    fontSizeExtraSmall: '12px',
    fontSizeExtraUltraSmall: '10px', // :)
    fontSizeExtraHiperUltraSmall: '8px', // :D
    inputSmall: '11px'
  },
  dimensions: {
    inputHeight: '42px',
    inputSmallHeight: '32px',
    buttonNormalHeight: '42px',
    buttonNormalMinWidth: '114px',
    buttonSmallHeight: '32px',
    buttonSmallMinWidth: '32px',
    adminSideNavWidth: '276px',
    studentSideNavWidth: '236px',
    studentTopNavHeightMenu: '75px',
    studentTopNavHeight: '80px',
    topNotificationHeight: '32px',
    adminTopNavHeight: '80px',
    tagHeight: '21px',
    tagWidth: '50px',
    footerHeight: '32px'
  },
  breakpointsMedia: {
    mobile: '@media (max-width: 768px)',
    smallDesktop: '@media (max-width: 1024px)'
  },
  withNotification: false
}
