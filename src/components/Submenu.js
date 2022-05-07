import React, { useEffect } from "react";
import { useGobalContext } from "../context";
import SubmenuContent from "./SubmenuContent";

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    submenuContent,
    setSubmenuContent,
  } = useGobalContext();

  //columns to dynamically change the width of the submenu accoring to the number of links in it.
  // const [columns, setColumns] = useState("col-2");
  const columns = "col-2";

  function handleClick(event, content) {
    setSubmenuContent({
      text: event.currentTarget.textContent,
      content: content,
    });
  }

  useEffect(() => {
    if (typeof links[0] != "undefined") {
      setSubmenuContent({
        text: links[0]["label"],
        content: links[0],
      });
    }
  }, [page]);
  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}>
      <div className={`submenu-center ${columns}`}>
        <nav className="flex-comp-1">
          {links.map((link, index) => {
            const { label } = link;
            return (
              <>
                <a
                  className="submenu-links"
                  key={index}
                  onClick={(e) => handleClick(e, link)}
                >
                  {label}
                </a>
              </>
            );
          })}
        </nav>
        <div className="flex-comp-2">
          <SubmenuContent props={submenuContent} />
        </div>
      </div>
    </aside>
  );
};

export default Submenu;
