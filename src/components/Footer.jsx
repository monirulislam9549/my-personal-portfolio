const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center">
      <p>
        <small>&copy; {year} Monirul | All Right Reserved.</small>
      </p>
    </div>
  );
};

export default Footer;
