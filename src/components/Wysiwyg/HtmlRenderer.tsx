import React from 'react'
import styled from 'styled-components'

export const HtmlRenderer = ({ htmlString }): JSX.Element => {
  return <Container dangerouslySetInnerHTML={{ __html: htmlString }} />
}

export default HtmlRenderer

const Container = styled.div`
  outline: none;
  border: none;

  & .ql-editor {
    color: ${({ theme }) => theme.colors.main.text};
  }

  strong {
    font-weight: bold;
  }

  span.search-phrase {
    background-color: ${({ theme }) =>
      theme.colors.highlights.yellow.background} !important;
  }

  .ql-formats .ql-glossary {
    white-space: nowrap;
    word-break: keep-all;
    min-width: 200px;
  }

  .ql-editor {
    padding: 0;
    caret-color: transparent;
  }

  .ql-snow.ql-disabled {
    border: none;
  }

  .ql-editor h1 {
    font-size: 16px !important;
    line-height: 29px !important;
  }

  .ql-editor h2 {
    font-size: 15px !important;
    line-height: 23px !important;
    img {
      &:hover {
        cursor: pointer;
      }
      &:active {
        cursor: pointer;
      }
    }
  }

  .ql-editor p {
    img {
      &:hover {
        cursor: pointer;
      }
      &:active {
        cursor: pointer;
      }
    }
  }

  .ql-size-huge {
    font-size: 22px !important;
    line-height: 29px !important;
  }

  .ql-size-large {
    font-size: 19px !important;
    line-height: 23px !important;
  }

  .ql-size-small {
    font-size: 10px !important;
    line-height: 12px !important;
  }

  * {
    overflow-x: hidden;
    overflow-y: hidden;
  }

  &.your-highlights {
    .green-highlight {
      background-color: ${({ theme }) =>
        theme.colors.highlights.green.background};
    }

    .purple-highlight {
      background-color: ${({ theme }) =>
        theme.colors.highlights.purple.background};
    }

    .red-highlight {
      background-color: ${({ theme }) =>
        theme.colors.highlights.red.background};
    }

    .yellow-highlight {
      background-color: ${({ theme }) =>
        theme.colors.highlights.yellow.background};
    }

    .blue-highlight {
      background-color: ${({ theme }) =>
        theme.colors.highlights.blue.background};
    }

    .orange-highlight {
      background-color: ${({ theme }) =>
        theme.colors.highlights.orange.background};
    }
  }

  .ql-editor .admin-highlights .color-green,
  .ql-editor .color-green .admin-highlights,
  .color-green {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.green.font} !important;
  }

  .ql-editor .admin-highlights .color-purple,
  .ql-editor .color-purple .admin-highlights,
  .color-purple {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.purple.font} !important;
  }

  .ql-editor .admin-highlights .color-blue,
  .ql-editor .color-blue .admin-highlights,
  .color-blue {
    color: ${({ theme }) => theme.colors.editorFontColors.blue.font} !important;
  }

  .ql-editor .admin-highlights .color-orange,
  .ql-editor .color-orange .admin-highlights,
  .color-orange {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.orange.font} !important;
  }

  .ql-editor .admin-highlights .color-black,
  .ql-editor .color-black .admin-highlights,
  .color-black {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.black.font} !important;
  }

  .ql-editor .admin-highlights .color-brown,
  .ql-editor .color-brown .admin-highlights,
  .color-brown {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.brown.font} !important;
  }

  .ql-editor .admin-highlights .color-red,
  .ql-editor .color-red .admin-highlights,
  .color-red {
    color: ${({ theme }) => theme.colors.editorFontColors.red.font} !important;
  }

  .ql-editor .admin-highlights .color-grey,
  .ql-editor .color-grey .admin-highlights,
  .color-grey {
    color: ${({ theme }) => theme.colors.editorFontColors.grey.font} !important;
  }

  .ql-editor .admin-highlights .color-yellow,
  .ql-editor .color-yellow .admin-highlights,
  .color-yellow {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.yellow.font} !important;
  }

  .ql-editor .admin-highlights .color-violet,
  .ql-editor .color-violet .admin-highlights,
  .color-violet {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.violet.font} !important;
  }

  .ql-editor .admin-highlights .color-lightRed,
  .ql-editor .color-lightRed .admin-highlights,
  .color-lightRed {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.lightRed.font} !important;
  }

  .ql-editor .admin-highlights .color-azure,
  .ql-editor .color-azure .admin-highlights,
  .color-azure {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.azure.font} !important;
  }

  .ql-editor .admin-highlights .color-lightGreen,
  .ql-editor .color-lightGreen .admin-highlights,
  .color-lightGreen {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.lightGreen.font} !important;
  }

  .ql-editor .admin-highlights .color-lightBrown,
  .ql-editor .color-lightBrown .admin-highlights,
  .color-lightBrown {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.lightBrown.font} !important;
  }

  // plop_create_font_color_class_viewer
`
