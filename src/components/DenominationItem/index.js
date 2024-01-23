// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onClickDenomination()}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
