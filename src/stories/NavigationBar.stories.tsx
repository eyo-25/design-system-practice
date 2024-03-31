import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "../components/NavigationBar";
import { fn } from "@storybook/test";

const meta = {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px", border: "1px solid red" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isDarkMode: {
      control: "boolean",
      description: "다크 모드 여부",
      defaultValue: false,
    },
    showBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
      defaultValue: true,
    },
    showCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      defaultValue: true,
    },
    showTitle: {
      control: "boolean",
      description: "타이틀 표시 여부",
      defaultValue: true,
    },
    title: { control: "text", description: "타이틀" },
    onBackButtonClick: {
      description: "뒤로가기 버튼 클릭 이벤트",
    },
    onCloseButtonClick: {
      description: "닫기 버튼 클릭 이벤트",
    },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDarkMode: false,
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "타이틀",
    onBackButtonClick: fn(),
    onCloseButtonClick: fn(),
  },
};
