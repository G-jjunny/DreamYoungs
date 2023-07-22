import { useEffect, useState } from "react";
import "./App.scss";
import Main from "./components/Main";
import SideNav from "./components/SideNav";
import axios from "axios";

function App() {
  const [formattedInfoData, setFormattedInfoData] = useState({});

  // base Url
  const url = "https://api-jobtest.json2bot.chat";

  useEffect(() => {
    fetchData();
  }, []);

  // axios를 이용하여 api를 호출
  const fetchData = async () => {
    try {
      const data = await axios.get(`${url}/test`);
      const formatFetchData = {
        date: data.data.data.date,
        info1: data.data.data.info1.slice(7),
        info2: data.data.data.info2.slice(7),
        info3: data.data.data.info3.slice(7),
        info4: data.data.data.info4.slice(7),
        info5: data.data.data.info5,
        info6: data.data.data.info6,
      };
      setFormattedInfoData(formatFetchData);
      console.log(formattedInfoData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {}, []);

  return (
    <div className="main-container">
      <SideNav />
      {/* 받은 formattedInfoData Main컴포는트에 전달 */}
      <Main formattedInfoData={formattedInfoData} />
    </div>
  );
}

export default App;
