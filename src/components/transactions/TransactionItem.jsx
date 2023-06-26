import React from 'react'
import { useGlobalState } from '../../context/globalState'
import {  BiTrash } from 'react-icons/bi'

export const TransactionItem = ({ transaction: { id, description, amount } }) => {
    const { deleteTransaction } = useGlobalState()
    const sign = amount < 0 ? "-" : "+";

    return (
    <li key={id} className={`bg-zinc-600 text-white px-3 py-1 rounded-lg mb-3 w-full flex list-disc list-inside justify-between items-center`+`${amount < 0 ? "bg-red-700" : "bg-green-700"}`}>
                    {description}
                    <div>
                    <span>{sign}${Math.abs(amount)}</span>
                    <button className='font-bold text-red rounded-lg ml-2' onClick={() => {deleteTransaction(id)}}>Delete
                    <BiTrash/>
                    </button>
                    </div>
                </li>
  )
}

export default TransactionItem