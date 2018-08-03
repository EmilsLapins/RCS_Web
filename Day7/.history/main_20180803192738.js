new Vue ({
    el: "#app",
    data: {
        tasks:[
            {
                content:"Learn Vue JS",
                done: false,

            },
            {
                content:"Go Home",
                done:false,
            },
            {
                content:"Code!!!",
                done:false,
            },
        ],
        newTaskContent: ""
    },
    methods:{
        removeTask: function (task){
            var index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
            

        },
        addTask: function(){
            var data = {
                content: this.newTaskContent,
                done: false,
            }
            this.tasks.push(data);
        },
    }
});