import React from 'react'
import "./index.css"
import {useState} from 'react'

export default function App() {

    const [income,setIncome]=useState(0)
    const [foods,setFoods]=useState(0)
    const [rents,setRents]=useState(0)
    const [cloth,setCloth]=useState(0)
    const [expenses,setExpenses]=useState(0)
    const [balance,setBalance]=useState(0)
    const [savings,setSavings]=useState(0)
    const [savingAmount,setSavingAmount]=useState(0)
    const [remainingBalance,setRemainingBalance]=useState(0)
    
    
    
    


    const Calculate=(e)=>{
        e.preventDefault();

        if(parseFloat(income)>0 && parseFloat(foods)>0 ){ 
            if(parseFloat(rents)>0 && parseFloat(cloth)>0 ) {
                if((parseFloat(foods)+parseFloat(rents)+parseFloat(cloth)) < parseFloat(income)){
        setExpenses(parseFloat(foods)+parseFloat(rents)+parseFloat(cloth))
        setBalance(parseFloat(income)-(parseFloat(foods)+parseFloat(rents)+parseFloat(cloth))) 
          
    }

        else{
            alert("Expenses is more than your income")
        }

    }  
        else{
            alert("Please give a positive value!")}
        }
      
        else {
            alert("Please give a positive value!")
        } 

       
    }

    const Save=(e)=>{
        
        if(parseFloat(income)*(parseFloat(savings)/100) <= parseFloat(balance) ){

            setSavingAmount(parseFloat(income)*(parseFloat(savings)/100))
            setRemainingBalance(parseFloat(balance)-(parseFloat(income)*(parseFloat(savings)/100)))  
        }

        else{
            alert("Saving amount is more than your current balance")
        }
      
    }

    
    
    return (
    <div className='container'>
        <h1>Money Master</h1>
        <div className='flex'>
        <img src='./images/img.png' alt=''/>
        <div className='text-div'>
           <h1>Income</h1>
           <form onSubmit={Calculate}>
                <label className='label'>Income:</label>
                <input type='number' placeholder='Your income' value={income} onChange={(e) => setIncome(e.target.value)}/>
                <h1>Expenses</h1>
                <label>Foods:</label>
                <input type='number' value={foods} onChange={(e) => setFoods(e.target.value)} />
                <label>Rents:</label>
                <input type='number' value={rents} onChange={(e) => setRents(e.target.value)}/>
                <label className='label'>Cloths:</label>
                <input type='number' value={cloth} onChange={(e) => setCloth(e.target.value)}/>
                <button type='submit'className='button'>Calculate</button>
                <h3>Total expenses:{expenses}</h3>
                <h3>Balance:{balance}</h3>
                                
                <div className='flex1'>
                <label className='m-save'>Save:</label>
                <input type='number' className='save' placeholder='' value={savings} onChange={(e) => setSavings(e.target.value)}/> <h4>%</h4>
                <button type='submit'className='button2' onClick={Save}>Save</button>
                </div>
                <h3>Saving Amount:{savingAmount}</h3>
                <h3>Remaining Balance:{remainingBalance}</h3>
                
               
           </form>  
        </div>

        

        </div>
      
       
    </div>
    )
}