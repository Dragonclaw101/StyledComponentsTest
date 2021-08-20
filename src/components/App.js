import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import PlusPage from './PlusPage'
import NotFound from './NotFound'
import Components from './Components'

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/dynamic" component={PlusPage} />
//           <Route exact path="/components" component={Components} />
//           <Route component={NotFound} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

/**
 * [MF]
 * Since we're dealing with a pure functional React component, this could be rewritten as the following
 * instead of creating a variable.
 * Please read both of these articles...they're very helpful in understanding the difference between a function declaration and function expression.
 * https://dev.to/ugglr/react-functional-components-const-vs-function-2kj9
 * https://blog.logrocket.com/react-pure-components-functional/
 */

//Changed the App declaration to a function to match above advice.
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={PlusPage} />
          <Route exact path="/components" component={Components} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
