import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Button/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    isDisabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
    },
    theme: {
      control: {
        type: "select",
        options: ["dark", "light", "social", "text"],
      },
      description: "버튼 테마",
    },
    children: { control: "text", description: "버튼 텍스트" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    isDisabled: false,
    theme: "dark",
    children: "Button",
    onClick: fn(),
  },
};

export const Light: Story = {
  args: {
    isDisabled: false,
    theme: "light",
    children: "Button",
    onClick: fn(),
  },
};

export const Social: Story = {
  args: {
    isDisabled: false,
    theme: "social",
    children: "Button",
    onClick: fn(),
  },
};

export const Text: Story = {
  args: {
    isDisabled: false,
    theme: "text",
    children: "Button",
    onClick: fn(),
  },
};

export const Disable: Story = {
  args: {
    isDisabled: true,
    theme: "text",
    children: "Button",
    onClick: fn(),
  },
};
