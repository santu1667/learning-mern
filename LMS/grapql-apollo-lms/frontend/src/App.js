import {useQuery,gql} from'@apollo/client';

const LIST_COUNTRIES = gql`
{
  countries(limit:10){
    name
    code
  }
}`
function App() {
  const {data,loading,error}= useQuery(LIST_COUNTRIES);

  if(loading){    return "loading....";  }
  if(error){  return <p>{error.message}</p>}
  return (
    <div className="App">
      {data.countries.map((country) => (
        <li key={Math.random()}>{country.name}</li>
      ))}
    </div>
  );
}

export default App;
