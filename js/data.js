/* ===== Content (verified from the three repositories) ===== */
var PROFILE = {
  github: "https://github.com/rawinan-txt",
  linkedin: "https://www.linkedin.com/in/rawinan-bunsai-613912443",
  email: "rawinanbunsai@gmail.com"
};

var SKILLS = [
  {t:"Programming", tags:["Python","Java"]},
  {t:"Web Development", tags:["HTML","CSS","JavaScript"]},
  {t:"Database", tags:["MySQL","ER / EER Modelling","Relational Database Design"]},
  {t:"Analysis & Documentation", tags:["Business Process Analysis","Business Rules","Technical Documentation"]},
  {t:"Tools", tags:["Git","GitHub","VS Code","AI Tools"]}
];

var REPO_BASE = "https://github.com/rawinan-txt/";
var PROJECTS = [
  {
    id:"student-life-manager", kind:"individual", type:"Individual Project",
    name:"Student Life Manager",
    desc:"A web application that brings a university student's schedule, finances, study plans and GPA planning into one place. It replaces scattered notes and spreadsheets with a single dashboard that works offline in the browser. I built it to practise web development while making something students can actually use.",
    role:"Sole developer. I planned the features, designed the interface and wrote the application with HTML, CSS and JavaScript.",
    tags:[["Languages",["HTML","CSS","JavaScript"]],["Storage",["Browser localStorage"]],["Tools",["Git","GitHub Pages","AI-assisted development"]]],
    github:REPO_BASE+"student-life-manager",
    demo:"https://rawinan-txt.github.io/student-life-manager/",
    overview:[
      "Student Life Manager helps university students manage academic and personal activities in one place. It combines a dashboard, schedule, finance tracker, study planner and GPA planner in a single web page.",
      "It started as a personal learning project to explore web application development and practical problem solving. It needs no installation: open the page and start using it. Data is saved in the browser."
    ],
    features:[
      "Dashboard with an overview of daily activity and progress.",
      "Schedule for classes, tasks, exams and important events, with a calendar view.",
      "Finance tracker for income and expenses with custom categories, a monthly budget and a six-month income versus expense chart.",
      "Study plans with subjects, planned sessions, exam countdowns, a focus timer with Pomodoro presets and a weekly study chart.",
      "GPA planner to calculate GPA and plan a target.",
      "English and Thai interface, light and dark theme, and CSV export."
    ],
    techGroups:[
      ["Programming languages",["HTML","CSS","JavaScript (ES6+)"]],
      ["Frontend",["Single-page app without a framework","Hash-based routing","Responsive layout","Light and dark theming","English and Thai language switch"]],
      ["Backend",["None. The app runs fully in the browser."]],
      ["Database and storage",["Browser localStorage"]],
      ["APIs",["Web Notifications API for study reminders"]],
      ["Development tools",["Git","GitHub","GitHub Pages","AI-assisted development tools"]]
    ],
    resp:[
      "Decided what the app should do and split it into five areas: dashboard, schedule, finance, study and GPA.",
      "Designed the interface and the light, dark and bilingual experience.",
      "Wrote all of the HTML, CSS and JavaScript, including the charts, timer and local data storage.",
      "Published the project on GitHub and set up the live demo with GitHub Pages.",
      "Used AI-assisted tools to support coding, debugging and UI improvements."
    ],
    note:"Data is stored only in the browser, so clearing site data removes it."
  },
  {
    id:"starbucks-database-systems", kind:"team", type:"Team Project",
    name:"Starbucks Database Systems",
    desc:"A relational database design for a Starbucks-style beverage ordering and Starbucks Rewards membership system, made for ITDS 221 Database Management Systems at the Faculty of ICT, Mahidol University. It turns three business processes, ordering, inventory and membership, into business rules, ER/EER diagrams, a third normal form schema and a data dictionary. The repository documents the design and does not contain executable SQL.",
    role:"One of five group members who produced the Phase 2 database design report.",
    tags:[["Design",["ER/EER (Chen)","Relational schema","3NF","Data dictionary"]],["Tools",["Git","GitHub"]]],
    github:REPO_BASE+"Starbucks-Database-Systems",
    demo:"",
    image:{src:"assets/eerd-improved.png",alt:"Improved ERD/EERD diagram of the Starbucks database design",caption:"Improved ERD/EERD from the project report",href:REPO_BASE+"Starbucks-Database-Systems/blob/main/diagrams/eerd-improved.png"},
    extraLink:{label:"Project report (PDF)", href:REPO_BASE+"Starbucks-Database-Systems/blob/main/docs/project-report.pdf"},
    overview:[
      "This is the Phase 2 project for ITDS 221 Database Management Systems. The group studied how a customer orders drinks and how members collect and redeem points in Starbucks Rewards, then designed the database behind those processes.",
      "The system covers three business processes: ordering beverages, managing inventory, and the Starbucks Rewards membership. The report is written in Thai and was completed by a group of five students."
    ],
    features:[
      "Business process analysis for beverage ordering, inventory management and the rewards membership.",
      "Business rules written out for the whole system.",
      "ER/EER diagram in Chen notation, plus an improved ERD/EERD with the reasons for each change.",
      "Transform mapping from the EER model to tables in eight steps.",
      "Relational schema, followed by the schema in third normal form.",
      "Data dictionary describing every attribute of every table."
    ],
    techGroups:[
      ["Programming languages",["None. This project is database design and documentation."]],
      ["Database",["Relational model","ER/EER diagrams (Chen notation)","Transform mapping (8 steps)","Relational schema","Third normal form (3NF)","Data dictionary"]],
      ["Tables in the data dictionary",["ORDER","ORDER LINE","PRODUCT","BEVERAGE","BAKERY","PAYMENT","RECEIPT","CUSTOMER","MEMBER","EMPLOYEE","BRANCH","STOCK ITEM"]],
      ["Development tools",["Git","GitHub","PDF report"]]
    ],
    resp:[
      "Worked in a team of five on the Phase 2 database design report for ITDS 221."
    ],
    note:"The repository includes the original report, three diagram images and the data dictionary text. It does not include SQL scripts or sample data."
  },
  {
    id:"condoflow", kind:"team", type:"Team Project",
    name:"CondoFlow",
    desc:"An interactive web prototype of a condominium management system that connects admins, owners, tenants and general users. It covers units, lease contracts, invoices and payment checking, repair requests, parcels, announcements, reports and an audit log. It runs in the browser with sample data and has no real backend.",
    role:"One of six team members. Listed in the team README as Database & Data Analytics Engineer, working on the data models, the reports and audit log, and the parcel handover module.",
    tags:[["Languages",["TypeScript"]],["Frontend",["React","Vite","Tailwind CSS","Recharts"]],["Tools",["Git","GitHub"]]],
    github:REPO_BASE+"CondoFlow",
    demo:"",
    overview:[
      "CondoFlow is a high-fidelity, clickable prototype of a condominium unit and tenant management system, written in Thai. It models four user roles (admin, owner, tenant and general user) and the work they do together, from leases and billing to repairs and parcels.",
      "The prototype keeps its sample data in the browser and simulates loading time, so every screen can be tried without a server. It was built by a team of six; the project README describes the work as split by module, and my modules are listed below."
    ],
    features:[
      "Four user roles with a role and permission matrix.",
      "Units, owners, tenants and lease contracts, with a rule that blocks deleting a unit that still has an active lease.",
      "Invoices, payment submission with a slip, and an admin queue to approve or reject payments.",
      "Repair requests on a Kanban board and a table view.",
      "Parcel logging with a six-digit pickup code and QR code for handover.",
      "Reports in five tabs (occupancy, revenue, contracts, repairs and parcels) built with Recharts, with CSV export.",
      "A read-only audit log and a transaction history that can be exported to CSV.",
      "Responsive layout with light and dark mode."
    ],
    techGroups:[
      ["Programming languages",["TypeScript"]],
      ["Frontend",["React","Vite","Tailwind CSS","Recharts (charts)","Lucide React (icons)","Canvas Confetti","Hash-based routing","Responsive layout","Light and dark theme"]],
      ["Backend",["None. This is a front-end prototype."]],
      ["Database and storage",["Browser localStorage with sample data"]],
      ["Development tools",["Git","GitHub"]]
    ],
    resp:[
      "Designed the data models for the system, such as units, invoices, parcels and audit log entries.",
      "Built the reports and analytics screens with five tabs of Recharts charts.",
      "Worked on the audit log, which is read-only in the interface, and on the transaction history.",
      "Worked on the parcel module: logging inbound parcels, pickup codes, QR codes and handover."
    ],
    note:"This is a prototype. Data is sample data stored in the browser, and there is no real database or server."
  }
];
