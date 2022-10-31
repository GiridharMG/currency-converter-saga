import React from 'react'
import { useSelector } from 'react-redux'

export default function CurrencyUI(props) {
    /**
     * Separated UI from business logic
     * Controlls all the UI which takes inputs from user and display output to user
     */
    return (
        <>
            <div className='container ml-4 mr-4 pl-4 pr-4 mt-4'>
                <div className='container ml-4 mr-4 pl-4 pr-4 col-md-8'>
                    <nav className='nav navbar mt-4 pt-4'>
                        <h2>Currency Converter</h2>
                    </nav>
                    <div className='row mb-2'>
                        Select currencies to convert
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='row'>
                                <div className='col col-md-2'>
                                    <div className='float-left mt-1'>From</div>
                                </div>
                                <div className='col'>
                                    <select className='form-select' ref={props.fromRef}>
                                        <option>Select</option>
                                        {props.currencies.map((item, index) => {
                                            return (
                                                <option key={'from' + index} value={item}>{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <div className='col col-md-1'>
                                    <div className='float-left mt-1'>To</div>
                                </div>
                                <div className='col'>
                                    <select className='form-select' ref={props.toRef}>
                                        <option>Select</option>
                                        {props.currencies.map((item, index) => {
                                            return (
                                                <option key={'to' + index} value={item}>{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <input className='form-control col-md-6 mt-3' ref={props.fromValueRef} />
                        </div>
                        <div className='col'>
                            <input className='form-control col-md-6 mt-3' readOnly={true} value={useSelector(state => state.currency.value)} />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <button className='btn btn-primary mt-3 col-md-6' onClick={props.onClick}>Convert</button>
                    </div>
                </div>
            </div>
        </>
    )
}