<template>
  <div>
    <p>专业小助手</p>
    <input
                    type="text"
                    class="form-control"
                    v-model="searchText"
                    @input="handleInput"
                    placeholder=""
                    required 
                  >
    <div v-if="searchText">
      <div>
        <table class="table">
  <thead>
    <tr >
      <th scope="col"></th>
      <th scope="col">专业名称</th>
      <th scope="col">学校</th>
      <th scope=col>学位</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(major, autoCompleteIndex) in filteredItems(majors, searchText)" :key="autoCompleteIndex">
      <th scope="row"><input
                      class="form-check-input"
                      type="checkbox"
                      :id="'checkbox-' + index + '-' + major"
                      :value="major"
                      v-model="selectedMajors"/></th>
      <td>{{major.name}}</td>
      <td>{{major.schoolName}}</td>
      <td>{{ major.degree }}</td>
    </tr>
  </tbody>
        </table>
      </div>
      <div>
        <p>已选择的专业:</p>
        <ul>
          <li v-for="major in selectedMajors" :key="major.name">{{ major.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, defineProps } from 'vue'; // Changed to use onMounted instead of mounted
import { useQuestionService } from '../plugin/QuestionPlugin';

export default {
  props: {
    existingSelectedMajors: {
      type: Array,
      default: () => []
    },
    message: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const questionService = useQuestionService();
    const searchText = ref('');
    const selectedMajors = ref([]);
    const majors = ref([]);
    const groupedMajors = ref([]);

    async function fetchData() {
      const data = await questionService.getMajors();
      majors.value = data;
      //groupedMajors.value = groupedData(); // Call groupedData after setting majors
    }

    watch(selectedMajors, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        emit('notify', newValue);
      }
    });

    function groupedData() {
      // Group the data based on the 'name' property
      return majors.value.reduce((groups, item) => {
        const groupName = item.name;
        if (!groups[groupName]) {
          groups[groupName] = [];
        }
        groups[groupName].push(item);
        return groups;
      }, {});
    }
    const filteredItems = (options, text) => {
      if(text){
        return options.filter(item =>
          item.name.toLowerCase().includes(text.toLowerCase())
        );
      }
    };
    onMounted(fetchData); // Call fetchData when component is mounted

    if(props.existingSelectedMajors){
      selectedMajors.value = props.existingSelectedMajors;
    }

    return {
      groupedMajors,
      majors,
      selectedMajors,
      filteredItems,
      searchText
    };
  },
};
</script>