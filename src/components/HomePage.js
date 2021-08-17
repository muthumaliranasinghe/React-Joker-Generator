import Header from './Header';
import Joke from './Joke';
import Button from './Button';
const HomePage = () => {
    return(
       <div> 
           <Header title="Welcome to users" />
           <Joke/>
           <Button path = "/about" text="About Us" style={{backgroundColor : 'red'}}/>

       </div>
    )
}


export default HomePage