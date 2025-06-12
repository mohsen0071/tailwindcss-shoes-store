const Sidebar = ({ children, isOpen, onClickClose }) => {
  return (
    <div>
      <div
        className={`dark:bg-night fixed top-0 right-0 bg-white w-full h-full z-50 transform p-5 shadow-lg transition md:w-[50%] lg:w-[35%] duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="text-black absolute right-4 top-4 p-2 font-bold dark:text-white"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div
          onClick={onClickClose}
          className="bg-black opacity-50 fixed left-0 top-0 h-full w-full z-20"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
