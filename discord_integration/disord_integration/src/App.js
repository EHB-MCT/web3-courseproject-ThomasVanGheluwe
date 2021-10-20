import React, {useState} from 'react'
import discordLogo from './assets/logo.png';
import ButtonComponent from './components/ButtonComponent';
import DiscordComponent from './components/DiscordComponent'



export default function App(){

  let [toggleDiscord, setToggleDiscord] = useState(false);

  function setDiscord(){
    toggleDiscord ? setToggleDiscord(false) : setToggleDiscord(true);
  }

    return (
      <div >
        <ButtonComponent state={setDiscord} logo={discordLogo}/>
        {toggleDiscord ? <DiscordComponent/> : !toggleDiscord}
        
    </div>
    )
}



