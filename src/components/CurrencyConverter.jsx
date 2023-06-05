import PropTypes from "prop-types";

function CurrencyConverter(props) {
  return (
    <div className="group text-black">
      <input
        type="text"
        value={props.amount}
        onChange={(e) =>
          !isNaN(parseFloat(e.target.value)) &&
          props.onAmountChange(parseFloat(e.target.value))
        }
      />
      <select
        value={props.currency}
        onChange={(event) => props.onCurrencyChange(event.target.value)}
      >
        {props.currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
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
