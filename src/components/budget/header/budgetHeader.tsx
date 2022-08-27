import HeaderCalendar from './headerCalendar';

const BudgetHeader = () => {
  return (
    <div className='bg-slate-200 grid-in-header flex text-black gap-6'>
      <HeaderCalendar />
      <div>Header Total Component</div>
    </div>
  );
};

export default BudgetHeader;
