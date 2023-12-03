
import './App.css';
import AllExpences from './Components/AllExpences';
import { Card } from './Components/Card';
import { HistoryTransaction } from './Components/HistoryTransaction';
import MoneyFlow from './Components/MoneyFlow';
import MySavings from './Components/MySavings';
import { Navbar } from './Components/Navbar';
import { QuickTransfer } from './Components/QuickTransfer';
import { Section } from './Components/Section';


function App() {
  return (
    <div>
        <Navbar></Navbar>
          <div className='body-part'>
              <div className='card-QuickTransfer'>
                  <Card></Card>
                  <QuickTransfer></QuickTransfer>
              </div>
              
              <div className='common-top-bar'>
                   <div><Section></Section></div>
                   <div className='box-second-two'>
                      <MoneyFlow/>
                      <MySavings/>
                   </div>
                   <div className='box-third-three'>
                        <AllExpences/>
                        <HistoryTransaction></HistoryTransaction>
                   </div>
              </div>
          </div>
    </div>
  );
}

export default App;
