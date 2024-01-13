import CardContext from "./companents/card";
import { data } from "./data/data";

const App = () => {
  return <div className="container">
    {
      data.map(item => (
        <CardContext key={item.id} item={item} />
      ))
    }
  </div>
}

export default App;