"use client";
import React, { useState } from "react";

const Newsletter: React.FC = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <h2 className="heading heading--2">
          Get Latest Update By Subscribe Our Newsletter
        </h2>
        <button className="subscribe">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
