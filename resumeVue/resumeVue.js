// var job = {
//     // var dateStart;
//     // var dateDismissal;
//     // var nameCompany;
//     // var position;
//     // var duty;
// };
// var jobs = [];
// var isActive = false;

// alert("Working1");

var resume = new Vue({
    el:'#resume',
    data:{
        isActive: false,
        dateStart: "",
        dateDismissal: "",
        nameCompany: "",
        positionJob: "",
        duty: "",
        jobs: [],
    },
    methods:{
        createJob() {

            var job = {};
            // alert('объект создан');
            job.dateStartJob = this.dateStart;
            job.dateDismissalJob = this.dateDismissal;
            job.nameCompanyJob = this.nameCompany;
            job.positionJobJob = this.positionJob;
            job.dutyJob = this.duty;
            // alert('Поля заполнены');
            this.jobs.push(job);
            // alert('объект добавлен в массив');
            this.isActive = false;
            // alert(this.isActive);

            this.dateStart = "";
            this.dateDismissal = "";
            this.nameCompany = "";
            this.positionJob = "";
            this.duty = "";

            return;
        },
        cancelJob() {
            this.isActive = false;
            // alert(this.isActive);

            this.dateStart = "";
            this.dateDismissal = "";
            this.nameCompany = "";
            this.positionJob = "";
            this.duty = "";
        }
    }
});



// var addJobForm = new Vue({
//     el:'#addJobForm',
//     data:{
//         job:{},
//         jobs:[],
//         // isActive: false,
//     },
//     method:{},
// })