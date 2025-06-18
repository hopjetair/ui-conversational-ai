import React,{useState} from 'react';
import './App.css';
import ChatbotContainer from './components/chatbot/ChatbotContainer.tsx';
import FlightBookingForm from './components/FlightBookingForm.tsx'
import  {SearchResults}  from "./components/SearchResults.tsx";
import  {FlightDetails}  from "./components/FlightDetails.tsx";
import  {PaymentForm  }from "./components/PaymentForm.tsx";
import { Header } from "./components/Header.tsx";


function App() {
  const [step, setStep] = useState(1);
  const [flightSearchData, setFlightSearchData] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <div className="App">
      <Header />
      {step === 1 && (
        <FlightBookingForm
          onSearch={(data) => {
            setFlightSearchData(data);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <SearchResults
          searchData={flightSearchData}
          onSelectFlight={(flight) => {
            setSelectedFlight(flight);
            setStep(3);
          }}
          onBack={() => setStep(1)}

        />
      )}

      {step === 3 && (
        <FlightDetails
          flight={selectedFlight}
          onContinue={() => setStep(4)}
          onBack={() => setStep(2)}
        />
      )}

      {step === 4 && (
        <PaymentForm
          onConfirm={() => {
            alert("✅ Booking Confirmed!");
            setStep(1); // Reset to search again
          }}
          onBack={() => setStep(3)}
        />
      )}
      {/* <FlightBookingForm /> */}
      {/* <header className="App-header">
        <p>
          Group 9 Conversational Inttelligence Chatbot
        </p>
      </header> */}
      <ChatbotContainer/>
    </div>
  );
}

export default App;
