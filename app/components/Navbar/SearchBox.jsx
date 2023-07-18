import { BiSearchAlt } from "react-icons/bi";

function SearchBox() {
  return (
    <>
      <form className="input-group flex items-stretch m-2" action="/search">
        <input
          name="query"
          type="search"
          className="form-control relative flex-auto min-w-0 block mx-2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
          placeholder="Search from our 1000+ Products"
          aria-label="Search"
          aria-describedby="button-addon2"
        />

        <button
          type="submit"
          className="btn px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
          id="button-addon2"
        >
          <BiSearchAlt className="text-xl" />
        </button>
      </form>
      <ul className="mt-1 mx-4 w-[71%] md:w-[85%] xl:w-[29%] absolute  bg-white border border-gray-300 rounded-lg">
         {/* {suggestions.length > 0 && (
          <ul className="mt-2 bg-white border border-gray-300 rounded-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )} */}
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">dress</li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">cloth</li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">kapde</li>
      </ul>
    </>
  );
}

export default SearchBox;
