import React from "react";
import config from "../../config/config";
import Link from "gatsby-link";

const Footer = () => (
  <div className="bg-grey-customized">
    <div className="text-center max-w-xl mx-auto p-4 md:p-8 text-sm">
      <p>
        <a
          href={config.siteUrl}
          className="no-underline text-indigo-darkest hover:text-grey-darkest"
        >
          <a class="footer-twitter" href="https://twitter.com/xFuturecs">twitter</a>.
          <a class="footer-github" href="https://github.com/xFuture603">github</a>.
          <Link to="/imprint" style={{ textDecoration: "none"}}>imprint</Link>.
          <Link to="/privacy" style={{ textDecoration: "none"}}>privacy</Link>.
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
