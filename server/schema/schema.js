const graphql = require("graphql");
const _ = require("lodash");
const Project = require("../models/project");
const Stakeholders = require("../models/stakeholders");
const Objectives = require("../models/objectives");
const WithinReach = require("../models/withinReach");
const OutOfReach = require("../models/outOfReach");
const Deliverables = require("../models/deliverables");
const Effort = require("../models/effort");
const WorkPlan = require("../models/workPlan");
const Risks = require("../models/risks");
const Assumptions = require("../models/assumptions");
const Team = require("../models/team");
const Votes = require("../models/votes");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat
} = graphql;

const objectivesType = new GraphQLObjectType({
  name: "Objectives",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    projectid: { type: GraphQLID },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectid);
      }
    }
  })
});

const withinReachType = new GraphQLObjectType({
  name: "WithinReach",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    projectid: { type: GraphQLID },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectid);
      }
    }
  })
});

const outOfReachType = new GraphQLObjectType({
  name: "OutOfReach",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    projectid: { type: GraphQLID },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectid);
      }
    }
  })
});

const deliverablesType = new GraphQLObjectType({
  name: "Deliverables",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    projectid: { type: GraphQLID },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectid);
      }
    }
  })
});

const stakeholdersType = new GraphQLObjectType({
  name: "Stakeholders",
  fields: () => ({
    id: { type: GraphQLID },
    area: { type: GraphQLString },
    description: { type: GraphQLString },
    projectid: { type: GraphQLID },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectid);
      }
    }
  })
});

const effortType = new GraphQLObjectType({
  name: "Effort",
  fields: () => ({
    id: { type: GraphQLID },
    task: { type: GraphQLString },
    hours: { type: GraphQLInt },
    cost: { type: GraphQLFloat },
    projectid: { type: GraphQLID },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectid);
      }
    }
  })
});

const workPlanType = new GraphQLObjectType({
  name: "WorkPlan",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    days: { type: GraphQLInt },
    projectid: { type: GraphQLID },
    deliverablesid: { type: GraphQLID },
    deliverables: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.deliverablesid);
      }
    },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectid);
      }
    }
  })
});

const assumptionsType = new GraphQLObjectType({
  name: "Assumptions",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    projectid: { type: GraphQLID },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectid);
      }
    }
  })
});

const risksType = new GraphQLObjectType({
  name: "Risks",
  fields: () => ({
    id: { type: GraphQLID },
    risk: { type: GraphQLString },
    level: { type: GraphQLString },
    contingencyPlan: { type: GraphQLString },
    projectid: { type: GraphQLID },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectid);
      }
    }
  })
});

const teamType = new GraphQLObjectType({
  name: "Team",
  fields: () => ({
    id: { type: GraphQLID },
    role: { type: GraphQLString },
    responsible: { type: GraphQLString },
    projectid: { type: GraphQLID },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectid);
      }
    }
  })
});

const votesType = new GraphQLObjectType({
  name: "Votes",
  fields: () => ({
    id: { type: GraphQLID },
    oneStar: { type: GraphQLInt },
    twoStar: { type: GraphQLInt },
    threeStar: { type: GraphQLInt },
    fourStar: { type: GraphQLInt },
    fiveStar: { type: GraphQLInt },
    projectid: { type: GraphQLID },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectid);
      }
    }
  })
});

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    definition: { type: GraphQLString },
    author: { type: GraphQLString },
    date: { type: GraphQLString },
    summary: { type: GraphQLString },
    overview: { type: GraphQLString },
    approach: { type: GraphQLString },
    objectives: {
      type: new GraphQLList(objectivesType),
      resolve(parent, args) {
        return Objectives.find({ projectid: parent.id });
      }
    },
    withinReach: {
      type: new GraphQLList(withinReachType),
      resolve(parent, args) {
        return WithinReach.find({ projectid: parent.id });
      }
    },
    outOfReach: {
      type: new GraphQLList(outOfReachType),
      resolve(parent, args) {
        return OutOfReach.find({ projectid: parent.id });
      }
    },
    deliverables: {
      type: new GraphQLList(deliverablesType),
      resolve(parent, args) {
        return Deliverables.find({ projectid: parent.id });
      }
    },
    stakeholders: {
      type: new GraphQLList(stakeholdersType),
      resolve(parent, args) {
        return Stakeholders.find({ projectid: parent.id });
      }
    },
    effort: {
      type: new GraphQLList(effortType),
      resolve(parent, args) {
        return Effort.find({ projectid: parent.id });
      }
    },
    workPlan: {
      type: new GraphQLList(workPlanType),
      resolve(parent, args) {
        return WorkPlan.find({ projectid: parent.id });
      }
    },
    assumptions: {
      type: new GraphQLList(assumptionsType),
      resolve(parent, args) {
        return Assumptions.find({ projectid: parent.id });
      }
    },
    risks: {
      type: new GraphQLList(risksType),
      resolve(parent, args) {
        return Risks.find({ projectid: parent.id });
      }
    },
    team: {
      type: new GraphQLList(teamType),
      resolve(parent, args) {
        return Team.find({ projectid: parent.id });
      }
    },
    votes: {
      type: new GraphQLList(votesType),
      resolve(parent, args) {
        return Votes.find({ projectid: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find({});
      }
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      }
    },
    objectives: {
      type: objectivesType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Objectives.findById(args.id);
      }
    },
    allObjectives: {
      type: new GraphQLList(objectivesType),
      resolve(parent, args) {
        return Objectives.find({});
      }
    },
    withinReach: {
      type: withinReachType,
      args: { id: { type: GraphQLID } },
      resolve(parent, arg) {
        return WithinReach.findById(args.id);
      }
    },
    outOfReach: {
      type: outOfReachType,
      args: { id: { type: GraphQLID } },
      resolve(parent, arg) {
        return OutOfReach.findById(args.id);
      }
    },
    deliverables: {
      type: deliverablesType,
      args: { id: { type: GraphQLID } },
      resolve(parent, arg) {
        return Deliverables.findById(args.id);
      }
    },
    stakeholders: {
      type: stakeholdersType,
      args: { id: { type: GraphQLID } },
      resolve(parent, arg) {
        return Stakeholders.findById(args.id);
      }
    },
    effort: {
      type: effortType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Effort.findById(args.id);
      }
    },
    workPlan: {
      type: workPlanType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return WorkPlan.findById(args.id);
      }
    },
    assumptions: {
      type: assumptionsType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Assumptions.findById(args.id);
      }
    },
    risks: {
      type: risksType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Risks.findById(args.id);
      }
    },
    team: {
      type: teamType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Team.findById(args.id);
      }
    },
    votes: {
      type: votesType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Votes.findById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLString },
        definition: { type: GraphQLString },
        author: { type: GraphQLString },
        date: { type: GraphQLString },
        summary: { type: GraphQLString },
        overview: { type: GraphQLString },
        approach: { type: GraphQLString }
      },
      resolve(parent, args) {
        let project = new Project({
          name: args.name,
          definition: args.definition,
          author: args.author,
          date: args.date,
          summary: args.summary,
          overview: args.overview,
          approach: args.approach
        });
        return project.save();
      }
    },
    addObjectives: {
      type: objectivesType,
      args: {
        description: { type: GraphQLString },
        projectid: { type: GraphQLID }
      },
      resolve(parent, args) {
        let objectives = new Objectives({
          description: args.description,
          projectid: args.projectid
        });
        return objectives.save();
        /* .then(result => {
            console.log(result);
            return result;
          })
          .catch(err => {
            console.log(err);
            throw err;
          }) */
      }
    },
    addWithinReach: {
      type: withinReachType,
      args: {
        description: { type: GraphQLString },
        projectid: { type: GraphQLID }
      },
      resolve(parent, args) {
        let withinReach = new WithinReach({
          description: args.description,
          projectid: args.projectid
        });
        return withinReach.save();
      }
    },
    addOutOfReach: {
      type: outOfReachType,
      args: {
        description: { type: GraphQLString },
        projectid: { type: GraphQLID }
      },
      resolve(parent, args) {
        let outOfReach = new OutOfReach({
          description: args.description,
          projectid: args.projectid
        });
        return outOfReach.save();
      }
    },
    addDeliverables: {
      type: deliverablesType,
      args: {
        description: { type: GraphQLString },
        projectid: { type: GraphQLID }
      },
      resolve(parent, args) {
        let deliverables = new Deliverables({
          description: args.description,
          projectid: args.projectid
        });
        return deliverables.save();
      }
    },
    addStakeholders: {
      type: stakeholdersType,
      args: {
        area: { type: GraphQLString },
        description: { type: GraphQLString },
        projectid: { type: GraphQLID }
      },
      resolve(parent, args) {
        let stakeholders = new Stakeholders({
          area: args.area,
          description: args.description,
          projectid: args.projectid
        });
        return stakeholders.save();
      }
    },
    addEffort: {
      type: effortType,
      args: {
        task: { type: GraphQLString },
        hours: { type: GraphQLInt },
        cost: { type: GraphQLFloat },
        projectid: { type: GraphQLID }
      },
      resolve(parent, args) {
        let effort = new Effort({
          task: args.task,
          hours: args.hours,
          cost: args.cost,
          projectid: args.projectid
        });
        return effort.save();
      }
    },
    addWorkPlan: {
      type: workPlanType,
      args: {
        description: { type: GraphQLString },
        days: { type: GraphQLInt },
        deliverablesid: { type: GraphQLID },
        projectid: { type: GraphQLID }
      },
      resolve(parent, args) {
        let workPlan = new WorkPlan({
          description: args.description,
          days: args.days,
          deliverablesid: args.deliverablesid,
          projectid: args.projectid
        });
        return workPlan.save();
      }
    },
    addAssumptions: {
      type: assumptionsType,
      args: {
        description: { type: GraphQLString },
        projectid: { type: GraphQLID }
      },
      resolve(parent, args) {
        let assumptions = new Assumptions({
          description: args.description,
          projectid: args.projectid
        });
        return assumptions.save();
      }
    },
    addRisks: {
      type: risksType,
      args: {
        risk: { type: GraphQLString },
        level: { type: GraphQLString },
        contingencyPlan: { type: GraphQLString },
        projectid: { type: GraphQLID }
      },
      resolve(parent, args) {
        let risks = new Risks({
          risk: args.risk,
          level: args.level,
          contingencyPlan: args.contingencyPlan,
          projectid: args.projectid
        });
        return risks.save();
      }
    },
    addTeam: {
      type: teamType,
      args: {
        role: { type: GraphQLString },
        responsible: { type: GraphQLString },
        projectid: { type: GraphQLID }
      },
      resolve(parent, args) {
        let team = new Team({
          role: args.role,
          responsible: args.responsible,
          projectid: args.projectid
        });
        return team.save();
      }
    },
    addVotes: {
      type: votesType,
      args: {
        oneStar: { type: GraphQLFloat },
        twoStar: { type: GraphQLFloat },
        threeStar: { type: GraphQLFloat },
        fourStar: { type: GraphQLFloat },
        fiveStar: { type: GraphQLFloat },
        projectid: { type: GraphQLID }
      },
      resolve(parent, args) {
        let votes = new Votes({
          oneStar: args.oneStar,
          twoStar: args.twoStar,
          threeStar: args.threeStar,
          fourStar: args.fourStar,
          fiveStar: args.fiveStar,
          projectid: args.projectid
        });
        return votes.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
