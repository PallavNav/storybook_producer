import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Button from "../components/Button/Button"; // Replace with your actual component path

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Storybook Primary Button",
};

export const Secondry = Template.bind({});
Secondry.args = {
  label: "Storybook Secondry Button",
};
