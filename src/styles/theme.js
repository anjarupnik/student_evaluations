import getMuiTheme from 'material-ui/styles/getMuiTheme'

export const green        = '#00AA86'
export const blue         = '#B3E5FC'
export const indigo       = '#3F51B5'
export const darkRed      = '#C1272D'
export const white        = '#ffffff'
export const black        = '#000000'
export const darkGrey     = '#757575'
export const grey         = '#DEDEDE'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'

export const palette = {
  primary1Color: blue,
  primary2Color: green,
  primary3Color: green,
  accent1Color: green,
  textColor: black,
  alternateTextColor: indigo,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30
}

export default getMuiTheme({ palette })
