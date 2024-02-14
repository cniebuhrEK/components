import colors from './colors'

export const palette = {
  ...colors,
  primaryGradient: 'linear-gradient(180deg, #F8961A 0%, #D47B00 100%)'
}

export default {
  colors: {
    main: {
      heading: palette.heading,
      text: palette.text,
      primary100: palette.primary100,
      primary200: palette.primary200,
      primary300: palette.primary300,
      primary400: palette.primary400,
      primary500: palette.primary500,
      primary600: palette.primary600,
      primary700: palette.primary700,
      primary800: palette.primary800,
      secondary200: palette.secondary200,
      secondary500: palette.secondary500,
      secondary600: palette.secondary600,
      white: palette.white,
      grey200: palette.grey200,
      grey300: palette.grey300,
      grey400: palette.grey400,
      grey500: palette.grey500,
      grey600: palette.grey600,
      error200: palette.error200,
      error500: palette.error500,
      success200: palette.success200,
      success500: palette.success500,
      currency200: palette.currency200,
      currency500: palette.currency500,
      brown: palette.brown,
      black: palette.black,
      darkGradient: palette.darkGradient,
      primaryGradient: palette.primaryGradient,
      currencyGradient: palette.currencyGradient,
      brownGradient: palette.brownGradient
    },
    buttons: {
      contained: {
        primary: {
          font: palette.white,
          background: palette.primaryGradient,
          border: 'transparent',
          fontActive: palette.white,
          backgroundActive: 'linear-gradient(180deg, #D47B00 0%, #F8961A 100%)',
          borderActive: 'transparent'
        },
        secondary: {
          font: palette.white,
          background: 'linear-gradient(180deg, #B3764E 0%, #7E441E 100%)',
          border: 'transparent',
          fontActive: palette.white,
          backgroundActive: 'linear-gradient(180deg, #7E441E 0%, #B3764E 100%)',
          borderActive: 'transparent'
        },
        // background: 'linear-gradient(180deg, #FCFCFC 0%, #C5C6C8 100%)',
        tertiary: {
          font: palette.secondary600,
          background: 'linear-gradient(180deg, #F3E2D7 0%, #D7BCAA 100%)',
          border: 'transparent',
          fontActive: palette.secondary600,
          backgroundActive: 'linear-gradient(180deg, #D7BCAA 0%, #F3E2D7 100%)',
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
          font: palette.white,
          background: 'linear-gradient(180deg, #31C26F 0%, #119B4C 100%)',
          border: 'transparent',
          fontActive: palette.white,
          backgroundActive: 'linear-gradient(180deg, #119B4C 0%, #31C26F 100%)',
          borderActive: 'transparent'
        },
        red: {
          font: palette.white,
          background: 'linear-gradient(180deg, #FF5D4E 0%, #E83E2E 100%)',
          border: 'transparent',
          fontActive: palette.white,
          backgroundActive: 'linear-gradient(180deg, #E83E2E 0%, #FF5D4E 100%)',
          borderActive: 'transparent'
        },
        purple: {
          font: palette.secondary600,
          background: 'linear-gradient(180deg, #d4cde0 0%, #d4cde0 100%)',
          border: '#9d94bf',
          fontActive: palette.secondary600,
          backgroundActive: 'linear-gradient(180deg, #d4cde0 0%, #d4cde0 100%)',
          borderActive: 'transparent'
        },
        black: {
          font: palette.white,
          background: palette.text,
          border: 'transparent',
          fontActive: palette.white,
          backgroundActive: palette.heading,
          borderActive: palette.heading
        },
        darkRed: {
          font: palette.white,
          background: 'linear-gradient(180deg, #A30014 0%, #72000E 100%)',
          border: 'transparent',
          fontActive: palette.white,
          backgroundActive: 'linear-gradient(180deg, #72000E 0%, #A30014 100%)',
          borderActive: 'transparent'
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
          font: '#7E441E',
          background: palette.white,
          border: '#B2764E',
          fontActive: palette.white,
          backgroundActive: '#B2764E',
          borderActive: 'transparent'
        },
        tertiary: {
          font: '#D7BCAA',
          background: palette.secondary600,
          border: 'transparent',
          fontActive: palette.secondary600,
          backgroundActive: '#D7BCAA',
          borderActive: 'transparent'
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
          font: '#7E441E',
          background: 'transparent',
          border: 'transparent',
          fontActive: '#B2764E',
          backgroundActive: 'transparent',
          borderActive: 'transparent'
        },
        tertiary: {
          font: '#D7BCAA',
          background: 'transparent',
          border: 'transparent',
          fontActive: '#D7BCAA',
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
        font: palette.grey500,
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
        backgroundActive: palette.text,
        borderActive: palette.text
      },
      disabled: {
        font: palette.grey500,
        background: palette.grey200,
        border: palette.grey300,
        fontActive: palette.grey300,
        backgroundActive: palette.grey200,
        borderActive: palette.grey300
      },
      option: {
        font: palette.text,
        background: palette.white,
        fontActive: palette.primary500,
        backgroundActive: palette.grey200
      }
    },
    datePicker: {
      background: palette.white,
      border: palette.grey300,
      font: palette.text,
      fontActive: palette.black,
      fontSelected: palette.white,
      selectedBackground: 'linear-gradient(180deg, #D47B00 0%, #F8961A 100%)',
      selectedBackgroundHover:
        'linear-gradient(180deg, #F8961A 0%, #D47B00 100%)',
      todayFont: palette.primary500,
      weekendFont: palette.primary500,
      arrowColor: palette.black
    },
    backgrounds: {
      app: palette.grey200,
      main: palette.white
    },
    checkbox: {
      font: palette.white,
      background: palette.white,
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
      background: palette.white,
      heading: palette.heading
    },
    topNav: {
      border: 'transparent',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #E6E9EC 100%)',
      freeTrial: '#FFFDCD',
      freeTrialFont: palette.text,
      overlay: 'rgba(26, 26, 26, .6)',
      totalSaltyBucksAndTimer: {
        boxShadow: 'inset 2px 2px 6px #DDDFE1',
        saltyHistoryHeaders: '#A4A4A5',
        saltyBucksBackground:
          'linear-gradient(180deg, #bdfa3b 0%, #377712 100%)',
        background: palette.white,
        border: 'transparent',
        dropdownLineBreak: palette.text,
        clockIconBackground:
          'linear-gradient(180deg, #FAAD4C 0%, #A82A1C 100%);',
        pauseIconBackground:
          'linear-gradient(180deg, #DDDFE1 0%, #7B7C7D 100%)',
        iconFont: palette.white
      }
    },
    mainMenu: {
      background: palette.white,
      backgroundActive: palette.primary200,
      backgroundSelected: palette.primary500,
      font: palette.text,
      fontActive: palette.primary500,
      fontSelected: palette.white,
      borderActive: palette.primary500,
      secondShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      mainShadow: '0px 0px 25px rgba(0, 0, 0, 0.3)'
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
      background: palette.white
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
        border: palette.success500,
        background: palette.white
      },
      error: {
        font: palette.error500,
        border: palette.error500,
        background: palette.white
      },
      warning: {
        font: palette.primary600,
        border: palette.primary600,
        background: palette.white
      },
      info: {
        font: palette.secondary600,
        border: palette.secondary600,
        background: palette.white
      }
    },
    toggle: {
      font: palette.text,
      mark: palette.primary500,
      background: palette.grey300,
      markActive: palette.white,
      backgroundActive: palette.grey300
    },
    tooltip: {
      background: palette.text,
      font: palette.white
    },
    tags: {
      purple: {
        background: '#FAC2E2',
        backgroundActive: '#770A48'
      },
      red: {
        background: '#FFCFD0',
        backgroundActive: '#B61719'
      },
      blue: {
        background: '#C8D7FF',
        backgroundActive: '#3861C9'
      },
      green: {
        background: '#DAFBE3',
        backgroundActive: '#1B7734'
      },
      orange: {
        background: '#FEF6EB',
        backgroundActive: '#AE5700'
      },
      brown: {
        background: '#F1E8E1',
        backgroundActive: '#845A3F'
      },
      mathPurple: {
        background: '#E4E5FF',
        backgroundActive: '#4E2393'
      },
      aquamarine: {
        background: '#EFF5DC',
        backgroundActive: '#607321'
      },
      turquoise: {
        background: '#CAFAFA',
        backgroundActive: '#31B7B7'
      },
      yellow: {
        background: '#FFF6C1',
        backgroundActive: '#E4C200'
      },
      grey: {
        background: '#DDDDDD',
        backgroundActive: '#606060'
      },
      terraCotta: {
        background: '#ffd0bb',
        backgroundActive: '#cf692e'
      },
      gold: {
        background: '#ffe4b3',
        backgroundActive: '#edc10c'
      },
      tangerine: {
        background: '#ffc3ae',
        backgroundActive: '#ef560a'
      },
      guacamole: {
        background: '#f0f99b',
        backgroundActive: '#85a500'
      },
      ultramarine: {
        background: '#cacdff',
        backgroundActive: '#4b00db'
      },
      grape: {
        background: '#e1c9f2',
        backgroundActive: '#9300d8'
      },
      moss: {
        background: '#dde3e1',
        backgroundActive: '#86a398'
      },
      slate: {
        background: '#ced9ea',
        backgroundActive: '#6d7c9e'
      }
    },
    statusTags: {
      green: {
        background: palette.success200,
        text: palette.success500
      },
      orange: {
        background: palette.primary200,
        text: palette.primary500
      },
      grey: {
        background: palette.grey300,
        text: palette.grey600
      },
      red: {
        background: palette.error200,
        text: palette.error500
      }
    },
    pins: {
      variantA: {
        shape: '#1A7AF8',
        background: '#D1E5FE',
        backgroundActive: '#1A7AF8'
      },
      variantB: {
        shape: '#119B4C',
        background: '#DAF1E4',
        backgroundActive: '#119B4C'
      },
      variantC: {
        shape: '#A53DCA',
        background: '#F5EAF9',
        backgroundActive: '#A53DCA'
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
      // plop_editor_color_theme_path

      orange: {
        font: palette.primary500
      },
      yellow: {
        font: '#F0D800'
      },
      black: {
        font: '#000'
      },
      grey: {
        font: palette.grey600
      },
      purple: {
        font: '#CB0073'
      },
      violet: {
        font: '#A53DCA'
      },
      red: {
        font: '#A51417'
      },
      lightRed: {
        font: '#FA2F33'
      },
      blue: {
        font: '#1A7AF8'
      },
      azure: {
        font: '#12ECDF'
      },
      green: {
        font: '#009B3E'
      },
      lightGreen: {
        font: '#51E700'
      },
      brown: {
        font: '#42210b'
      },
      lightBrown: {
        font: '#E6A686'
      },
      admin: {
        font: '#D9D9D9'
      }
    },
    diagnostics: {
      question: {
        skipped: palette.primary400,
        correct: palette.success500,
        incorrect: palette.error500,
        skippedBackground: palette.primary300,
        correctBackground: palette.success200,
        incorrectBackground: palette.error200
      },
      projections: {
        target: '#9b115f',
        scaled: '#1e74ae'
      },
      diagnostic: {
        wordsPerMinute: {
          font: '#751D13'
        },
        passageWorking: {
          font: palette.primary700,
          chart: palette.primary300
        },
        passageReading: {
          font: palette.primary700,
          chart: palette.primary400
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
        barsFrom: '#A9D2E9',
        barsTo: '#A9D2E9'
      },
      flashcards: {
        GradientFlashcards1A: '#FFD900',
        GradientFlashcards1B: '#B38B00',
        GradientFlashcards2A: '#F59800',
        GradientFlashcards2B: '#AC6A00',
        GradientFlashcards3A: '#F57500',
        GradientFlashcards3B: '#AC5200',
        GradientFlashcards4A: '#DF4100',
        GradientFlashcards4B: '#9C2E00',
        GradientFlashcards5A: '#A30014',
        GradientFlashcards5B: '#72000E',
        strokeDash: '#49494C'
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
        mainLine: '#85BB65',
        strokeDash: '#DDDFE1',
        text: '#949596'
      }
    },
    books: {
      saltyText: '#d16923',
      selectBorder: '#9b115f',
      contentQuestionMark: '#a635ff',
      resources: {
        topics: {
          background: '#F8EFFF',
          font: '#8C1EE2',
          highlight: '#E9D4FA'
        },
        tmi: {
          background: '#ebf4fe',
          font: '#1a7af8'
        },
        video: {
          background: '#FFCFD0',
          font: '#A82A1C'
        },
        clinicalContext: {
          background: '#edfdf3',
          font: '#16ca64'
        },
        mcatThink: {
          background: '#fdedf6',
          font: '#9b115f'
        },
        checkmark: '#b2764e'
      },
      navigation: {
        backgroundDark: 'linear-gradient(180deg, #FBEBE2 0%, #EFD8CB 100%)',
        borderDark: '#EFD8CB',
        backgroundLight: '#FFF3ED'
      },
      chapterExam: {
        backgroundDark: 'linear-gradient(180deg, #FAE7E7 0%, #EBB8B8 100%)',
        borderDark: '#EBB8B8',
        backgroundLight: '#FAE7E7'
      }
    },
    flashcards: {
      boxes: {
        active: 'linear-gradient(180deg, #FFEEDF 0%, #FFDCBB 100%)',
        background: 'linear-gradient(180deg, #FFEEDF 0%, #FFB86E 100%);',
        font: '#42210B',
        border: '#8C5000'
      },
      hotkeysLegend:
        'linear-gradient(180deg, rgba(228, 228, 228, 1) 0%, rgba(255, 255, 255, 1) 100%)',
      filters: {
        default: {
          background: 'linear-gradient(180deg, #FFEEDF 0%, #FFB86E 100%)',
          border: '#8C5000'
        },
        purple: {
          background: 'linear-gradient(180deg, #FFD7EE 0%, #FA94CE 100%)',
          border: '#770A48'
        },
        red: {
          background: 'linear-gradient(180deg, #FFDCDD 0%, #FCA9AB 100%)',
          border: '#B61719'
        },
        blue: {
          background: 'linear-gradient(180deg, #C8D7FF 0%, #3861C9 100%)',
          border: '#3861C9'
        },
        green: {
          background: 'linear-gradient(180deg, #DAFBE3 0%, #5DCA7A 100%)',
          border: '#1B7734'
        },
        orange: {
          background: 'linear-gradient(180deg, #FEF6EB 0%, #E9AB6D 100%)',
          border: '#AE5700'
        },
        brown: {
          background: 'linear-gradient(180deg, #F1E8E1 0%, #DEBCA2 100%)',
          border: '#845A3F'
        },
        mathPurple: {
          background: 'linear-gradient(180deg, #E4E5FF 0%, #4E2393 100%)',
          border: '#4E2393'
        },
        aquamarine: {
          background: 'linear-gradient(180deg, #EFF5DC 0%, #607321 100%)',
          border: '#607321'
        },
        turquoise: {
          background: 'linear-gradient(180deg, #CAFAFA 0%, #31B7B7 100%)',
          border: '#31B7B7'
        },
        yellow: {
          background: 'linear-gradient(180deg, #FFF6C1 0%, #E4C200 100%)',
          border: '#E4C200'
        },
        grey: {
          background: 'linear-gradient(180deg, #DDDDDD 0%, #606060 100%)',
          border: '#606060'
        },
        terraCotta: {
          background: 'linear-gradient(180deg, #fff2e6, #b3694f)',
          border: '#4a260f'
        },
        gold: {
          background: 'linear-gradient(180deg, #fff9e0, #b38b52)',
          border: '#5d4503'
        },
        tangerine: {
          background: 'linear-gradient(180deg, #ffe1c3, #b35747)',
          border: '#5c2103'
        },
        guacamole: {
          background: 'linear-gradient(180deg, #f9fcb0, #b3b34f)',
          border: '#2d3900'
        },
        ultramarine: {
          background: 'linear-gradient(180deg, #e1e4ff, #8f8fb3)',
          border: '#19004d'
        },
        grape: {
          background: 'linear-gradient(180deg, #e8d6fa, #a38fb3)',
          border: '#310054'
        },
        moss: {
          background: 'linear-gradient(180deg, #e6eae8, #a3a8a1)',
          border: '#2d3b34'
        },
        slate: {
          background: 'linear-gradient(180deg, #d7e0f3, #8f99b3)',
          border: '#232b37'
        }
      }
    },
    accordionTabs: {
      trigger: {
        background: palette.grey200,
        border: palette.grey300
      },
      content: {
        background: palette.white,
        border: palette.grey300
      }
    },
    rating: {
      star: '#FFD542'
    },
    notifications: {
      active: '#f7e2d2'
    },
    errata: {
      background: '#f7f0eb',
      stroke: '#efbfab',
      highlight: {
        background: '#f7e2d2',
        stroke: '#ffbca4'
      }
    },
    checklist: {
      backgroundRectangle: '#eee9f4',
      strokeRectangle: '#a79bd3',
      backgroundInterior: '#e2dcea',
      backgroundButton: '#d4cde0',
      strokeButton: '#9d94bf'
    },
    calendar: {
      purple: {
        background: 'linear-gradient(180deg, #e4e5ff 0%, #8671bf 100%)',
        tag: '#4E2393'
      },
      blue: {
        background: 'linear-gradient(180deg, #bfdcf7 0%, #5580b5 100%)',
        tag: '#285598'
      },
      brown: {
        background: 'linear-gradient(180deg, #f1e8e1 0%, #996e56 100%)',
        tag: '#845a3f'
      },
      turquoise: {
        background: 'linear-gradient(180deg, #CAFAFA 0%, #44b2af 100%)',
        tag: '#22918b'
      },
      red: {
        background: 'linear-gradient(180deg, #FFCDD0 0%, #FCA9AB 100%)',
        tag: '#B61719'
      },
      green: {
        background: 'linear-gradient(180deg, #dafbe3 0%, #53a566 100%)',
        tag: '#1b7734'
      },
      orange: {
        background: 'linear-gradient(180deg, #FFC3AE 0%, #ea8663 100%)',
        tag: '#ef560a'
      }
    },
    exam: {
      orange: {
        background: 'linear-gradient(180deg, #FFEEDF 0%, #FFDCBB 100%)',
        tag: '#F8961A'
      }
    },
    custom: {
      brown: {
        border: '#B2764E'
      }
    }
  }
}
