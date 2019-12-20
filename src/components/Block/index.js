import React from "react";
import classeNames from "classnames";

import "./Block.scss";

const Block = ({children, className}) => <div className={classeNames("block", className)}>{children}</div>

export default Block;