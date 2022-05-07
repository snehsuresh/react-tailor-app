import React from "react";

const SubmenuContent = ({ props }) => {
  let { text, content } = props;

  return (
    <>
      <div className="subsubmenu-main">
        <div className="subsubmenu-1">
          <span className="submenu-header">{text}</span>
          {content.images.map((image, id) => {
            return (
              <div className="submenu-image-container" key={id}>
                <img className="submenu-image" src={image} alt="h" />
                <figcaption className="submenu-tag">
                  {content.tags[id]}
                </figcaption>
              </div>
            );
          })}
        </div>
        <div className="subsubmenu-2">
          <ul className="submenu-tips">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              odit non animi harum ipsam corporis aliquid quaerat enim,
              laudantium quam eius magni similique impedit
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ab,
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
              aperiam explicabo? Distinctio doloremque quos.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SubmenuContent;
