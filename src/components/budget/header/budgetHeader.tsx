import HeaderCalendar from './headerCalendar';
import HeaderTotals from './headerTotals';

const BudgetHeader = () => {
  return (
    <div className='bg-slate-200 grid-in-header flex text-black gap-6 border-b border-slate-400'>
      <HeaderCalendar />
      <HeaderTotals />
    </div>
  );
};

export default BudgetHeader;
