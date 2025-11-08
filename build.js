const studentBtn = document.getElementById("studentBtn");
      const teacherBtn = document.getElementById("teacherBtn");
      const studentForm = document.getElementById("studentForm");
      const teacherForm = document.getElementById("teacherForm");

      studentBtn.addEventListener("click", () => {
        studentBtn.classList.add("active");
        teacherBtn.classList.remove("active");
        studentForm.classList.add("active");
        teacherForm.classList.remove("active");
      });

      teacherBtn.addEventListener("click", () => {
        teacherBtn.classList.add("active");
        studentBtn.classList.remove("active");
        teacherForm.classList.add("active");
        studentForm.classList.remove("active");
      });


    // STUDENT-HOME JS STARTS HERE //
    
    