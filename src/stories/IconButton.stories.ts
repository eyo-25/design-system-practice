import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "../components/IconButton";

const meta = {
  title: "Button/IconButton",
  component: IconButton,
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
    alt: {
      control: "text",
      description: "아이콘 이미지의 alt 속성",
      defaultValue: "아이콘",
    },
    onClick: { control: "text", description: "버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "아이콘",
    iconPath: "/delete-button.svg",
    onClick: fn(),
  },
};
