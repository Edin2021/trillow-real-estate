import { useState, useEffect, useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useGlobalContext } from "../context";
import states from "../states";
import { useForm } from "react-hook-form";
import cities from "../statesCities";
import FormErrorMessage from "./FormErrorMessage";

function SearchForm() {
  const [selectedState, setSelectedState] = useState("");
  const [cityList, setCityList] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const currPath = window.location.pathname.split("/").pop();
    if (currPath === "for-rent") {
      setValue("realEstateFor", "list-for-rent");
    } else if (currPath === "for-sale") {
      setValue("realEstateFor", "list-for-sale");
    }
  }, []);

  const { fetchListings } = useGlobalContext();

  const bedsBathsBtnRef = useRef(null);
  const priceBtnRef = useRef(null);
  const searchInputRef = useRef(null);

  const showInputWindow = (e) => {
    const btn = e.target.parentElement;
    btn.classList.add("show");
  };
  const closeInputWindow = () => {
    bedsBathsBtnRef.current.classList.remove("show");
    priceBtnRef.current.classList.remove("show");
  };

  useEffect(() => {
    let handler = (e) => {
      if (!bedsBathsBtnRef.current.contains(e.target)) {
        bedsBathsBtnRef.current.classList.remove("show");
      }
      if (!priceBtnRef.current.contains(e.target)) {
        priceBtnRef.current.classList.remove("show");
      }

      if (!searchInputRef.current.contains(e.target)) {
        searchInputRef.current.classList.remove("show");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    if (cityList && cityList.length > 0) {
      searchInputRef.current.classList.add("show");
    } else {
      searchInputRef.current.classList.add("remove");
    }
  }, [cityList]);

  const onSubmit = (data) => {
    const { realEstateFor, stateCode, city, beds, baths, priceMin, priceMax } =
      data;
    const params = {
      realEstateFor,
      stateCode,
      city,
      beds,
      baths,
      priceMin,
      priceMax,
    };
    fetchListings(params);
  };

  const getAutoComplete = (input) => {
    if (!selectedState || !input) return;
    const currState = selectedState.options[selectedState.selectedIndex].text
      .split(" ")
      .join("");
    const currStateCities = cities[currState];
    let reg = new RegExp(input.toUpperCase());

    let results = currStateCities.filter((city) => city.match(reg));
    setCityList([...results]);
  };

  const selectCity = (listItem) => {
    const city = listItem.textContent;
    const searchBar = searchInputRef.current.querySelector("input");
    searchBar.value = city;
    setCityList([]);
  };

  return (
    <div className="form-wrapper">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="search-form"
        autoComplete="off"
      >
        <label ref={bedsBathsBtnRef} onClick={showInputWindow}>
          <button type="button">beds / baths</button>
          <div className="input-window">
            <div className="notch"></div>
            <label>
              <span>beds</span>
              <input
                type="number"
                name="beds"
                placeholder="1 - 5 beds+"
                {...register("beds", {
                  min: { value: 1, message: "Minimum beds 1." },
                  max: { value: 5, message: "Maximum beds 5." },
                })}
              />
            </label>
            <label>
              <span>baths</span>
              <input
                type="number"
                name="baths"
                placeholder="1 - 5 baths+"
                {...register("baths", {
                  min: { value: 1, message: "Minimum baths 1." },
                  max: { value: 5, message: "Maximum baths 5." },
                })}
              />
            </label>
            <button onClick={closeInputWindow} type="button">
              done
            </button>
          </div>
        </label>
        <label ref={priceBtnRef} onClick={showInputWindow}>
          <button type="button">price</button>

          <div className="input-window">
            <div className="notch"></div>
            <label>
              <span>from</span>
              <input
                type="number"
                name="priceMin"
                placeholder="Price Min"
                {...register("priceMin", {
                  min: { value: 0, message: "Can't be negative." },
                })}
              />
            </label>
            <label>
              <span>to</span>
              <input
                type="number"
                name="priceMax"
                placeholder="Price Max"
                {...register("priceMax", {
                  min: { value: 0, message: "Can't be negative." },
                })}
              />
            </label>
            <button onClick={closeInputWindow} type="button">
              done
            </button>
          </div>
        </label>
        <label>
          <select
            name="realEstateFor"
            {...register("realEstateFor", {
              required: "This field is required.",
            })}
          >
            <option value="list-for-sale">for sale</option>
            <option value="list-for-rent">for rent</option>
          </select>
        </label>
        <label>
          <select
            defaultValue="select state"
            name="stateCode"
            {...register("stateCode", {
              validate: {
                chooseState: (value) =>
                  value !== "select state" || "Select a State.",
              },
            })}
            onChange={(e) => setSelectedState(e.target)}
          >
            <option defaultValue="select state" disabled hidden>
              select state
            </option>
            {states.map((state, i) => (
              <option key={i} value={state.abbrev}>
                {state.name}
              </option>
            ))}
          </select>
          {errors.stateCode && (
            <FormErrorMessage message={errors.stateCode.message} />
          )}
        </label>
        <label ref={searchInputRef}>
          <span className="visually-hidden">enter city name</span>
          <span className="search-icon" aria-hidden="true">
            <BiSearchAlt2 />
          </span>
          <input
            onKeyUp={(e) => getAutoComplete(e.target.value)}
            type="search"
            placeholder="City name..."
            name="city"
            {...register("city", { required: "City name is required." })}
          />
          <div onClick={(e) => selectCity(e.target)} className="city-list">
            <span className="visually-hidden">autocomplete results</span>
            {cityList.map((city, i) => (
              <li key={i} tabIndex="0">
                {city.toLowerCase()}
              </li>
            ))}
          </div>
          {errors.city && <FormErrorMessage message={errors.city.message} />}
        </label>
        <button>search</button>
      </form>
    </div>
  );
}

export default SearchForm;
