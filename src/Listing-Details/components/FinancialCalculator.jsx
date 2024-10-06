import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function FinancialCalculator({carDetail}) {
    const [carPrice, setCarPrice]=useState(0);
    const [interestRate, setInterestRate]=useState(0);
    const [loanTerm, setLoanTerm]=useState(0);
    const [downPayment, setDownPayment]=useState(0);
    const [monthlyPayment, setMonthlyPayment]=useState(0);

    const CalculateMonthlyPayment=()=>{
        console.log(carPrice,interestRate,loanTerm, downPayment);
        const Pricipal=carPrice-downPayment;
        const MonthlyInterestRate=interestRate/1200;  // Convert into Decimal 

        const MonthlyPayment=(Pricipal*MonthlyInterestRate*Math.pow(1+MonthlyInterestRate,loanTerm))/
        (Math.pow(1+MonthlyInterestRate,loanTerm)-1);

        setMonthlyPayment(MonthlyPayment.toFixed(2));
    }
  return (
    <div className="p-10 rounded-xl shadow-md mt-7 border ">
      <h2 className="text-2xl font-medium">Financial Calculator</h2>
      <div className="flex gap-5 mt-3">
        <div className="w-full">
          <label>Price ($)</label>
          <Input type="number" onChange={(e)=>setCarPrice(e.target.value)} />
        </div>
        <div className="w-full">
          <label>Interest Rate</label>
          <Input type="number" onChange={(e)=>setInterestRate(e.target.value)} />
        </div>
      </div>
      <div className="flex gap-5 mt-4">
        <div className="w-full">
          <label>Loan Term (Month)</label>
          <Input type="number" onChange={(e)=>setLoanTerm(e.target.value)} />
        </div>
        <div className="w-full">
          <label>Down Payment</label>
          <Input type="number" onChange={(e)=>setDownPayment(e.target.value)} />
        </div>
      </div>
     {monthlyPayment>0&& <h2 className="mt-5 text-2xl font-medium">Your Monthly Payment : <span className="font-bold text-4xl">${monthlyPayment}</span></h2>}
      <Button className="w-full mt-5" size="lg"
      onClick={CalculateMonthlyPayment}
      >Calculate</Button>
    </div>
  );
}

export default FinancialCalculator;
