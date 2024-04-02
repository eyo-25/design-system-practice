import { useState } from "react";
import DefaultTextField from "./DefaultTextField";
import Label from "./Label";
import PrimaryButton from "./PrimaryButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        errorMessage="이메일을 확인해 주세요."
        iconPath="/delete-button.svg"
        iconAlt="delete"
        placeholder="이메일을 입력해 주세요."
        value={email}
        isError={false}
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        onIconClick={() => setEmail("")}
      />
      <DefaultTextField
        errorMessage="비밀번호를 확인해 주세요."
        iconPath="/delete-button.svg"
        iconAlt="delete"
        placeholder="비밀번호를 입력해 주세요."
        value={password}
        isError={false}
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        onIconClick={() => setPassword("")}
      />
      <PrimaryButton
        isDisabled={!email || !password}
        theme={"dark"}
        children="로그인"
        onClick={() => {}}
      ></PrimaryButton>
    </div>
  );
}
