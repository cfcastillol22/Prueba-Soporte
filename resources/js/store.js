import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [],
        users: [],
    },
    mutations: {
        ADD_TASK(state, task) {
            state.tasks.push(task);
        },
        UPDATE_TASK(state, updatedTask) {
            const index = state.tasks.findIndex((t) => t.id === updatedTask.id);
            if (index !== -1) {
                Vue.set(state.tasks, index, updatedTask);
            }
        },
        DELETE_TASK(state, taskId) {
            state.tasks = state.tasks.filter((t) => t.id !== taskId);
        },
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_TASKS(state, tasks) {
            state.tasks = tasks;
        },
    },
    actions: {
        addTask({ commit }, task) {
            axios
                .post("/tasks", task)
                .then((response) => {
                    console.log(response.data);
                    commit("ADD_TASK", response.data.data);
                })
                .catch((error) => {
                    return Promise.reject(error);
                });
        },
        updateTask({ commit }, task) {
            axios
                .put(`/tasks/${task.id}`, task)
                .then((response) => {
                    commit("UPDATE_TASK", response.data);
                })
                .catch((error) => {
                    return Promise.reject(error);
                });
        },
        deleteTask({ commit }, taskId) {
            axios
                .delete(`/tasks/${taskId}`)
                .then(() => {
                    commit("DELETE_TASK", taskId);
                })
                .catch((error) => {
                    return Promise.reject(error);
                });
        },
        async fetchTasks({ commit }) {
            try {
                const response = await axios.get("/tasks");
                commit("SET_TASKS", response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
                return await Promise.reject(error);
            }
        },
        async fetchUsers({ commit }) {
            try {
                const response = await axios.get("/api/users");
                commit("SET_USERS", response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
                return await Promise.reject(error);
            }
        },
    },
    getters: {
        tasks: (state) => state.tasks,
        users: (state) => state.users,
    },
});
