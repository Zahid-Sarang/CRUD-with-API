import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [students, setStudents] = useState([]);
  const [status,setStatus] = useState(false);

  useEffect(() => {
    const getAllStudent = async () => {
      try {
        const response = await axios.get("http://localhost:8000/students");
        setStudents(response.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    };
    getAllStudent();
  }, []);

  const deleteStudent = async (id) => {
    try{
      await axios.delete(`http://localhost:8000/students/${id}`)
      setStatus(true)
    }catch{
      console.log("post not delete")
    }
  }
  if(status){
    return <List />
  }
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
            {students.map((item, i) => (
              <TableRow key={i}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.stuname}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">
                  <Tooltip title="View">
                    <IconButton>
                      <Link to={`/view/${item.id}`}>
                        <VisibilityIcon color="primary" />
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton>
                      <Link to={`/edit/${item.id}`}>
                        <EditIcon />
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon color="secondary" onClick={() => deleteStudent(item.id)}/>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
