import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { useStyles } from "./style.js";
import { errorMessageObject } from "./helper.js";

const StepOne = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <TextField
          className={classes.operationFormControl}
          name="firstNumber"
          type="number"
          variant="outlined"
          label="Enter First Number"
          error={props.isError && !props.firstOperend}
          onChange={(e) => props.onInputChange(e)}
          value={props.firstOperend || ""}
        />
        <span className={classes.operationValidation}>
          {props.isError &&
            !props.firstOperend &&
            errorMessageObject.firstNumber}
        </span>
      </Grid>
      <Grid item md={6} xs={12}>
        <Button
          type={"submit"}
          className={classes.operationFormButton}
          variant="contained"
          color="primary"
        >
          Add Number
        </Button>
      </Grid>
    </Grid>
  );
};
StepOne.propTypes = {
  firstOperend: PropTypes.number,
  onInputChange: PropTypes.func,
  isError: PropTypes.bool,
};
export default StepOne;
