new Vue ({
    el: "#app",
    data: {
        tasks:[ ],
        newTaskContent: ""
    },
    created: function(){
        this.$http.get('http://localhost:8080/todo/all')  
    },
    methods:{
        removeTask: function (task){
            var index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
            

        },
        addTask: function() {
            var data = {
                content: this.newTaskContent,
                done: false,
            }
            this.tasks.push(data);
            this.newTaskContent = '';
        },
    }
});