import React from "react";
import { FormattedMessage } from "react-intl";

function starVotes(props) {
  const totalVotes =
    props.values.oneStar +
    props.values.twoStar +
    props.values.threeStar +
    props.values.fourStar +
    props.values.fiveStar;

  const percentage = stars => {
    const starsPercentage = ((stars * 100) / totalVotes).toFixed(0);
    const starsPercentagString = starsPercentage + "%";
    return starsPercentagString;
  };

  const displayPercentage = numberOfVotes => {
    if (numberOfVotes === 0) {
      return (
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container  w3-round-xlarge">
            {percentage(numberOfVotes)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div
            className="w3-container w3-center w3-round-xlarge w3-teal"
            style={{ width: percentage(numberOfVotes) }}
          >
            {percentage(numberOfVotes)}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {props.values.oneStar}
      <i className="fa fa-star fa-fw"></i>
      {displayPercentage(props.values.oneStar)}
      {props.values.twoStar}
      <i className="fa fa-star fa-fw"></i>
      <i className="fa fa-star fa-fw"></i>
      {displayPercentage(props.values.twoStar)}
      {props.values.threeStar}
      <i className="fa fa-star fa-fw"></i>
      <i className="fa fa-star fa-fw"></i>
      <i className="fa fa-star fa-fw"></i>
      {displayPercentage(props.values.threeStar)}
      {props.values.fourStar}
      <i className="fa fa-star fa-fw"></i>
      <i className="fa fa-star fa-fw"></i>
      <i className="fa fa-star fa-fw"></i>
      <i className="fa fa-star fa-fw"></i>
      {displayPercentage(props.values.fourStar)}
      {props.values.fiveStar}
      <i className="fa fa-star fa-fw"></i>
      <i className="fa fa-star fa-fw"></i>
      <i className="fa fa-star fa-fw"></i>
      <i className="fa fa-star fa-fw"></i>
      <i className="fa fa-star fa-fw"></i>
      {displayPercentage(props.values.fiveStar)}
      <br />
      <p>
        <FormattedMessage
          id="app.article.totalVotes"
          defaultMessage="Total de Votos"
        />
        {" = "}
        {totalVotes}
      </p>
    </div>
  );
}

export default starVotes;
