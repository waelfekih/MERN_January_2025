import { Routes, Route, useParams } from 'react-router-dom';

import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Colored from './components/Colored';

const CheckValue = () => {
  const { value } = useParams();

  return isNaN((value)) ? <Word word={value} />  : <Number number={value}  />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:value" element={<CheckValue />} />
      <Route path="/:value/:color/:backgroundColor" element={<Colored />} />


    </Routes>
  );
}

export default App;

