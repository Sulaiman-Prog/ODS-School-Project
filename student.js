// Grab elements
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const pageTitle = document.getElementById("pageTitle");
const pageContent = document.getElementById("pageContent");

// ✅ Sidebar toggle
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");

  // Also toggle the icon between "=" and "☰"
  if (sidebar.classList.contains("collapsed")) {
    toggleBtn.textContent = "☰";
  } else {
    toggleBtn.textContent = "=";
  }
});

// ✅ Sidebar navigation
document.querySelectorAll(".sidebar-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");

    if (page) {
      loadPage(page);
    }
  });
});

// ✅ Page loader function
function loadPage(page) {
  switch (page) {
    case "overview":
      pageTitle.textContent = "📊 Dashboard Overview";
      pageContent.innerHTML = ` <div class="dashboard">
  <!-- Quick Stats Row -->
  <div class="card-row">
    <div class="card">
      <h3>📘 GPA</h3>
      <p>3.8 / 4.0</p>
    </div>
    <div class="card">
      <h3>📅 Attendance</h3>
      <p>85% this semester</p>
    </div>
    <div class="card">
      <h3>📝 Upcoming Tests</h3>
      <p>2 tests next week</p>
    </div>
  </div>

  <!-- Deadlines & Announcements -->
  <div class="card-row">
    <div class="card">
      <h3>📌 Upcoming Deadlines</h3>
      <ul>
        <li class="deadline-list">Math Homework – Sept 25</li>
        <li class="deadline-list">Science Project – Sept 28</li>
        <li class="deadline-list">Essay Draft – Oct 1</li>
      </ul>
    </div>
    <div class="card">
      <h3>📢 Announcements</h3>
      <p>🎉 School Sports Day on Oct 5!</p>
      <p>📢 Library opens till 8PM this week.</p>
    </div>
  </div>

  <!-- Schedule + Quick Links -->
  <div class="card-row">
    <div class="card">
      <h3>📖 Today’s Schedule</h3>
      <ul>
        <li class="deadline-list" >9:00 AM – Math</li>
        <li class="deadline-list" >11:00 AM – English</li>
        <li class="deadline-list" >2:00 PM – Physics Lab</li>
      </ul>
    </div>
    <div class="card">
      <h3>⚡ Quick Links</h3>
      <a href="#" data-page="profile">Profile</a> |
      <a href="#" data-page="messages">Messages</a> |
      <a href="#" data-page="resources">Resources</a>
    </div>
      </div>
    </div> `;
      break;

    case "profile":
      pageTitle.textContent = "👤 My Profile";
      pageContent.innerHTML = `
   <div class="profile-card card">
  <div class="profile-header">
    <img src="images/kid.webp" alt="Profile Picture" class="profile-pic">
    <h2 id="studentName">Eze Wonder</h2>
    <p id="studentID">ID: ODS240105147</p>
    
  </div>

  <div class="profile-info">
    <h3>Personal Information</h3>
    <p> <i class="fa-solid fa-envelope icon-pd-rt"></i>Email: <span id="studentEmail">Ezewonder23@ODS.com</span></p>
    <p><i class="fa-solid fa-phone icon-pd-rt"></i> Phone: <span id="studentPhone">+234 254 8523 558</span></p>
    <p><i class="fa-solid fa-location-dot icon-pd-rt"></i> Address: <span id="studentAddress">14c, Estaport avenue</span></p>
  </div>

  <div class="profile-info">
    <h3>Academic Information</h3>
    <p>Class: <span id="studentClass">SS3</span></p>
    <p>Enrollment Year: <span id="enrollYear">2017</span></p>
    <p>Advisor: <span id="advisor">Mr Calebs</span></p>
  </div>
</div>

  `;
      break;

    case "grades":
      pageTitle.textContent = "📘 My Grades";
      pageContent.innerHTML = `
    <div class="grades-section">
      <div class="grades-summary">
        <h3>Semester Summary</h3>
      <div class="select-container">
      <select class="select-year" id="">
        <option value="20/21">2020/2021</option>
        <option value="21/22">2021/2022</option>
        <option value="22/23">2022/2023</option>
        <option value="23/24">2023/2024</option>
        <option value="24/25">2024/2025</option>
        <option value="25/26">2025/2026</option>
        <option value="26/27">2026/2027</option>
      </select>
      <select class="select-semester" id="">
        <option value="first">1st Semester</option>
        <option value="second">2nd Semester</option>
        <option value="third">3rd Semester</option>
      </select>
    </div>
        <p><strong>Percentage: </strong> 65%</p>
        <p><strong>Grade Average: </strong> B</p>
      </div>

      <div class="grades-table-container">
        <table class="grades-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Credit</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CSC201</td>
              <td>Data Structures</td>
              <td>3</td>
              <td>A</td>
              <td>Passed</td>
            </tr>
            <tr>
              <td>PHY</td>
              <td>Physics</td>
              <td>3</td>
              <td>B+</td>
              <td>Passed</td>
            </tr>
            <tr>
              <td>MAT1</td>
              <td>Discrete Mathematics</td>
              <td>3</td>
              <td>F</td>
              <td>Failed</td>
            </tr>
            <tr>
              <td>GST203</td>
              <td>Entrepreneurship</td>
              <td>2</td>
              <td>B</td>
              <td>Passed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button class="refresh-btn">🔄 Refresh Grades</button>
    </div>
  `;
      break;

   case "calendar":
  pageTitle.textContent = "📅 School Calendar";
  pageContent.innerHTML = `
    <div class="calendar-container">
      <div class="calendar-header">
        <button id="prevMonth">◀</button>
        <h3 id="monthYear"></h3>
        <button id="nextMonth">▶</button>
      </div>
      <div class="calendar-grid" id="calendarGrid"></div>
    </div>

    <div class="events-container">
      <h3>Upcoming Events</h3>
      <ul id="eventsList">
        <li>📘 Midterm Exams — Oct 14–18, 2025</li>
        <li>🏫 Open Day — Oct 26, 2025</li>
        <li>🎓 Graduation — Nov 4, 2025</li>
        <li>🎄 Christmas Break — Dec 20–Jan 3</li>
      </ul>
    </div>
  `;

  const monthYear = document.getElementById("monthYear");
  const calendarGrid = document.getElementById("calendarGrid");
  const prevMonth = document.getElementById("prevMonth");
  const nextMonth = document.getElementById("nextMonth");

  let date = new Date();

  function renderCalendar() {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = date.toLocaleString("default", { month: "long" }) + " " + year;

    calendarGrid.innerHTML = "";
    for (let i = 0; i < firstDay; i++) {
      calendarGrid.innerHTML += `<div class="empty"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const today = new Date();
      const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
      calendarGrid.innerHTML += `<div class="day ${isToday ? "today" : ""}">${day}</div>`;
    }
  }

  prevMonth.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  nextMonth.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();
  break;

   case "messages":
  pageTitle.textContent = "💬 Messages";
  pageContent.innerHTML = `
    <div class="messages-container">
      <div class="chat-sidebar">
        <h3>Chats</h3>
        <ul class="chat-list">
          <li class="chat active" data-chat="1">📢 Announcements</li>
          <li class="chat" data-chat="2">👩‍🏫 Mrs. Johnson</li>
          <li class="chat" data-chat="3">🧑‍🎓 Study Group</li>
          <li class="chat" data-chat="4">🏫 Admin Office</li>
        </ul>
      </div>

      <div class="chat-main">
        <div class="chat-header">
          <h3 id="chatTitle">Announcements</h3>
        </div>
        <div class="chat-messages" id="chatMessages">
          <div class="message teacher">Welcome to ODS! Remember, midterm exams start Oct 14th.</div>
          <div class="message student">Thanks for the info!</div>
        </div>
        <div class="chat-input">
          <input type="text" id="messageInput" placeholder="Type your message..." />
          <button id="sendMessage">Send</button>
        </div>
      </div>
    </div>
  `;

  // Message interactivity
  const chatMessages = document.getElementById("chatMessages");
  const messageInput = document.getElementById("messageInput");
  const sendMessage = document.getElementById("sendMessage");
  const chatList = document.querySelectorAll(".chat");
  const chatTitle = document.getElementById("chatTitle");

  const chatData = {
    1: [
      { sender: "teacher", text: "Welcome to ODS! Remember, midterm exams start Oct 14th." },
      { sender: "student", text: "Thanks for the info!" },
    ],
    2: [
      { sender: "teacher", text: "Good job on your last assignment!" },
      { sender: "student", text: "Thank you, ma!" },
    ],
    3: [
      { sender: "student", text: "Group project meeting today?" },
      { sender: "student", text: "Yes, after lunch!" },
    ],
    4: [
      { sender: "teacher", text: "Fee payment deadlines have been updated." },
      { sender: "student", text: "Got it, thanks!" },
    ],
  };

  let currentChat = "1";

  function renderChat(chatId) {
    chatMessages.innerHTML = "";
    chatData[chatId].forEach(msg => {
      const div = document.createElement("div");
      div.classList.add("message", msg.sender);
      div.textContent = msg.text;
      chatMessages.appendChild(div);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  sendMessage.addEventListener("click", () => {
    const text = messageInput.value.trim();
    if (text) {
      chatData[currentChat].push({ sender: "student", text });
      messageInput.value = "";
      renderChat(currentChat);
    }
  });

  chatList.forEach(chat => {
    chat.addEventListener("click", () => {
      document.querySelector(".chat.active")?.classList.remove("active");
      chat.classList.add("active");
      currentChat = chat.getAttribute("data-chat");
      chatTitle.textContent = chat.textContent;
      renderChat(currentChat);
    });
  });

  renderChat(currentChat);
  break;

    case "resources":
  pageTitle.textContent = "📚 Resources";
  pageContent.innerHTML = `
    <div class="resources-container">
      <h2>Course Resources</h2>
      <p>Find and download materials for your courses.</p>

      <input type="text" id="resourceSearch" placeholder="Search resources..." class="search-input" />

      <div class="resource-list">
        <div class="resource-item">
          <h3>Introduction to Programming</h3>
          <p>Lecture Slides (Week 1)</p>
          <a href="#" class="download-btn">Download</a>
        </div>

        <div class="resource-item">
          <h3>Data Structures</h3>
          <p>Practice Questions & Notes</p>
          <a href="#" class="download-btn">View</a>
        </div>

        <div class="resource-item">
          <h3>Web Development</h3>
          <p>HTML/CSS/JS Guide</p>
          <a href="#" class="download-btn">Download</a>
        </div>

        <div class="resource-item">
          <h3>Database Management</h3>
          <p>SQL Basics & Schema Design</p>
          <a href="#" class="download-btn">View</a>
        </div>
      </div>
    </div>
  `;

  // Simple client-side search filter
  const searchInput = document.getElementById("resourceSearch");
  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    document.querySelectorAll(".resource-item").forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? "block" : "none";
    });
  });
  break;

    default:
      pageTitle.textContent = "Welcome, Student!";
      pageContent.innerHTML =
        "<p>Select an option from the sidebar to get started.</p>";
  }
}
