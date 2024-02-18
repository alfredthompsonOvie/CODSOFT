/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./ui/Button";

const SearchBar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = () => {
		// Pass the search term to the parent component for handling the search
		onSearch(searchTerm);
	};

	return (
		<form className="shadow-xl m-2 p-8 flex items-center justify-center flex-wrap gap-4 bg-white w-full" >
      <input
        className="bg-white border-b border-black p-4 "
				type="text"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder="job title"
			/>
      <select name="location" id="location" className="bg-white border-black border-b p-4 ">
        <option value="allLocation">All Location</option>
        <option value="remote">Remote</option>
        <option value="hybrid">Hybrid</option>
        <option value="onSite">On-Site</option>
      </select>
      <select name="category" id="category" className="bg-white border-b border-black p-4 ">
        <option value="allLocation">All Category</option>
        <option value="frontendDevelopement">Frontend Developement</option>
        <option value="backendDevelopment">Backend Development</option>
        <option value="fullStack">Full Stack</option>
      </select>

			<Button onClick={handleSearch} $submit>Search</Button>
		</form>
	);
};

export default SearchBar;
