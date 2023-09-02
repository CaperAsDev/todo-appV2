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
    <label className="search-box">
      <BsSearch />
      <input
      role='searchbox'
      type="text"
      placeholder="Organize files in Downloads"
      onChange={inputHandler} value={searchValue} 
      onFocus={(event) => event.target.parentElement?.classList.add('focused')}
      onBlur={(event) => event.target.parentElement?.classList.remove('focused')}
      />
    </label>
  );
}
