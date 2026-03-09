let students = JSON.parse(localStorage.getItem("students")) || [];

rendertable();

$('#infoForm').on("submit", function (event) {

    event.preventDefault();

    let sname = $('#name').val().trim();
    let age = $('input[name=studentage]').val().trim();
    let marks = $('input[name=studentMarks]').val().trim();
    let percentage = (marks / 1100) * 100;

    if (sname === "" || age === "" || marks === "") {
        Swal.fire("Error", "Enter Valid Info", "error");
        return;
    }

    if (age < 0 || age > 22) {
        Swal.fire("Invalid Age", "Age must be between 0 and 22", "warning");
        return;
    }

    if (marks < 0 || marks > 1100) {
        Swal.fire("Invalid Marks", "Marks must be between 0 and 1100", "warning");
        return;
    }

    const student = {
        stuName: sname,
        stuAge: age,
        stuMarks: marks,
        stuPercentage: percentage.toFixed(2) + "%"
    };

    // editing using hidden input

    // let editindex = $('#editIndex').val();

    // if (editindex !== "" && editindex !== null) {
    //     $('#editIndex').val("");

    //     Swal.fire({
    //         title: "Update Student?",
    //         icon: "question",
    //         showCancelButton: true,
    //         confirmButtonText: "Yes, Update"
    //     }).then((result) => {

    //         if (result.isConfirmed) {

    //             students[editindex] = student;

    //             localStorage.setItem("students", JSON.stringify(students));

    //             $("#saveBtn").text("Save");
    //             $("#editIndex").val("");

    //             rendertable();

    //             $('#infoForm')[0].reset();

    //             Swal.fire("Updated!", "Student updated successfully", "success");
    //         }

    //     });

    // } else {

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    rendertable();

    this.reset();

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    });

    Toast.fire({
        icon: "success",
        title: "Student Added Successfully"
    });

    // }
});


function rendertable() {

    $('.datarow').remove();

    students.forEach((s, index) => {

        let row = `
        <div class="row datarow mt-2 bg-info d-flex align-items-center rounded-2 py-2">

            <div class="col-2 text-center fw-bold">${s.stuName}</div>
            <div class="col-2 text-center fw-bold">${s.stuAge}</div>
            <div class="col-2 text-center fw-bold">${s.stuMarks}</div>
            <div class="col-3 text-center fw-bold">${s.stuPercentage}</div>

            <div class="col">
                <button class="BTN clone" data-index="${index}">
                <i class="fa-regular fa-clone"></i>
                </button>
            </div>

            <div class="col">
            <button class="BTN edit" data-index="${index}" 
            data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-pen"></i>
            </button>
            </div>

            <div class="col">
                <button class="BTN delete" data-index="${index}">
                <i class="fa-solid fa-trash"></i>
                </button>
            </div>

        </div>
        `;

        $(".tableDiv").append(row);

    });

}


$(document).on('click', '.delete', function () {

    let index = $(this).data('index');

    Swal.fire({
        title: "Are you sure?",
        text: "Student will be deleted",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete"
    }).then((result) => {

        if (result.isConfirmed) {

            students.splice(index, 1);

            localStorage.setItem("students", JSON.stringify(students));

            rendertable();

            Swal.fire("Deleted!", "Student removed", "success");
        }

    });

});

$(document).on('click', '.edit', function () {

    let index = $(this).data('index');
    let studentedit = students[index];

    $('#editName').val(studentedit.stuName);
    $('#editAge').val(studentedit.stuAge);
    $('#editMarks').val(studentedit.stuMarks);

    $('#editIndex').val(index);

});


$(document).on('click', '.clone', function () {

    let index = $(this).data('index');

    let student = { ...students[index] };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    rendertable();

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000
    });

    Toast.fire({
        icon: "success",
        title: "Student Cloned"
    });

});





// only updating through  modal

$('#updateStudent').click(function () {

    let index = $('#editIndex').val();

    let name = $('#editName').val().trim();
    let age = $('#editAge').val().trim();
    let marks = $('#editMarks').val().trim();

    if (sname === "" || age === "" || marks === "") {
        Swal.fire("Error", "Enter Valid Info", "error");
        return;
    }

    if (age < 0 || age > 22) {
        Swal.fire("Invalid Age", "Age must be between 0 and 22", "warning");
        return;
    }

    if (marks < 0 || marks > 1100) {
        Swal.fire("Invalid Marks", "Marks must be between 0 and 1100", "warning");
        return;
    }

    Swal.fire({
        title: "Update Student?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes Update"
    }).then((result) => {

        if (result.isConfirmed) {

            let percentage = (marks / 1100) * 100;

            students[index] = {
                stuName: name,
                stuAge: age,
                stuMarks: marks,
                stuPercentage: percentage.toFixed(2) + "%"
            };

            localStorage.setItem("students", JSON.stringify(students));

            rendertable();

            const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
            modal.hide();

            Swal.fire("Updated!", "Student updated successfully", "success");

        }

    });

});