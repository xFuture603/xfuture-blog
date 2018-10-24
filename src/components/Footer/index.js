import React from "react";
import config from "../../config/config";

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
          <a class="footer-imprint" href="https://www.gatsbyjs.org/">imprint</a>.
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
