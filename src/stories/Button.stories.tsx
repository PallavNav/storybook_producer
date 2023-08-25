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
  onClick: () => {
    console.log("Primary button clicked!");
  },
};

export const Secondry = Template.bind({});
Secondry.args = {
  label: "Storybook Secondry Button",
  onClick: () => {
    console.log("Secondry button clicked!");
  },
};
