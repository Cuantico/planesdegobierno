import React from "react";
import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <div className="container list-article">
      <h4>
        <FormattedMessage id="app.Nav.Home" defaultMessage="Inicio" />
      </h4>
      <p>
        <FormattedMessage
          id="app.Nav.HomeParagraph"
          defaultMessage="Id exercitation officia ad esse proident proident ea consequat cillum
        est. Sint sit mollit est mollit adipisicing labore cupidatat tempor
        dolore dolor voluptate deserunt ullamco consectetur. Tempor qui anim
        Lorem velit cillum dolor id ea qui id. Aliqua cupidatat aliqua proident
        laborum nostrud aliquip minim ullamco incididunt. Qui nisi ullamco
        nostrud excepteur esse. Mollit aute est aute exercitation ad. Id anim
        tempor exercitation aliqua exercitation cillum pariatur cillum.
      "
        />
      </p>
    </div>
  );
};

export default Home;
