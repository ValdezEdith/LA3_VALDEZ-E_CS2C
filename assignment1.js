// get grade and remarks  on the score
function getGradeAndRemarks(score) {
    const grade = 
        score >= 97 ? "1.00 Excellent" :
        score >= 94 ? "1.25 Excellent" :
        score >= 91 ? "1.50 Above Average" :
        score >= 88 ? "1.75 Above Average" :
        score >= 85 ? "2.00 Average" :
        score >= 82 ? "2.25 Average" :
        score >= 79 ? "2.50 Below Average" :
        score >= 76 ? "2.75 Below Average" :
        score === 75 ? "3.00 Below Average" :
        score >= 72 ? "4.00 Poor" :
        "5.00 Poor";

    let remarks;
    if (score >= 90) {
        remarks = "HIGH PASS, Candidate for Cum Laude";
    } else if (score >= 80) {
        remarks = "AVERAGE PASS";
    } else if (score >= 75) {
        remarks = "LOW PASS";
    } else {
        remarks = "FAILED, Needs Improvement";
    }

    return { grade, remarks };
}

// execute main
function main() {
    // Prompt user for input
    const input = prompt("Please enter your score:");

    // check the input
    const score = parseFloat(input);
    
    if (isNaN(score) || score < 0 || score > 100) {
        console.log("Invalid input! Please enter a score between 0 and 100.");
        return;
    }


    const { grade, remarks } = getGradeAndRemarks(score);    // grade and remarks  on the input score
    
    // console grade and remarks
    console.log(`Your equivalent Grade is: ${grade}`);
    console.log(`Remarks: ${remarks}`); 
}

main();// running main function
