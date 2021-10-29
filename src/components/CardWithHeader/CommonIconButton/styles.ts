import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommonButton } from 'src/components';

export const CommonIconButtonStyled = styled(CommonButton)`
  margin: -5px 0 -5px 0;
  @media screen and (max-width: 334px) {
    margin: 5px;
  }
  height: fit-content;
  --padding-top: 10px;
  --padding-bottom: 10px;
  --padding-start: 10px;
  --padding-end: 10px;
`
export const FaIconCard = styled(FontAwesomeIcon)`
  font-size: small;
`;