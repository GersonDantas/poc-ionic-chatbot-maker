import styled from 'styled-components';

export const HtmlHr = styled.hr`
  background: rgba(var(--ion-text-color-rgb), 0.3);
  border-top: medium solid #ccc;
  font-size: 4em;
  overflow: visible;
  position: relative;
  text-align: center;

  &::after {
    @media (max-width: 540px) {
      font-size: 0.7rem;
    }
    content: attr(data-after);
    display: inline-block;
    position: absolute;
    top: -1.1em;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.9rem;
    padding: 0.3em;
    background: var(--ion-background-color);
  }
`;