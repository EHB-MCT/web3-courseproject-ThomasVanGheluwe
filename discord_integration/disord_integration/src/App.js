import * as React from 'react'
import WidgetBot from '@widgetbot/react-embed'
import ToggleButton from './components/ToggleButton/ToggleButton.js'


const App = () => (
  <WidgetBot
    server="899932052089106433"
    channel="899932052089106436"
    height="800"
    width="400"
    style={{ maxHeight: "50vh", position: "absolute" }} />
)

export default App

