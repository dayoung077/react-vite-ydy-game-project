import React, { useState } from "react";
import LottoBall from "./../lotto/LottoBall";
import Button from "./../../../node_modules/@restart/ui/esm/Button";

const LottoPage = () => {
  const setNumbers = () => {
    const lottoSet = new Set();

    while (lottoSet.size < 6) {
      let num = Math.floor(Math.random() * 45) + 1;
      lottoSet.add(num);
    }

    console.log(lottoSet);
    return Array.from(lottoSet);
  };

  const [nums, setNums] = useState(setNumbers);

  const onClick = () => {
    setNums(setNumbers());
  };

  return (
    <div className="container">
      <div onClick={onClick} className="row mt-sm-5">
        {nums && nums.map((num) => <LottoBall lottoNum={num}></LottoBall>)}
      </div>
      <button type="button" onClick={onClick}>
        한번 더
      </button>
    </div>
  );
};

export default LottoPage;
