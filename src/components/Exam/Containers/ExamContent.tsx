import styled from 'styled-components'

export default styled.div`
  flex-grow: 1;
  min-height: 0;
  height: 100%;
  overflow: auto;
  padding: 40px;

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 18px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    background-color: #80AEE1;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

  &::-webkit-scrollbar-button:start:decrement, &::-webkit-scrollbar-button:end:increment {
    height: 18px;
    width: 18px;
    display: block;
    background-color: #80AEE1
  }

  &::-webkit-scrollbar-button:vertical:increment {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gcTDx43AHTppQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAm0lEQVQ4y+2Suw3CQBBE39xdjoREE27FvVABIR1QAEW4EIhcByHB2UPAIVlgI+wMySNNsp+3u9LCqv+TxoNhj9hg8qDGiIS5mf703pNGQWIn4gH5Y4TVHe0ZqwbFa1RyVLoXOyheFtysuoBysYXquZxYtmoKzEGxGeZmgUDVCwSqvoHSBKh75tya/gwY3Jb6vPQ1tsWT77LqNz0Anmsn5gIKn8AAAAAASUVORK5CYII=);
    background-size: cover;
    background-repeat: no-repeat;
    border-top: 1px solid #EEE
  }

  &::-webkit-scrollbar-button:vertical:decrement {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAKJJREFUOBHtUcENwjAQu0vSBRijq3QnPswBSzAI7MGnzz5Kgx2cX4QieCE1kuvcxbbSi9m+fpmAy3wAE1y19646v4m6EMIFOMtTep3+IosSj9FTJlCP6tUzlZ+piN3jtQZx/00QPZNCVjDBW00K66fg4a6gBUxk9G79CVBiuKfoQ5mNwrQfMs9aYc1X2DZ7mD2PMKxAfXL+WrJscyto7/3jBF4VyyFYXSX8JQAAAABJRU5ErkJggg==);
    background-size: cover;
    background-repeat: no-repeat;
    border-bottom: 1px solid #EEE
  }

  &::-webkit-scrollbar-button:horizontal:increment {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAvElEQVQ4Ee1ROw7CMAy1nSJ2jsHSg1BmbsHKxNR7cAl6DaQusHASpCbuM1KkKC2RmGDokyzZsd/zJ0QL/uECchSRNpnEwTf7FnJ2vFJh6cHcJewKPifx25X8IYkHIgVDasdVx+yuyG1heEciQ0kodn2B44W4geAd614QbzIdKgnltTGeTGMJ2/cTImFtBYG0U/UnLPWYI5QmQhMGL/RehwYiewiYyOyxC9/JNYvegoYDyE+Y1VpjD1vwywuMc2QovmDQf+cAAAAASUVORK5CYII=");
    background-size: cover;
    background-repeat: no-repeat;
    border-right: 1px solid #EEE
  }

  &::-webkit-scrollbar-button:horizontal:decrement {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAyUlEQVQ4Ee1Ruw3CQAy1fUH0jAFsQlgie1BRIRZgEJaABtEgsUQmSO7FzkfKSQ6iSpUnOXf+vdjviBbMpkD48SfLiRqsRkTOAO/VfZr/D1iLslHhQVhegVdKKKdRPLmOG4aETVCpbZnDRYjzLtEOZnEXHtFG17gypOg7aj2NYK1m07owDTxMNnjFFvOIyhhjUaPaRcJda0x0m8bQ7tdd069HNIj9AeqjEuag+O638qRoGaeeP2p2eP4vCDcWygAqdahHOsviza5AA+J9L9WtRJHRAAAAAElFTkSuQmCC");
    background-size: cover;
    background-repeat: no-repeat;
    border-left: 1px solid #EEE
  }

  h2 {
    margin-bottom: 20px;
    font-size: 14pt;
  }

  h3 {
    font-size: 12pt;
  }

  p {
    font-size: 16px;
    margin: 16px 0;
  }

  .underline {
    text-decoration: underline;
  }

  .heavy-bordered {
    border: 3px solid #000000;
    padding: 20px;
    margin-bottom: 40px;
  }

  .center {
    text-align: center;
  }

  strong {
    font-weight: 700;
  }

  ul {
    margin-bottom: 15px;
    list-style-type: disc;
    margin-left: 40px;

    &.numeric {
      list-style: decimal;
      margin-top: 15px;
      margin-bottom: 25px;
    }

    &.alphabetical {
      list-style: lower-latin;
    }

    li {
      font-size: 16px;
      margin-bottom: 5px;
    }
  }
`
