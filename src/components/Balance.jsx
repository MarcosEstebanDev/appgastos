import { useGlobalState } from '../context/globalState.jsx'

function Balance() {

    const { transactions }  = useGlobalState()

    const amounts = transactions.map((transaction) => transaction.amount)
    const total = amounts.reduce((acc,item)=>(acc += item), 0)

  return (
    <div className='flex justify-between item-center my-2'>
    <h3 className='text-slate-200'>Your Balance</h3>
    <h1 className='text-2x1 font-bold'>${total}</h1>
    </div>
  )
}

export default Balance
