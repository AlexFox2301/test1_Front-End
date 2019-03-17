var Job {
    var dateStart;
    var dateDismissal;
    var nameCompany;
    var position;
    var duty;
}

var jobs = [];


var resume = new Vue({
    el: '#resume',
    data:{
        jobs,
        isActive: true,
    },
    method:{
        createJob(){
            alert("yes");
            isActive = false
        },
    }
})