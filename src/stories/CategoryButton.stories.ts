import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import CategoryButton from "../components/CategoryButton";

const meta = {
  title: "Button/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: {
      control: "text",
      description: "아이콘 이미지의 icon Path",
      defaultValue: "",
    },
    iconAlt: {
      control: "text",
      description: "아이콘 이미지의 alt 속성",
      defaultValue: "아이콘",
    },
    text: {
      control: "text",
      description: "버튼 텍스트",
      defaultValue: "버튼",
    },
    onClick: { control: "text", description: "버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "카테고리",
    iconAlt: "아이콘",
    iconPath: "/storybook-icon.png",
    onClick: fn(),
  },
};
