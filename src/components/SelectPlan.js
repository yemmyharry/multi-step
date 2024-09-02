import React, { useState } from 'react';

const plans = [
  { name: 'Arcade', priceMonthly: 9, priceYearly: 90 },
  { name: 'Advanced', priceMonthly: 12, priceYearly: 120 },
  { name: 'Pro', priceMonthly: 15, priceYearly: 150 },
];

const SelectPlan = ({ next, prev, data }) => {
  const [selectedPlan, setSelectedPlan] = useState(data.plan || 'Arcade');
  const [billing, setBilling] = useState(data.billing || 'monthly');

  const handleSubmit = () => {
    next({ plan: selectedPlan, billing });
  };

  return (
    <div>
      <div className="stepper">
        <div className="step">1</div>
        <div className="step active">2</div>
        <div className="step">3</div>
        <div className="step">4</div>
      </div>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div>
        {plans.map((plan) => (
          <label key={plan.name}>
            <input
              type="radio"
              name="plan"
              value={plan.name}
              checked={selectedPlan === plan.name}
              onChange={() => setSelectedPlan(plan.name)}
            />
            {plan.name} (${billing === 'monthly' ? plan.priceMonthly : plan.priceYearly}/{billing === 'monthly' ? 'mo' : 'yr'})
          </label>
        ))}
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="billing"
            value="monthly"
            checked={billing === 'monthly'}
            onChange={() => setBilling('monthly')}
          />
          Monthly
        </label>
        <label>
          <input
            type="radio"
            name="billing"
            value="yearly"
            checked={billing === 'yearly'}
            onChange={() => setBilling('yearly')}
          />
          Yearly
        </label>
      </div>
      <button onClick={prev}>Go Back</button>
      <button onClick={handleSubmit}>Next Step</button>
    </div>
  );
};

export default SelectPlan;
