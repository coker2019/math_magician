import Navbar from '../components/Navigation';
import QuoteComponent from '../components/Quote';

const Quote = () => (
  <div className="quote-page-container">
    <Navbar />
    <div className="quote-page-content-container">
      <QuoteComponent />
    </div>
  </div>
);

export default Quote;
