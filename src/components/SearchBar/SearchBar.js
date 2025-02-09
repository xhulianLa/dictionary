import styles from "./SearchBar.module.css"
import Zoom2 from "../../assets/icons/zoom-2";
import {ReactComponent as ZoomIcon} from "../../assets/icons/zoom-3.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function SearchBar({setResults}) {

    const apiString = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        // Handle search logic here
        console.log("Search activated");
        console.log(query);

        fetch(apiString + query)
        .then((response) => {
            console.log(response);
            return response.json()
        })
        .then((data) => {
            console.log(data[0]);
            setResults(data[0]);
            setQuery("");
            if (data[0].word){
                navigate(`/${query}`);
            }
        })
        .catch((error) => {
            console.log("Error: ", error);
            navigate(`/${query}`);
        });
    };


    return ( 
        <form className={styles.searchBarWrapper} onSubmit={handleSubmit} role="search">
            <input className = {styles.SearchBar} 
            value={query} 
            onChange={(e)=> setQuery(e.target.value)} 
            type="search" 
            placeholder="Search any word"/>
            <ZoomIcon className={styles.searchIcon} title="Search Icon" />
        </form>
     );
}

export default SearchBar;