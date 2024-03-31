import type { Meta, StoryObj } from "@storybook/react";
import DefaultTextField from "../components/DefaultTextField";
import { fn } from "@storybook/test";

const meta = {
  title: "TextField/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text", description: "텍스트 필드의 값" },
    errorMessage: { control: "text", description: "에러 메시지" },
    iconPath: {
      control: "text",
      description: "아이콘 이미지의 icon Path",
    },
    iconAlt: {
      control: "text",
      description: "아이콘 이미지의 iconAlt 속성",
      defaultValue: "아이콘",
    },
    placeholder: {
      control: "text",
      description: "텍스트 필드의 placeholder",
      defaultValue: "텍스트를 입력해주세요",
    },
    isError: {
      control: "boolean",
      description: "에러 상태 여부",
      defaultValue: false,
    },
    onIconClick: { description: "아이콘 버튼 클릭 이벤트" },
    onChange: { description: "텍스트 필드 값 변경 이벤트" },
    id: { control: "text", description: "텍스트 필드의 id" },
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default-text-field",
    iconAlt: "아이콘",
    iconPath: "/delete-button.svg",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    errorMessage: "에러 메세지",
    isError: false,
    onIconClick: fn(),
    onChange: fn(),
  },
};
