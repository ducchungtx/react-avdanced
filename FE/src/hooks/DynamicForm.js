import React, { useState, useRef } from 'react';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridColumnGap: '10px',
    gridRowGap: '15px',
    gridTemplateColumns: '2fr 2fr 2fr',
    margin: '30px',
  },
});

const DynamicForm = ({ labels }) => {
  const [fields, setFields] = useState(labels);
  const containerRef = useRef(null);
  const classes = useStyles();

  const handleAddField = () => {
    setFields([...fields, 'New Field']);
  };

  const getHeight = () => {
    if (containerRef && containerRef.current) {
      return containerRef.current.offsetHeight;
    }
  };

  return (
    <>
      <div ref={containerRef} className={classes.container}>
        {fields.map((field) => (
          <TextField
            id={field}
            label={field}
            variant="outlined"
            color="secondary"
          />
        ))}
      </div>
      <div>{getHeight()}</div>
      <Fab
        onClick={handleAddField}
        color="secondary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </>
  );
};

DynamicForm.propTypes = {
  labels: PropTypes.array,
};

export default DynamicForm;
