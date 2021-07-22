import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  operationFormWrap: {
    padding: "50px 0",
    textAlign: "center",
    "@media (max-width: 767px)": {
      padding: "20px 0",
    },
  },
  operationForm: {
    width: "100%",
  },
  operationFormHeading: {
    fontWeight: "normal",
    fontSize: "3rem",
    margin: "0 0 30px",
    "@media (max-width: 767px)": {
      fontSize: "1.5rem",
      margin: "0 0 30px",
    },
  },
  operationFormControl: {
    width: "100%",
  },
  operationFormButton: {
    width: "100%",
    boxShadow: "none",
    padding: "14px 30px",
    textTransform: "capitalize",
    fontSize: "1rem",
    borderRadius: "4px",
  },
  operationBox: {
    background: "#ecf5f7",
    minWidth: 65,
    maxWidth: 185,
    height: "100%",
    padding: "10px 10px 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    lineHeight: "1.2",
    color: "#929292",
    wordBreak: "break-all",
    "@media (max-width: 767px)": {
      lineHeight: "1.2",
      fontSize: "1.5rem",
      minHeight: 0,
      padding: "5px",
      maxWidth: "100%",
    },
  },
  mb: {
    marginBottom: "10px",
  },
  operation: {
    fontSize: "4rem",
    lineHeight: 1,
    color: "#929292",
    fontWeight: 300,
    margin: "10px 0",
    display: "inline-block",
  },
  operationResult: {
    fontSize: "5rem",
    lineHeight: 1,
    color: "#79cea1",
    fontWeight: 300,
    fontStyle: "italic",
    wordBreak: "break-all",
    "@media (max-width: 767px)": {
      lineHeight: "1.2",
      fontSize: "2rem",
      minHeight: 0,
      padding: "10px",
    },
  },
  operationValidation: {
    color: "red",
    textAlign: "left",
    width: "100%",
    display: "inline-block",
  },
  resultFormControl: {
    width: "165px",
  },
  selectOperator: {
    textAlign: "left",
  },
  resultWrap: {
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100vh - 187px)",
    justifyContent: "space-between",
  },
  resultOperator: {
    margin: "30px 0 0",
  },
}));
