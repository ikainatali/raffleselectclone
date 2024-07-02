import Button from "../ui/Button";

type SearchProps = {
  placeholder: string;
};
const SearchForm = ({ placeholder }: SearchProps) => {
  return (
    <>
      <form
        className="md:w-3/4 w-full p-1 flex gap-2 items-center border-2 border-gray/30 rounded-full bg-transparent"
        action=""
      >
        <input
          type="text"
          name="search"
          id="search"
          className="w-4/5 py-1 pl-3 text-gray bg-transparent placeholder:text-gray focus:outline-none focus:border-none focus:ring-0 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
        <div className="w-1/5 flex justify-end">
          <Button paddingY={2} margin={0} textSize={14}>
            Start
          </Button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
