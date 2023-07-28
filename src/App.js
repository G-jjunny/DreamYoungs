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
    fetchData(1);
    fetchData(2);
    fetchData(3);
    fetchData(4);
  }, []);

  // axios를 이용하여 api를 4번호출
  const fetchData = async (page) => {
    try {
      const data = await axios.get(`${url}/test?page=${page}`);
      const formatFetchData = {
        id: page,
        date: data.data.data.date,
        info1: data.data.data.info1.slice(7),
        info2: data.data.data.info2.slice(7),
        info3: data.data.data.info3.slice(7),
        info4: data.data.data.info4.slice(7),
        info5: data.data.data.info5,
        info6: data.data.data.info6,
      };
      // 각 페이지에 따른 데이터를 상태에 저장
      setFormattedInfoData((prevData) => {
        return {
          ...prevData,
          [page]: formatFetchData,
        };
      });
      // console.log(`in App.js, Page ${page}`, formatFetchData);
    } catch (error) {
      console.error(error);
    }
  };

  // 모든 페이지의 데이터가 로딩되었을 경우에만 렌더링
  if (!formattedInfoData || Object.keys(formattedInfoData).length < 4) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container">
      {formattedInfoData !== null && (
        <BrowserRouter>
          <SideNav formattedInfoData={formattedInfoData} />
          {/* 받은 formattedInfoData Main컴포는트에 전달 */}
          <Routes>
            <Route
              path="/1"
              element={<Main formattedInfoData={formattedInfoData[1]} />}
            />
            <Route
              path="/2"
              element={<Main formattedInfoData={formattedInfoData[2]} />}
            />
            <Route
              path="/3"
              element={<Main formattedInfoData={formattedInfoData[3]} />}
            />
            <Route
              path="/4"
              element={<Main formattedInfoData={formattedInfoData[4]} />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
