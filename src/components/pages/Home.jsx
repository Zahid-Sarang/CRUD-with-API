import React, { useState } from "react";

import { Typography, Box, makeStyles, Grid,TextField,Button,} from "@material-ui/core";
import axios from "axios";

import { deepPurple, green, orange } from "@material-ui/core/colors";

import List from "./List";

const useStyles = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
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
const Home = () => {
  const classes = useStyles();
  const [addStudent,setAddStudent] = useState({
    stuname:"",
    email:""
  });
  const [status,setStatus] = useState(false);

  const postdata = async (e) => {
    e.preventDefault()
    try{
      await axios.post('http://localhost:8000/students',addStudent)
      setStatus(true)

    }catch (error) {
      console.log("Something is Wrong on Submit")
    }
    
  }
  function onTextFieldChange(e){
    setAddStudent({
      ...addStudent,
      [e.target.name]:e.target.value
    })
  }

  if(status){
    return <Home />
  }
  return (
    <>
      <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Add Student</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  autoFocus
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoFocus
                  onChange={(e) => onTextFieldChange(e)}
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
                  Add
                </Button>
              </Box>
            </Grid>
          </form>
        </Grid>
        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
