import React from "react";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  return (
    <div className="container list-article">
      <h4>
        <FormattedMessage id="app.Nav.Contact" defaultMessage="Contact" />
      </h4>
      <p>
        <FormattedMessage
          id="app.Nav.ContactParagraph"
          defaultMessage="Est sunt ad pariatur excepteur do aliquip. Aute officia nostrud reprehenderit ipsum amet do laborum deserunt amet officia laboris esse. Occaecat minim eiusmod reprehenderit aliquip cillum dolore aliqua commodo et. Esse in sit proident elit et fugiat laboris elit reprehenderit anim adipisicing. Deserunt adipisicing occaecat dolor qui do labore magna pariatur. Consequat labore voluptate excepteur laboris adipisicing in aliquip deserunt nulla laborum enim id qui proident."
        />
      </p>
    </div>
  );
};

export default Contact;
