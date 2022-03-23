import colors from './colors'

export const palette = {
  ...colors,
  heading: '#FFFFFF',
  text: '#BBBBBC',
  currency500: '#BDFA3B'
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
      currency500: palette.currency500,
      black: palette.black,
      darkGradient: palette.darkGradient,
      primaryGradient: palette.primaryGradient,
      currencyGradient: palette.currencyGradient
    },
    buttons: {
      contained: {
        primary: {
          font: palette.white,
          background: palette.primaryGradient,
          border: 'transparent',
          fontActive: palette.secondary600,
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
          font: palette.secondary600,
          background: palette.white,
          border: palette.secondary600,
          fontActive: palette.white,
          backgroundActive: palette.secondary600,
          borderActive: palette.secondary600
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
          font: palette.secondary600,
          background: 'transparent',
          border: 'transparent',
          fontActive: palette.secondary500,
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
    },
    inputs: {
      input: {
        font: palette.text,
        background: palette.white,
        border: palette.grey300,
        fontActive: palette.text,
        backgroundActive: palette.white,
        borderActive: palette.text,
        fontPlaceholder: palette.grey600
      },
      disabled: {
        font: palette.grey300,
        background: palette.grey200,
        border: palette.grey300,
        fontActive: palette.grey300,
        backgroundActive: palette.grey200,
        borderActive: palette.grey300
      }
    },
    selects: {
      input: {
        font: palette.text,
        background: palette.white,
        border: palette.grey300,
        fontActive: palette.primary500,
        backgroundActive: palette.tertinary600,
        borderActive: palette.tertinary600
      },
      disabled: {
        font: palette.grey300,
        background: palette.grey200,
        border: palette.grey300,
        fontActive: palette.grey300,
        backgroundActive: palette.grey200,
        borderActive: palette.grey300
      },
      option: {
        font: palette.text,
        background: 'linear-gradient(180deg, #323335 0%, #1B1C1F 100%)',
        fontActive: palette.primary500,
        backgroundActive: '#49494c'
      }
    },
    backgrounds: {
      app: '#090909',
      main: palette.darkGradient
    },
    checkbox: {
      font: palette.white,
      background: 'transparent',
      border: palette.grey300,
      fontActive: palette.white,
      backgroundActive: palette.primary500,
      borderActive: palette.primary500
    },
    radio: {
      border: palette.grey600,
      mark: palette.text,
      font: palette.text,
      background: palette.white
    },
    scroll: {
      scroller: palette.grey300,
      thumb: palette.grey600
    },
    modal: {
      overlay: 'rgba(26, 26, 26, .6)',
      background: palette.darkGradient,
      heading: palette.heading
    },
    topNav: {
      border: 'transparent',
      background: 'linear-gradient(180deg, #49494C 0%, #101112 100%)',
      freeTrial: '#FFFDCD',
      overlay: 'rgba(26, 26, 26, .6)',
      totalSaltyBucksAndTimer: {
        boxShadow: 'inset -2px -2px 6px #49494c, inset 2px 2px 8px #090909',
        saltyHistoryHeaders: '#A4A4A5',
        saltyBucksBackground:
          'linear-gradient(180deg, #bdfa3b 0%, #377712 100%)',
        background: '#1b1c1f',
        border: 'transparent',
        dropdownLineBreak: '#49494c',
        clockIconBackground:
          'linear-gradient(180deg, #B87D55 0%, #42210B 100%);',
        pauseIconBackground: '#323335',
        iconFont: palette.heading
      }
    },
    mainMenu: {
      background: palette.black,
      font: palette.text,
      borderActive: palette.primary500
    },
    selectSwitcher: {
      background: palette.white,
      border: palette.grey300,
      mark: palette.success500
    },
    volumeControl: {
      font: palette.grey600,
      border: palette.white,
      range: palette.primary500,
      thumb: palette.grey300
    },
    table: {
      font: palette.text,
      border: palette.grey300,
      background: palette.black
    },
    tabs: {
      font: palette.grey600,
      background: palette.grey300,
      fontActive: palette.white,
      backgroundActive: palette.primaryGradient
    },
    toast: {
      success: {
        font: palette.success500,
        border: palette.success500
      },
      error: {
        font: palette.error500,
        border: palette.error500
      },
      warning: {
        font: palette.primary600,
        border: palette.primary600
      },
      info: {
        font: palette.tertinary600,
        border: palette.tertinary600
      }
    },
    toggle: {
      font: palette.text,
      mark: palette.white,
      background: palette.grey300,
      markActive: palette.success500,
      backgroundActive: palette.white
    },
    tooltip: {
      background: palette.text,
      font: palette.white
    },
    tags: {
      purple: {
        background: '#fbdaed',
        backgroundActive: '#f391c8'
      },
      red: {
        background: '#f6b6b7',
        backgroundActive: '#ed6e70'
      },
      blue: {
        background: '#c4ddfd',
        backgroundActive: '#75affa'
      },
      green: {
        background: '#dafbe8',
        backgroundActive: '#91f3bb'
      },
      orange: {
        background: '#fef6eb',
        backgroundActive: '#fbd29d'
      },
      brown: {
        background: '#f6dccb',
        backgroundActive: '#e49662'
      },
      mathPurple: {
        background: '#d6d7f1',
        backgroundActive: '#a5a6f6'
      },
      aquamarine: {
        background: '#dbe2c6',
        backgroundActive: '#d2e598'
      },
      turquoise: {
        background: '#d6f1f1',
        backgroundActive: '#93f4f4'
      },
      yellow: {
        background: '#fde19d',
        backgroundActive: '#ffc22a'
      },
      grey: {
        background: palette.grey300,
        backgroundActive: palette.grey600
      }
    },
    highlights: {
      green: {
        background: '#13fb03'
      },
      yellow: {
        background: '#ffff00'
      },
      red: {
        background: '#f6b6b7'
      },
      purple: {
        background: '#fbdaed'
      },
      blue: {
        background: '#c4ddfd'
      },
      orange: {
        background: '#fde4c4'
      }
    },
    editorFontColors: {
      green: {
        font: '#16ca64'
      },
      purple: {
        font: '#9b115f'
      },
      blue: {
        font: '#1a7af8'
      },
      orange: {
        font: palette.primary500
      },
      black: {
        font: palette.heading
      },
      brown: {
        font: '#42210b'
      },
      red: {
        font: palette.error500
      },
      admin: {
        font: '#D9D9D9'
      }
    },
    diagnostics: {
      question: {
        skipped: '#ca167c',
        correct: palette.success500,
        incorrect: palette.error500
      },
      projections: {
        target: '#9b115f',
        scaled: '#1e74ae'
      },
      diagnostic: {
        passageWorking: {
          font: '#ae581e',
          chart: '#fde4c4'
        },
        passageReading: {
          font: '#ae581e',
          chart: '#fac075'
        }
      }
    },
    dashboard: {
      dataLabels: '#949596',
      barsFrom: '#E9001C',
      barsTo: '#FFD900',
      barsVertical: 'linear-gradient(270deg, #FFD900 0%, #E9001C 100%)',
      barsHorizontal: 'linear-gradient(270deg, #FFD900 0%, #E9001C 100%)',
      totalProgress: '#A4A4A5',
      totalProgressShadowLight: '#5F6062',
      totalProgressShadowMedium: '#767779',
      totalProgressShadowDark: '#000',
      totalProgressBackground: '#1B1C1F',
      chartsGridLine: '#49494C',
      questions: {
        correctBarFrom: '#4D4F51',
        correctBarVia: '#FAA307',
        correctBarTo: '#FFD900',
        incorrectBarFrom: '#4D4F51',
        incorrectBarVia: '#EF3615',
        incorrectBarTo: '#E9001C',
        untriedBarFrom: '#1B1C1F',
        untriedBarVia: '#767779',
        untriedBarTo: '#5F6062',
        correctColor: '#FFA800',
        correctBar:
          'linear-gradient(270deg, #FFD900 0.19%, #FAA307 11.11%, #4D4F51 100%)',
        incorrectColor: '#E9001C',
        incorrectBar:
          'linear-gradient(270deg, #EF3615 0%, #E9001C 13.54%, #4D4F51 100%)',
        untriedColor: '#5F6062',
        untriedBar: '#5F6062'
      },
      learningTime: {
        barsFrom: '#E9001C',
        barsTo: '#FFD900'
      },
      flashcards: {
        background200: 'linear-gradient(180deg, #FFD900 0%, #B38B00 100%)',
        background300: 'linear-gradient(180deg, #F59800 0%, #AC6A00 100%)',
        background400: 'linear-gradient(180deg, #F57500 0%, #AC5200 100%)',
        background500: 'linear-gradient(180deg, #DF4100 0%, #9C2E00 100%)',
        background600: 'linear-gradient(180deg, #A30014 0%, #72000E 100%)'
      },
      speedometer: {
        infoButtonBorder: '#323335',
        infoButtonBackground: '#1B1C1F',
        buttonText: '#A4A4A5',
        infoBoxBackground: 'rgba(9, 9, 9, 0.9)'
      },
      mcat: {
        strokeDash: '#49494C'
      },
      sb: {
        mainLine: '#BDFA3B',
        strokeDash: '#49494C'
      }
    },
    books: {
      saltyText: '#d16923',
      selectBorder: '#9b115f',
      contentQuestionMark: '#a635ff',
      resources: {
        tmi: {
          background: '#ebf4fe',
          font: '#1a7af8'
        },
        video: {
          background: palette.primary200,
          font: palette.primary500
        },
        clinicalContext: {
          background: '#edfdf3',
          font: '#16ca64'
        },
        mcatThink: {
          background: '#fdedf6',
          font: '#9b115f'
        }
      },
      navigation: {
        backgroundDark: 'linear-gradient(180deg, #FBEBE2 0%, #EFD8CB 100%)',
        borderDark: '#EFD8CB',
        backgroundLight: '#FFF3ED'
      }
    },
    flashcards: {
      boxes: {
        active: '#E7E6E5',
        background: '#D2E3ED',
        font: '#316689'
      },
      hotkeysLegend:
        'linear-gradient(180deg, rgba(228, 228, 228, 1) 0%, rgba(255, 255, 255, 1) 100%)'
    }
  }
}
