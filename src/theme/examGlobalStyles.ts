import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline
    }

    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block
    }

    body {
      line-height: 1
    }

    ol, ul {
      list-style: none
    }

    blockquote, q {
      quotes: none
    }

    blockquote:before, blockquote:after, q:before, q:after {
      content: '';
      content: none
    }

    table {
      border-collapse: collapse;
      border-spacing: 0
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }

    html {
    position: relative;

    margin: 0;

    color: ${props => props.theme.palette.black};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    scroll-behavior: smooth;
    }

    body {
    background-color: ${props => props.theme.palette.white};
    margin: 0;
    font-family: ${props => props.theme.typography.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    * {
      box-sizing: border-box;
      text-rendering: optimizeLegibility;
      text-shadow: ${props => props.theme.shadows.textShadow};
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section,
    summary {
    display: block;
    }

    audio,
    canvas,
    progress,
    video {
    display: inline-block;

    vertical-align: baseline;
    }

    audio:not([controls]) {
    display: none;
    height: 0;
    }

    [hidden],
    template {
    display: none;
    }

    a, input, button, textarea {
    &:active, &:hover, &:focus {
        outline: none;
    }
    }

    a {
    color: ${props => props.theme.palette.black};
    text-decoration: none;

    background-color: transparent;

    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${props => props.theme.palette.black};
    }
    }

    input:-webkit-autofill {
      height: 100%;
      color: ${props => props.theme.palette.black}; !important;
      background-color: unset !important;
      box-shadow: 0 0 0px 1000px ${props => props.theme.palette.white} inset;
    }

    input::-ms-clear, input::-ms-reveal {
    display: none;
    }

    ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;

    list-style-type: none;

    /* stylelint-disable */
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
    /* stylelint-enable */
    }

    p, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
    /* stylelint-disable */
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    /* stylelint-enable */
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 700 !important;
      line-height: 24px;
      text-shadow: none;
    }

    abbr[title] {
    border-bottom: 1px dotted;
    }

    b,
    strong {
    font-weight: 500;
    }

    dfn {
    font-style: italic;
    }

    .highlight {
      background-color: yellow;
    }

    mark {
    color: #000;

    background: #ff0;
    }

    small {
    font-size: 80%;
    }

    sub,
    sup {
    position: relative;

    font-size: 70%;
    line-height: 0;
    vertical-align: baseline;
    }

    sup {
    top: -0.4em;
    }

    sub {
    bottom: -0.25em;
    }

    img {
    border: 0;
    }

    svg:not(:root) {
    overflow: hidden;
    }

    figure {
    margin: 0;
    }

    hr {
    box-sizing: border-box;
    height: 0;
    }

    pre {
    overflow: auto;
    }


    code,
    kbd,
    pre,
    samp {
    font-size: 1em;
    font-family: monospace;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
    margin: 0;

    color: inherit;
    font: inherit;
    }

    button {
    overflow: visible;
    }

    button,
    select {
    text-transform: none;
    }

    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
    cursor: pointer;

    appearance: button;
    }

    button[disabled],
    html input[disabled] {
    cursor: default;
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
    padding: 0;
    border: 0;
    }

    input {
    line-height: normal;
    }

    input[type="checkbox"],
    input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    height: auto;
    }

    input[type="search"] {
    box-sizing: border-box;

    appearance: textfield;
    }

    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
    appearance: none;
    }

    fieldset {
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
    border: none;
    }

    legend {
    padding: 0;
    border: 0;
    }

    textarea {
    overflow: auto;
    }

    optgroup {
    font-weight: 500;
    }

    table {
    border-collapse: collapse;
    border-spacing: 0;
    }

    td,
    th {
    padding: 0;
    }

    .underline {
      text-decoration: underline;
    }
`
