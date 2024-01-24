import { Link } from "react-router-dom";

const FooterBar = () => {
  return (
    <div>
      <footer className="mt-[15px] text-white bg-fakezon-background">
        <div className="bg-[#37475a] h-[50px] flex  justify-center items-center text-[0.75rem]">
          <a href="/">
            Go Back to Top
          </a>
        </div>

        <div className="bg-[#222] h-[300px] flex justify-evenly">
          <ul className="mt-[20px]">
            <p>Get to Know Us</p>
            <Link to="/">Careers</Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Blog
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              About Amazon
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Investor Relations
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Amazon Devices
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Amazon Science
            </Link>
          </ul>
          <ul className="mt-[20px]">
            <p>Make Money with Us</p>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Sell products on Amazon
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Sell on Amazon Business
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Sell apps on Amazon
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Become an Affiliate
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Advertise Your Products
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Self-Publish with Us
            </Link>
          </ul>
          <ul className="mt-[20px]">
            <p>Amazon Payment Products</p>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Amazon Business Card
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Shop with Points
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Reload Your Balance
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Amazon Currency Converter
            </Link>
          </ul>
          <ul className="mt-[20px]">
            <p>Let Us Help You</p>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Careers
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Reload Your Balance
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              About Amazon
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Investor Relations
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Amazon Devices
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Amazon Science
            </Link>
          </ul>
          <ul className="mt-[20px]">
            <p>Get to Know Us</p>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Amazon and COVID-19
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Your Account
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Your Orders
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Shipping Rates & Policies
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Returns & Replacements
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Manage Your Content and Devices
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Amazon Assistant
            </Link>
            <Link
              className="block text-[0.85rem] mt-[10px] text-[#dddddd]"
              to="/"
            >
              Help
            </Link>
          </ul>
        </div>

        <div className="bg-[#222f3d] text-white border-t-0 border-solid border-white h-[80px] flex justify-center items-center">
          <img
            className="text-white h-[50px] w-[150px]"
            src={`../images/amazon.png`}
          />
        </div>

        <div className="bg-[#0f1111] text-white h-[80px] text-[0.7rem] text-center">
          <div className="pt-[20px]">
            <a>Conditions of Use</a>
            <a>Privacy Notice</a>
            <a>Your Ads Privacy Choices</a>
          </div>
          <div className="pt-[5px]">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterBar;
