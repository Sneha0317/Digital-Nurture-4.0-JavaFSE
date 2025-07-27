import React from "react";
import CohortDetails from "./CohortDetails";
import styles from "./CohortDetails.module.css";

function App() {
  return (
    <div>
      <p className={styles.title}>Cohorts Details</p>

      <CohortDetails
        id="INTADMDF10 - .NET FSD"
        startDate="22-Feb-2022"
        status="Scheduled"
        coach="Aathma"
        trainer="Jojo Jose"
      />

      <CohortDetails
        id="ADM21JF014 - Java FSD"
        startDate="10-Sep-2021"
        status="Ongoing"
        coach="Apoorv"
        trainer="Elisa Smith"
      />

      <CohortDetails
        id="CDBJF21025 - Java FSD"
        startDate="24-Dec-2021"
        status="Ongoing"
        coach="Aathma"
        trainer="John Doe"
      />
    </div>
  );
}

export default App;
