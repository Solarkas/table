import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, columns }) => {
  const renderContent = (item, column) => {
    let newItem = { ...item };
    newItem.name = <a href={`/users/${item._id}`}>{`${item.name}`}</a>;
    if (columns[column].component) {
      const component = columns[column].component;
      if (typeof component === "function") {
        return component(newItem);
      }
      return component;
    }
    return _.get(newItem, columns[column].path);
  };
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(columns).map((column) => {
            return <td key={column}>{renderContent(item, column)}</td>;
          })}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableBody;
