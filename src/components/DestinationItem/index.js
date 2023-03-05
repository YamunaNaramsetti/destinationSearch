// Write your code here
const DestinationItem = props => {
  const {destinations} = props
  const {name, imgUrl} = destinations
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
