import Navbar from '../components/Navigation';
import CalculatorComponent from '../components/Calculator';

const Calculator = () => (
  <div className="calculator-page-container">
    <Navbar />
    <div className="calculator-page-content-container">
      <h2>Let&apos;s do some math!</h2>
      <CalculatorComponent />
    </div>
  </div>
);

export default Calculator;
