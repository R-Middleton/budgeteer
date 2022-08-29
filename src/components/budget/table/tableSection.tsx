import TableToolbar from './tableToolbar';
import BudgetTable from './budgetTable';

const TableSection = () => {
  return (
    <div className='bg-slate-50 grid-in-table flex flex-col text-black'>
      <TableToolbar />
      <BudgetTable />
    </div>
  );
};

export default TableSection;
