import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from "../components/Button/Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Storybook Primary Button",
};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/X7LZ1XwHO6plDlmKX1WlB0/Buttons-with-360-Variants---autolayout?node-id=1-3", // Make sure this link is public
  },
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: "Storybook Secondary Button",
  onClick: () => {
    console.log("Secondary button clicked!");
  },
};
Secondary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ABC123XYZ/Design-System?node-id=201-300", // Replace with Secondary button frame
  },
};
