import type { Story, Meta } from "@storybook/react";
import { Button } from "./Button";

const Story: Meta = {
  component: Button,
  title: "Design System/Components/Button",
};

export default Story;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
