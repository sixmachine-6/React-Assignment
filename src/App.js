import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Setting from "./pages/Setting";

import { UserProvider } from "./contexts/useUsers";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
