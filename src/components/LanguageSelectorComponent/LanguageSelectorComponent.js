import React, { Component } from 'react';
import { connect }          from "react-redux";
import ReactFlagsSelect     from 'react-flags-select';

import 'react-flags-select/css/react-flags-select.css';
import { saveLanguage } from '../../_actions/LanguageActions';

const mapStateToProps = state => {
    return {
        language: state.language,
    };
};

const mapDispatchToProps = {
    saveLanguage,
}


class LanguageSelector extends Component {

    constructor(props) {
        super(props);

    }

    langChange = (countryCode) => {
        localStorage.setItem('language', countryCode);
        console.log(countryCode)
        this.props.saveLanguage(countryCode);
    };

    render() {

        return (
            <ReactFlagsSelect onSelect={this.langChange}
                defaultCountry={this.props.language}
                countries={["US", "RU"]} 
                customLabels={{"US": "ENG", "RU": "RU"}} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(LanguageSelector);