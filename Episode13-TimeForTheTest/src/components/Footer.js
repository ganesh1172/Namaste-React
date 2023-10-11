const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="fixed text-lg bottom-0 left-0 z-20 w-full p-4 text-center shadow-lg bg-slate-200">
      Created By 👨‍💻
      <a
        href="https://in.linkedin.com/in/ganesh1172"
        target="_blank"
        title="Ganesh Bardade Linkedin Profile"
        className="font-semibold text-blue-800 hover:text-red-800"
      >
        Ganesh Bardade
      </a>{" "}
      ©️ <span className="font-semibold"> {year}</span> Foodie
      <span className="text-red-500">Hub</span>
    </div>
  );
};

export default Footer;
