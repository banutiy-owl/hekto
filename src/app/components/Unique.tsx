"use client";
import React, { useState } from "react";

const Unique: React.FC = () => {
    return(
        <div className="unique">
            <div className="unique-image">
                <img src="unique-sofa.png" alt="" />
            </div>
            <div className="unique-content">
                <h3 className="heading heading--3">Unique Features Of leatest &
                Trending Poducts</h3>
               <div className="unique-content-text">
               <p className="paragraph">All frames constructed with hardwood solids and laminates</p>
                <p className="paragraph">Reinforced with double wood dowels, glue, screw - nails corner</p>
                <p className="paragraph">Arms, backs and seats are structurally reinforced</p>
               </div>
               <div className="unique-content-add-to-cart">
                <button className="add-to-cart"><h4 className="heading heading-sub--4">Add To Cart</h4></button>
                <p className="label label--small">
                B&B Italian Sofa <br />
                $32.00
                </p>
               </div>
            </div>
        </div>
    );
};

export default Unique;