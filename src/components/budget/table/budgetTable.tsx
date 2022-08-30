import { Category } from './category';
import { CategoryGroup } from './categoryGroup';

const BudgetTable = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='table  table-compact w-full'>
        <thead className='bg-white'>
          <tr className='text font-mono flex-shrink'>
            <th className='bg-inherit text-xs font-thin'>
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
            </th>
            <th className='bg-inherit text-xs font-thin'>Category</th>
            <th className='bg-inherit text-xs font-thin'>Assigned</th>
            <th className='bg-inherit text-xs font-thin'>Activity</th>
            <th className='bg-inherit text-xs font-medium'>Available</th>
          </tr>
        </thead>
        <tbody className='divide-y-[1.5px] divide-gray-300 border border-gray-300'>
          <CategoryGroup name='Bills' />
          <Category name='Rent' assigned={10} />
          <Category name='Gas' assigned={20} />
          <Category name='Electricity' assigned={30} />
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
