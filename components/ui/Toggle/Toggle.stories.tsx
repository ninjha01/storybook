import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Toggle } from "./Toggle";

export default {
  title: "UI/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
  const [enabled, setEnabled] = useState(true);
  return <Toggle enabled={enabled} onClick={() => setEnabled(!enabled)} />;
};

export const ToggleStory = Template.bind({});
