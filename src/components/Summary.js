import React from 'react';

const Summary = ({ next, prev, data }) => {
  const { plan, billing, addOns } = data;

  const plans = {
    Arcade: { priceMonthly: 9, priceYearly: 90 },
    Advanced: { priceMonthly: 12, priceYearly: 120 },
    Pro: { priceMonthly: 15, priceYearly: 150 },
  };

  const addOnsData = {
    'Online service': { priceMonthly: 1, priceYearly: 10 },
    'Larger storage': { priceMonthly: 2, priceYearly: 20 },
    'Customizable profile': { priceMonthly: 2, priceYearly: 20 },
  };

  const total = plans[plan][`price${billing === 'monthly' ? 'Monthly' : 'Yearly'}`] +
    addOns.reduce((acc, addOn) => acc + addOnsData[addOn][`price${billing === 'monthly' ? 'Monthly' : 'Yearly'}`], 0);

  return (
    <div>
      <div className="stepper">
        <div className="step">1</div>
        <div className="step">2</div>
        <div className="step">3</div>
        <div className="step active">4</div>
      </div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="summary">
        <div className="summary-item">
          <span>{plan} ({billing})</span>
          <span>${plans[plan][`price${billing === 'monthly' ? 'Monthly' : 'Yearly'}`]}/{billing === 'monthly' ? 'mo' : 'yr'}</span>
        </div>
        {addOns.map((addOn) => (
          <div className="summary-item" key={addOn}>
            <span>{addOn}</span>
            <span>+${addOnsData[addOn][`price${billing === 'monthly' ? 'Monthly' : 'Yearly'}`]}/{billing === 'monthly' ? 'mo' : 'yr'}</span>
          </div>
        ))}
        <div className="summary-item summary-total">
          <span>Total</span>
          <span>${total}/{billing === 'monthly' ? 'mo' : 'yr'}</span>
        </div>
      </div>
      <button onClick={prev}>Go Back</button>
      <button onClick={next}>Confirm</button>
    </div>
  );
};

export default Summary;
