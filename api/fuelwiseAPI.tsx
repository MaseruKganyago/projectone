
// import axios from 'axios';

// const BASE_URL = "https://localhost:44352/api";

// export default function fetchAllFuelWiseApi() {
// axios
//   .get(`${BASE_URL}/fuelwise`)
//   .then(response => response)
//   .catch(error => error.response);
// }

import React, {useState, useEffect} from 'react'
import { Card } from 'antd'

const FuelWiseList = props => {
  const [Tips, setTips] = useState([])
  useEffect(() => {
    (async () => {
      const result = await fetch('https://localhost:44352/api/FuelWises')
      const data = await result.json()
      setTips(data)
    })()
  }, [])

  return (
    <div>
      {Tips.map(Tip => {
        const {id, title, body} = Tip
        return (
          <Card>
          <div key={id}>
            <p style={{fontWeight: 'bold'}}>{title}</p>
            <p> {body}</p>
            </div>
            </Card>
        )
      })}
    </div>
  )
}

export default FuelWiseList