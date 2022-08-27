import BudgetHeader from './header/budgetHeader';
import BudgetTable from './table/budgetTable';
import BudgetInspector from './inspector/budgetInspector';

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
