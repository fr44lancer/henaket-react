import theme, { IColorItem } from '@/src/assets/styles/theme'
import { createGlobalStyle } from 'styled-components'

function colorVariablesGenerator() {
  const colorsArr: string[] = Object.keys(theme.colors)

  let colorVariable = ''

  for (let i = 0; i < colorsArr.length; i++) {
    let color = colorsArr[i] as IColorItem
    colorVariable += `--${colorsArr[i]}: ${theme.colors[color]};`
  }

  return colorVariable
}

const Variables = createGlobalStyle<{ fontFamily: string }>`
  :root {
    //! Fonts
    --notoSans:${props => props.fontFamily};;
  }

  ${colorVariablesGenerator()}

`

export default Variables
