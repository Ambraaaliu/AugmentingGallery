
import './image.css'

function NewFile(props){

    return(
        
            <div class="image"> 
            <img width="400" src={props.src} alt="Blue Flower" />
            <div>{props.legend}</div>
            <div>{props.credits}</div>
        
            </div>

       
       
    )
}

export default NewFile;