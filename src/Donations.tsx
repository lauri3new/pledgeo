import React, { useEffect, useState } from 'react';
import Dinero from "dinero.js"
import { getDonations } from './services/donations';
import Spinner from 'react-bootstrap/Spinner';

export const Donations = ({ id }: { id: string }) => {

  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const x = async () => {
      try {
      const data = await getDonations({ id })
      setLoading(false)
      setData(data.docs.map(a => a.data()))
      } catch (e) {
      setLoading(false)
      console.log('error', e)
      }
    }
    x()
  }, [])

  if (loading) {
    return (<div style={{
      width: '100%',
      marginLeft: '50%'
    }}><Spinner animation="border" role="status"/></div>)
  }
  
  return (
    <>
      <h3>Donation timeline</h3>
      <table style={{ width: "100%" }}>
      <tr>
        <th>User</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
      {data.map(({ amount, currencyCode, firstName, createdAt }) => {
        return (
          <tr>
          <td>{firstName}</td>
          <td>{Dinero({ currency: currencyCode, amount }).toFormat()}</td>
          <td>{new Date(createdAt).toLocaleString()}</td>
        </tr>
        )
      })}
      </table>
    </>
  );
}
