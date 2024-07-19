import Link from "next/link";
import React from "react";
import Counter from "../Counter";

const Demo7Statistic1 = () => {
  return (
    <div id="statistic-1" className="bg-yellow statistic-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="statistic-block">
              {/* Digits */}
              <h5 className="statistic-number">
                2,
                <Counter end="769" />
              </h5>
              {/* Text */}
              <div className="statistic-block-txt">
                <h5 className="h5-lg">Online Courses</h5>
                <Link href="#">
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Learn More &gt;
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* STATISTIC BLOCK #2 */}
          <div className="col-md-4">
            <div className="statistic-block">
              {/* Digits */}
              <h5 className="statistic-number">
                <Counter end="637" />
              </h5>
              {/* Text */}
              <div className="statistic-block-txt">
                <h5 className="h5-lg">Free Online Tutorials</h5>
                <Link href="#">
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Discover More &gt;
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* STATISTIC BLOCK #3 */}
          <div className="col-md-4">
            <div className="statistic-block">
              {/* Digits */}
              <h5 className="statistic-number">
                <Counter end="942" />
              </h5>
              {/* Text */}
              <div className="statistic-block-txt">
                <h5 className="h5-lg">eBooks Available</h5>
                <Link href="#">
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Discover More &gt;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default Demo7Statistic1;
