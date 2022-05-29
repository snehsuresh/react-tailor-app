import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="logo-container" style={{ textAlign: "left" }}>
          <h1 className="brand-logo" style={{ color: "grey" }}>
            THE BESPOKE COMPANY
          </h1>
        </div>

        <p className="footer-desc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
        <div className="footer-social-container">
          <div style={{ color: "3B5999" }}>
            <Facebook />
          </div>
          <div style={{ color: "E4405F" }}>
            <Instagram />
          </div>
          <div style={{ color: "55ACEE" }}>
            <Twitter />
          </div>
          <div style={{ color: "E60023" }}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <h3 className="footer-title">Useful Links</h3>
        <ul className="footer-list">
          <li className="footer-list-item">Home</li>
          <li className="footer-list-item">Cart</li>
          <li className="footer-list-item">Men Fashion</li>

          <li className="footer-list-item">Accessories</li>
          <li className="footer-list-item">My Account</li>
          <li className="footer-list-item">Order Tracking</li>
          <li className="footer-list-item">Wishlist</li>

          <li className="footer-list-item">Terms</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3 className="footer-title">Contact</h3>
        <div className="footer-contact-item">
          <Room style={{ marginRight: "10px" }} /> Panvel, Navi Mumbai
        </div>
        <div>
          <Phone style={{ marginRight: "10px" }} /> +918848897306
        </div>
        <div>
          <MailOutline style={{ marginRight: "10px" }} /> sneh@thebespokeco.com
        </div>
        <img
          className="footer-payment"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
        />
      </div>
    </div>
  );
};

export default Footer;
