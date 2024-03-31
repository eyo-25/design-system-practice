import { useState } from "react";

import "./App.css";
import Label from "./components/Label";
import DefaultTextField from "./components/DefaultTextField";
import TagList from "./components/TagList";

function App() {
  const [isError, setIsError] = useState(false);

  return (
    <div className="bg-primary">
      <TagList
        tagList={["All", "React", "TypeScript"]}
        onTagClick={console.log}
      />
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        iconPath="/delete-button.svg"
        iconAlt="삭제 버튼"
        placeholder="이메일을 입력해주세요"
        value=""
        errorMessage="이메일을 올바르게 입력해주세요"
        isError={isError}
        onChange={() => {}}
        onIconClick={() => {}}
      />
      <Label htmlFor="email">주소</Label>
      <div className="mt-4"></div>
      <DefaultTextField
        id="email"
        iconPath="/delete-button.svg"
        iconAlt="삭제 버튼"
        placeholder="주소를 입력해주세요"
        value=""
        errorMessage="주소를 올바르게 입력해주세요"
        isError={isError}
        onChange={() => {}}
        onIconClick={() => {}}
      />
      <button onClick={() => setIsError((prev) => !prev)}>에러토글</button>
    </div>
  );
}

export default App;
