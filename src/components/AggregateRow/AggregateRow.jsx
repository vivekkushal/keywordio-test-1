import React from "react";
import styles from "./AggregateRow.module.css";

/**
 *
 * @param {Object} row The row object
 * @param {Array}  columnFormat The columnFormat array as per the DataGrid MUI component
 * @param {Number} totalCellWidth Width in pixels for the first total cell
 * @returns
 */
const AggregateRow = ({ row, columnFormat, totalCellWidth }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.cell}
        style={{
          width: totalCellWidth,
        }}
      >
        Total
      </div>
      {Object.keys(row).map((key) => {
        const obj = columnFormat.find((obj) => obj.field === key);

        return (
          <div
            key={key}
            className={styles.cell}
            style={{
              width: obj.width,
              textAlign: obj.align,
            }}
          >
            {obj.valueFormatter
              ? obj.valueFormatter({ value: row[key] })
              : row[key]}
          </div>
        );
      })}
    </div>
  );
};

export default AggregateRow;
