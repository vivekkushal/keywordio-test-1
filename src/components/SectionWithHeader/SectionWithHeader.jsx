import React from "react";
import styles from "./SectionWithHeader.module.css";

// mui
import Tooltip from "@mui/material/Tooltip";

// icons
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const SectionWithHeader = ({ heading, infoText, others, children }) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h3>{heading}</h3>
        <div className={styles.others}>
          {others}
          {infoText && (
            <Tooltip title={infoText}>
              <HelpOutlineIcon
                style={{
                  marginLeft: "16px",
                }}
              />
            </Tooltip>
          )}
        </div>
      </header>
      {children}
    </section>
  );
};

export default SectionWithHeader;
