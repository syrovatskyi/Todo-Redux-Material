import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    height: "100%"
  }
});

function Todo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header/>
      <Form/>
      <TodoList/>
    </div>
  )
}

export default Todo;
