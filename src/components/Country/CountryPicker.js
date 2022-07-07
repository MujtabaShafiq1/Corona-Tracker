import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchCountries } from '../../Api/Api';
import styles from "./CountryPicker.module.css"

const CountryPicker = ({ handleCountryChange }) => {

    const [countryList, setCountryList] = useState([])

    useEffect(() => {
        const fetchCountryData = async () => {
            const data = await fetchCountries();
            setCountryList(data);
        }
        fetchCountryData();
    }, [])


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countryList.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;