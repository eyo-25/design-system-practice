import type { Meta, StoryObj } from "@storybook/react";
import TagList from "../components/TagList";
import { fn } from "@storybook/test";

const meta = {
  title: "Button/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tagList: {
      control: "array",
      description: "태그 리스트",
      defaultValue: ["tag1", "tag2", "tag3"],
    },
    onTagClick: {
      action: "clicked",
      description: "태그 클릭 이벤트",
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["tag1", "tag2", "tag3"],
    onTagClick: fn(),
  },
};
