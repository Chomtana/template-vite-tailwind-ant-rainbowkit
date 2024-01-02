import { useState } from 'react'
import './App.css'
import { Button, Card } from 'antd'
import { ConnectButton } from '@rainbow-me/rainbowkit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card>
        <div className='text-red mb-3'>
          This is tailwind + antd ({count})
        </div>

        <div>
          <Button type='primary' onClick={() => setCount(count + 1)}>Increase</Button>
        </div>

        <div>
          <ConnectButton />
        </div>
      </Card>
    </>
  )
}

export default App
