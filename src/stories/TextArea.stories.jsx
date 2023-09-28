import React from "react";
import { TextArea } from "components";

export default {
  title: "addictofree/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = { placeholder: "placeholder" };
