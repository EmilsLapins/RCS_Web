new Vue({
    el: "#app",
    data: {
        tasks: [],
        newTaskContent: ""
    },
    created: function () {
        this.loadData();
    },
    methods: {
        removeTask: function (task) {
            this
            .$http
            .delete('http://localhost:8080/todo/' + task.id)
            .then(function() {
               this.loadData();
            });
        },
        addTask: function () {
            if(this.newTaskContent == ''){
                return false;
            }

            var data = {
                content: this.newTaskContent,
                done: false,
            }
            this
                .$http
                .post('http://localhost:8080/todo', data)
                .then(function() {
                   this.loadData();
                   this.newTaskContent = '';
                });
           
        },
        loadData: function () {
            this
                .$http
                .get('http://localhost:8080/todo/all')
                .then(function (data) {
                    this.tasks = data.body;

                });
        },
        markAsDone: function(task){
            var data = {
                content: task.content,
                done: !task.done,
            }
            this
            .$http
            .patch('http://localhost:8080/todo/' + task.id, data)
            .then(function(data) {
                task.done = !task.done;
            });
        }
    }
});