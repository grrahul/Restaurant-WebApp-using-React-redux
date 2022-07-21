import React from 'react'
import { connect } from 'react-redux'
import Header from './Container/Header'

const Orders = ({data}) => {
  return (
    <div>
      <Header/>
        <center>
        {
        data.length >0 ?
        <div className='container'>
          <div className='row'>
            {data.map((item)=>(
              <div className='col-md-4' style={{padding:'5px'}} key = {item.id}>
                <div className='card' style={{width : '18rem',padding:'3px'}}>
                <img src={item.url} className='card-img-top'/>
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <div className='card-text'> Billing Amount Rs.{item.prize}</div>
                <p>Table Number : {item.table_number}</p>
              </div>
                </div>
              
              </div>
            ))}
          </div>
        </div>
        :
        <div className='h2'>
          No Order Placed yet 
        </div>
      }
        </center>
    </div>
  )
}

const mapStateToProps = state => ({
  data : state.orderreducer,
})

export default connect(mapStateToProps)(Orders)