import { Button, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, tableHeadClasses, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IOrder, IPort } from '../../redux/types/types';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#E1E1E1',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  background: 'transparent'
}));

type Props = {
  mapping: object;
  data: any[];
  isLoading: boolean;
  isAction?: boolean;
  handleAction?: (data?: any) => void;
}

const CustomTable: React.FC<Props> = ({ data, mapping, isAction = false, handleAction }) => {

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <StyledTableRow>
            {Object.values(mapping).map((title, idx) => {
              return (
                <StyledTableCell key={idx} align={"left"}>{title}</StyledTableCell>
              )
            })}
            {isAction && <StyledTableCell align={"left"}>Action</StyledTableCell>}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              {Object.keys(mapping).map((kilt) => (
                <StyledTableCell key={kilt}>
                  {kilt.includes('created') || kilt.includes('time') || kilt.includes('updated') ?
                    new Date(row[kilt]).toLocaleString()
                    :
                    typeof (row[kilt]) === 'boolean' ? (row[kilt] ? "YES" : "NO") : row[kilt]
                  }
                </StyledTableCell>
              ))}
              {isAction && handleAction && <StyledTableCell align={"left"}>
                <Button variant="outlined" size="small" onClick={() => handleAction(row)}>Edit</Button>
              </StyledTableCell>
              }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  )
}

export default CustomTable;