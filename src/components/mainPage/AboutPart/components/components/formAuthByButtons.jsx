// React
import React from "react";

function FormAuthByButtons({ data, setActivePage }) {
  return (
    <div>
      {data.map((el, i) => {
        return (
          <button key = {el.title + i} className="flex" onClick = {(e) =>{
            e.preventDefault();
            el.setPage && setActivePage(el.setPage)
          }}>
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
