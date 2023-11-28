import { Meta, StoryObj } from "@storybook/react";
import { BasicButton } from ".";

const meta: Meta<typeof BasicButton> = {
  title: "@components/elements/BasicButton",
  component: BasicButton,
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Button",
    },
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
      defaultValue: "contained",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      defaultValue: "medium",
    },
    color: {
      options: ["inherit", "primary", "secondary", "success", "error", "info", "warning"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BasicButton>;

export const BaseButton: Story = {
  args: {
    label: "Button",
  },
};
