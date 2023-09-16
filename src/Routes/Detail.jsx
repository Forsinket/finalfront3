import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';
import "../Styles/detailStyles.css"


const Detail = () => {

  const {apiState} = useGlobalContext();

  const paramsId = useParams();
  const dentist = apiState.find((d) => paramsId.id === d.id )
  return (

    <div>
      <h1>Detalles de {dentist.id} </h1>
      {}
      {}
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{dentist.name}</td>
          <td>{dentist.email}</td>
          <td>{dentist.phone}</td>
          <td>{dentist.website}</td>
        </tr>
      </table>
    </div>
  )
}

export default Detail