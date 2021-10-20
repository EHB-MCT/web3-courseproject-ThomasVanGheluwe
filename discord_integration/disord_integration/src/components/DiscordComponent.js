import React from "react";
import WidgetBot from '@widgetbot/react-embed'
import "./DiscordComponent.scss";

export default function DiscordComponent(){
    return (
    <div className="discordComponent">
        <WidgetBot
    server="899932052089106433"
    channel="899932052089106436"
    height="800"
    width="400"
    style={{ maxHeight: "50vh"}} 
    />
    </div>
    )
}