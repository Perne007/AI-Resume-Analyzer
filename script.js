function analyzeResume() {

    let resume = document
        .getElementById("resumeText")
        .value
        .toLowerCase();

    let skills = [
        "java",
        "spring boot",
        "microservices",
        "react",
        "angular",
        "aws",
        "docker",
        "kubernetes",
        "kafka",
        "sql",
        "postgresql",
        "redis",
        "git",
        "jenkins",
        "rest api",
        "mongodb"
    ];

    let found = [];
    let missing = [];

    skills.forEach(skill => {

        if (resume.includes(skill)) {
            found.push(skill);
        } else {
            missing.push(skill);
        }

    });

    let score = Math.round(
        (found.length / skills.length) * 100
    );

    let rating = "";

    if (score >= 80) {
        rating = "Excellent ⭐";
    }
    else if (score >= 60) {
        rating = "Good 👍";
    }
    else if (score >= 40) {
        rating = "Average ⚡";
    }
    else {
        rating = "Needs Improvement 📚";
    }

    const progressBar =
        document.getElementById("progressBar");

    progressBar.style.width = score + "%";

    progressBar.innerHTML = score + "%";

    if (score >= 80) {
        progressBar.style.background = "green";
    }
    else if (score >= 60) {
        progressBar.style.background = "orange";
    }
    else {
        progressBar.style.background = "red";
    }

    document.getElementById("result").innerHTML =

        `
        <h2 class="score">
            Resume Score: ${score}% | ATS Rating: ${rating}
        </h2>

        <h3>✅ Found Skills (${found.length})</h3>

        <ul>
            ${found.map(skill =>
                `<li>${skill}</li>`
            ).join("")}
        </ul>

        <h3>❌ Missing Skills (${missing.length})</h3>

        <ul>
            ${missing.map(skill =>
                `<li>${skill}</li>`
            ).join("")}
        </ul>

        <div class="suggestion-box">

            <h3>📈 Suggestions</h3>

            <p>
                To improve your ATS score,
                consider learning:
            </p>

            <strong>
                ${missing.length > 0
                    ? missing.join(", ")
                    : "Excellent! No missing skills detected."}
            </strong>

        </div>

        <br>

        <div class="suggestion-box">

            <h3>💼 Resume Summary</h3>

            <p>
                Your resume currently matches
                <strong>${found.length}</strong>
                out of
                <strong>${skills.length}</strong>
                industry-relevant skills.
            </p>

            <p>
                ATS Compatibility:
                <strong>${score}%</strong>
            </p>

        </div>
    `;
}