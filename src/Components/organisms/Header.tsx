import { useContext } from 'react';
import TodoSearch from '../atoms/SearchBox';
import { TaskContext } from '../../Contexts/TaskContext';

type HeaderProps = {
  userName: string,
};

function Header({ userName }: HeaderProps) {
  console.log('Header');

  const { setSearchValue, searchValue } = useContext(TaskContext);
  return (
    <header>
      <h1>My life <span>Manager</span></h1>
      <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue} />
      <div className="profile">
        <p className="profile__user">{userName}</p>
        <span className="profile__image" />
      </div>
    </header>
  );
}

export default Header;
