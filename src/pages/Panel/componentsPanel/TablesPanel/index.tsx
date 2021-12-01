import { IonCol } from '@ionic/react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { v4 as uuidv4 } from 'uuid';

import { StyledTableCell, StyledTableRow } from './styles';

interface TablesPanelProps {
  headers: Array<string>;
  rows: Array<any>;
}

const TablesPanel = function (props: TablesPanelProps) {
  const { headers, rows } = props;
  return (
    <TableContainer component={IonCol}>
      <Table sx={{ minWidth: 700 }} aria-label="attendance table">

        <TableHead>
          <TableRow>
            {headers.map((title: string) => <StyledTableCell key={`${uuidv4()}`}>{title}</StyledTableCell>)}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={`${uuidv4()}`}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.waiting}</StyledTableCell>
              <StyledTableCell align="center">{row.inAttendance}</StyledTableCell>
              <StyledTableCell align="center">{row.finalized}</StyledTableCell>
              <StyledTableCell align="center">{row.waitingTime}</StyledTableCell>
              <StyledTableCell align="center">{row.waitingTime}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
};

export { TablesPanel };
