import React, { useEffect, useState } from 'react'
import dollar from '../images/icon-dollar.svg'
import person from '../images/icon-person.svg'

const Main = () => {
    const discounts = [5,10,15,25,50]
    const [bill, setBill] = useState("")
    const [tip, setTip] = useState("%")
    const [tipAmount, calculateAmount] = useState("")
    const [people, setPeople] = useState(1)
    const [error, setError] = useState("")
    const [perPerson, calculatePerson] = useState("")
    
    useEffect(() => {
        calculateAmount((bill * (tip.substring(0, tip.length -1) / 100)).toFixed(2))
    }, [bill,tip])

    useEffect(() => {
        if(people == 0){
            setError("Can't be zero")
        } else {
            setError("")
            calculatePerson((tipAmount / people).toFixed(2))
        }
    }, [people,tipAmount])

    const resetAll = () => {
        setBill("")
        setTip("%")
        setPeople(1)
    }

    return (
        <>
            <div id="card">
                <div id="input-side">
                    <div id="bill">
                    <p>Bill</p>
                    <form className="inputs">
                        <img src={dollar} alt="" />
                        <input value={bill} onChange={(e) => setBill(e.target.value)} className="input" placeholder="0"/>
                    </form>
                    </div>
                    <div id="select-tip">
                    <p>Select Tip %</p>
                    <div id="percentages">
                        {
                            discounts.map((discount,index) => <button key={index} className="tip-percentage" onClick={(e) => setTip(e.target.innerText)}>{discount}%</button>)
                        }
                        <form className="inputs">
                            <input value={tip} onChange={(e) => setTip(e.target.value)} className="input tip-percentage" />
                        </form>
                    </div>
                    </div>
                    <div id="people">
                    <div id="people-paragraphs">
                        <p>Number of People</p>
                        <p id="zero">{error}</p>
                    </div>
                    <form className='inputs'>
                        <img src={person} alt="" />
                        <input value={people} onChange={(e) => setPeople(e.target.value)} className="input" />
                    </form>
                    </div>
                </div>
                <div id="calculate-side">
                    <div>
                    <div id="tip-amount" className="calculate-side-header">
                        <div className="amount-total">
                        <p>Tip Amount</p>
                        <p>/ person</p>
                        </div>
                        <p className="price" id="tip_amount">${perPerson}</p>
                    </div>
                    <div id="total" className="calculate-side-header">
                        <div className="amount-total">
                        <p>Total</p>
                        <p>/ person</p>
                        </div>
                        <p className="price" id="total">${tipAmount}</p>
                    </div>
                    </div>
                    <button id="reset" onClick={resetAll}>RESET</button>
                </div>
            </div>
        </>
    )
}

export default Main
