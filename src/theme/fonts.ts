import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardBlack.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardBookItalic.otf') format('opentype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardHairline.otf') format('opentype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardHairlineItalic.otf') format('opentype');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardThin.otf') format('opentype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardThinItalic.otf') format('opentype');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardExtraLight.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardExtraLightItalic.otf') format('opentype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardLight.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardLightItalic.otf') format('opentype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardMedium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardMediumItalic.otf') format('opentype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardSemiBold.otf') format('opentype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardSemiBoldItalic.otf') format('opentype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardBold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardBoldItalic.otf') format('opentype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardExtraBold.otf') format('opentype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardExtraBoldItalic.otf') format('opentype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardHeavy.otf') format('opentype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardHeavyItalic.otf') format('opentype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardBlack.otf') format('opentype');
    font-weight: 950;
    font-style: normal;
  }

  @font-face {
    font-family: 'Milliard';
    src: url('/assets/fonts/milliard/MilliardBlackItalic.otf') format('opentype');
    font-weight: 950;
    font-style: italic;
  }

  @font-face {
    font-family: 'Alfa Slab One';
    src: url('/assets/fonts/alfaSlabOne/AlfaSlabOneRegular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Digital';
    src: url('/assets/fonts/digital/digital.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'examkrackers';
    src: url('/assets/fonts/examkrackers/examkrackers.eot?vs4lib');
    src: url('/assets/fonts/examkrackers/examkrackers.eot?vs4lib#iefix') format('embedded-opentype'),
    url('/assets/fonts/examkrackers/examkrackers.ttf?vs4lib') format('truetype'),
    url('/assets/fonts/examkrackers/examkrackers.woff?vs4lib') format('woff'),
    url('/assets/fonts/examkrackers/examkrackers.svg?vs4lib#examkrackers') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-ek-"], [class*=" icon-ek-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'examkrackers' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-ek-salty-bucks::before {
    content: "\\e900";
  }
`
