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

    const student = {
        stuName: sname,
        stuAge: age,
        stuMarks: marks,
        stuPercentage: percentage.toFixed(2) + "%"
    };

    let editindex = $('#editIndex').val().trim();

    if (editindex !== "") {

        Swal.fire({
            title: "Update Student?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Update"
        }).then((result) => {

            if (result.isConfirmed) {

                students[editindex] = student;

                localStorage.setItem("students", JSON.stringify(students));

                $("#saveBtn").text("Save");
                $("#editIndex").val("");

                rendertable();

                $('#infoForm')[0].reset();

                Swal.fire("Updated!", "Student updated successfully", "success");
            }

        });

    } else {

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
    }

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
                <button class="BTN edit" data-index="${index}">
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

    $('#name').val(studentedit.stuName);
    $("input[name='studentage']").val(studentedit.stuAge);
    $("input[name='studentMarks']").val(studentedit.stuMarks);

    $('#editIndex').val(index);
    $("#saveBtn").text("Update");

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