/* eslint-disable react/prop-types */
import React from 'react';

import { useTable } from 'react-table';

function ReactTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={row.original._id} {...row.getRowProps()}>
              {row.cells.map((cell, i) => {
                if (cell.row.original?.url && i === 0) {
                  return (
                    <td key={cell.row.original._id}>
                      <img
                        data-testid="photo"
                        src={cell.row.original.url}
                        alt={cell.row.original.url}
                        width={60}
                      />
                    </td>
                  );
                }
                const getUserPhoto =
                  cell.row.original.photo?.url ||
                  `https://cdn-expa.aiesec.org/gis-img/missing_profile_${cell.row.original.first_name
                    ?.replace(/\s/g, '')
                    .charAt(0)
                    .toLowerCase()}.svg`;
                if (i === 0) {
                  return (
                    <td key={cell.row.original.id}>
                      <img
                        src={getUserPhoto}
                        alt={cell.row.original.first_name}
                        width={60}
                      />
                    </td>
                  );
                }
                return (
                  <td key={cell.row.original.id} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ReactTable;
