import React from 'react'


import {
    Typography,
    Box,
    makeStyles,
    Grid,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Tooltip,
    TextField,
    Button,
  } from "@material-ui/core";
  
  import { deepPurple, green, orange } from "@material-ui/core/colors";
  import VisibilityIcon from "@material-ui/icons/Visibility";
  import EditIcon from "@material-ui/icons/Edit";
  import DeleteIcon from "@material-ui/icons/Delete";
  import { Link } from "react-router-dom";


  const useStyles = makeStyles({
    stuListColor: {
      backgroundColor: orange[400],
      color: "white",
    },
    tableHeadCell: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
    },
  });
  

const List = () => {
    const classes = useStyles();
    return (
        <>
             <Box textAlign="center" p={2} className={classes.stuListColor}>
            <Typography variant="h4">Student List</Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: "#616161" }}>
                  <TableCell align="center" className={classes.tableHeadCell}>
                    No
                  </TableCell>
                  <TableCell align="center" className={classes.tableHeadCell}>
                    Name
                  </TableCell>
                  <TableCell align="center" className={classes.tableHeadCell}>
                    Email
                  </TableCell>
                  <TableCell align="center" className={classes.tableHeadCell}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center">Zahid</TableCell>
                  <TableCell align="center">Zahid@gmail.com</TableCell>
                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton>
                        <Link to="/view/1">
                          <VisibilityIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                        <IconButton><Link to="/edit/1"><EditIcon /></Link></IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton><DeleteIcon color="secondary"/></IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
    )
}

export default List
