const projectStatus = {
  PENDING: {
    description: 'Pending Execution',
  },
  SUCCESS: {
    description: 'Executed Successfully',
  },
  FAILURE: {
    description: 'Execution Failed',
  },
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(idea) {
    this.ideas.push(idea);
  }

  unpin(idea) {
    let index = this.ideas.indexOf(idea);

    this.ideas.splice(index, 1);
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let count = this.count();
    let formattedStr = `${this.title} has ${count} idea(s)
`;

    this.ideas.forEach((idea) => {
      formattedStr += `${idea.title} (${idea.status.description}) - ${idea.description}
`;
    });

    return formattedStr;
  }
}
