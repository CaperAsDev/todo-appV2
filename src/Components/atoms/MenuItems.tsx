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
    <div className="item-container">
      <p className="menu__item">
        {itemType}
      </p>
    </div>
  );
}

export default MenuItems;
