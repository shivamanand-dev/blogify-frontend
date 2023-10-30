"use client";

import React, { useEffect, useRef, useState } from "react";
import { StyledDiwaliCanvas } from "./StyledDiwaliCanvas";
import Image from "next/image";

const DiwaliCanvas: React.FC = () => {
  return (
    <StyledDiwaliCanvas>
      <div className="pouce-wrapper">
        <div className="pouce-fountain">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="pouce">
          <div className="pouce-part"></div>
        </div>
      </div>

      <div className="cover"></div>
    </StyledDiwaliCanvas>
  );
};

export default DiwaliCanvas;
