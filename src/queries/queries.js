import { gql } from "apollo-boost";

const getProjectsQuery = gql`
  {
    projects {
      id
      name
      definition
      author
      date
    }
  }
`;

const getProjectsDetailsQuery = gql`
  query($id: ID) {
    project(id: $id) {
      id
      name
      definition
      author
      date
      summary
      overview
      approach
      withinReach {
        description
        id
      }
      outOfReach {
        id
        description
      }
      deliverables {
        description
        id
      }
      objectives {
        description
        id
      }
      effort {
        task
        hours
        id
        cost
        projectid
      }
      assumptions {
        id
        description
      }
      risks {
        risk
        level
        contingencyPlan
        id
      }
      team {
        role
        responsible
        id
      }
      votes {
        oneStar
        twoStar
        threeStar
        fourStar
        fiveStar
      }
    }
  }
`;
export { getProjectsQuery, getProjectsDetailsQuery };
