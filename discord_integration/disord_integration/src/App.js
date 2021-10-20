import React, {useState} from 'react'
import discordLogo from './assets/logo.png';
import ButtonComponent from './components/ButtonComponent';
import DiscordComponent from './components/DiscordComponent'



export default function App(){

  let [openDiscord, setOpenDiscord] = useState(false);

  function setDiscord(){
    openDiscord ? setOpenDiscord(false) : setOpenDiscord(true);
  }

    return (
      <div >
        <ButtonComponent state={setDiscord} logo={discordLogo}/>
        {openDiscord ? <DiscordComponent/> : !openDiscord}
        
    </div>
    )
}



