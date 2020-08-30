import React from 'react'
import { Input } from '@material-ui/core';

const Search = () => {

  const [city, setCity] = useState([]);
  
  useEffect(() => {
    loadCity();
  }, []);

  function loadCity() {
    //code to get Covid data
  API.getCovidData().then((res) => {
  setCity(res.data)
  })
  }

    return (
      <>
      <div className="form-group">
      <label htmlFor="inputState">State</label>
      <select
        id="inputState"
        className="form-control"
        onChange={props.filter}
      >
        <option>None</option>
        <option>Alabama</option>
        <option>Alaska</option>
        <option>Arizona</option>
        <option>Arkansas</option>
        <option>California</option>
        <option>Colorado</option>
        <option>Connecticut</option>
        <option>Delaware</option>
        <option>Florida</option>
        <option>Georgia</option>
        <option>Hawaii</option>
        <option>Idaho</option>
        <option>Illinois</option>
        <option>Indiana</option>
        <option>Iowa</option>
        <option>Kansas</option>
        <option>Kentucky</option>
        <option>Louisiana</option>
        <option>Maine</option>
        <option>Maryland</option>
        <option>Massachusetts</option>
        <option>Michigan</option>
        <option>Minnesota</option>
        <option>Mississippi</option>
        <option>Missouri</option>
        <option>Montana</option>
        <option>Nebraska</option>
        <option>Nevada</option>
        <option>New Hampshire</option>
        <option>New Jersey</option>
        <option>New Mexico</option>
        <option>New York</option>
        <option>North Carolina</option>
        <option>North Dakota</option>
        <option>Ohio</option>
        <option>Oklahoma</option>
        <option>Oregon</option>
        <option>Pennsylvania</option>
        <option>Rhode Island</option>
        <option>South Carolina</option>
        <option>South Dakota</option>
        <option>Tennessee</option>
        <option>Texas</option>
        <option>Utah</option>
        <option>Vermont</option>
        <option>Virginia</option>
        <option>Washington</option>
        <option>West Virginia</option>
        <option>Wisconsin</option>
        <option>Wyoming</option>
      </select>
    </div>
    <br />
    <h4>Search:</h4>
    <input
      type="text"
      className="form-control"
      id="search"
      placeholder="Type a city"
      onChange={props.search}
    />
    </>
    )
}

export default Search
