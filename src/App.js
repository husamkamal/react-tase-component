import './App.css';
import Button from "./components/Button/index"
import Input from "./components/searchinput/index"
import Para from './components/pargraph';
import Link from './components/link';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import H1 from './components/headerone';
import H3 from './components/headerthree';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header src={"https://cdn.dribbble.com/users/60166/screenshots/17610068/media/4cbea5351f3f12a22dfb63c04658196d.jpg?compress=1&resize=400x300"} alt={""} className={"header"}/>
          <Button onClick={()=>{
            console.log("husamm")
          }} 
          id={"1"}
          className={"button"}
          children={"clik first button"}
/>  
          <Button onClick={()=>{
            console.log("now")
          }} 
          id={"2"}
          className={"button"}
          children={"click second button"}
/>  
          <Input className={"input"} placeholder={"search"} src1={"https://www.pngitem.com/pimgs/m/109-1099693_ios-mic-mic-icon-png-free-transparent-png.png"} alt1={"microphone"} src={"https://www.seekpng.com/png/detail/12-123945_search-simple-instagram-search-icon-free.png"} />
          <Para children={"Hi Husam Kamal "} />
          <Link href='https://github.com/husamkamal' >MY GITHUB PAGE (click to show)</Link>
          <Form  />
          <Card h5={"lecture 5m left"} h3={"5.Browsing the web"} para={"the complete web  developer in 2022:Zero..."} src={"https://www.youtube.com/watch?v=XMUYoiUlutM"}  ></Card>
          <H1>Header One</H1>
          <H3>Header Three</H3>
      </header>
    </div>
  );
}

export default App;
