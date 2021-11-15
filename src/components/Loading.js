import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const Loading=()=>{
      return(
            <div className='loader'>
            <Loader
        type="ThreeDots"
        color="rgba(0, 0, 0, 1)"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
            </div>
      )
}

export default Loading;
