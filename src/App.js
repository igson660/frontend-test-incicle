import * as allData from './data'

export const App = () => {
  console.log(allData.data.data, allData.management.data[0].boards);
  return (
    <div className="App">
      hello
    </div>
  );
}
