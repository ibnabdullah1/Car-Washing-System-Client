import { FiChevronUp } from "react-icons/fi";

const BackToTopButton = ({ showButton }: any) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-0 right-0 grid mb-4 mr-4 z-30 rounded-full shadow back-to-top-btn size-10 place-items-center bg-primary shadow-primary/60 text-white ${
        showButton && "active"
      }`}
      onClick={scrollToTop}
    >
      <FiChevronUp />
    </button>
  );
};

export default BackToTopButton;
