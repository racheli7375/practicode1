import axios from 'axios';
axios.defaults.baseURL = 'process.env.REACT_APP_API_URL';
axios.interceptors.response.use(
  function(response){
    return response;
  },
  function(error){
    console.log(error)
  }
)
export default {
  getTasks: async () => {
    const result = await axios.get(`/todoitems`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    await axios.post(`/todoitems`,{Name:name,IsComplete:false})
    return {};
  },

  setCompleted: async (id, isComplete) => {
    await axios.put(`/todoitems/${id}?isComplete=${isComplete}`)
  },


  deleteTask:async(id)=>{
    console.log('deleteTask')
    await axios.delete(`/todoitems/${id}`)
  }
};
