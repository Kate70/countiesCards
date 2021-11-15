//import styles from './MainTwo.module.css'
import { useHistory } from 'react-router';

const MainTwo=()=>{
    const history = useHistory()
      return(
            <><button
            onClick={()=>history.push('/countries')}>555</button></>
      )
}

export default MainTwo;
