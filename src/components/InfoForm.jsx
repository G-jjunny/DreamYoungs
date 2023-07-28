import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const InfoContainer = styled.div`
  padding: 16px 0 16px 0;
  margin-bottom: 16px;
  border-top: 1px solid var(--primary);
  border-bottom: 1px solid var(--secondary);
  .info {
    min-height: 56px;
    display: flex;
    align-items: center;
    /* padding: 11px 0; */
    .info-text {
      width: 140px;
      margin-right: 64px;
    }
  }
`;
const InfoRadio = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  gap: 12px;
  .radio-group {
    display: flex;
    align-items: center;
    width: fit-content;
    p {
      margin-right: 32px;
      margin-left: 8px;
    }
  }
  .selected-text {
    font-size: 12px;
    color: var(--main-red);
  }
`;

// main컴포넌트의 정보가 담긴 form
function InfoForm({ formattedInfoData }) {
  const [infoFormData, setInfoFormData] = useState({});

  // inforForm 초기값 formattedInfoData
  // formattedInfoData가 바뀔때마다 리렌더
  useEffect(() => {
    setInfoFormData(formattedInfoData);
  }, [formattedInfoData]);

  // input 값 변경 관리
  const inputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // input type이 checkbox일 경우에는 배열로 선택된 값을 관리
    if (type === "checkbox") {
      if (checked) {
        // 체크박스가 체크되었을 때, 해당 value 값을 배열에 추가
        setInfoFormData((prevData) => ({
          ...prevData,
          [name]: [...(prevData[name] || []), value],
        }));
      } else {
        // 체크박스가 해제되었을 때, 해당 value 값을 배열에서 제거
        setInfoFormData((prevData) => ({
          ...prevData,
          [name]: (prevData[name] || []).filter((val) => val !== value),
        }));
      }
    } else {
      setInfoFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  // 화면이 렌더시 초기 info6번 값에 따른 checkbox 상태
  useEffect(() => {
    if (infoFormData.info6 && Array.isArray(infoFormData.info6)) {
      const checkboxes = document.querySelectorAll(
        'input[type="checkbox"][name="info6"]'
      );
      checkboxes.forEach((checkbox) => {
        checkbox.checked = infoFormData.info6.includes(checkbox.value);
      });
    }
  }, [infoFormData.info6]);

  // useEffect(() => {
  //   // console.log("in infoform", infoFormData);
  // }, [infoFormData]);

  const handleSubmit = async (e) => {
    // 기본동작 가드
    e.preventDefault();
    try {
      const apiUrl = "https://api-jobtest.json2bot.chat/test";
      const response = await axios.post(apiUrl, infoFormData);
      console.log(response);
      alert("전송에 성공하였습니다.");
    } catch (error) {
      // API 요청 실패 시 오류 처리
      alert("API 요청 오류: 다시 시도해주세요", error.message);
    }
  };

  return (
    <>
      <InfoContainer>
        <div className="info">
          <p className="info-text">정보1</p>
          <p>{infoFormData.info1}</p>
        </div>
        <div className="info">
          <p className="info-text">정보2</p>
          <input
            type="text"
            className="input-info"
            name="info2"
            value={infoFormData.info2 || ""}
            onChange={inputChange}
          />
        </div>
        <div className="info">
          <p className="info-text">정보3</p>
          <p>{infoFormData.info3}</p>
        </div>
        <div className="info">
          <p className="info-text">정보4</p>
          <input
            type="text"
            className="input-info"
            name="info4"
            value={infoFormData.info4 || ""}
            onChange={inputChange}
          />
        </div>
        <div className="info">
          <p className="info-text">날짜</p>
          <input
            type="date"
            name="date"
            className="input-info"
            onChange={inputChange}
            value={infoFormData.date || ""}
          />
        </div>
        <div className="info">
          <p className="info-text">정보5</p>
          {/* 여기 radio group부분 styled-components 따로 분류 (코드가 너무 길어짐) */}
          <InfoRadio>
            <div className="radio-group">
              <input
                type="radio"
                name="info5"
                value="선택1"
                className="radio"
                checked={infoFormData.info5 === "선택1"}
                onChange={inputChange}
              />
              <p>선택1</p>
              <input
                type="radio"
                name="info5"
                value="선택2"
                className="radio"
                checked={infoFormData.info5 === "선택2"}
                onChange={inputChange}
              />
              <p>선택2</p>
              <input
                type="radio"
                name="info5"
                value="선택3"
                className="radio"
                checked={infoFormData.info5 === "선택3"}
                onChange={inputChange}
              />
              <p>선택3</p>
            </div>
            {infoFormData.info5 === "선택3" ? (
              <p className="selected-text">* 선택시 텍스트가 표시됩니다</p>
            ) : null}
          </InfoRadio>
        </div>
        <div className="info">
          <p className="info-text">정보6</p>
          <InfoRadio>
            <div className="radio-group">
              <input
                type="checkbox"
                name="info6"
                value="선택1"
                onChange={inputChange}
              />
              <label>
                <p>선택1</p>
              </label>
              <input
                type="checkbox"
                name="info6"
                value="선택2"
                onChange={inputChange}
              />
              <p>선택2</p>
              <input
                type="checkbox"
                name="info6"
                value="선택3"
                onChange={inputChange}
              />
              <p>선택3</p>
            </div>
          </InfoRadio>
        </div>
      </InfoContainer>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ float: "right" }}
        onClick={handleSubmit}
      >
        저장
      </button>
    </>
  );
}

export default InfoForm;
