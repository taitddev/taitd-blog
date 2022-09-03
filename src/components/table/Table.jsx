import React from "react";
import styled from "styled-components";

const TableStyles = styled.div`
  table {
    text-align: left;
    width: 100%;
  }

  thead {
    display: flex;
    width: 100%;
    background-color: #f7f7f8;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  tr {
    display: flex;
    align-items: center;
    width: 100%;
  }

  tbody {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow-y: scroll;
    width: 100%;
    height: 400px;
  }

  th {
    padding: 20px 30px;
    font-weight: 600;
    text-align: left;
  }

  td {
    padding: 15px 30px;
  }

  tbody > tr:first-child {
    padding-top: 15px;
  }

  th,
  td {
    width: 25%;
    vertical-align: middle;
    white-space: nowrap;
  }
`;

const Table = ({ children }) => {
  return (
    <TableStyles>
      <table>{children}</table>
    </TableStyles>
  );
};

export default Table;
