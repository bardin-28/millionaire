import React, {useState, useEffect} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import Start from "./pages/Start/Start";
import Questions from "./pages/Questions/Questions";
import Final from "./pages/Final/Final";

function App() {
    const [completed, setComplete] = useState(false)
    const [total, setTotal] = useState(0)

    const CompleteQuiz = () =>{
        console.log('completeQuiz')
            setComplete(true)

   }

   const resetQuiz = () =>{
       console.log('resetQuiz')
       setComplete(false)
   }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'
               component={Start}
        />
        <Route exact path='/questions'
               render={()=>{
                   if(completed === false){
                      return <Questions
                          isCompleted={CompleteQuiz}
                          isTotal={setTotal}
                      />
                   }else {
                       return <Redirect to='/final' />
                   }
               }}
        />
        <Route exact path='/final'
               render={()=>{
                  return <Final
                      isTotal={total}
                      reset={resetQuiz}
                  />
               }}
        />
        <Redirect from='*' to='/' />
      </Switch>
    </div>
  );
}

export default App;
