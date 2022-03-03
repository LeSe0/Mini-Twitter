// React
import React from "react";

function FormAuthByButtons({ data }) {
  return (
    <div>
      {data.map((el, i) => {
        return (
          <button className="flex">
            <div className={`authBy authBy${el.className}`}>
              <div className="authButtonCursor">
                {el.img && (
                  <div className="authFormIcon">
                    <el.img />
                  </div>
                )}
                <div className="authFormTitle text-sm">
                  {el.title}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default FormAuthByButtons;
