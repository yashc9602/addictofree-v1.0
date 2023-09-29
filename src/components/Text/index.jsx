import React from "react";

const sizeClasses = {
  txtSFProTextRegular14: "font-normal font-sfprotext",
  txtCreatoDisplayBold64: "font-bold font-creatodisplay",
  txtSatoshiVariableMedium16: "font-medium font-satoshivariable",
  txtSatoshiVariableMedium15: "font-medium font-satoshivariable",
  txtSatoshiVariableBold28WhiteA700: "font-bold font-satoshivariable",
  txtSFProTextRegular12: "font-normal font-sfprotext",
  txtCreatoDisplayRegular14: "font-regular font-creatodisplay",
  txtSatoshiVariableMedium24Gray600: "font-medium font-satoshivariable",
  txtSatoshiVariableMedium16Gray300: "font-medium font-satoshivariable",
  txtSatoshiVariableBold18: "font-bold font-satoshivariable",
  txtSatoshiVariableBold28: "font-bold font-satoshivariable",
  txtSatoshiVariableMedium24: "font-medium font-satoshivariable",
  txtCreatoDisplayBold48: "font-bold font-creatodisplay",
  txtCreatoDisplayBold36: "font-bold font-creatodisplay",
  txtSatoshiVariableMedium20: "font-medium font-satoshivariable",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
