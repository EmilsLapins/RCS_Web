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
        ]
    },
    methods:{
        removeTask: function (task){
            var index = this.tasks.indexOf(task);
            console.log(index);
        }
    }
});