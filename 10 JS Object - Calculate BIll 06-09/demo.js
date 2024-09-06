const employee = [
    {
        id:1,
        name:"James",
        days:30,
        salaryId:2
    },
    {
        id:2,
        name:"Nash",
        days:29,
        salaryId:1
    }
]

const salary = [
    {
        salaryId:1,
        gross:{
            base:58000,
            hra:15000
        },
        deduction:{
            tds:5000,
            pf:1500
        }
    },

    {
        salaryId:2,
        gross:{
            base:88000,
            hra:25000
        },
        deduction:{
            tds:10000,
            pf:1500
        }
    }
]

function calculateSalary(){
    let salaries = [];
    employee.forEach(emp=>{
        let salarObject = salary.find(sal=> sal.salaryId == emp.salaryId);
        let gross = salarObject.gross.base + salarObject.gross.hra;
        let deduction = salarObject.deduction.tds + salarObject.deduction.pf;
        let totalSalary = gross-deduction;

        let date = new Date();
        let month = date.getMonth();
        let year = date.getFullYear();
        let noOfDays = new Date(year,month,0).getDate();

        let oneDaySalary = totalSalary/noOfDays;
        let currentSalary = emp.days * oneDaySalary
        salaries.push(currentSalary.toFixed(2));
        // console.log(currentSalary);
        
    })
    return salaries;
}
console.log(calculateSalary());
