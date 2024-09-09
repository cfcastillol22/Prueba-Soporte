<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Task List</h1>
        <div v-if="errors" class="alert alert-danger">
            {{ errors }}
        </div>
        <ul class="list-group mb-4">
            <li v-for="task in tasks" :key="task.id"
                class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <h5 class="mb-1">{{ task.title }}</h5>
                    <p class="mb-1">{{ task.description }}</p>
                    <small class="text-muted">Assigned to: {{ task.user.name }}</small>
                </div>
                <div>
                    <button class="btn btn-success btn-sm mr-2" @click="completeTask(task.id)">Complete</button>
                    <button class="btn btn-danger btn-sm" @click="deleteTask(task.id)">Delete</button>
                </div>
            </li>
        </ul>
        <form @submit.prevent="addTask" class="card card-body">
            <div class="form-group">
                <input v-model="newTask.title" class="form-control" placeholder="Task Title" required>
            </div>
            <div class="form-group">
                <input v-model="newTask.description" class="form-control" placeholder="Task Description" required>
            </div>
            <div class="form-group">
                <select v-model="newTask.user_id" class="form-control" required>
                    <option value="" disabled>Seleccione un usuario</option>
                    <option v-for="user in users" :key="user.id" :value="user.id">
                        {{ user.name }}
                    </option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Add Task</button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            newTask: {
                title: '',
                description: '',
                user_id: ''
            },
            errors: null
        };
    },
    computed: {
        ...mapState(['tasks', 'users']) // Simplificado para mapState
    },
    methods: {
        ...mapActions(['fetchTasks', 'fetchUsers', 'addTask', 'completeTask', 'deleteTask']),
        addTask() {
            if (!this.newTask.title || !this.newTask.description || !this.newTask.user_id) {
                alert('Both title and description are required');
                return;
            }

            if (!Number.isInteger(parseInt(this.newTask.user_id))) {
                this.errors = 'El campo "user" debe ser un número válido.';
                return;
            }

            this.errors = null;

            // Se utiliza la acción 'addTask' y luego se limpia el formulario
            this.$store.dispatch('addTask', this.newTask).then(() => {
                this.newTask.title = '';
                this.newTask.description = '';
                this.newTask.user_id = '';
            }).catch(error => {
                console.error('Error completo:', error.response.data); // Verifica la estructura exacta del error
                if (error.response && error.response.data && error.response.data.errors) {
                    const errorMessages = Object.values(error.response.data.errors).flat().join(', ');
                    this.errors = errorMessages;
                } else {
                    this.errors = 'Error agregando la tarea.';
                }
            });
        },
        completeTask(taskId) {
            // Se utiliza la acción 'completeTask'
            this.$store.dispatch('completeTask', taskId).catch(error => {
                this.errors = error.response?.data?.message || 'Error completando la tarea';
            });
        },
        deleteTask(taskId) {
            // Se utiliza la acción 'deleteTask'
            this.$store.dispatch('deleteTask', taskId).catch(error => {
                this.errors = error.response?.data?.message || 'Error eliminando la tarea';
            });
        }
    },
    mounted() {
        this.fetchTasks();
        this.fetchUsers();
    }
};
</script>
