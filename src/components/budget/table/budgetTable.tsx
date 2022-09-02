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
  assigned?: number;
  activity?: number;
  available?: number;
  subRows?: Category[];
};

const BudgetTable = () => {
  const [expanded, setExpanded] = React.useState<ExpandedState>(true);
  const defaultData: Category[] = [
    {
      categoryName: 'Bills',
      subRows: [
        { categoryName: 'Rent', assigned: 550, activity: 550, available: 0 },
        {
          categoryName: 'Gas/Electricits',
          assigned: 50,
          activity: 0,
          available: 50,
        },
        { categoryName: 'Internet', assigned: 45, activity: 0, available: 50 },
      ],
    },
    {
      categoryName: 'Frequent',
      subRows: [
        { categoryName: 'Fuel', assigned: 50, activity: 0, available: 50 },
      ],
    },
    {
      categoryName: 'Savings',
    },
  ];
  const [data, setData] = useState(defaultData);

  const chevronDown = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className='w-3 h-3'
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
      className='w-3 h-4'
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
              className=''
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
      {
        header: 'info',
        columns: [
          {
            accessorKey: 'assigned',
          },
          {
            accessorKey: 'activity',
          },
          {
            accessorKey: 'available',
          },
        ],
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
      <table className='table table-compact w-full'>
        <thead className=''>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className=''>
              {headerGroup.headers.map((header) => {
                if (header.column.id !== 'info' && !header.isPlaceholder) {
                  return (
                    <th
                      key={header.id}
                      className='bg-white font-extralight text-xs'
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                }
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={row.depth === 0 ? '' : ''}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    key={cell.id}
                    className={row.depth === 0 ? 'font-bold bg-slate-100' : ''}
                  >
                    <>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
