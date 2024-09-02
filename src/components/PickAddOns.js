import React, { useState } from 'react';

const addOns = [
  { name: 'Online service', desc: 'Access to multiplayer games', priceMonthly: 1, priceYearly: 10 },
  { name: 'Larger storage', desc: 'Extra 1TB of cloud save', priceMonthly: 2, priceYearly: 20 },
  { name: 'Customizable profile', desc: 'Custom theme on your profile', priceMonthly: 2, priceYearly: 20 },
];

const PickAddOns = ({ next, prev, data }) => {
  const [selectedAddOns, setSelectedAddOns] = useState(data.addOns || []);

  const handleAddOnChange = (name) => {
    if (selectedAddOns.includes(name)) {
      setSelectedAddOns(selectedAddOns.filter((addOn) => addOn !== name));
    } else {
      setSelectedAddOns([...selectedAddOns, name]);
    }
  };

  const handleSubmit = () => {
    next({ addOns: selectedAddOns });
  };

  return (
    <div>
      <div className="stepper">
        <div className="step">1</div>
        <div className="step">2</div>
        <div className="step active">3</div>
        <div className="step">4</div>
      </div>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div>
        {addOns.map((addOn) => (
          <label key={addOn.name}>
            <input
              type="checkbox"
              name={addOn.name}
              checked={selectedAddOns.includes(addOn.name)}
              onChange={() => handleAddOnChange(addOn.name)}
            />
            {addOn.name} ({addOn.desc}) +${data.billing === 'monthly' ? addOn.priceMonthly : addOn.priceYearly}/{data.billing === 'monthly' ? 'mo' : 'yr'}
          </label>
        ))}
      </div>
      <button onClick={prev}>Go Back</button>
      <button onClick={handleSubmit}>Next Step</button>
    </div>
  );
};

export default PickAddOns;
