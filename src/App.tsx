import React, { useState } from "react";
import styled from "styled-components";
// import InputArea from "./components/InputArea";
import { MAX_NAME_LEN } from "./Constants";
import { MATCHING_PATTERN } from "./Constants";
import { JANNYS_NAME_LIST } from "./Constants";

const Div = styled.div`
  display: flex;
`;

type CustomProps = {
  bgColor?: string;
  fontColor?: string;
};

const Input = styled.input<CustomProps>`
  display: block;
  width: 40px;
  height: 40px;
  font-size: 35px;
  padding: 5px;
  margin: 5px;
  text-align: center;
  background-color: ${(props) => props?.bgColor};
  color: ${(props) => props?.fontColor};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  font-size: 20px;
  margin: 0px 0px 0px 30px;
`;

const App: React.VFC = () => {
  const [name, setName] = useState<string[]>(Array(MAX_NAME_LEN).fill(""));
  const [name1, setName1] = useState<string[]>(Array(MAX_NAME_LEN).fill(""));
  const [name2, setName2] = useState<string[]>(Array(MAX_NAME_LEN).fill(""));
  const [name3, setName3] = useState<string[]>(Array(MAX_NAME_LEN).fill(""));
  const [name4, setName4] = useState<string[]>(Array(MAX_NAME_LEN).fill(""));

  const [wordJudges, setWordJudges] = useState<number[]>(
    Array(MAX_NAME_LEN).fill(0)
  );
  const [wordJudges1, setWordJudges1] = useState<number[]>(
    Array(MAX_NAME_LEN).fill(0)
  );
  const [wordJudges2, setWordJudges2] = useState<number[]>(
    Array(MAX_NAME_LEN).fill(0)
  );
  const [wordJudges3, setWordJudges3] = useState<number[]>(
    Array(MAX_NAME_LEN).fill(0)
  );
  const [wordJudges4, setWordJudges4] = useState<number[]>(
    Array(MAX_NAME_LEN).fill(0)
  );

  const [isJudge, setIsJudge] = useState<boolean>(false);
  const [isJudge1, setIsJudge1] = useState<boolean>(false);
  const [isJudge2, setIsJudge2] = useState<boolean>(false);
  const [isJudge3, setIsJudge3] = useState<boolean>(false);
  const [isJudge4, setIsJudge4] = useState<boolean>(false);

  const [answerName, setAnswerName] = useState<string[]>(
    Array(MAX_NAME_LEN).fill("")
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ): void => {
    const newName = name.slice();
    newName[idx] = e.target.value;
    setName(newName);
  };

  const handleChange1 = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ): void => {
    const newName = name1.slice();
    newName[idx] = e.target.value;
    setName1(newName);
  };

  const handleChange2 = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ): void => {
    const newName = name2.slice();
    newName[idx] = e.target.value;
    setName2(newName);
  };

  const handleChange3 = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ): void => {
    const newName = name3.slice();
    newName[idx] = e.target.value;
    setName3(newName);
  };

  const handleChange4 = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ): void => {
    const newName = name4.slice();
    newName[idx] = e.target.value;
    setName4(newName);
  };

  /**
   * ワード判定処理
   */
  const handleClick = (): void => {
    const newWordJudges = name.map((n, index) => {
      const indexs: number[] = answerName.map((word, idx) => {
        // 一致したワードの添字を返す
        if (n === word && n !== "") {
          return idx;
        } else {
          return -1;
        }
      });

      if (indexs.includes(index)) {
        return MATCHING_PATTERN.perfectMatching;
      } else if (Math.max(...indexs) !== -1) {
        // 要素の最大値が-1じゃない＝どこかでワードが一致している
        return MATCHING_PATTERN.partMatching;
      } else {
        return MATCHING_PATTERN.notMatching;
      }
    });

    setIsJudge(true);
    setWordJudges(newWordJudges);
  };

  const handleClick1 = (): void => {
    const newWordJudges = name1.map((n, index) => {
      const indexs: number[] = answerName.map((word, idx) => {
        // 一致したワードの添字を返す
        if (n === word && n !== "") {
          return idx;
        } else {
          return -1;
        }
      });

      if (indexs.includes(index)) {
        return MATCHING_PATTERN.perfectMatching;
      } else if (Math.max(...indexs) !== -1) {
        // 要素の最大値が-1じゃない＝どこかでワードが一致している
        return MATCHING_PATTERN.partMatching;
      } else {
        return MATCHING_PATTERN.notMatching;
      }
    });

    setIsJudge1(true);
    setWordJudges1(newWordJudges);
  };

  const handleClick2 = (): void => {
    const newWordJudges = name2.map((n, index) => {
      const indexs: number[] = answerName.map((word, idx) => {
        // 一致したワードの添字を返す
        if (n === word && n !== "") {
          return idx;
        } else {
          return -1;
        }
      });

      if (indexs.includes(index)) {
        return MATCHING_PATTERN.perfectMatching;
      } else if (Math.max(...indexs) !== -1) {
        // 要素の最大値が-1じゃない＝どこかでワードが一致している
        return MATCHING_PATTERN.partMatching;
      } else {
        return MATCHING_PATTERN.notMatching;
      }
    });

    setIsJudge2(true);
    setWordJudges2(newWordJudges);
  };

  const handleClick3 = (): void => {
    const newWordJudges = name3.map((n, index) => {
      const indexs: number[] = answerName.map((word, idx) => {
        // 一致したワードの添字を返す
        if (n === word && n !== "") {
          return idx;
        } else {
          return -1;
        }
      });

      if (indexs.includes(index)) {
        return MATCHING_PATTERN.perfectMatching;
      } else if (Math.max(...indexs) !== -1) {
        // 要素の最大値が-1じゃない＝どこかでワードが一致している
        return MATCHING_PATTERN.partMatching;
      } else {
        return MATCHING_PATTERN.notMatching;
      }
    });

    setIsJudge3(true);
    setWordJudges3(newWordJudges);
  };

  const handleClick4 = (): void => {
    const newWordJudges = name4.map((n, index) => {
      const indexs: number[] = answerName.map((word, idx) => {
        // 一致したワードの添字を返す
        if (n === word && n !== "") {
          return idx;
        } else {
          return -1;
        }
      });

      if (indexs.includes(index)) {
        return MATCHING_PATTERN.perfectMatching;
      } else if (Math.max(...indexs) !== -1) {
        // 要素の最大値が-1じゃない＝どこかでワードが一致している
        return MATCHING_PATTERN.partMatching;
      } else {
        return MATCHING_PATTERN.notMatching;
      }
    });

    setIsJudge4(true);
    setWordJudges4(newWordJudges);
  };

  /**
   * ゲームスタート処理
   * @note ゲームスタート時、ランダムに答えとなるワードを選択する
   */
  const handleGameStartClick = (): void => {
    const randamIndex = Math.floor(Math.random() * JANNYS_NAME_LIST.length);
    setAnswerName(JANNYS_NAME_LIST[randamIndex].split(""));
  };

  const rowName = name.map((n, idx) => {
    let backgroundColor: string = "";
    if (wordJudges[idx] === MATCHING_PATTERN.notMatching) {
      backgroundColor = "#757575";
    } else if (wordJudges[idx] === MATCHING_PATTERN.partMatching) {
      backgroundColor = "#CAB458";
    } else {
      backgroundColor = "#4CAF50";
    }

    if (isJudge) {
      return (
        <Input
          value={n}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange(e, idx)}
          key={idx}
          disabled
          bgColor={backgroundColor}
          fontColor={"#FFFFFF"}
        />
      );
    } else {
      return (
        <Input
          value={n}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange(e, idx)}
          key={idx}
        />
      );
    }
  });

  const rowName1 = name1.map((n, idx) => {
    let backgroundColor: string = "";
    if (wordJudges1[idx] === MATCHING_PATTERN.notMatching) {
      backgroundColor = "#757575";
    } else if (wordJudges1[idx] === MATCHING_PATTERN.partMatching) {
      backgroundColor = "#CAB458";
    } else {
      backgroundColor = "#4CAF50";
    }

    if (isJudge1) {
      return (
        <Input
          value={n}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange1(e, idx)}
          key={idx}
          disabled
          bgColor={backgroundColor}
          fontColor={"#FFFFFF"}
        />
      );
    } else {
      return (
        <Input
          value={n}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange1(e, idx)}
          key={idx}
        />
      );
    }
  });

  const rowName2 = name2.map((n, idx) => {
    let backgroundColor: string = "";
    if (wordJudges2[idx] === MATCHING_PATTERN.notMatching) {
      backgroundColor = "#757575";
    } else if (wordJudges2[idx] === MATCHING_PATTERN.partMatching) {
      backgroundColor = "#CAB458";
    } else {
      backgroundColor = "#4CAF50";
    }

    if (isJudge2) {
      return (
        <Input
          value={n}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange2(e, idx)}
          key={idx}
          disabled
          bgColor={backgroundColor}
          fontColor={"#FFFFFF"}
        />
      );
    } else {
      return (
        <Input
          value={n}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange2(e, idx)}
          key={idx}
        />
      );
    }
  });

  const rowName3 = name3.map((n, idx) => {
    let backgroundColor: string = "";
    if (wordJudges3[idx] === MATCHING_PATTERN.notMatching) {
      backgroundColor = "#757575";
    } else if (wordJudges3[idx] === MATCHING_PATTERN.partMatching) {
      backgroundColor = "#CAB458";
    } else {
      backgroundColor = "#4CAF50";
    }

    if (isJudge3) {
      return (
        <Input
          value={n}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange3(e, idx)}
          key={idx}
          disabled
          bgColor={backgroundColor}
          fontColor={"#FFFFFF"}
        />
      );
    } else {
      return (
        <Input
          value={n}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange3(e, idx)}
          key={idx}
        />
      );
    }
  });

  const rowName4 = name4.map((n, idx) => {
    let backgroundColor: string = "";
    if (wordJudges4[idx] === MATCHING_PATTERN.notMatching) {
      backgroundColor = "#757575";
    } else if (wordJudges4[idx] === MATCHING_PATTERN.partMatching) {
      backgroundColor = "#CAB458";
    } else {
      backgroundColor = "#4CAF50";
    }

    if (isJudge4) {
      return (
        <Input
          value={n}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange4(e, idx)}
          key={idx}
          disabled
          bgColor={backgroundColor}
          fontColor={"#FFFFFF"}
        />
      );
    } else {
      return (
        <Input
          value={n}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange4(e, idx)}
          key={idx}
        />
      );
    }
  });

  const button = isJudge ? (
    <Button onClick={handleClick} disabled>
      判定
    </Button>
  ) : (
    <Button onClick={handleClick}>判定</Button>
  );

  const button1 = isJudge1 ? (
    <Button onClick={handleClick1} disabled>
      判定
    </Button>
  ) : (
    <Button onClick={handleClick1}>判定</Button>
  );

  const button2 = isJudge2 ? (
    <Button onClick={handleClick2} disabled>
      判定
    </Button>
  ) : (
    <Button onClick={handleClick2}>判定</Button>
  );

  const button3 = isJudge3 ? (
    <Button onClick={handleClick3} disabled>
      判定
    </Button>
  ) : (
    <Button onClick={handleClick3}>判定</Button>
  );

  const button4 = isJudge4 ? (
    <Button onClick={handleClick4} disabled>
      判定
    </Button>
  ) : (
    <Button onClick={handleClick4}>判定</Button>
  );

  return (
    <div>
      <h1>タイトル</h1>
      <button onClick={handleGameStartClick}>ゲーム開始</button>
      <hr />
      <Row>
        <Div>{rowName}</Div>
        {button}
      </Row>

      <Row>
        <Div>{rowName1}</Div>
        {button1}
      </Row>

      <Row>
        <Div>{rowName2}</Div>
        {button2}
      </Row>

      <Row>
        <Div>{rowName3}</Div>
        {button3}
      </Row>

      <Row>
        <Div>{rowName4}</Div>
        {button4}
      </Row>
    </div>
  );
};

export default App;
