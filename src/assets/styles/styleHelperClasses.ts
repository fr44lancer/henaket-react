import { createGlobalStyle } from 'styled-components'

const StyleHelperClasses = createGlobalStyle`
  
  * {
    font-family: var(--notoSans)!important;
  }
  
  //! Font families
  .font-noto-sans {
    font-family: var(--notoSans)!important;

    &-medium {
      font-family: var(--notoSans)!important;
      font-weight: 500 !important;
    }

    &-semibold {
      font-family: var(--notoSans)!important;
      font-weight: 600 !important;
    }
    &-bold {
      font-family: var(--notoSans)!important;
      font-weight: 700 !important;
    }
  } 
`

export default StyleHelperClasses
