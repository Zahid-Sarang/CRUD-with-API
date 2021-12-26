import React, { useState, useEffect } from "react";

import {
  Typography,
  Box,
  makeStyles,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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

const View = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [view, setView] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/students/${id}`
        );
        setView(response.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    };
    getStudent();
  }, []);

  return (
    <>
      <Box textAlign="center" p={2} className={classes.stuListColor}>
        <Typography variant="h4">Student Details</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                ID
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Name
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{view.id}</TableCell>
              <TableCell align="center">{view.stuname}</TableCell>
              <TableCell align="center">{view.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => history("/")}
        >
          Back to Home
        </Button>
      </Box>
    </>
  );
};

export default View;
