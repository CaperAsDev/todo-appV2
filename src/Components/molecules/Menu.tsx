import MenuItems, { DataType } from '../atoms/MenuItems';
import TodoCreateButton from '../atoms/TodoCreateButton';

function Menu() {
  return (
    <div className="sideMenu">
      <div className="menu-container">
        <div className="items-container">
          <MenuItems itemType={DataType.Category} />
          <MenuItems itemType={DataType.Goal} />
          <MenuItems itemType={DataType.Objetive} />
          <MenuItems itemType={DataType.Task} />
        </div>
        <div className="menu__side-bar" />
      </div>
      <TodoCreateButton />
    </div>

  );
}

export default Menu;
