import { useState } from "react"
import  {useGlobalState}  from "../../context/globalState"

const TransactionForm = () => {
  const { addTransaction } = useGlobalState()
  const [description, setDescription] = useState()
  const [amount , setAmount] = useState()

  const onSubmit= (e) => {
    e.preventDefault()
    addTransaction({
        id:window.crypto.randomUUID(),
        description,
        amount: +amount
      })
    console.log(description, amount)
  }
  return (
    <div>
   <form onSubmit={onSubmit}>
    <input 
    type="text"
    placeholder="Enter a Description"
    onChange={(e)=> setDescription(e.target.value)}
    className="bg-zinc-900 text-white px-3 py-2 rounded-lg block mb-2 w-full"></input>

    <input
    type="number"
    step={1}
    placeholder="00.00"
    onChange={(e)=> setAmount(e.target.value)}
    className="bg-zinc-900 text-white px-3 py-2 rounded-lg block mb-2 w-full"></input>
    <button className="bg-teal-700 text-white px-3 py-2 rounded-lg block mb-2 w-full disabled:opacity-50"
    disabled={!description || !amount}>Add Transaction</button>
   </form>
    </div>
  )
}

export default TransactionForm
