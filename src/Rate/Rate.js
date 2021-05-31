import React, { Component } from 'react';

import './Rate.css';
import Data from "../db.json";
import Calc from '../Calc/Calc';

export default class Rate extends Component {

    state = {
        'date': '',
        'currencyRates': {},
        'currencyRatesAll': {},
        'currencySymbols': Data.symbols, 
        'history': []   
    };
    
    currency = ['USD', 'GBP', 'CAD', 'RUB']; 

    /// Data is taken from LocalStorage
    getRateLocal = () => {

        let result = {};
        const ratesFromLS = JSON.parse(localStorage.getItem('rates')),
              dateFromLS = JSON.parse(localStorage.getItem('date'))
        for (let i = 0; i < this.currency.length; i++) {
            result[this.currency[i]] = ratesFromLS[this.currency[i]]
        }  
        this.setState(() => {
            return { 
                date: dateFromLS, 
                currencyRates: result,
                currencyRatesAll: ratesFromLS
            };
        });
    };   

    getRates = () => {

        if (localStorage.getItem('rates') === null || new Date(JSON.parse(localStorage.getItem('date'))).toISOString().split('T')[0] !== new Date().toISOString().split('T')[0]) {

            fetch('https://someApiServer') 
                .then(data => {
                    return data.json();
                })
                .then(data => {            
                    let result = {};
                    for (let i = 0; i < this.currency.length; i++) {
                        result[this.currency[i]] = data.conversion_rates[this.currency[i]]
                    }
                    this.setState({
                        date: data.time_last_update_utc,
                        currencyRates: result,
                        currencyRatesAll: data.conversion_rates
                    });
                })
                .then(() => {
                    localStorage.setItem('date', JSON.stringify(this.state.date));
                    localStorage.setItem('rates', JSON.stringify(this.state.currencyRatesAll));
                    localStorage.setItem('symbols', JSON.stringify(this.state.currencySymbols));
                    console.log('Data has been fetched and LS has been updated');
                })
                .catch(error => {
                    console.warn('Unable to fetch from servers at this moment', error);
                    localStorage.setItem('date', JSON.stringify(Data.time_last_update_utc));
                    localStorage.setItem('rates', JSON.stringify(Data.conversion_rates));
                    localStorage.setItem('symbols', JSON.stringify(Data.symbols));
                    this.getRateLocal();
                    console.log('Out-to-date data has been taken from LS')
                });
        } else {
            this.getRateLocal();
            console.log('Data has been taken from LS')
        };
    };

    componentDidMount() { 
        this.getRates(); 
    };

    render() {
        const { currencyRates, date, currencyRatesAll } = this.state;

        const mainCurrencyBlock = Object.keys(currencyRates).map((keyName, i) => {
            return <div className="block flex-item" key={keyName}>
                        <div className="currency-name">{keyName}</div>
                        <div className="currency-in">{currencyRates[keyName].toFixed(2)}*</div>
                        <p>* exchange rate for 1 EUR</p>
                    </div>
        });

        const editedDate = new Date().toISOString().split('T')[0];
    
        return (
            <div className="rate">
                <h3> Currency rate for { editedDate } </h3>
                <div className="flex-container">
                    { mainCurrencyBlock }             
                </div>
                <Calc ratesAll={currencyRatesAll} />
            </div>
        );
    };
}