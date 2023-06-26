import Balance from './components/Balance.jsx';
import { ExpenseChart } from './components/ExpenseChart.jsx';
import Header from './components/Header.jsx';
import { IncomeExpenses } from './components/IncomeExpenses';
import TransactionForm from './components/transactions/TransactionForm.jsx';
import TransactionList from './components/transactions/TransactionList';
import  { GlobalProvider } from './context/globalState';

function App() {


  return (
    <GlobalProvider>
    <main className='bg-zinc-950 text-white h-screen flex justify-center item-center'>
    <div className='w-2/5 flex justify-center items-center'>
    <div className='bg-neutral-600 p-10 rounded-md w-full'>
      <Header />
    <div className='flex flex-col md:flex-row justify-between gap-4'>
      <div className='flex-1'>
      <IncomeExpenses />
      <Balance />
      <TransactionForm />
    </div>
    <div className='flex-1 flex flex-col'>
    <ExpenseChart/>
      <TransactionList />
      </div>

      </div>
      </div>
    </div>
</main>
    </GlobalProvider>
  );}

export default App
