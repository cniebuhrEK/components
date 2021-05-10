import styled from 'styled-components'

export const BreakOverlay = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.palette.blue02};
  overflow: auto;
`

export const BreakQuestionContainer = styled.div`
  width: 600px;
  min-height: 400px;
  margin: 0 auto;
  margin-top: 125px;
  position: absolute;
  left: 0;
  right: 0;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 16px;
  background-color: ${props => props.theme.palette.beige01};
  outline: 3px solid ${props => props.theme.palette.black};
`

export const BreakQuestionHeader = styled.div`
  border-bottom: 1px solid ${props => props.theme.palette.white};
  background-color: ${props => props.theme.palette.blue02};
  height: 30px;
`

export const BreakQuestionBody = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-size: 16px;
  line-height: 24.27px;
  color: ${props => props.theme.palette.black};

  .break-question-image {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    display: block;
    float: left;
    margin: 15px 0 0 15px;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  .break-question-message {
    display: inline-block;
    width: 485px;
    padding: 15px;
    margin: 0;
    border: 0;
    vertical-align: baseline;
    font-size: 16px;
    color: ${props => props.theme.palette.black};
    font-family: ${props => props.theme.typography.fontFamily};

    p {
      margin-bottom: 16px;
    }
  }
`

export const BreakQuestionFooter = styled.div`
  padding: 0 0 20px 0;
  text-align: center;
  margin: 0;
  border: 0;
  vertical-align: baseline;
  font-size: 16px;
  line-height: 24.27px;
  color: ${props => props.theme.palette.black};
`

export const BreakQuestionButton = styled.a`
  display: inline-block;
  color: ${props => props.theme.palette.black};
  border: 2px solid ${props => props.theme.palette.black};
  padding: 5px 20px;
  cursor: pointer;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 16px;
  line-height: 24.27px;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;

  .underline {
    text-decoration: underline;
  }

  & + & {
    margin-left: 5px;
  }
`

export const BreakCountDownContainer = styled.div`
  background-color: ${props => props.theme.palette.beige01};
  width: 450px;
  height: 650px;
  margin: 0 auto;
  margin-top: 125px;
  position: absolute;
  left: 0;
  right: 0;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 16px;
  outline: 3px solid black;
`

export const BreakCountDownHeader = styled.div`
  background-color: ${props => props.theme.palette.blue02};
  height: 30px;
  line-height: 30px;
  color: ${props => props.theme.palette.white};
  margin: 0;
  padding: 0;
  padding-left: 10px;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.palette.white};
  vertical-align: baseline;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 16px;
  line-height: 24.27px;
`

export const BreakCountDownBody = styled.div`
  padding: 15px 15px 0 15px;
  margin: 0;
  border: 0;
  vertical-align: baseline;
  display: block;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 16px;
  color: ${props => props.theme.palette.black};

  .break-countdown-white-box {
    height: 300px;
    background-color: ${props => props.theme.palette.white};
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: 16px;
    color: ${props => props.theme.palette.black};
  }

  .break-countdown-content {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: 16px;
    color: ${props => props.theme.palette.black};
    line-height: 24.27px;
  }

  fieldset {
    padding: 0 10px;
    margin: 5px 0 20px 0;
    border: 1px solid ${props => props.theme.palette.black};
  }

  legend {
    padding: 0 4px;
  }

  p {
    margin-bottom: 15px;
  }
`
