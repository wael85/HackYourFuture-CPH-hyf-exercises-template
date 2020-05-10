class Job{
    constructor(id ,title, description, startDate, endDate){
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate ;
    }
    

}
class Education{
    constructor(id , title ,school , address ,startDate , endDate){
        this.id = id;
        this.title = title;
        this.school = school;
        this.address = address ;
        this.startDate = startDate;
        this.endDate = endDate ;
    }
}
class CV{
    constructor(email){
        this.email = email ;
        this.jobs = [];
        this.educations = [];
    }
    addJob(job){
        this.jobs.push(job)
    }
    removeJob(job) {
         this.jobs.splice(this.jobs.indexOf(job),1);
      }
    
    addEducation(education) {
        this.educations.push(education);
    }
    
    removeEducation(education) {
        this.educations.splice(this.educations.indexOf(education),1)
    }
}
const myCV = new CV ("wael.haded@gmail.com");
const secoundJob = new Job (2,"Secound Job", "was the secound",2001,2002);
myCV.addJob(first = new Job (1,"First Job", "was the first",2000,2001));
myCV.addJob(secoundJob);
myCV.addJob(new Job (3,"Therd Job", "was the third",2001,2003));
myCV.addJob(new Job (4,"Forth Job", "was the forth",2002,2003));
myCV.removeJob(secoundJob);

const secoundEducation = new Education (2,"Secound education","was the secound",2001,2002);
myCV.addEducation(new Education (1,"First education", "was the first",2000,2001));
myCV.addEducation(secoundEducation);
myCV.addEducation(new Education (3,"Therd education", "was the third",2001,2003));
myCV.addEducation(new Education (4,"Forth education" ,"was the forth",2002,2003));
myCV.removeEducation(secoundEducation);
console.log(myCV);

const jobs = document.getElementById("jobs");
const edu = document.getElementById("edu");
const dt = document.createElement('dt');
const dd = document.createElement('dd');
myCV.jobs.forEach((job)=>{
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.innerText = job.title + ":";
    dd.innerText = job.description + ` from ${job.startDate} until ${job.endDate}`;
    jobs.appendChild(dt);
    jobs.appendChild(dd);
});
myCV.educations.forEach((education)=>{
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.innerText = education.title + ":";
    dd.innerText = education.description + ` from ${education.startDate} until ${education.endDate}`;
    edu.appendChild(dt);
    edu.appendChild(dd);
})

