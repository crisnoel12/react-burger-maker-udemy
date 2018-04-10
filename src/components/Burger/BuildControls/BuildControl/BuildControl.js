import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>LESS</button>
        <button className={classes.More} onClick={props.added}>MORE</button>
    </div>
);

export default BuildControl;