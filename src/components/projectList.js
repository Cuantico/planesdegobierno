import React, { useState } from "react";
import { getProjectsQuery } from "../queries/queries";
import { useQuery } from "@apollo/react-hooks";
import { useSelector } from "react-redux";
import city from "../img/city.jpeg";
import { FormattedDate, FormattedTime, FormattedMessage } from "react-intl";
import { styleClassStore, projectStore } from "../actions";
import store from "../store";
import { NavLink } from "react-router-dom";

function ProjectList() {
  const [buttonClass, setButtonClass] = useState(
    useSelector(state => state.class.button)
  );
  const [buttonIconClass, setbuttonIconClass] = useState(
    useSelector(state => state.class.buttonsIcon)
  );
  const [articleClass, setArticleClass] = useState(
    useSelector(state => state.class.article)
  );

  const [article, setArticle] = useState(
    useSelector(state => state.project.current)
  );

  const setInitialStateStore = () => {
    store.dispatch(
      styleClassStore({
        button: buttonClass,
        buttonsIcon: buttonIconClass,
        article: articleClass
      })
    );
  };

  const currentProjectStore = () => {
    store.dispatch(projectStore({ id: article }));
  };

  const currentProject = event => {
    console.log(event);
    if (!article) {
      setArticle({ id: event.id });
    } else {
      currentProjectStore();
    }
    console.log(article);
  };

  const changeGrid = () => {
    if (buttonClass === "btn btn-primary active") {
      setButtonClass("btn btn-primary");
      setbuttonIconClass("icon-th-large");
    } else {
      setButtonClass("btn btn-primary active");
      setbuttonIconClass("icon-th-list");
    }
    if (articleClass === "col-xs-12 article-wrapper") {
      const toggleClass = "bloc col-xs-4 article-wrapper";
      setArticleClass(toggleClass);
    } else {
      const toggleClass = "col-xs-12 article-wrapper";
      setArticleClass(toggleClass);
    }
  };

  const { loading, error, data } = useQuery(getProjectsQuery);

  if (loading) return <p>Loading projects...</p>;
  if (error) {
    console.log("error:", error);
    return <p>Error :(</p>;
  }

  const displayProjects = data.projects.map(
    ({ id, name, definition, author, date }) => (
      <div className={articleClass} key={id}>
        <div className={articleClass}></div>
        <article>
          <NavLink
            to={{ pathname: "/details", details: id }}
            onClick={currentProject(id)}
          >
            <div className="more">
              <FormattedMessage id="app.article.more" defaultMessage="más" />
            </div>
          </NavLink>
          <div className="img-wrapper">
            <img src={city} alt="" />
          </div>
          <h1>{name}</h1>
          <p>{definition}</p>
          <p>
            <i className="fa fa-user dar fa-fw w3-margin-left"></i>
            {author}
            <i className="fa fa-calendar fa-fw w3-margin-left"></i>
            <FormattedDate
              value={new Date(parseInt(date, 10))}
              year="numeric"
              month="long"
              day="2-digit"
            />
            <i className="fa fa-at fa-fw w3-margin-left"></i>
            <FormattedTime value={new Date(parseInt(date, 10))} />
          </p>
        </article>
      </div>
    )
  );

  return (
    <div className="container list-article">
      {setInitialStateStore()}
      <div className="btn-group pull-right" id="switch-view">
        <button className={buttonClass} onClick={changeGrid}>
          <span className={buttonIconClass}></span>
        </button>
      </div>
      <div className="clearfix"></div>
      <div className="row">{displayProjects}</div>
    </div>
  );
}

export default ProjectList;
