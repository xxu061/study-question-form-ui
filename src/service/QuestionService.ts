export default class QuestionService  {
    public url = "http://http://123.57.174.186/api/";

    public async createApplication(application: any) {
      return await (await fetch(this.url + 'QuestionForm/createApplication', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
      })).json();

    }

    public async answerQuestion(application: any) {
      return await (await fetch(this.url + 'Question/answerQuestions', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(application)
      })).json();
    }

    public async getInitialQuestions(){
      return await fetch(this.url + 'Question/initialQuestions', {
          method: "GET",
          headers: { "Content-Type": "application/json" }
      });
    }

    public async getMajorSuggestions(criteria: string){
      return await fetch(this.url + 'Question/majorSuggestions?criteria=' + criteria, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
      });
    }

    public async getMajors(){
      return (await fetch(this.url + 'Question/majors', {
          method: "GET",
          headers: { "Content-Type": "application/json" }
      })).json();
    }

    public async getPaths(application: any) {
      return await (await fetch(this.url + 'QuestionForm/path', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(application)
      })).json();
    }

    public async updateApplication(application: any) {
      return await (await fetch(this.url + 'QuestionForm/updateApplication', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(application)
      })).json();
    }

    public async choosePath(application: any) {
      return await (await fetch(this.url + 'Question/choosePath', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(application)
      })).json();
    }

    public async getApplication(id: any) {
      return await (await fetch(this.url + 'QuestionForm/getApplication?id=' + id, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
      })).json();
    }

    public async getStudyProgrames(application: any) {
      return await (await fetch(this.url + 'QuestionForm/studyPrograms', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(application)
      })).json();
    }

    
  }

  
