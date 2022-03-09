import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import Result from './Result';
import CartPanel from './CartPanel';
import { connect } from 'react-redux';
import './Search.css';

const Search = ({ data }) => {
    const [results, setResults] = useState([])
    const handleSearch = event => {
        const searched = data.filter(
            medicine => medicine.nameAR.indexOf(event.target.value) !== -1
        );
        setResults(searched);
    };

    const [expanded, setExpanded] = useState(false);
    function close() {
        setExpanded(false);
    }
    function expand() {
        setExpanded(true);
    }
    const { t } = useTranslation();

    return (
        <>
            <div className="search">
                <div className="search-input">
                    <input
                        type="search"
                        onFocus={expand}
                        onChange={(e) => { handleSearch(e) }}
                        placeholder={t('Section2_SearchInput')} />
                    <i className="fas fa-search"></i>
                </div>
                <div className="result-search-box"
                    onBlur={close}>
                    {expanded && results.length > 0 && <Result data={results} />}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.medicine.data,
    }
}

export default connect(mapStateToProps)(Search);
