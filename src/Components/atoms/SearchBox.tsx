import { BsSearch } from 'react-icons/bs';

type TodoSearchProps = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  searchValue: string
};

export default function TodoSearch({ setSearchValue, searchValue }: TodoSearchProps) {
  const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    setSearchValue(value);
  };
  return (
    <div className="search-box">
      <BsSearch />
      <input type="text" placeholder="Jugar un Aram" onChange={inputHandler} value={searchValue} />
    </div>
  );
}
