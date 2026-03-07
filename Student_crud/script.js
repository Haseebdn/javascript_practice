let students = JSON.parse(localStorage.getItem("students")) || [];

$('#infoForm').on("submit", function (event) {

    event.preventDefault();

    let sname = $('#name').val().trim();
    let age = $('input[name=studentage]').val().trim();
    let marks = $('input[name=studentMarks]').val().trim();

    if (sname === "" || age === "" || marks === "") {
        alert("Enter Valid Info");
        return;
    }

    let percentage = (marks / 1100) * 100;

    const student = {
        stuName: sname,
        stuAge: age,
        stuMarks: marks,
        stuPercentage: percentage.toFixed(2) + "%"
    };

    let editindex = $('#editIndex').val().trim();

    if (editindex !== "") {

        students[editindex] = student;

        $("#saveBtn").text("Save");

        $("#editIndex").val("");

    } else {
        students.push(student);
    }

    localStorage.setItem("students", JSON.stringify(students));

    this.reset()
});

