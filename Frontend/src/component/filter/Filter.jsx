import React, { useContext, useState } from "react";
import "./filter.css";
import { UserContext } from "../../Context/SiteContext";
import { filterService } from "../../Service/filter";
import { CiLocationOn } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { BsSpeedometer2 } from "react-icons/bs";

export default function Filter() {
  const [budget, setBudget] = useState(null);
  const [range, setRange] = useState(null);
  const [cities, setCities] = useState([]);

  const { products, setProducts } = useContext(UserContext);
  
  return (
    <div>
      <div className="filter-div">
        <div className=" subfil-div padd-div">
          <h6>
            <label htmlFor=""><CiLocationOn />
city</label>
          </h6>
          <select name="">
            <option
              onSelect={() => {
                setCities([...cities, e.target.value]);
                console.log(cities);
              }}
              value="ahmedabad"
            >
              ahmedabad
            </option>
            <option onSelect={() => {}} value="surat">
              surat
            </option>
            <option onSelect={() => {}} value="rajkot">
              rajkot
            </option>
            <option onSelect={() => {}} value="vadodara">
              vadodara
            </option>
          </select>
        </div>

        <div className=" subfil-div padd-div">
          <h6>
            <label htmlFor=""><LiaRupeeSignSolid />Budget</label>
          </h6>
          <input
            type="number"
            name="budget"
            id="budget"
            onChange={(e) => {
              setBudget(e.target.value);
            }}
          />
          K
        </div>

        <div className=" subfil-div padd-div">
          <h6>
            <label htmlFor=""><BsSpeedometer2 />Range</label>{" "}
          </h6>
          <input
            type="number"
            name="range"
            id="range"
            onChange={(e) => {
              setRange(e.target.value);
            }}
          />
        </div>

        <div className=" subfil-div">
          <button
            onClick={() => {
              setProducts(filterService(products, budget, range));
            }}
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
