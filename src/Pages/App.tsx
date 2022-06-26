import React from 'react';
import './App.less';
import { Row } from "antd";
import Cards from '../Layouts/Cards/CardsView';
import { useUsersQuery } from '../services/api';

function App() {
  //const cardName = useAppSelector(state=>state.name.payload);
  const { data, error, isLoading, isFetching, isSuccess } = useUsersQuery();
  return (
    <>
      {isLoading && <h1>Veri Yükleniyor</h1>}
      {
        isFetching && <h1>Veri Alınıyor</h1>
      }
      {isSuccess &&
        <Row>
          {data.map((val, index) => <Cards key={index} name={val["name"]} email={val.email} phone={val.phone} website={val.website} />)}
        </Row>
      }
      {
        error &&
        <h1>Sistem Hatası <span> Lütfen Yeniden Yükleyin</span> </h1>
      }
    </>
  );
}

export default App;
