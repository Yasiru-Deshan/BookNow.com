import React from 'react';
import { CartContainer,TableWrapper } from './../../components/InfoSection/InfoElements';
import { TableCard } from './../../components/Advertisements/Advertisements-styles';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Theatre({lightBg}) {

    return( 

        <div>
        <div style={{
   /* Chrome 10-25, Safari 5.1-6 */
                          background: 'linear-gradient(to right, #240b36, #c31432)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }}>

            

              <CartContainer >

                

                    <TableWrapper >
                    <h1 style={{marginTop:'100px',
                                color: 'white',
                                display: 'flex',  justifyContent:'center', alignItems:'center',
                    }}><span>Liberty Cinema - Kollupitiya </span>&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-camera-reels" viewBox="0 0 16 16">
  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></h1>
                      <TableCard style={{margin: '50px 50px 50px 50px'}}>
                       <table className='table'>
                    
                       <thead>
                       
                         <tr>
                          <th>Time</th>
                          <th>Movie</th>
                          <th></th>
                          <th></th>
                                                    
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>11.00 A.M.</td>
                          <td>The BatMan</td>
                          <td><Link to={`/payment`}><Button>Update</Button></Link></td>
                          <td><Link to={`/payment`}><Button variant="danger">Delete</Button></Link></td>                          
                        </tr>
                          <tr>
                          <td>1.15 P.M.</td>
                          <td>The BatMan</td>
                          <td><Link to={`/payment`}><Button>Update</Button></Link></td>
                          <td><Link to={`/payment`}><Button variant="danger">Delete</Button></Link></td>                          
                        </tr>
                         <tr>
                          <td>4.15 P.M.</td>
                          <td>The BatMan</td>
                          <td><Link to={`/payment`}><Button>Update</Button></Link></td>
                          <td><Link to={`/payment`}><Button variant="danger">Delete</Button></Link></td>                          
                        </tr>
                        
                       </tbody>
                     </table>
                    </TableCard>
                   </TableWrapper> 
                  </CartContainer> 
        </div>
</div>
    )

}

export default Theatre;