interface Props {
  name: string;
  selected?: boolean;
  assigned: number;
  activity?: number;
  available?: number;
}

export const Category: React.FC<Props> = ({ name, assigned }) => {
  return (
    <tr className=''>
      <th></th>
      <td>{name}</td>
      <td>£{assigned}</td>
      <td>£0.00</td>
      <td>£0.00</td>
    </tr>
  );
};

// export default Category;
