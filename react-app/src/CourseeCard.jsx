

function CourseeCard(props) {
    console.log(props);
  return (
    <li>
        <h4>{props.data.name}</h4>
        <p>{props.data.description}</p>
    </li>
  )
}

export default CourseeCard;