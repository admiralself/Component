import './App.css';
import './style.css';
import Validation from './Components/Validation.js';
import srcimg from "./imageInSrc.jpg";
import Video from "./Video/sample.mp4";
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';

function App() {
 
    return (


<div className="container">


<ProfilePhoto/>
<FullName/>
<Address/>

      </div>


    );
  }

export default App;
