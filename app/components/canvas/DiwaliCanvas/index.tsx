"use client";

import React, { useEffect, useRef, useState } from "react";
import { StyledDiwaliCanvas } from "./StyledDiwaliCanvas";
import Image from "next/image";

const DiwaliCanvas: React.FC = () => {
  return (
    <StyledDiwaliCanvas>
      <div className="container">
        <div className="wishes-container">
          <div className="lights lights-1"></div>
          <div className="lights lights-2"></div>
          <div className="wishes">
            <h3>Happy</h3>
            <h3>Diwali</h3>
          </div>
        </div>
        <div className="diya-container">
          <div className="diya">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="dots"></div>
          </div>
          <div className="inside">
            <div className="flame"></div>
          </div>
        </div>
      </div>

      <div className="cover"></div>
    </StyledDiwaliCanvas>
  );
};

export default DiwaliCanvas;
