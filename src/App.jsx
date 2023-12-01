import { useEffect, useState } from "react"
import Textarea from "./components/Textarea"
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  useEffect(() => { document.title = 'Speech To Text' })

  const [Text, setText] = useState("-");

  return (
    <>
      <main className="bg-gradient-to-r from-violet-500 to-cyan-500 background-animate flex items-center justify-center h-screen w-screen px-2 py-24 md:px-8">
          <Card>
              <Textarea text={Text} />
              <Button setText={setText} />
          </Card>
      </main>
    </>
  )
}

export default App
