import React, { useEffect, useState } from "react";

import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { deepPurple, green } from "@material-ui/core/colors";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
});

const Edit = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [edit, setEdit] = useState({
    stuname: "",
    email: "",
  });
  const history = useNavigate();

  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/students/${id}`
        );
        setEdit(response.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    };
    getStudent();
  }, []);

  function onTextFieldChange(e){
    setEdit({
      ...edit,
      [e.target.name]:e.target.value
    })
  }


  const postdata = async (e) => {
    e.preventDefault();
    try {
      await axios.put( `http://localhost:8000/students/${id}`, edit);
      history("/")
    } catch (error) {
      console.log("Something is Wrong on Submit");
    }
  };

  return (
    <>
      <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Edit Student</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  value={id}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  value={edit.stuname}
                  onChange={(e) => onTextFieldChange(e)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={edit.email}
                  onChange={(e) => onTextFieldChange(e)}
                  autoFocus
                />
              </Grid>
              <Box m={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={(e) => postdata(e)}
                >
                  Update
                </Button>
              </Box>
            </Grid>
          </form>
          <Box m={3} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => history("/")}
            >
              Back to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
