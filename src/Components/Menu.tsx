type MenuProps = {
  children: React.ReactNode
};
function Menu({ children }: MenuProps) {
  return (
    <div className="menu-container">
      <div className="items-container">
        {children}
      </div>
      <div className="menu__side-bar" />
    </div>
  );
}

export default Menu;
