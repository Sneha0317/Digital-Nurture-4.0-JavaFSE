import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails({ id, startDate, status, coach, trainer }) {
  const statusClass = status === "Ongoing" ? styles.ongoing : styles.nonOngoing;

  return (
    <div className={styles.box}>
      <h3 className={statusClass}>{id}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{startDate}</dd>

        <dt>Current Status</dt>
        <dd>{status}</dd>

        <dt>Coach</dt>
        <dd>{coach}</dd>

        <dt>Trainer</dt>
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;

