import React, { useEffect, useRef, useState} from 'react';
import './../movie/movie.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Aos from 'aos';
import "aos/dist/aos.css";
import Comments from '../../../components/CommentSection/comments';
import {Link} from 'react-router-dom';
import axios from 'axios'; 
import { useParams} from "react-router";
import DropdownMenu from '../../../pages/user/favorites/dropdown';
import { Button, Form } from 'react-bootstrap';
import { TableCard } from '../../../components/Advertisements/Advertisements-styles';
import { ServicesCard, ServicesIcon, ServicesH2, Servicesp } from '../../../components/Advertisements/Advertisements-styles';
import { InfoContainer,
         TableWrapper,    
} from './../../../components/InfoSection/InfoElements';
import Modal from 'react-modal';
import Icon2 from '../../../images/svg-2.svg';




const Booking = ({lightBg,lightText}) =>{
  
   const name = useRef(); 
   const desc = useRef();
   const id = useParams().id;
   const [title, setTitle] = useState("");
   const [year, setYear] = useState("");
   const [genre,setGenre] = useState("");
   const [description, setDesc] = useState("");
   const [trailer, setTrailer] = useState("");
   const [video, setVideo] = useState("");
   const [image,setImage] = useState("");
   let [plist, setPlaylist] = useState([]);
   const [like,setlike] = useState();
   const [isliked,setisLiked] = useState(false);
   const [mdal,setModal] = useState(false);

       useEffect(()=>{
        Aos.init({duration: 2000 });
    },[])
   
    useEffect(() => {
        async function fetchData() {
            const response = (await axios.get(`http://localhost:8070/api/movies/find/${id}`)).data;
            setTitle(response.title);
            setYear(response.year);
            setGenre(response.genre);
            setDesc(response.desc);
            setTrailer(response.trailer);
            setVideo(response.video);
            setImage(response.img);
            setlike(response.likes.length)
        
        }
        fetchData();
    }, [id])

 
 
    const likehandler=()=>{

        try{
            axios.put(`http://localhost:8070/api/movies/${id}/like`)
        }catch(err){}

        setlike(isliked ? like-1 : like+1);
        setisLiked(!isliked);
    }
  


    
   const submitFavsHandler = async (e)=>{
       e.preventDefault()
       let newF;

       const newFavorite = {
           
           movieId: id,
           title: title,
           img: image,
           year: year,
           genre: genre
           //movieId:'6145eb2e19467e39980d27e7',
        
       }

       try{
           newF = await axios.post("http://localhost:8070/api/favorites/addto",newFavorite)
           if(newF){
               window.alert("Movie has been added to favorites")
           }
       }catch(err){
           console.log(err)
       }
   }



   const submitHandler = async (e)=>{
       e.preventDefault()
       let newc;

       const newComment = {
           userId: '611b74dd16f8353848675308',
           uname:'Liam Livingstone',
           movieId: id,
           //movieId:'6145eb2e19467e39980d27e7',
           desc: desc.current.value,
       }

       try{
           newc = await axios.post("http://localhost:8070/api/comments",newComment)
           if(newc){
               window.alert("Comment has been posted")
           }
       }catch(err){
           console.log(err)
       }
   }



    const [allComments,setAllComments] = useState([]);

    useEffect(()=>{

        const getComments = () =>{
        axios.get(`http://localhost:8070/api/comments/movie/${id}`).then((res)=>{
            setAllComments(res.data);
        })
    }
       getComments();
    },[])


    const CommentList = ()=>{
        return allComments.map((comment)=>{

            return(
                <Comments
                   key={comment.id}
                   id={comment._id}
                   userid = {comment.userId}
                   author={comment.uname}
                   desc={comment.desc}/>

              
            )
            
        })
        
    }
    


    useEffect(()=>{

      const getPlayLists = () =>{
        axios.get('http://localhost:8070/api/playlists').then((res)=>{
          setPlaylist(res.data);
        })
      }

      getPlayLists();
    },[])

    const PlaylistAll = ()=>{
      return plist.map((pName)=>{

        return(
          <DropdownMenu
               key = {pName.id}
               id  =   {pName._id}
               name = {pName.name}
               desc = {pName.desc} 
               title = {title}
               year = {year}
               img = {image}
               movieId ={id}  
               genre = {genre}
               />
        )
      })
    }


    return (


        <div>
         <Modal
         isOpen={mdal} 
         onRequestClose={()=> setModal(false)}
         style={{
           overlay: {
             backgroundColor: 'transparent',
             marginTop: '100px',
             width: '40%',
             height: '485px',
             marginLeft: '30%', 
           
           },

           content: {
             borderRadius: '20px',
             color: 'black',
             background: 'white',  
             boxShadow:'0 1px 3px rgba(0,0,0,0.2)',
           }
         }}>
         <center>
          <ServicesH2>How many Tickets?</ServicesH2>
         </center> 
          <Form onSubmit={submitHandler}>
              <center>
                    <ServicesIcon src={Icon2} />
              </center>     

              <button type="button" className="btn btn-outline-primary">1</button>
              <button type="button" className="btn btn-outline-primary">2</button>
              <button type="button" className="btn btn-outline-primary">3</button>
              <button type="button" className="btn btn-outline-primary">4</button>
              <button type="button" className="btn btn-outline-primary">5</button>
              

            <Button style={{ width: '100%'}} variant="primary" type="submit" onClick={()=>setModal(false)}>
          
             Proceed
            </Button>
           
          </Form>
        </Modal>

            <div className="MovieContainer">
                <div className="MovieWrapper">
                     <div className="MovieRow">
                     <div className="Column1">
                             <div className="ImgWrap">

                              <img data-aos="fade-right" className="Img" src={image} alt=''/>
                            
                            
                             </div>
                          
                          
                          </div>
                          <div className="Column2">
                             <div className="TextWrapper">

                                 <h1 className="Heading">
                                  {title}

                                 </h1>

                                 <p className="Year">{year}</p>
                                 <p className="Genre">
                                    {genre}
                                 </p>

                               

                                 <div className="icons">
                                    <FavoriteIcon className="fi" onClick={likehandler}/>
                                    <p className="likesCount">{like}</p>
                                  
                                 </div>
                                    
  

                                 <Link to={`/watch/${id}`}>
                                 <Button>View Trailer</Button></Link>
                                 <div>
                              
                          {/*     <img className="profileuserimg"
                                  src={img2}
    alt=''/>*/}
                         </div>
                               
                             </div>
                            
                          
                          
                          </div>

                          <div className="Column3">
                          <p className="Syno">
                                     Synopsis
                                 </p>
                          <p className="Description">
                            
                                  {description}
                          </p>
                        

                          </div>

                         
                      </div>
                   </div>
                </div>


                <InfoContainer lightBg = {lightBg} >
                    <TableWrapper >
                      <TableCard style={{margin: '50px 50px 50px 0px'}}>
                       <table className='table'>
                    
                       <tbody>
                       
                         <tr>
                          <td>Concord Cinema: Dehiwala</td>
                          <td><button type="button" className="btn btn-outline-primary" onClick ={()=> setModal(true)}>7.30 A.M.</button></td>
                          <td><button type="button" className="btn btn-outline-primary" onClick ={()=> setModal(true)}>10.30 A.M.</button></td>
                          <td><button type="button" className="btn btn-outline-primary" onClick ={()=> setModal(true)}>1.15 P.M.</button></td>
                          <td><button type="button" className="btn btn-outline-primary" onClick ={()=> setModal(true)}>4.15 P.M.</button></td>                          
                        </tr>
                        <tr>
                          <td>Concord Cinema: Dehiwala</td>
                          <td><button type="button" className="btn btn-outline-primary">7.30 A.M.</button></td>
                          <td><button type="button" className="btn btn-outline-primary">10.30 A.M.</button></td>
                          <td><button type="button" className="btn btn-outline-primary">1.15 P.M.</button></td>
                          <td><button type="button" className="btn btn-outline-primary">4.15 P.M.</button></td>                          
                        </tr>
                        <tr>
                          <td>Concord Cinema: Dehiwala</td>
                          <td><button type="button" className="btn btn-outline-primary">7.30 A.M.</button></td>
                          <td><button type="button" className="btn btn-outline-primary">10.30 A.M.</button></td>
                          <td><button type="button" className="btn btn-outline-primary">1.15 P.M.</button></td>
                          <td><button type="button" className="btn btn-outline-primary">4.15 P.M.</button></td>                          
                        </tr>
                        
                       </tbody>
                     </table>
                    </TableCard>
                   </TableWrapper> 
                  </InfoContainer> 

        </div>
    )
}

export default Booking
