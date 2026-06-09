let selectedSemesters = 0;

function selectYear(semesters) {

    selectedSemesters = semesters;

    const container =
        document.getElementById("semesterContainer");

    container.innerHTML = "";

    document
        .querySelectorAll(".year-card")
        .forEach(card =>
            card.classList.remove("active")
        );

    event.currentTarget.classList.add("active");

    for (let i = 1; i <= semesters; i++) {

        container.innerHTML += `

        <div class="semester-card">

            <h3>Semester ${i}</h3>

            <input
                type="number"
                min="0"
                max="10"
                step="0.01"
                placeholder="Enter SGPA"
                class="sgpa-input"
            >

        </div>

        `;
    }

    document.getElementById("statusBox")
        .innerHTML =
        `📚 ${semesters} Semester(s) Selected`;

    document.getElementById("messageBox")
        .innerHTML =
        "Enter all SGPA values and click Calculate CGPA.";
}

function calculateCGPA() {

    const inputs =
        document.querySelectorAll(".sgpa-input");

    if (inputs.length === 0) {

        alert("Please select your year first.");

        return;
    }

    let total = 0;
    let count = 0;

    for (let input of inputs) {

        let value =
            parseFloat(input.value);

        if (isNaN(value)) {

            alert("Please fill all semester SGPAs.");

            return;
        }

        if (value < 0 || value > 10) {

            alert("SGPA must be between 0 and 10.");

            return;
        }

        total += value;
        count++;
    }

    const cgpa =
        (total / count).toFixed(2);

    const percentage =
        (cgpa * 9.5).toFixed(2);

    let grade = "";
    let message = "";

    if (cgpa >= 9) {

        grade = "O";
        message =
            "🏆 Outstanding Performance! Keep dominating.";

    }

    else if (cgpa >= 8) {

        grade = "A+";
        message =
            "🎉 Excellent Academic Performance.";

    }

    else if (cgpa >= 7) {

        grade = "A";
        message =
            "👍 Very Good Performance.";

    }

    else if (cgpa >= 6) {

        grade = "B+";
        message =
            "📚 Good Performance. You can push higher.";

    }

    else if (cgpa >= 5.5) {

        grade = "B";
        message =
            "⚠️ Average Performance. Focus on improvement.";

    }

    else {

        grade = "F";
        message =
            "❌ Needs Improvement. Don't give up.";

    }

    document.getElementById("cgpaResult")
        .innerHTML =
        cgpa;

    document.getElementById("gradeResult")
        .innerHTML =
        grade;

    document.getElementById("percentageResult")
        .innerHTML =
        percentage + "%";

    document.getElementById("messageBox")
        .innerHTML =
        message;

    document.getElementById("statusBox")
        .innerHTML =
        "✅ Calculation Complete";
}

function resetData() {

    document.getElementById("semesterContainer")
        .innerHTML = "";

    document.getElementById("cgpaResult")
        .innerHTML = "--";

    document.getElementById("gradeResult")
        .innerHTML = "--";

    document.getElementById("percentageResult")
        .innerHTML = "--";

    document.getElementById("messageBox")
        .innerHTML =
        "Enter your SGPA to generate your academic summary.";

    document.getElementById("statusBox")
        .innerHTML =
        "✨ Ready to Calculate";

    document
        .querySelectorAll(".year-card")
        .forEach(card =>
            card.classList.remove("active")
        );

    selectedSemesters = 0;
}