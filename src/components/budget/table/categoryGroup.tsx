interface Props {
  name: string;
  selected?: boolean;
  assigned?: number;
  activity?: number;
  available?: number;
}

export const CategoryGroup: React.FC<Props> = ({ name }) => {
  return (
    <tr className='text bg-slate-100'>
      <th className='bg-inherit'>
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
      <td className='bg-inherit font-bold'>{name}</td>
      <td className='bg-inherit'>£0.00</td>
      <td className='bg-inherit'>£0.00</td>
      <td className='bg-inherit'>£0.00</td>
    </tr>
  );
};
