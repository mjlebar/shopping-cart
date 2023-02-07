import { XMarkIcon } from "@heroicons/react/24/solid";

const Sidebar = (props) => {
  return (
    <div style={{ visibility: `${props.style}` }} className="sidebar">
      <p>Hello</p>
      <div className="close">
        <XMarkIcon pointerEvents="none"></XMarkIcon>
      </div>
    </div>
  );
};

export { Sidebar };
