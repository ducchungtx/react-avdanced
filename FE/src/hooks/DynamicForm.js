import React, { useState, useRef, useEffect } from 'react';
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

const DynamicForm = ({ labels, isExtendedForm }) => {
  const getFieldsElement = (_fields) => {
    return _fields.map((field) => (
      <TextField
        id={field}
        label={field}
        variant="outlined"
        color="secondary"
      />
    ));
  };
  const [key, setKey] = useState('');
  const [fields, setFields] = useState(labels);
  const [fieldsElement, setFieldsElement] = useState(
    getFieldsElement(labels)
  );
  const containerRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    const root = document.getElementById('root');
    root.addEventListener('keyup', (e) => {
      console.log('e.code', e.code);
      setKey(e.code);
    });
    return () => {
      root.removeEventListener('keyup', () => {});
    };
  }, []);

  useEffect(() => {
    if (isExtendedForm || fields.length < 3) {
      setFieldsElement(getFieldsElement(fields));
    } else {
      setFieldsElement(getFieldsElement(fields.slice(0, 2)));
    }
  }, [isExtendedForm, fields]);

  const handleAddField = () => {
    setFields([...fields, 'New Field']);
  };

  return (
    <>
      <div ref={containerRef} className={classes.container}>
        {fieldsElement}
      </div>
      <div>{key}</div>
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
