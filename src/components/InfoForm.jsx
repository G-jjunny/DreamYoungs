import React, { useEffect, useState } from "react";
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
    .info-radio {
      display: flex;
      flex-direction: column;
      margin: 16px 0;
      gap: 12px;
      .radio-group {
        display: flex;
        align-items: center;
        p {
          margin-right: 32px;
          margin-left: 8px;
        }
      }
      .selected-text {
        font-size: 12px;
        color: #f03738;
      }
    }
  }
`;

// main컴포넌트의 정보가 담긴 form
function InfoForm({ formattedInfoData }) {
  // info5번 상태관리
  const [checkedInfo5, setCheckedInfo5] = useState(formattedInfoData.info5);
  // date 상태관리
  const [date, setDate] = useState(formattedInfoData.date);

  // 변경되는 date value
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // 변경되는 info5번 value
  const handleRadioChange = (e) => {
    setCheckedInfo5(e.target.value);
  };

  const handleSubmit = (e) => {
    // 여기서 선택된 값(checkedInfo5)을 서버에 전송하거나 다른 작업을 수행할 수 있습니다.
    e.preventDefault(); // 기본 동작 가드
  };
  useEffect(() => {
    setCheckedInfo5(formattedInfoData.info5);
    setDate(formattedInfoData.date);
  }, [formattedInfoData]);
  return (
    <>
      <InfoContainer>
        <div className="info">
          <p className="info-text">정보1</p>
          <p>{formattedInfoData.info1}</p>
        </div>
        <div className="info">
          <p className="info-text">정보2</p>
          <input
            type="text"
            className="input-info"
            placeholder={`${formattedInfoData.info2}`}
          />
        </div>
        <div className="info">
          <p className="info-text">정보3</p>
          <p>{formattedInfoData.info3}</p>
        </div>
        <div className="info">
          <p className="info-text">정보4</p>
          <input
            type="text"
            className="input-info"
            placeholder={`${formattedInfoData.info4}`}
          />
        </div>
        <div className="info">
          <p className="info-text">날짜</p>
          <input
            type="date"
            className="input-info"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="info">
          <p className="info-text">정보5</p>
          <div className="info-radio">
            <div className="radio-group">
              <input
                type="radio"
                name="info5"
                value="선택1"
                checked={checkedInfo5 === "선택1"}
                onChange={handleRadioChange}
              />
              <p>선택1</p>
              <input
                type="radio"
                name="info5"
                value="선택2"
                checked={checkedInfo5 === "선택2"}
                onChange={handleRadioChange}
              />
              <p>선택2</p>
              <input
                type="radio"
                name="info5"
                value="선택3"
                checked={checkedInfo5 === "선택3"}
                onChange={handleRadioChange}
              />
              <p>선택3</p>
            </div>
            {checkedInfo5 === "선택3" ? (
              <p className="selected-text">* 선택시 텍스트가 표시됩니다</p>
            ) : null}
            {/* <p className="selected-text">* {`${checkedInfo5}`}</p> */}
          </div>
        </div>
        <div className="info">
          <p className="info-text">정보6</p>
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
