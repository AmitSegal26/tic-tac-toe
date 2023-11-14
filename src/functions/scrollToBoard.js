const scrollToBoard = (ref) =>
  setTimeout(() => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.getBoundingClientRect().top + window.scrollY - 50,
        behavior: "smooth",
      });
    }
  }, 50);

export default scrollToBoard;
