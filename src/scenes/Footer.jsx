const Footer = () => {
  return (
    <footer className="h-35 bg-opaque-black p-10">
      <div className="w-5/6 mx-auto">
        {/* <SocialMediaIcons /> */}
        <div className="md:flex md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            FINN LECTER
          </p>
          <p className="font-playfair text-md text-yellow">
            © 2023 LECTER. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
