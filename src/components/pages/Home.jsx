import React from "react";

import {
  Typography,Box, makeStyles,Grid, TableContainer, Table,TableBody,TableCell,TableHead,
  TableRow, Paper, IconButton,Tooltip,TextField,Button,} from "@material-ui/core";

  import { deepPurple,green,orange } from "@material-ui/core/colors";
  import VisibilityIcon from '@material-ui/icons/Visibility'
  import EditIcon from '@material-ui/icons/Edit'
  import DeleteIcon from '@material-ui/icons/Delete';

  const useStyles = makeStyles({
      headingColor:{
          backgroundColor: deepPurple[400],
          color:"white"
      }
  })

const Home = () => {
    const classes = useStyles();
  return (
    <>
        <Box textAlign="center" className={classes.headingColor} p={2}>
            <Typography variant="h2">React CRUD with API Call</Typography>
        </Box>
    </>
  );
};

export default Home;
