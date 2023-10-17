import { string } from "prop-types";
import React from "react";

import { componentVariants, PremiumTagNames } from "./settings.js";

function PremiumTag({ variant = PremiumTagNames.MAIN }) {
  return (
    <div className={componentVariants[variant].className}>
      <span>Premium</span>
    </div>
  );
}

PremiumTag.propTypes = {
  variant: string,
};

export default PremiumTag;
