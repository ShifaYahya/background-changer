import { useState } from "react"

function App() {
 const [color, setColor] = useState("black")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}> {/*inline css in react sytax , since we already ave 2 curly braces no need to write color variable in another one*/}
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
      <div className="flex flex-wrap justify-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg" >
        <button onClick={()=> setColor("maroon")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "maroon"}}>Maroon</button>
        <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "green"}}>Green</button>
        <button onClick={()=> setColor("black")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "black"}}>Black</button>
        <button onClick={()=> setColor("#AA336A")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "#AA336A"}}>Pink</button>
        <button onClick={()=> setColor("#2972B6")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "#2972B6"}}>Blue</button>
        <button onClick={()=> setColor("#FF7F50")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "#FF7F50"}}>Coral</button>
        <button onClick={()=> setColor("#DDA0DD")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "#DDA0DD"}}>Plum</button>
        <button onClick={()=> setColor("white")} className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "white"}}>White</button>

      </div>
     </div>
    </div>
  )
}

export default App
