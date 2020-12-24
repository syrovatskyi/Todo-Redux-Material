import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {deleteItem, setEdit, setItem, setTitle} from "../store/actions";

const useStyles = makeStyles({
  container: {
    padding: 16
  }
});

const TodoList = ({ todoList, setTitle, setItem, setEdit, deleteItem }) => {
  const classes = useStyles();

  const handleEdit = (item) => {
    setTitle(item.value);
    setEdit();
    setItem();
  };

  const handleDelete = (item) => {
    setItem(item);
    deleteItem()
  };

  return (
    <Container className={classes.container} maxWidth="md">
      {!todoList ?
        <Typography
          variant="h6"
          color="error"
        >
          No Data to display
        </Typography> :
        (<List>
          {todoList.map(item => {
            return (
              <ListItem key={item.id} button>
                <ListItemIcon>
                  <CheckCircleIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary={item.value}/>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
                    <EditIcon/>
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item)}>
                    <DeleteIcon/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </List>)
      }
    </Container>
  )
};

const mapStateToProps = (state) => {
  return {
    todoList: state.items
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: title => dispatch(setTitle(title)),
    setItem: item => dispatch(setItem(item)),
    deleteItem: item =>dispatch(deleteItem(item)),
    setEdit: () => dispatch(setEdit())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
