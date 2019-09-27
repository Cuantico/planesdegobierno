import React from "react";
import avatar from "../img/avatar_hat.jpg";
import { useQuery } from "@apollo/react-hooks";
import { getProjectsDetailsQuery } from "../queries/queries";
import { FormattedDate, FormattedMessage } from "react-intl";
import Votes from "../components/votes";

function ProjectDetail(props) {
  const { loading, error, data } = useQuery(getProjectsDetailsQuery, {
    variables: { id: props.location.details }
  });

  if (loading) return <p>Loading project...</p>;
  if (error) {
    console.log("error:", error);
    return <p>Error :(</p>;
  }

  const displayDetails = () => {
    const { project } = data;

    if (project) {
      const displayVotes = project.votes.map(
        ({ oneStar, twoStar, threeStar, fourStar, fiveStar }) => (
          <Votes
            key={oneStar}
            values={{ oneStar, twoStar, threeStar, fourStar, fiveStar }}
          />
        )
      );

      const displayWithinReach = project.withinReach.map(
        ({ description, id }) => <li key={id}>{description}</li>
      );

      const displayOutOfReach = project.outOfReach.map(
        ({ description, id }) => <li key={id}>{description}</li>
      );

      const displayDeliverables = project.deliverables.map(
        ({ description, id }) => <li key={id}>{description}</li>
      );

      const displayObjectives = project.objectives.map(
        ({ description, id }) => <li key={id}>{description}</li>
      );

      const displayAssumptions = project.assumptions.map(
        ({ description, id }) => <li key={id}>{description}</li>
      );

      const TotalRisk = project.risks.length;

      const TotalObjetives = project.objectives.length;

      const TotalOutOfReach = project.outOfReach.length;

      const TotalWithinReach = project.withinReach.length;

      const TotalAssumptions = project.assumptions.length;

      const TotalDeliverable = project.deliverables.length;

      const TotalStakeholders = project.team.length;

      const TotalTasks = project.effort.length;

      const displayEffort = project.effort.map(({ task, hours, id, cost }) => (
        <tr key={id}>
          <td>{task}</td>
          <td>{hours}</td>
          <td>{cost}</td>
        </tr>
      ));

      const displayTeam = project.team.map(({ role, responsible, id }) => (
        <tr key={id}>
          <td>{responsible}</td>
          <td>{role}</td>
        </tr>
      ));

      const displayRisks = project.risks.map(
        ({ id, risk, level, contingencyPlan }) => (
          <tr key={id}>
            <td>{risk}</td>
            <td>{level}</td>
            <td>{contingencyPlan}</td>
          </tr>
        )
      );

      return (
        <div className="w3-row-padding">
          {/* Left Column  */}
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div
                className="w3-display-container"
                style={{ marginBottom: "10px" }}
              >
                <img src={avatar} style={{ width: "100%" }} alt="Avatar" />
                <div className="w3-display-bottomleft w3-container w3-text-black">
                  <h2>
                    <i className="fa fa-user dar fa-fw w3-margin-left"></i>
                    {project.author}
                  </h2>
                </div>
              </div>
              <div className="w3-container">
                <p>
                  <i className="fa fa-key fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  {project.id}
                </p>
                <p>
                  <i className="fa fa-info-circle fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  {project.name}
                </p>
                <p>
                  <i className="fa fa-calendar fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  <FormattedDate
                    value={new Date(parseInt(project.date, 10))}
                    year="numeric"
                    month="long"
                    day="2-digit"
                  />
                </p>
                <hr />
                <h3 className="w3-text-grey w3-padding-16">
                  <i className="fa fa-thermometer-half fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <FormattedMessage
                    id="app.article.Stats"
                    defaultMessage="Estadísticas"
                  />
                </h3>
                <p>
                  <i className="fa fa-crosshairs fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  <FormattedMessage
                    id="app.article.objectivesStats"
                    defaultMessage="Objetivos"
                  />
                  {" = "}
                  {TotalObjetives}
                </p>
                <p>
                  <i className="fa fa-sliders fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  <FormattedMessage
                    id="app.article.withinReach"
                    defaultMessage="Dentro del Alcance"
                  />
                  {" = "}
                  {TotalWithinReach}
                </p>
                <p>
                  <i className="fa fa-sliders fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  <FormattedMessage
                    id="app.article.outOfReach"
                    defaultMessage="Fuera del Alcance"
                  />
                  {" = "}
                  {TotalOutOfReach}
                </p>
                <p>
                  <i className="fa fa-comment fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  <FormattedMessage
                    id="app.article.assumptionsStats"
                    defaultMessage="Supuestos"
                  />
                  {" = "}
                  {TotalAssumptions}
                </p>
                <p>
                  <i className="fa fa-flag fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  <FormattedMessage
                    id="app.article.milestone"
                    defaultMessage="Hitos"
                  />
                  {" = "}
                  {TotalTasks}
                </p>
                <p>
                  <i className="fa fa-gift fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  <FormattedMessage
                    id="app.article.deliverableStats"
                    defaultMessage="Entregables"
                  />
                  {" = "}
                  {TotalDeliverable}
                </p>
                <p>
                  <i className="fa fa-users fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  <FormattedMessage
                    id="app.article.stakeholders"
                    defaultMessage="Interesados"
                  />
                  {" = "}
                  {TotalStakeholders}
                </p>
                <br />
                <p className="w3-large ">
                  <b>
                    <i className="fa fa-exclamation-triangle fa-fw w3-margin-right w3-text-teal"></i>
                    <FormattedMessage
                      id="app.article.risks"
                      defaultMessage="Riesgos"
                    />
                  </b>
                </p>
                <p>
                  <FormattedMessage
                    id="app.article.highrisks"
                    defaultMessage="Altos"
                  />
                </p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "100%" }}
                  ></div>
                </div>
                <p>
                  <FormattedMessage
                    id="app.article.midrisk"
                    defaultMessage="Medios"
                  />
                </p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "55%" }}
                  ></div>
                </div>
                <p>
                  <FormattedMessage
                    id="app.article.lowrisk"
                    defaultMessage="Bajos"
                  />
                </p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "25%" }}
                  ></div>
                </div>
                <br />
                <p>
                  <FormattedMessage
                    id="app.article.totalRisks"
                    defaultMessage="Total de Riesgos"
                  />
                  {" = "}
                  {TotalRisk}
                </p>

                <p className="w3-large w3-text-theme">
                  <b>
                    <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"></i>
                    <FormattedMessage
                      id="app.article.votes"
                      defaultMessage="Votos"
                    />
                  </b>
                </p>
                {displayVotes}
                <br />
              </div>
            </div>
            <br />
            {/* End Left Column */}
          </div>
          {/* Right Column */}
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-folder-open fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                {project.name}
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <i className="fa fa-cog fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <b>
                    <FormattedMessage
                      id="app.article.definition"
                      defaultMessage="Definición"
                    />
                  </b>
                </h5>
                <p>{project.definition}</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <i className="fa fa-file fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <b>
                    <FormattedMessage
                      id="app.article.summary"
                      defaultMessage="Resumen ejecutivo del proyecto"
                    />
                  </b>
                </h5>
                <p>{project.summary}</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <i className="fa fa-eye fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <b>
                    <FormattedMessage
                      id="app.article.overview"
                      defaultMessage="Resumen ejecutivo del proyecto"
                    />
                  </b>
                </h5>
                <p>{project.overview}</p>
                <br />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <i className="fa fa-crosshairs fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <b>
                    <FormattedMessage
                      id="app.article.objectives"
                      defaultMessage="Objetivos del proyecto"
                    />
                  </b>
                </h5>

                {displayObjectives}
                <br />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <i className="fa fa-cogs fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <b>
                    <FormattedMessage
                      id="app.article.approach"
                      defaultMessage="Enfoque del proyecto"
                    />
                  </b>
                </h5>

                <p>{project.approach}</p>
                <br />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <i className="fa fa-sliders fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <b>
                    <FormattedMessage
                      id="app.article.withinReach"
                      defaultMessage="Dentro del Alcance"
                    />
                  </b>
                </h5>
                {displayWithinReach}
                <br />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <i className="fa fa-sliders fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <b>
                    <FormattedMessage
                      id="app.article.outOfReach"
                      defaultMessage="Fuera del Alcance"
                    />
                  </b>
                </h5>
                {displayOutOfReach}
              </div>
              <br />
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <i className="fa fa-tasks fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <b>
                    <FormattedMessage
                      id="app.article.riskTitle"
                      defaultMessage="Riesgos del proyecto"
                    />
                  </b>
                </h5>
                <table>
                  <thead className="w3-text-teal">
                    <tr>
                      <th>
                        <span className="w3-tag w3-teal w3-round">
                          <FormattedMessage
                            id="app.article.risk"
                            defaultMessage="Riesgo"
                          />
                        </span>
                      </th>
                      <th>
                        <span className="w3-tag w3-teal w3-round">
                          <FormattedMessage
                            id="app.article.level"
                            defaultMessage="Nivel"
                          />
                        </span>
                      </th>
                      <th>
                        <span className="w3-tag w3-teal w3-round">
                          <FormattedMessage
                            id="app.article.contingencyPlan"
                            defaultMessage="Plan de contingencia"
                          />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{displayRisks}</tbody>
                </table>
                <br />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <i className="fa fa-comment fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <b>
                    <FormattedMessage
                      id="app.article.assumptions"
                      defaultMessage="Supuestos del proyecto"
                    />
                  </b>
                </h5>
                {displayAssumptions}
                <br />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <i className="fa fa-tasks fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <b>
                    <FormattedMessage
                      id="app.article.effort"
                      defaultMessage="Estimación de esfuerzo duración y costos del proyecto"
                    />
                  </b>
                </h5>
                <table>
                  <thead className="w3-text-teal">
                    <tr>
                      <th>
                        <span className="w3-tag w3-teal w3-round">
                          <FormattedMessage
                            id="app.article.task"
                            defaultMessage="Tareas"
                          />
                        </span>
                      </th>
                      <th>
                        <span className="w3-tag w3-teal w3-round">
                          <FormattedMessage
                            id="app.article.hours"
                            defaultMessage="Horas empleadas"
                          />
                        </span>
                      </th>
                      <th>
                        <span className="w3-tag w3-teal w3-round">
                          <FormattedMessage
                            id="app.article.cost"
                            defaultMessage="Costo"
                          />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{displayEffort}</tbody>
                </table>
                <br />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <i className="fa fa-gift fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <b>
                    <FormattedMessage
                      id="app.article.deliverables"
                      defaultMessage="Entregables producidos"
                    />
                  </b>
                </h5>
                {displayDeliverables}
                <br />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <i className="fa fa-users fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>
                  <b>
                    <FormattedMessage
                      id="app.article.stakeholders"
                      defaultMessage="Interesados"
                    />
                  </b>
                </h5>
                <table>
                  <thead className="w3-text-teal">
                    <tr>
                      <th>
                        <span className="w3-tag w3-teal w3-round">
                          <FormattedMessage
                            id="app.article.responsible"
                            defaultMessage="Responsable"
                          />
                        </span>
                      </th>
                      <th>
                        <span className="w3-tag w3-teal w3-round">
                          <FormattedMessage
                            id="app.article.role"
                            defaultMessage="Rol"
                          />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{displayTeam}</tbody>
                </table>

                <br />
              </div>
            </div>

            {/* End Right Column  */}
          </div>
        </div>
      );
    } else {
      return <div>No project selected...</div>;
    }
  };

  return (
    <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
      {displayDetails()}
    </div>
  );
}

export default ProjectDetail;
