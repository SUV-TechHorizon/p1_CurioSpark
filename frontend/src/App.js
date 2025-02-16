import React, { useState } from 'react';
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <Header onSectionChange={handleSectionChange} />
      <Body activeSection={activeSection} />
      <Footer />
    </div>
  );
}

export default App;
