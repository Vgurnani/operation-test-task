import React, { Fragment, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./style.js";
import StepOne from "./step1";
import StepTwo from "./step2";
import { operatorResult } from "./helper.js";

const Operation = () => {
  const classes = useStyles();
  const [firstOperend, setFirstOperend] = useState(null);
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [isError, setIsError] = useState(false);
  const [operator, setOperator] = useState("+");
  const [operend, setOperend] = useState(null);
  const [result, setResult] = useState(null);
  const [operations, setOperations] = useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (firstOperend) {
      setIsStepTwo(true);
      setResult(Number(firstOperend));
    } else {
      setIsError(true);
    }
  };
  const handleOperatorChange = (e) => {
    const { value } = e.target;
    setOperator(value);
  };

  const handleOperationResult = (e) => {
    e.preventDefault();
    if (operend) {
      const operationValue = [...operations];
      operationValue.push({ operend, operator });
      setOperations(operationValue);
      const resultValue = operatorResult(operator, result, operend);
      setResult(resultValue);
    } else {
      setIsError(true);
    }
  };
  const onReset = () => {
    setIsStepTwo(false);
    setIsError(false);
    setOperator("+");
    setOperations([]);
    setFirstOperend(null);
    setOperend(null);
  };

  return (
    <div className={classes.operationFormWrap}>
      <Container maxWidth="sm">
        <form
          onSubmit={(e) =>
            !isStepTwo ? handleFormSubmit(e) : handleOperationResult(e)
          }
          noValidate
          autoComplete="off"
          className={classes.operationForm}
        >
          <Typography
            variant="h1"
            color="primary"
            className={classes.operationFormHeading}
          >
            Expression Evaluator
          </Typography>
          {!isStepTwo ? (
            <Fragment>
              <StepOne
                firstOperend={firstOperend}
                onInputChange={(e) => setFirstOperend(e.target.value)}
                isError={isError}
              />
            </Fragment>
          ) : (
            <StepTwo
              firstOperend={firstOperend}
              result={result}
              operator={operator}
              onInputChange={(e) => setOperend(e.target.value)}
              handleOperatorChange={handleOperatorChange}
              onReset={onReset}
              operations={operations}
              operend={operend}
              isError={isError}
            />
          )}
        </form>
      </Container>
    </div>
  );
};
export default Operation;
