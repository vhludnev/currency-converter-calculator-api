import React, { Component } from 'react';

import './Calc.css';


export default class Calc extends Component {

    state = {
        result: 0,
        curList: [],
        totalEur: [],
        value: ''
    }

    calcRate = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let countCurrency = elements['count-currency'].value;   // returns '100' 
        let typeCurrency = elements['type-currency'].value;     // returns 'USD' 
        let result = (countCurrency / this.props.ratesAll[typeCurrency]).toFixed(2)
        
        let symbol = {}
        let curSymbols = JSON.parse(localStorage.getItem('symbols'))
            symbol[typeCurrency] = curSymbols[typeCurrency]

        this.setState({ 
            result: result // returns a string with a calculation in EUR
        });

//      this.state.curList.push({currency: typeCurrency, symbol: symbol[typeCurrency], amount: countCurrency, eur: result}) // not correct way!
/////   correct way:
        const newCurCalc = {
            currency: typeCurrency,
            symbol: symbol[typeCurrency],
            amount: countCurrency,
            eur: result
        }
        this.setState(({ curList, totalEur }) => {
            const newArr = [...curList, newCurCalc];
            const newArray = [...totalEur, +result];
            return {
                curList: newArr,
                totalEur: newArray
            };
        });    
    };

    handleChange = (e) =>
        this.setState({ value: e.target.value });

    componentDidUpdate(prevProps) {
        if (this.props.clicked !== prevProps.clicked) {  
            this.setState({
                value: this.props.clicked,
            })  
            const elem = document.querySelector('input[name="count-currency"]');
                elem.scrollIntoView({behavior: "smooth", block: "center"});
                elem.focus({preventScroll: true});  
        }
    }

    render() {
        const { ratesAll } = this.props;
        const { curList, result, totalEur, value } = this.state;

        const sortedRatesAll = Object.fromEntries(Object.entries(ratesAll).sort()); // sorting techniques by currency name

        const currencyChoice = Object.keys(sortedRatesAll).map((keyName, i) => {
            return <option 
                        key={keyName} 
                        value={keyName}>
                        {keyName}
                    </option>
        });

        const currencyResult = curList.map((subItems, sIndex) => {
            return <div 
                        key={`${subItems}${sIndex}`}
                        className="calcline">
                            <li> 
                                { `${subItems.currency} ${subItems.amount} = EUR ${subItems.eur}` }
                                <p>currency rate for { subItems.symbol } ({ subItems.currency }): { ratesAll[subItems.currency].toFixed(4) }</p>
                            </li> 
                    </div> 
        });
        
        return (
            <>
                <h3> Calculator </h3>
                <div className="calculator">
                    <div className="block">
                        <div>I want to convert:</div>
                        <br/>
                            <div>
                                <form onSubmit={this.calcRate}>
                                    <input type="number" defaultValue="100" name="count-currency" />
                                    <select name="type-currency" id="" value={value} onChange={this.handleChange} >
                                        { currencyChoice }
                                    </select>
                                    <input type="submit" defaultValue="calc" />
                                </form>
                            </div>            
                        <div>
                            <h4> { result  ?  'Result:' : null } </h4> 
                            <br/>
                            <ul className="calc-res">
                                { currencyResult }
                                <br/>
                                <h4> { result  ? `Total: EUR ${ totalEur.reduce((a, b) => { return (a + b); }, 0).toFixed(2) }` : null }</h4>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="chart">
                        Chart
                    </div> */}
                </div>
            </>
        );
    };
}