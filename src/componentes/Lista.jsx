import { Link } from "react-router-dom"

const Lista = () => {
  return (
    <div>
      <ol>
        <li><Link to='home'>Home</Link></li>
        <li><Link to='otro'>Otro</Link> </li>

      </ol>
    </div>
  )
}

export default Lista
