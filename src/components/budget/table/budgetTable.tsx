import React, { useState, useMemo } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getExpandedRowModel,
  ExpandedState,
} from '@tanstack/react-table';

type Category = {
  categoryName: string;
  subRows?: Category[];
};

type SingleCategory = {
  singleCategoryName: string;
  assigned: number;
};

const BudgetTable = () => {
  const [expanded, setExpanded] = React.useState<ExpandedState>({});
  const defaultData: Category[] = [
    {
      categoryName: 'Bills',
      subRows: [{ categoryName: 'Rent' }],
    },
    {
      categoryName: 'Frequent',
      subRows: [{ categoryName: 'Fuel' }],
    },
    {
      categoryName: 'Savings',
      subRows: [{ categoryName: 'Holiday' }],
    },
  ];
  const [data, setData] = useState(defaultData);

  const chevronDown = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className='w-5 h-5'
    >
      <path
        fillRule='evenodd'
        d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
        clipRule='evenodd'
      />
    </svg>
  );

  const chevronRight = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className='w-5 h-5'
    >
      <path
        fillRule='evenodd'
        d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
        clipRule='evenodd'
      />
    </svg>
  );

  const columns = useMemo<ColumnDef<Category>[]>(
    () => [
      {
        accessorKey: 'categoryName',
        header: ({ table }) => (
          <>
            <button
              {...{
                onClick: table.getToggleAllRowsExpandedHandler(),
              }}
            >
              {table.getIsAllRowsExpanded() ? chevronDown : chevronRight}
            </button>{' '}
            Category
          </>
        ),
        cell: ({ row, getValue }) => (
          <div>
            <>
              {row.getCanExpand() ? (
                <button
                  {...{
                    onClick: row.getToggleExpandedHandler(),
                    style: { cursor: 'pointer' },
                  }}
                >
                  {row.getIsExpanded() ? chevronDown : chevronRight}
                </button>
              ) : (
                ''
              )}{' '}
              {getValue()}
            </>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div>
      <table className='table w-full'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id}>
                    <>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                      {console.log(cell.getContext())}
                    </>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
