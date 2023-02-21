import React, { useEffect } from "react";
import classes from "./Spinner.module.css";

const Spinner = ({ show }) => {
  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [show]);
  if (!show) return;
  return (
    <div role="alert" className={classes.spin}>
      <section className={classes.spinContent}>
        <div className={classes.spinner}>Loading...</div>
      </section>
    </div>
  );
};

export default Spinner;
