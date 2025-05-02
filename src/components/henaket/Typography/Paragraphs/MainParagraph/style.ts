import styled from 'styled-components';
import { BaseParagraph } from '../../../../core/Typography/Paragraphs/BaseParagraph';

const StyledMainParagraph = styled(BaseParagraph)`
  && {
    color: var(--primaryBlack);
    font-size: 16px;
    line-height: 24px;
  }
`;

export default StyledMainParagraph;
