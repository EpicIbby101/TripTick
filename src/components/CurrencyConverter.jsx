import PropTypes from "prop-types";

function CurrencyConverter(props) {
  return (
    <div className="bg-gray-900 w-64 mx-auto mb-6 grid grid-cols-2 rounded-lg z-50">
 <input type="text" className="bg-transparent border-0 text-white pl-5" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
      <select className="bg-transparent border-0 text-white px-4 py-3" value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
        {props.currencies.map((currency => (
          <option className="text-black" key={currency} value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  );
}

CurrencyConverter.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyConverter;
