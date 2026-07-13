function showPage(career){

document.getElementById("homePage").style.display="none";
document.getElementById("careerPage").style.display="block";

let content=document.getElementById("careerContent");

const careers = {

engineering: `
<h1>🏗 Engineering</h1>

<h2>After 10th</h2>
<ul>
<li>Intermediate MPC</li>
<li>Diploma Polytechnic</li>
</ul>

<h2>B.Tech Branches</h2>
<ul>
<li>CSE (Computer Science Engineering)</li>
<li>ECE (Electronics & Communication Engineering)</li>
<li>EEE (Electrical & Electronics Engineering)</li>
<li>Mechanical Engineering</li>
<li>Civil Engineering</li>
<li>AI & Data Science</li>
<li>Artificial Intelligence & Machine Learning</li>
<li>Cyber Security</li>
<li>Information Technology</li>
<li>Aerospace Engineering</li>
</ul>

<h2>Specializations</h2>
<ul>
<li>Cloud Computing</li>
<li>DevOps</li>
<li>Data Science</li>
<li>Machine Learning</li>
<li>Full Stack Development</li>
<li>Cyber Security</li>
</ul>

<h2>Career Opportunities</h2>
<ul>
<li>Software Engineer</li>
<li>Cloud Engineer</li>
<li>DevOps Engineer</li>
<li>AI Engineer</li>
<li>Data Scientist</li>
</ul>
`,

medical: `
<h1>🩺 Medical</h1>

<h2>After 10th</h2>
<ul>
<li>Intermediate BiPC</li>
</ul>

<h2>Courses</h2>
<ul>
<li>MBBS</li>
<li>BDS</li>
<li>BAMS</li>
<li>BHMS</li>
<li>B.Pharmacy</li>
<li>Nursing</li>
<li>BPT</li>
<li>Veterinary Science</li>
</ul>

<h2>Specializations</h2>
<ul>
<li>Cardiology</li>
<li>Neurology</li>
<li>Dermatology</li>
<li>Orthopedics</li>
<li>Pediatrics</li>
</ul>

<h2>Career Opportunities</h2>
<ul>
<li>Doctor</li>
<li>Dentist</li>
<li>Pharmacist</li>
<li>Nurse</li>
</ul>
`,

commerce: `
<h1>💼 Commerce</h1>

<h2>Intermediate Groups</h2>
<ul>
<li>MEC</li>
<li>CEC</li>
</ul>

<h2>Courses</h2>
<ul>
<li>B.Com General</li>
<li>B.Com Computers</li>
<li>BBA</li>
<li>CA</li>
<li>CS</li>
<li>CMA</li>
</ul>

<h2>Specializations</h2>
<ul>
<li>Finance</li>
<li>Accounting</li>
<li>Marketing</li>
<li>Human Resources</li>
<li>Business Analytics</li>
</ul>

<h2>Career Opportunities</h2>
<ul>
<li>Accountant</li>
<li>Bank Officer</li>
<li>Financial Analyst</li>
<li>Business Analyst</li>
</ul>
`,

degree: `
<h1>🎓 Degree</h1>

<h2>Popular Courses</h2>
<ul>
<li>B.Sc Computer Science</li>
<li>B.Sc Mathematics</li>
<li>BCA</li>
<li>BBA</li>
<li>B.Com</li>
<li>BA</li>
</ul>

<h2>Higher Studies</h2>
<ul>
<li>MBA</li>
<li>MCA</li>
<li>M.Sc</li>
<li>M.Com</li>
<li>MA</li>
</ul>

<h2>Career Opportunities</h2>
<ul>
<li>Software Developer</li>
<li>Teacher</li>
<li>Business Analyst</li>
<li>Government Employee</li>
</ul>
`

};

content.innerHTML = careers[career];
}

function goHome(){
document.getElementById("careerPage").style.display="none";
document.getElementById("homePage").style.display="block";
}