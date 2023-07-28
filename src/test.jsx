import { useEffect, useState } from "react";
import "./App.scss";
import Main from "./components/Main";
import SideNav from "./components/SideNav";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [formattedInfoData, setFormattedInfoData] = useState(null);

  // base Url
  const url = "https://api-jobtest.json2bot.chat";

  useEffect(() => {
    fetchData();
  }, []);

  // axios를 이용하여 api를 4번 호출
  const fetchData = async () => {
    try {
      const data = await axios.get(`${url}/test`);
      const formatFetchData = {
        id: 1,
        date: data.data.data.date,
        info1: data.data.data.info1.slice(7),
        info2: data.data.data.info2.slice(7),
        info3: data.data.data.info3.slice(7),
        info4: data.data.data.info4.slice(7),
        info5: data.data.data.info5,
        info6: data.data.data.info6,
      };
      setFormattedInfoData(formatFetchData);
      console.log("in App.js", formattedInfoData);
    } catch (error) {
      console.error(error);
    }
    return;
  };

  if (formattedInfoData === null) {
    return <div>Loading...</div>; // 데이터가 로딩 중일 경우 로딩 메시지를 보여줌
  }

  return (
    <div className="main-container">
      <BrowserRouter>
        <SideNav id={formattedInfoData.id} />
        {/* 받은 formattedInfoData Main컴포는트에 전달 */}
        <Routes>
          <Route
            path="/:id"
            element={<Main formattedInfoData={formattedInfoData} url={url} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
