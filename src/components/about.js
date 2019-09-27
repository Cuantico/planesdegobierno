import React from "react";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div className="container list-article">
      <h4>
        <FormattedMessage id="app.Nav.About" defaultMessage="Acerca de" />
      </h4>
      <p>
        <FormattedMessage
          id="app.Nav.AboutParagraph"
          defaultMessage="Lorem duis do elit voluptate non elit ea minim ut duis nulla elit deserunt dolore. Enim non ex commodo excepteur incididunt. Occaecat dolor veniam do tempor ut aliqua ut occaecat ullamco. Nulla nisi aliquip sit et dolor minim labore nisi. Consectetur anim proident ex irure sint velit pariatur ex esse irure ex est. Deserunt ad sint culpa do excepteur do ipsum sit pariatur. Commodo culpa consectetur duis pariatur nisi mollit elit in aliqua consectetur voluptate ut ut eiusmod."
        />
      </p>
    </div>
  );
};

export default About;
