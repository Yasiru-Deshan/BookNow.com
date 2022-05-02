import React,{useState} from 'react';
import { CartContainer,TableWrapper } from './../../components/InfoSection/InfoElements';
import './../user/favorites/favorites.css';

function NewMovie() {

      let [search, setSearch] = useState("");

    return( 

        <div>
        <div style={{
   /* Chrome 10-25, Safari 5.1-6 */
                          background: 'linear-gradient(to right, #240b36, #c31432)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }}>


              <CartContainer  >

                    <TableWrapper>

                    
               <h1 style={{     marginTop:'100px',
                                color: 'white',
                                display: 'flex',  justifyContent:'center', alignItems:'center',
                    }}><span>New Movie </span>&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-camera-reels" viewBox="0 0 16 16">
  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></h1>

<form>
<table>
  <tr>
    <td>


   <div className="form-group">
    <label for="name">Movie Name</label>
    <input className="form-control" type="text" placeholder="Enter Movie Name"/>
  </div>

    <label for="genre">Select Genre</label>
    <select className="form-control">
      <option>Action</option>
      <option>Thriller</option>
      <option>Comedy</option>
      <option>Sci-fi</option>
      <option>Horror</option>
      <option>Romance</option>
    </select>

  <div className="form-group">
    <label for="description">Description</label>
    <input type="" className="form-control" id="description" placeholder="Enter Description"/>
  </div>
 <div className="form-group">
    <label for="description">Banner</label>
    <input type="" className="form-control" id="description" placeholder="Enter banner URL"/>
  </div>


 

 </td>

    <td style={{padding:'50px'}}>

    <label for="year">Select Year</label>
    <select className="form-control">
      <option>2000</option>
      <option>2001</option>
      <option>2002</option>
      <option>2003</option>
      <option>2004</option>
      <option>2005</option>
      <option>2006</option>
      <option>2007</option>
      <option>2008</option>
      <option>2009</option>
      <option>2010</option>
      <option>2011</option>
      <option>2012</option>
      <option>2013</option>
      <option>2014</option>
      <option>2015</option>
      <option>2016</option>
      <option>2017</option>
      <option>2018</option>
      <option>2019</option>
      <option>2020</option>
      <option>2021</option>
    </select>
       

         <div className="form-group">
        <label for="description">Cast 1</label>
        <input type="" className="form-control" id="description" placeholder="Cast 1"/>
        </div>

         <div className="form-group">
        <label for="description">Cast 2</label>
        <input type="" className="form-control" id="description" placeholder="Cast 2"/>
        </div>

         <div className="form-group">
        <label for="description">Cast 3</label>
        <input type="" className="form-control" id="description" placeholder="Cast 3"/>
        </div>

    </td>
    <td>
        <div className="form-group">
        <label for="description">Director</label>
        <input type="" className="form-control" id="description" placeholder="Enter director"/>
        </div>

        <div className="form-group">
        <label for="description">Trailer URL</label>
        <input type="" className="form-control" id="description" placeholder="Trailer URI"/>
        </div>

        <button type="submit" className="btn btn-primary" style={{width:'250px', height:'130px'}}>Add</button>
    </td>
</tr>
</table>
</form>
                   </TableWrapper> 
                  </CartContainer> 
        </div>
</div>
    )

}

export default NewMovie;