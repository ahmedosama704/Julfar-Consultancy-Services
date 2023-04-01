import React, { useEffect, useState } from 'react';
import "./styles/globals.scss"
import Filter from './components/filter/filter';
import axios from "axios";
import User from './components/user/user';
function App() {
  const [users, setUsers] = useState([]);
  const [quantity, setQuantity] = useState<number>(3);
  const [selectedGender, setSelectedGender] = useState<string>('both');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetching data
  const getData = () => {
    const gender = selectedGender === "both" ? "" : selectedGender;
    axios.get(`https://fakerapi.it/api/v1/persons?_quantity=${quantity}&_gender=${gender}`).then((res) => {
      setUsers(res.data.data);
      setIsLoading(false);
    }).catch((err) => {
      console.log("err", err);
      setIsLoading(false);
    })
  }

  // Get data first time and when quantity or gender change
  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [quantity, selectedGender])

  return (
    <div className="App">
      {isLoading && <div className="wbeLoader"><div className="loader" /></div>}
      <header>
        <div>
          <Filter selectedGender={selectedGender} setSelectedGender={setSelectedGender} setQuantity={setQuantity} />
        </div>
        <div>
          <span> Total Results</span>
          <span> {quantity} </span>
        </div>
      </header>

      <section className='userGrid'>
        {users && users.map((item: any) =>
          <User data={item} key={item.id} />
        )}
      </section>
      <button className='loadMore' onClick={() => setQuantity(quantity + 3)}> Load More</button>
    </div>
  );
}

export default App;
