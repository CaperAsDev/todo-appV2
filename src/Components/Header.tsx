type HeaderProps = {
  userName: string,
  children: React.ReactNode
};

function Header({ userName, children }: HeaderProps) {
  return (
    <header>
      <h1>My life <span>Manager</span></h1>
      {children}
      <div className="profile">
        <p className="profile__user">{userName}</p>
        <span className="profile__image" />
      </div>
    </header>
  );
}

export default Header;
