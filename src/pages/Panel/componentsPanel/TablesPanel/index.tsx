import { IonCol } from '@ionic/react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from "react";
import { WidgetTableColumn } from 'src/types';
import { v4 as uuidv4 } from 'uuid';

import { StyledTableCell, StyledTableRow } from './styles';

interface TablesPanelProps {
  headers: WidgetTableColumn[];
  rows: string[][];
}

const TablesPanel = function (props: TablesPanelProps) {
  const { headers, rows } = props;
  return (
    <TableContainer component={IonCol}>
      <Table sx={{ minWidth: 700 }} aria-label="attendance table">

        <TableHead>
          <TableRow>
            {headers.map((header: WidgetTableColumn) =>
              <StyledTableCell
                key={`${uuidv4()}`}
                align={header.center ? "center" : "left"}
                width={header.width}
              >
                {header.caption}
              </StyledTableCell>
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) =>
            <StyledTableRow key={`${uuidv4()}`}>
              {
                row.map((cell, i) =>
                  <StyledTableCell
                    key={`${uuidv4()}`}
                    component="td"
                    scope="row"
                    align={headers[i].center ? "center" : "left"}
                  >
                    {cell}
                  </StyledTableCell>
                )
              }
            </StyledTableRow>
          )}
        </TableBody>

      </Table>
    </TableContainer>
  );
};

export { TablesPanel };
