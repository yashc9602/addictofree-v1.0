import React from "react";

import { Input } from "components";

export default {
  title: "addictofree/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder10",
  variant: "OutlineGray300",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
