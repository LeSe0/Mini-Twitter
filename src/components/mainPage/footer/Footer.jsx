// React
import React from "react";

function MainPageFooter() {
  const data = [
    {
      title: "About",
    },
    {
      title: "Help Center",
    },
    {
      title: "Terms of Service",
    },
    {
      title: "Cookie Policy",
    },
    {
      title: "Accessibility",
    },
    {
      title: "Ads info",
    },
    {
      title: "Blog",
    },
    {
      title: "Status",
    },
    {
      title: "Careers",
    },
    {
      title: "Brand Resources",
    },
    {
      title: "Advertising",
    },
    {
      title: "Marketing",
    },
    {
      title: "Twitter for Business",
    },
    {
      title: "Developers",
    },
    {
      title: "Directory",
    },
    {
      title: "Settings",
    },
    {
      title: " 2022 Twitter, Inc.",
    },
  ];

  return (
    <nav className="mainPageFooterContainer">
      {data.map((el, i) => {
        return (
          <>
            <div className="mainPageFooterItem">
              <span className={i != data.length - 1 && 'mainFooterItems'}>
                {i == data.length - 1 && <span>&copy;</span>}
                {el.title}
              </span>
            </div>
          </>
        );
      })}
    </nav>
  );
}

export default MainPageFooter;
