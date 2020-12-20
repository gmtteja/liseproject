import  {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousell(props){

    const [photos , setPhotos] = useState(
        [
            {
            id:"121",
            photourl:"https://www.liseinfotech.com/wp-content/uploads/2020/05/logo-new-1.png",
            isReview:"false",
            caption:"a",
            picturename:"Name of the Employer",
          

            },
            {
            id:"122",
            photourl:"https://www.thoughtco.com/thmb/mik7Z00SAYN786BQbieXWOzZmc8=/2121x1414/filters:fill(auto,1)/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg",
            isReview:"false",
            caption:"lotus",
            picturename:"flower",
      
            },
            {
            id:"123",
            photourl:"https://www.liseinfotech.com/wp-content/uploads/2020/05/logo-new-1.png",
            isReview:"false",
            caption:"b",
            picturename:"Name of the Employer",
    
            },
            {
            id:"124",
            photourl:"https://www.liseinfotech.com/wp-content/uploads/2020/05/logo-new-1.png",
            isReview:"false",
            caption:"c",
            picturename:"Name of the Employer",
           
            },
            {
                id:"125",
                photourl:"https://www.thoughtco.com/thmb/mik7Z00SAYN786BQbieXWOzZmc8=/2121x1414/filters:fill(auto,1)/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg",
                isReview:"false",
                caption:"d",
                picturename:"flower",
          
            },
     
            ]
    );


    return (
<Carousel style={{backgroundColor:'black',height:"1000px"}}>
{
          photos.map((photo)=>{
              return (
                <Carousel.Item interval={9999999} align="center">
                 <img 
                  style={{height:'50vh',padding:"50px" , margin:"200px"}}
                  className="d-block w-70"
                  src={photo.photourl}
                  alt="First slide"
                /> 
                 <Carousel.Caption>
                  <h3 style={{fontFamily:"sans-serif"}}>{photo.caption}</h3>
              <p style={{fontFamily:"sans-serif"}}>{photo.picturename}</p>
            
                </Carousel.Caption> 
              </Carousel.Item>
              )
          })
      }
</Carousel>
    )
    }

export default Carousell;
        



                                                                    