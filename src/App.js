import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';
import PickAddOns from './components/PickAddOns';
import Summary from './components/Summary';
import ThankYou from './components/ThankYou';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    billing: 'monthly',
    addOns: [],
  });

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      plan: '',
      billing: 'monthly',
      addOns: [],
    });
    setStep(1);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              step === 1 ? <PersonalInfo next={handleNext} data={formData} /> :
              step === 2 ? <SelectPlan next={handleNext} prev={handlePrev} data={formData} /> :
              step === 3 ? <PickAddOns next={handleNext} prev={handlePrev} data={formData} /> :
              step === 4 ? <Summary next={handleNext} prev={handlePrev} data={formData} /> :
              <ThankYou handleReset={handleReset} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
