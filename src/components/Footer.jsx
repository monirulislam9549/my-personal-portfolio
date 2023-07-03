const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center my-5">
      <p>
        <small>&copy; {year} Monirul | All Right Reserved.</small>
      </p>
    </div>
  );
};

export default Footer;
