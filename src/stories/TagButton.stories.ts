import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TagButton from "../components/TagButton";

const meta = {
  title: "Button/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isChecked: { control: "boolean", description: "태그버튼 체크 여부" },
    children: { control: "text", description: "태그버튼 텍스트" },
    onClick: { action: "clicked", description: "태그버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isChecked: false,
    children: "TagButton",
    onClick: fn(),
  },
};
