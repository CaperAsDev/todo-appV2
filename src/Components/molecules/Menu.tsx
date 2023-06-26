import MenuItems, { DataType } from '../atoms/MenuItems';

function Menu() {
  return (
    <div className="menu-container">
      <div className="items-container">
        <MenuItems itemType={DataType.Category} />
        <MenuItems itemType={DataType.Goal} />
        <MenuItems itemType={DataType.Objetive} />
        <MenuItems itemType={DataType.Task} />
      </div>
      <div className="menu__side-bar" />
    </div>
  );
}

export default Menu;
