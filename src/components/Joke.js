import {useState, useEffect, useRef} from 'react';
import Button from './Button';
const Joke = () => {
    const clickFunc = () =>{
           alert("Hello"); 
    
        }
//generate random color
const getRandomColor =  () =>{
    let x = '';
    while(x.length<6){
        x += (Math.random()).toString(16).substr(-8).substr(-4);
    }
    return '#'+x;
}



        //usestate //usestste useeffect is a hooks
        const [joke, setJoke] = useState('');

        const getJoke =  () =>{
              //fetchapi
              fetch('https://icanhazdadjoke.com/' , {
                method : 'GET',
                headers : {
                  'Accept' : 'application/json'
                }
             }).then((res) => {
                 if(res.ok){
                     return res.json();
                 }
                 else{
                     return Error('Something went wrong');
                 }
 
             }).then((data) => {
                 setJoke(data.joke);
 
             }).catch((err) =>{
                 console.log(err);
 
             })
             currJoke.current.style.backgroundColor = getRandomColor();

        }

        //useEffect
        useEffect(() => {
            getJoke();
        

        
        }, []);
        //useRef
        const currJoke = useRef();
        // console.log(currJoke.current);
 

    return(
        <div ref = {currJoke} className = "card">
            <h2>{joke}</h2>
            <Button text="Generate New Joke" style={{backgroundColor : 'black' }} clickBtn={getJoke} />
            

        </div>
    )
}


export default Joke