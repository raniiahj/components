
import './App.css';
import { Adresse } from './Components/Profile/Adresse';
import { FullName } from './Components/Profile/FullName';
import { ProfilePhoto } from './Components/Profile/ProfilePhoto';

function App() {
  return (
    <div >
      <FullName/>
      <Adresse/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;
