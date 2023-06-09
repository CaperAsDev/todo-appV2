export enum DataType {
  Category = 'Category',
  Goal = 'Goal',
  Objetive = 'Objetive',
  Task = 'Task',
}
type MenuItemProps = {
  itemType: DataType,
};

function MenuItems({ itemType } : MenuItemProps) {
  return (
    <div className="menu__item">
      {itemType}
    </div>
  );
}

export default MenuItems;
