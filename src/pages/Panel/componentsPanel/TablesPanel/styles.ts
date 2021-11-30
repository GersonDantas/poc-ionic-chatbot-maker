import TableCell, { tableCellClasses } from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styled from '@material-ui/styled-engine-sc';

export const StyledTableCell = styled(TableCell)`
  &.${tableCellClasses.head} {
    background-color: var(--ion-card-background);
    color: var(--ion-text-color);
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 12px;
  }
  &.${tableCellClasses.body} {
    font-size: 14;
    color: var(--ion-text-color);
  }
`;

export const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: rgba(var(--ion-color-primary-rgb), 0.05);
  }

  &:nth-of-type(odd) {
    background-color: var(--ion-card-background-contrast);
    &:hover {
      background-color: rgba(var(--ion-color-primary-rgb), 0.08);
    }
  }

  &:last-child td,
  &:last-child th {
    border: 0;
  }
`;
