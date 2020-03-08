import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  addUserContainer: {
    marginBottom: '20px'
  },

  modalPaper: {
    position: 'absolute',
    width: '300px',
    top: '50%',
    left: '50%',
    padding: '30px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
  },

  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  modalTextField: {
    marginBottom: '10px',
    fontSize: '14px'
  },
  
  modalButton: {
    marginTop: '15px'
  },

  modalError: {
    fontSize: '14px',
    color: 'red'
  }
}));

export default function PopUp({ users, setUsers }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const newUser = {
    'id': users.length,
    'firstName': '',
    'secondName': '',
    'group': ''
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(newUser['firstName'] && newUser['secondName']) {
      setError(null);
      setOpen(false);
      setUsers([...users, newUser]);
    } else {
      setError('Заполните имя и фамилию');
    }
  }

  const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      },
    },
  })(TextField);  

  return (
    <div className={classes.addUser}>
      <div className={classes.addUserContainer}>
        <Button 
          className="UsersList__button" 
          variant="contained" 
          color="primary" 
          onClick={handleOpen}
        >
          Добавить пользователя...
        </Button>
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.modalPaper}>
          <form className={classes.modalContainer} noValidate autoComplete="off">
            <ValidationTextField 
              className={classes.modalTextField} 
              onChange={(e) => newUser['firstName'] = e.target.value}
              label="Введите имя" 
              variant="outlined" 
              required 
            />
            <ValidationTextField 
              className={classes.modalTextField} 
              onChange={(e) => newUser['secondName'] = e.target.value}
              label="Введите фамилию" 
              variant="outlined" 
              required 
            />
            <ValidationTextField 
              className={classes.modalTextField} 
              onChange={(e) => newUser['group'] = e.target.value}
              label="Введите группу" 
              variant="outlined" 
            />
            {error && <div className={classes.modalError} >{error}</div>}
            <Button 
              type="submit"
              className={classes.modalButton}
              variant="contained" 
              color="primary" 
              onClick={(event) => handleSubmit(event)}
            >
              Добавить пользователя
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

