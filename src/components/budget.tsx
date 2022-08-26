import BudgetHeader from './budgetHeader';
import BudgetTable from './budgetTable';
import BudgetInspector from './budgetInspector';

const Budget = () => {
  return (
    <div className='grid-in-content grid grid-areas-budgetLayout grid-rows-budgetLayout grid-cols-budgetLayout w-full bg-stone-200'>
      <BudgetHeader />
      <BudgetTable />
      <BudgetInspector />
    </div>
  );
};

export default Budget;
