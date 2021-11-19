import {v4 as uuidv4} from "uuid";
import Table from "@material-ui/core/Table"
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { IonCol } from "@ionic/react"
import { StyledTableCell, StyledTableRow } from './styles';

interface TablesPanelProps {
  headers: Array<string>;
  rows: Array<any>;
}


function TablesPanel(props: TablesPanelProps) {
  return (
    <TableContainer component={IonCol}>
      <Table sx={{ minWidth: 700 }} aria-label="attendance table">

        <TableHead>
          <TableRow>
            {props.headers.map((title: string, index) =>
              <StyledTableCell key={`${index} ${uuidv4()}`}>{title}</StyledTableCell>
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {props.rows.map((row, index) => (
            <StyledTableRow key={`${uuidv4()} ${index} ${row.name}`}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.waiting}</StyledTableCell>
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
