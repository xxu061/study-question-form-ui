import { createStore } from 'vuex';
const store = createStore({
    state () {
      return {
        recommendations: [{}],
        application: {}
      }
    },
    mutations: {
      updateRecommendations(state: { recommendations: any }, recommendations: any) {
        state.recommendations = recommendations
      },
      updateApplication(state: { application: any }, application: any) {
        state.application = application
      },
    }
  });
  export default store;