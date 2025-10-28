import React from 'react'

const Home = () => {
    return (
        <>



  
    <body className="bg-body-bg">
        
    
        <div className="preloader" id="preloader">
            <div className="preloader">
                <div className="waviy position-relative">
                    <span className="d-inline-block">F</span>
                    <span className="d-inline-block">I</span>
                    <span className="d-inline-block">L</span>
                    <span className="d-inline-block">A</span>
                </div>
            </div>
        </div>

        <div className="sidebar-area" id="sidebar-area">
            <div className="logo position-relative d-flex align-items-center justify-content-between">
                <a href="index.html" className="d-block text-decoration-none position-relative">
                    <img src="assets/images/logo-icon.png" alt="logo-icon" />
                    <span className="logo-text text-secondary fw-semibold">Fila</span>
                </a> 
                <button className="sidebar-burger-menu-close bg-transparent py-3 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y" id="sidebar-burger-menu-close">
                    <span className="border-1 d-block for-dark-burger" style="border-bottom: 1px solid #475569; height: 1px; width: 25px; transform: rotate(45deg);"></span>
                    <span className="border-1 d-block for-dark-burger" style="border-bottom: 1px solid #475569; height: 1px; width: 25px; transform: rotate(-45deg);"></span>
                </button>
                <button className="sidebar-burger-menu bg-transparent p-0 border-0" id="sidebar-burger-menu">
                    <span className="border-1 d-block for-dark-burger" style="border-bottom: 1px solid #475569; height: 1px; width: 25px;"></span>
                    <span className="border-1 d-block for-dark-burger" style="border-bottom: 1px solid #475569; height: 1px; width: 25px; margin: 6px 0;"></span>
                    <span className="border-1 d-block for-dark-burger" style="border-bottom: 1px solid #475569; height: 1px; width: 25px;"></span>
                </button>
            </div>

            <aside id="layout-menu" className="layout-menu menu-vertical menu active" data-simplebar>
                <ul className="menu-inner">
                    <li className="menu-title small text-uppercase">
                        <span className="menu-title-text">MAIN</span>
                    </li>
                    <li className="menu-item open">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">dashboard</span>
                            <span className="title">Dashboard</span>
                            <span className="count">11</span>
                        </a>
                
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="index.html" className="menu-link active">
                                    E-Commerce
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="crm.html" className="menu-link">
                                    CRM
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="project-management.html" className="menu-link">
                                    Project Management
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="lms.html" className="menu-link">
                                    LMS
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="help-desk.html" className="menu-link">
                                    Help Desk
                                    <span className="new tag">Hot</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="hr-management.html" className="menu-link">
                                    HR Management
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="school.html" className="menu-link">
                                    School
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="marketing.html" className="menu-link">
                                    Marketing
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="analytics.html" className="menu-link">
                                    Analytics
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="hospital.html" className="menu-link">
                                    Hospital
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="finance.html" className="menu-link">
                                    Finance
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-title small text-uppercase">
                        <span className="menu-title-text">APPS</span>
                    </li>

                    <li className="menu-item">
                        <a href="to-do-list.html" className="menu-link">
                            <span className="material-symbols-outlined menu-icon">ballot</span>
                            <span className="title">To Do List</span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="calendar.html" className="menu-link">
                            <span className="material-symbols-outlined menu-icon">calendar_today</span>
                            <span className="title">Calendar</span>
                        </a>
                    </li>
                    
                    <li className="menu-item">
                        <a href="contacts.html" className="menu-link">
                            <span className="material-symbols-outlined menu-icon">perm_contact_calendar</span>
                            <span className="title">Contacts</span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="chat.html" className="menu-link">
                            <span className="material-symbols-outlined menu-icon">chat</span>
                            <span className="title">Chat</span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">email</span>
                            <span className="title">Email</span>
                            <span className="count new bg-success-40 text-success-50">3</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="inbox.html" className="menu-link">
                                    Inbox
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="compose.html" className="menu-link">
                                    Compose
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="read-email.html" className="menu-link">
                                    Read
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="kanban-board.html" className="menu-link">
                            <span className="material-symbols-outlined menu-icon">keyboard_command_key</span>
                            <span className="title">Kanban Board</span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">insert_drive_file</span>
                            <span className="title">File Manager</span>
                            <span className="count new bg-danger-40 text-danger-50">7</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="my-drive.html" className="menu-link">
                                    My Drive
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="assets.html" className="menu-link">
                                    Assets
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="projects-file.html" className="menu-link">
                                    Projects
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="personal.html" className="menu-link">
                                    Personal
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="applications.html" className="menu-link">
                                    Applications
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="documents.html" className="menu-link">
                                    Documents
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="media.html" className="menu-link">
                                    Media
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-title small text-uppercase">
                        <span className="menu-title-text">PAGES</span>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">shopping_cart</span>
                            <span className="title">E-Commerce</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="products-grid.html" className="menu-link">
                                    Products Grid
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="products-list.html" className="menu-link">
                                    Products List
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="product-details.html" className="menu-link">
                                    Product Details
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="create-product.html" className="menu-link">
                                    Create Product
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="edit-product.html" className="menu-link">
                                    Edit Product
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="cart.html" className="menu-link">
                                    Cart
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="checkout.html" className="menu-link">
                                    Checkout
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="orders.html" className="menu-link">
                                    Orders
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="order-details.html" className="menu-link">
                                    Order Details
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="create-order.html" className="menu-link">
                                    Create Order
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="order-tracking.html" className="menu-link">
                                    Order Tracking
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="customers.html" className="menu-link">
                                    Customers
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="customer-details.html" className="menu-link">
                                    Customer Details
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="categories.html" className="menu-link">
                                    Categories
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="create-category.html" className="menu-link">
                                    Create Category
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="edit-category.html" className="menu-link">
                                    Edit Category
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="sellers.html" className="menu-link">
                                    Sellers
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="seller-details.html" className="menu-link">
                                    Seller Details
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="create-seller.html" className="menu-link">
                                    Create Seller
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="reviews.html" className="menu-link">
                                    Reviews
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="refunds.html" className="menu-link">
                                    Refunds
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">handshake</span>
                            <span className="title">CRM</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="contacts-crm.html" className="menu-link">
                                    Contacts
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="create-contact.html" className="menu-link">
                                    Create Contact
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="customers-crm.html" className="menu-link">
                                    Customers
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="leads.html" className="menu-link">
                                    Leads
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="create-lead.html" className="menu-link">
                                    Create Lead
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="deals.html" className="menu-link">
                                    Deals
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">description</span>
                            <span className="title">Project Management</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="project-overview.html" className="menu-link">
                                    Project Overview
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="projects-list.html" className="menu-link">
                                    Projects List
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="create-project.html" className="menu-link">
                                    Create Project
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="clients.html" className="menu-link">
                                    Clients
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="teams.html" className="menu-link">
                                    Teams
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="kanban-board-project.html" className="menu-link">
                                    Kanban Board
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="users.html" className="menu-link">
                                    Users
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="create-user.html" className="menu-link">
                                    Create User
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">auto_stories</span>
                            <span className="title">LMS</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="courses-list.html" className="menu-link">
                                    Courses List
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="course-details.html" className="menu-link">
                                    Course Details
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="create-course.html" className="menu-link">
                                    Create Course
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="edit-course.html" className="menu-link">
                                    Edit Course
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="instructors.html" className="menu-link">
                                    Instructors
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">support</span>
                            <span className="title">Help Desk</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="tickets.html" className="menu-link">
                                    Tickets
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="ticket-details.html" className="menu-link">
                                    Ticket Details
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="agents.html" className="menu-link">
                                    Agents
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="reports.html" className="menu-link">
                                    Reports
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">clinical_notes</span>
                            <span className="title">HR Management</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="employee-list.html" className="menu-link">
                                    Employee List
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="add-new-employee.html" className="menu-link">
                                    Add New Employee
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="employee-leave.html" className="menu-link">
                                    Employee Leave
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="add-leave.html" className="menu-link">
                                    Add Leave
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="school-attendance.html" className="menu-link">
                                    Attendance
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="departments.html" className="menu-link">
                                    Departments
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="add-departments.html" className="menu-link">
                                    Add Departments
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="holidays.html" className="menu-link">
                                    Holidays
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="employee-salary.html" className="menu-link">
                                    Employee Salary
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="create-payslip.html" className="menu-link">
                                    Create Payslip
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">school</span>
                            <span className="title">School</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="student-list.html" className="menu-link">
                                    Student List
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="add-student.html" className="menu-link">
                                    Add Student
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="teacher-list.html" className="menu-link">
                                    Teacher List
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="add-teacher.html" className="menu-link">
                                    Add Teacher
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="staff-list.html" className="menu-link">
                                    Staff List
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="add-staff.html" className="menu-link">
                                    Add Staff
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="all-courses.html" className="menu-link">
                                    All Courses
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="add-course.html" className="menu-link">
                                    Add Course
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="fees-collection.html" className="menu-link">
                                    Fees collection
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="add-fees.html" className="menu-link">
                                    Add Fees
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="school-attendance.html" className="menu-link">
                                    Attendance
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="library.html" className="menu-link">
                                    Library
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="add-library-book.html" className="menu-link">
                                    Add Library Book
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">home_health</span>
                            <span className="title">Hospital</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="patients.html" className="menu-link">
                                    Patients
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="patient-details.html" className="menu-link">
                                    Patient Details
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="doctors.html" className="menu-link">
                                    Doctors
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="doctor-details.html" className="menu-link">
                                    Doctor Details
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="all-schedule.html" className="menu-link">
                                    All Schedule
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="book-appointments.html" className="menu-link">
                                    Book Appointments
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">local_activity</span>
                            <span className="title">Events</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="events.html" className="menu-link">
                                    Events
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="event-details.html" className="menu-link">
                                    Event Details
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="create-an-event.html" className="menu-link">
                                    Create An Event
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="edit-an-event.html" className="menu-link">
                                    Edit An Event
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">share</span>
                            <span className="title">Social</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="profile.html" className="menu-link">
                                    Profile
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="settings.html" className="menu-link">
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">content_paste</span>
                            <span className="title">Invoices</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="invoices.html" className="menu-link">
                                    Invoices
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="invoice-details.html" className="menu-link">
                                    Invoice Details
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">person</span>
                            <span className="title">Users</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="team-members.html" className="menu-link">
                                    Team Members
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="users-list.html" className="menu-link">
                                    Users List
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="add-user.html" className="menu-link">
                                    Add User
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">account_box</span>
                            <span className="title">Profile</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="user-profile.html" className="menu-link">
                                    User Profile
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="teams2.html" className="menu-link">
                                    Teams
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="projects.html" className="menu-link">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="starter.html" className="menu-link">
                            <span className="material-symbols-outlined menu-icon">star_border</span>
                            <span className="title">Starter</span>
                        </a>
                    </li>

                    <li className="menu-title small text-uppercase">
                        <span className="menu-title-text">MODULES</span>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">emoji_emotions</span>
                            <span className="title">Icons</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="material-symbols.html" className="menu-link">
                                    Material Symbols
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="remix-icon.html" className="menu-link">
                                    RemixIcon
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">qr_code_scanner</span>
                            <span className="title">UI Elements</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="alerts.html" className="menu-link">
                                    Alerts
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="avatar.html" className="menu-link">
                                    Avatar
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="buttons.html" className="menu-link">
                                    Buttons
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="cards.html" className="menu-link">
                                    Cards
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="carousels.html" className="menu-link">
                                    Carousels
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="dropdowns.html" className="menu-link">
                                    Dropdowns
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="grids.html" className="menu-link">
                                    Grids
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="images.html" className="menu-link">
                                    Images
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="list.html" className="menu-link">
                                    List
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="modals.html" className="menu-link">
                                    Modals
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="navs.html" className="menu-link">
                                    Navs
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="paginations.html" className="menu-link">
                                    Pagination's
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="progress.html" className="menu-link">
                                    Progress
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="spinners.html" className="menu-link">
                                    Spinners
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="tabs.html" className="menu-link">
                                    Tabs
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="accordions.html" className="menu-link">
                                    Accordions
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="date-time-picker.html" className="menu-link">
                                    Date Time Picker
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="videos.html" className="menu-link">
                                    Videos
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">table_chart</span>
                            <span className="title">Tables</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="basic-table.html" className="menu-link">
                                    Basic Table
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="data-table.html" className="menu-link">
                                    Data Table
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">forum</span>
                            <span className="title">Forms</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="basic-elements.html" className="menu-link">
                                    Basic Elements
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="advanced-elements.html" className="menu-link">
                                    Advanced Elements
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="validation.html" className="menu-link">
                                    Validation
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="wizard.html" className="menu-link">
                                    Wizard
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="editors.html" className="menu-link">
                                    Editors
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="file-uploader.html" className="menu-link">
                                    File Uploader
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">pie_chart</span>
                            <span className="title">ApexCharts</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="line.html" className="menu-link">
                                    Line
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="area.html" className="menu-link">
                                    Area
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="column.html" className="menu-link">
                                    Column
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="mixed.html" className="menu-link">
                                    Mixed
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="radial-bar.html" className="menu-link">
                                    RadialBar
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="radar.html" className="menu-link">
                                    Radar
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="pie.html" className="menu-link">
                                    Pie
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="polar.html" className="menu-link">
                                    Polar
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="more.html" className="menu-link">
                                    More
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">lock_open</span>
                            <span className="title">Authentication</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="sign-in.html" className="menu-link">
                                    Sign In
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="sign-up.html" className="menu-link">
                                    Sign Up
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="forgot-password.html" className="menu-link">
                                    Forgot Password
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="reset-password.html" className="menu-link">
                                    Reset Password
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="confirm-email.html" className="menu-link">
                                    Confirm Email
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="lock-screen.html" className="menu-link">
                                    Lock Screen
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="logout.html" className="menu-link">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">content_copy</span>
                            <span className="title">Extra Pages</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="pricing.html" className="menu-link">
                                    Pricing
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="timeline.html" className="menu-link">
                                    Timeline
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="faq.html" className="menu-link">
                                    FAQ
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="gallery.html" className="menu-link">
                                    Gallery
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="testimonials.html" className="menu-link">
                                    Testimonials
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="search.html" className="menu-link">
                                    Search
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="coming-soon.html" className="menu-link">
                                    Coming Soon
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="blank-page.html" className="menu-link">
                                    Blank Page
                                </a>
                            </li>
                        </ul>
                    </li>
                    
                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">error</span>
                            <span className="title">Errors</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="404-error-page.html" className="menu-link">
                                    404 Error Page
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="internal-error.html" className="menu-link">
                                    Internal Error
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="widgets.html" className="menu-link">
                            <span className="material-symbols-outlined menu-icon">widgets</span>
                            <span className="title">Widgets</span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="maps.html" className="menu-link">
                            <span className="material-symbols-outlined menu-icon">map</span>
                            <span className="title">Maps</span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="notifications.html" className="menu-link">
                            <span className="material-symbols-outlined menu-icon">notifications</span>
                            <span className="title">Notifications</span>
                        </a>
                    </li>
                    
                    <li className="menu-item">
                        <a href="members.html" className="menu-link">
                            <span className="material-symbols-outlined menu-icon">people</span>
                            <span className="title">Members</span>
                        </a>
                    </li>

                    <li className="menu-title small text-uppercase">
                        <span className="menu-title-text">OTHERS</span>
                    </li>

                    <li className="menu-item">
                        <a href="my-profile.html" className="menu-link">
                            <span className="material-symbols-outlined menu-icon">account_circle</span>
                            <span className="title">My Profile</span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">settings</span>
                            <span className="title">Settings</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="account-settings.html" className="menu-link">
                                    Account Settings
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="change-password.html" className="menu-link">
                                    Change Password
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="connections.html" className="menu-link">
                                    Connections
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="privacy-policy.html" className="menu-link">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="terms-conditions.html" className="menu-link">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle active">
                            <span className="material-symbols-outlined menu-icon">keyboard_arrow_down</span>
                            <span className="title">Multi Level Menu</span>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item after-sub-menu menu-level">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <span className="title">Level One</span>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">
                                            Level Three
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="logout.html" className="menu-link">
                            <span className="material-symbols-outlined menu-icon">logout</span>
                            <span className="title">Logout</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>

        <div className="container-fluid">
            <div className="main-content d-flex flex-column">
               
                <header className="header-area bg-white mb-4 rounded-10 border border-white" id="header-area">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="left-header-content">
                                <ul className="d-flex align-items-center ps-0 mb-0 list-unstyled justify-content-center justify-content-md-start">
                                    <li className="d-xl-none">
                                        <button className="header-burger-menu bg-transparent p-0 border-0 position-relative top-3" id="header-burger-menu">
                                            <span className="border-1 d-block for-dark-burger" style="border-bottom: 1px solid #475569; height: 1px; width: 25px;"></span>
                                            <span className="border-1 d-block for-dark-burger" style="border-bottom: 1px solid #475569; height: 1px; width: 25px; margin: 6px 0;"></span>
                                            <span className="border-1 d-block for-dark-burger" style="border-bottom: 1px solid #475569; height: 1px; width: 25px;"></span>
                                        </button>
                                    </li>
                                    <li>
                                        <form className="src-form position-relative">
                                            <input type="text" className="form-control" placeholder="Search here..." />
                                            <div className="src-btn position-absolute top-50 start-0 translate-middle-y bg-transparent p-0 border-0">
                                                <span className="material-symbols-outlined">search</span>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="right-header-content mt-3 mt-md-0">
                                <ul className="d-flex align-items-center justify-content-center justify-content-md-end ps-0 mb-0 list-unstyled">
                                    <li className="header-right-item language-item">
                                        <div className="dropdown notifications language">
                                            <button className="btn btn-secondary dropdown-toggle border-0 p-0 position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="material-symbols-outlined" style="font-size: 19px;">translate</span>
                                            </button>
                                            <div className="dropdown-menu dropdown-lg p-0 border-0 dropdown-menu-end">
                                                <span className="fw-medium fs-16 text-secondary d-block title" style="padding-top: 20px; padding-bottom: 20px;">Choose Language</span>
                                                <div className="max-h-275" data-simplebar>
                                                    <div className="notification-menu">
                                                        <a href="javascript:void(0);" className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="assets/images/usa.png" className="wh-30 rounded-circle" alt="usa" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-10">
                                                                    <span className="text-secondary fw-medium fs-15">English</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="notification-menu">
                                                        <a href="javascript:void(0);" className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="assets/images/australia.png" className="wh-30 rounded-circle" alt="australia" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-10">
                                                                    <span className="text-secondary fw-medium fs-15">Australia</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="notification-menu">
                                                        <a href="javascript:void(0);" className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="assets/images/spain.png" className="wh-30 rounded-circle" alt="spain" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-10">
                                                                    <span className="text-secondary fw-medium fs-15">Spanish</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="notification-menu">
                                                        <a href="javascript:void(0);" className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="assets/images/france.png" className="wh-30 rounded-circle" alt="portugal" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-10">
                                                                    <span className="text-secondary fw-medium fs-15">France</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="notification-menu mb-0">
                                                        <a href="javascript:void(0);" className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="assets/images/germany.png" className="wh-30 rounded-circle" alt="Germany" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-10">
                                                                    <span className="text-secondary fw-medium fs-15">Spain</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="header-right-item light-dark-item">
                                        <div className="light-dark">
                                            <button className="switch-toggle dark-btn p-0 bg-transparent lh-0 border-0" id="switch-toggle">
                                                <span className="dark"><i className="material-symbols-outlined">dark_mode</i></span> 
                                                <span className="light"><i className="material-symbols-outlined">light_mode</i></span>
                                            </button>
                                        </div>
                                    </li>
                                    <li className="header-right-item calendar-item">
                                        <div className="dropdown notifications">
                                            <a href="calendar.html" className="btn btn-secondary border-0 p-0 position-relative">
                                                <span className="material-symbols-outlined" style="font-size: 19px;">calendar_today</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="header-right-item messages-item">
                                        <div className="dropdown notifications noti messages">
                                            <button className="btn btn-secondary border-0 p-0 position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="material-symbols-outlined">mail</span>
                                                <span className="count bg-primary">5</span>
                                            </button>
                                            <div className="dropdown-menu dropdown-lg p-0 border-0 p-0 dropdown-menu-end">
                                                <div className="d-flex justify-content-between align-items-center title">
                                                    <span className="fw-medium fs-16 text-secondary">Messages <span className="fw-normal text-body fs-16">(03)</span></span>
                                                    <button className="p-0 m-0 bg-transparent border-0 fs-15 text-primary fw-medium">Mark all as read</button>
                                                </div> 

                                                <div style="max-height: 300px;" data-simplebar>
                                                    <div className="notification-menu unseen">
                                                        <a href="chat.html" className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="assets/images/user1.jpg" className="rounded-circle" style="width: 44px; height: 44px;" alt="images" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-10">
                                                                    <p className="fs-16 fw-medium text-secondary mb-2">Jacob Liwiski <span className="fs-14 fw-normal text-body ms-2">35 min ago</span></p>
                                                                    <span className="fs-14-5 fw-medium d-inline-block" style="line-height: 1.4;">Hey Victor! Could you please...</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="notification-menu unseen">
                                                        <a href="chat.html" className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="assets/images/user2.jpg" className="rounded-circle" style="width: 44px; height: 44px;" alt="images" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-10">
                                                                    <p className="fs-16 fw-medium text-secondary mb-2">Angela Carter <span className="fs-14 fw-normal text-body ms-2">1 day ago</span></p>
                                                                    <span className="fs-14-5 fw-medium d-inline-block" style="line-height: 1.4;">How are you Angela? Would you please...</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="notification-menu">
                                                        <a href="chat.html" className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="assets/images/user3.jpg" className="rounded-circle" style="width: 44px; height: 44px;" alt="images" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-10">
                                                                    <p className="fs-16 fw-medium text-secondary mb-2">Brad Traversy <span className="fs-14 fw-normal text-body ms-2">2 days ago</span></p>
                                                                    <span className="fs-14-5 fw-medium d-inline-block" style="line-height: 1.4;">Hey Brad Traversy! Could you please...</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <a href="chat.html" className="dropdown-item text-center text-primary d-block view-all fw-medium rounded-bottom-3">
                                                    <span>See All Messages</span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="header-right-item">
                                        <div className="dropdown notifications noti">
                                            <button className="btn btn-secondary border-0 p-0 position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="material-symbols-outlined">notifications</span>
                                                <span className="count">3</span>
                                            </button>
                                            <div className="dropdown-menu dropdown-lg p-0 border-0 p-0 dropdown-menu-end">
                                                <div className="d-flex justify-content-between align-items-center title">
                                                    <span className="fw-medium fs-16 text-secondary">Notifications <span className="fw-normal text-body fs-16">(03)</span></span>
                                                    <button className="p-0 m-0 bg-transparent border-0 fs-15 text-primary fw-medium">Clear All</button>
                                                </div> 

                                                <div style="max-height: 300px;" data-simplebar>
                                                    <div className="notification-menu unseen">
                                                        <a href="notifications.html" className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <i className="material-symbols-outlined text-primary">sms</i>
                                                                </div>
                                                                <div className="flex-grow-1 ms-3">
                                                                    <p className="fs-16 fw-medium text-secondary">You have requested to withdrawal</p>
                                                                    <span className="fs-14 fw-medium">2 hrs ago</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="notification-menu unseen">
                                                        <a href="notifications.html" className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <i className="material-symbols-outlined text-info">person</i>
                                                                </div>
                                                                <div className="flex-grow-1 ms-3">
                                                                    <p className="fs-16 fw-medium text-secondary">A new user added in Fila</p>
                                                                    <span className="fs-14 fw-medium">3 hrs ago</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="notification-menu">
                                                        <a href="notifications.html" className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <i className="material-symbols-outlined text-success">mark_email_unread</i>
                                                                </div>
                                                                <div className="flex-grow-1 ms-3">
                                                                    <p className="fs-16 fw-medium text-secondary">You have requested to withdrawal</p>
                                                                    <span className="fs-14 fw-medium">1 day ago</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <a href="notifications.html" className="dropdown-item text-center text-primary d-block view-all fw-medium rounded-bottom-3">
                                                    <span>See All Notifications </span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="header-right-item">
                                        <div className="dropdown admin-profile">
                                            <div className="d-xxl-flex align-items-center bg-transparent border-0 text-start p-0 cursor dropdown-toggle" data-bs-toggle="dropdown">
                                                <div className="flex-shrink-0 position-relative">
                                                    <img className="rounded-circle admin-img-width-for-mobile" style="width: 40px; height: 40px;" src="assets/images/admin.png" alt="admin" />
                                                    <span className="d-block bg-success-60 border border-2 border-white rounded-circle position-absolute end-0 bottom-0" style="width: 11px; height: 11px;"></span>
                                                </div>
                                            </div>
    
                                            <div className="dropdown-menu border-0 bg-white dropdown-menu-end">
                                                <div className="d-flex align-items-center info">
                                                    <div className="flex-shrink-0">
                                                        <img className="rounded-circle admin-img-width-for-mobile" style="width: 40px; height: 40px;" src="assets/images/admin.png" alt="admin" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-10">
                                                        <h3 className="fw-medium fs-17 mb-0">Mateo Luca</h3>
                                                        <span className="fs-15 fw-medium">Admin</span>
                                                    </div>
                                                </div>
                                                <ul className="admin-link mb-0 list-unstyled">
                                                    <li>
                                                        <a className="dropdown-item admin-item-link d-flex align-items-center text-body" href="my-profile.html">
                                                            <i className="material-symbols-outlined">person</i>
                                                            <span className="ms-2">My Profile</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item admin-item-link d-flex align-items-center text-body" href="settings.html">
                                                            <i className="material-symbols-outlined">settings</i>
                                                            <span className="ms-2">Settings</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item admin-item-link d-flex align-items-center text-body" href="tickets.html">
                                                            <i className="material-symbols-outlined">info</i>
                                                            <span className="ms-2">Support</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item admin-item-link d-flex align-items-center text-body" href="logout.html">
                                                            <i className="material-symbols-outlined">logout</i>
                                                            <span className="ms-2">Logout</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>


                <div className="main-content-container overflow-hidden">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                                    <h3>Total Sales</h3>

                                    <div className="dropdown select-dropdown without-border">
                                        <button className="dropdown-toggle bg-transparent text-secondary fs-15" data-bs-toggle="dropdown" aria-expanded="false">
                                            Year 2025
                                        </button>
                                    
                                        <ul className="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow rounded-10" data-simplebar>
                                            <li>
                                                <button className="dropdown-item text-secondary">Year 2025</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">Year 2025</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">Year 2023</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="total_sales_chart" style="margin-bottom: -16px; margin-top: -1.5px;"></div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xxl-3 col-xxxl-6">
                            <div className="row">
                                <div className="col-md-6 col-lg-12">
                                    <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <h3 className="mb-10">Total Orders</h3>
                                                <h2 className="fs-26 fw-medium mb-0 lh-1">20,705</h2>
                                            </div>
                                            <div className="flex-shrink-0 ms-3">
                                                <div className="bg-primary text-white text-center rounded-circle d-block" style="width: 75px; height: 75px; line-height: 105px;">
                                                    <i className="material-symbols-outlined fs-40">shopping_basket</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center" style="margin-top: 21px;">
                                            <p className="mb-0 fs-14">4.75% Increase in orders last week</p>
                                            <span className="d-flex align-content-center gap-1 bg-success bg-opacity-10 border border-success" style="padding: 3px 5px;">
                                                <i className="material-symbols-outlined fs-14 text-success">trending_up</i>
                                                <span className="lh-1 fs-14 text-success">4.75%</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12">
                                    <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <h3 className="mb-10">Total Customers</h3>
                                                <h2 className="fs-26 fw-medium mb-0 lh-1">84,127</h2>
                                            </div>
                                            <div className="flex-shrink-0 ms-3">
                                                <div className="bg-info text-white text-center rounded-circle d-block" style="width: 75px; height: 75px; line-height: 105px;">
                                                    <i className="material-symbols-outlined fs-40">diversity_2</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center" style="margin-top: 21px;">
                                            <p className="mb-0 fs-14">Total visitors decreased by 1.25%</p>
                                            <span className="d-flex align-content-center gap-1 bg-danger bg-opacity-10 border border-danger" style="padding: 3px 5px;">
                                                <i className="material-symbols-outlined fs-14 text-danger">trending_down</i>
                                                <span className="lh-1 fs-14 text-danger">1.25%</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12 col-xxl-3 col-xxxl-12">
                            <div className="row">
                                <div className="col-md-6 col-xxxl-6 col-xxl-12">
                                    <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <h3 className="mb-10">Total Revenue</h3>
                                                <h2 className="fs-26 fw-medium mb-0 lh-1">$15,278</h2>
                                            </div>
                                            <div className="flex-shrink-0 ms-3">
                                                <div className="bg-warning text-white text-center rounded-circle d-block" style="width: 75px; height: 75px; line-height: 116px;">
                                                    <i className="material-symbols-outlined fs-50">attach_money</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center" style="margin-top: 23px;">
                                            <p className="mb-0 fs-14">Revenue increases this month</p>
                                            <span className="d-flex align-content-center gap-1 bg-success bg-opacity-10 border border-success" style="padding: 3px 5px;">
                                                <i className="material-symbols-outlined fs-14 text-success">trending_up</i>
                                                <span className="lh-1 fs-14 text-success">3.15%</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xxxl-6 col-xxl-12">
                                    <div className="bg-primary-50 p-20 border rounded-10 border-primary-50 mb-4">
                                        <h3 className="text-white mb-12">Sales Overview</h3>
                                        <div className="d-flex flex-wrap gap-2 justify-content-between mb-14">
                                            <div>
                                                <span className="fs-14 text-white mb-1 d-block">Total Sales</span>
                                                <h2 className="fs-20 fw-medium lh-1 text-white mb-0">9,586</h2>
                                            </div>
                                            <div>
                                                <span className="fs-14 text-white mb-1 d-block">Monthly Sales</span>
                                                <h2 className="fs-20 fw-medium lh-1 text-white mb-0">3,507</h2>
                                            </div>
                                            <div>
                                                <span className="fs-14 text-white mb-1 d-block">Today’s Sales</span>
                                                <h2 className="fs-20 fw-medium lh-1 text-white mb-0">357</h2>
                                            </div>
                                        </div>
                                        <div className="progress rounded-0 mb-6" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="height: 3px; background-color: #6258cc;">
                                            <div className="progress-bar rounded-0 bg-white" style="width: 80%; height: 3px;"></div>
                                        </div>
                                        <span className="fs-14 text-white d-block" style="margin-bottom: -6px;">20% Increase in last month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 col-xxxl-12">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-20">
                                            <h3>Profit</h3>
        
                                            <div className="dropdown select-dropdown without-border">
                                                <button className="dropdown-toggle bg-transparent text-secondary fs-15" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Last Month
                                                </button>
                                            
                                                <ul className="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow rounded-10" data-simplebar>
                                                    <li>
                                                        <button className="dropdown-item text-secondary">Last Day</button>
                                                    </li>
                                                    <li>
                                                        <button className="dropdown-item text-secondary">Last Week</button>
                                                    </li>
                                                    <li>
                                                        <button className="dropdown-item text-secondary">Last Month</button>
                                                    </li>
                                                    <li>
                                                        <button className="dropdown-item text-secondary">Last Year</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <h2 className="lh-1 fs-26 fw-medium" style="margin-bottom: -10px;">$359K</h2>

                                        <div id="profit_chart" style="margin-bottom: -17px;"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-20">
                                            <h3>Average Daily Sales</h3>
        
                                            <span className="d-flex align-content-center gap-1 bg-success bg-opacity-10 border border-success" style="padding: 3px 5px;">
                                                <i className="material-symbols-outlined fs-14 text-success">trending_up</i>
                                                <span className="lh-1 fs-14 text-success">5.25%</span>
                                            </span>
                                        </div>
                                        
                                        <h2 className="lh-1 fs-26 fw-medium mb-0">$5K+</h2>
                                        
                                        <div id="average_daily_sales_chart" style="margin-bottom: -17px;"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card p-20 bg-light-40 rounded-10 border-light-40 mb-4 position-relative z-1">
                                        <h3 className="mb-20">Best Seller Of The Month</h3>
                                        <h3 className="mb-12 text-primary-50">Michael Marquez!</h3>
                                        <h2 className="lh-1 fs-26 fw-medium">$3.5K<span className="fs-16 text-body">(Sales)</span></h2>
                                        <a href="#" className="fw-medium fs-16 text-secondary hover-text d-inline-block" style="margin-top: 84px;">Details View</a>
                                        <img src="assets/images/man.png" className="position-absolute bottom-0 end-0 pe-3" alt="man" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card p-20 bg-white rounded-10 border border-white mb-4 position-relative z-1">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-20">
                                            <h3>New Customers This Month</h3>
        
                                            <span className="d-flex align-content-center gap-1 bg-success bg-opacity-10 border border-success" style="padding: 3px 5px;">
                                                <i className="material-symbols-outlined fs-14 text-success">trending_up</i>
                                                <span className="lh-1 fs-14 text-success">2.75%</span>
                                            </span>
                                        </div>
                                        <h2 className="lh-1 fs-26 fw-medium">2,537</h2>
                                        <div style="margin-top: 55px;">
                                            <span className="fs-16 text-body d-block mb-10">Join Today</span>
                                            <ul className="p-0 mb-0 list-unstyled d-flex last-child-none global-right-list">
                                                <li style="margin-right: -20px;">
                                                    <img src="assets/images/user12.jpg" className="border border-3 border-white rounded-circle" style="width: 52px; height: 52px;" alt="user12" />
                                                </li>
                                                <li style="margin-right: -20px;">
                                                    <img src="assets/images/user13.jpg" className="border border-3 border-white rounded-circle" style="width: 52px; height: 52px;" alt="user13" />
                                                </li>
                                                <li style="margin-right: -20px;">
                                                    <img src="assets/images/user14.jpg" className="border border-3 border-white rounded-circle" style="width: 52px; height: 52px;" alt="user14" />
                                                </li>
                                                <li style="margin-right: -20px;">
                                                    <img src="assets/images/user15.jpg" className="border border-3 border-white rounded-circle" style="width: 52px; height: 52px;" alt="user15" />
                                                </li>
                                                <li style="margin-right: -20px;">
                                                    <img src="assets/images/user16.jpg" className="border border-3 border-white rounded-circle" style="width: 52px; height: 52px;" alt="user16" />
                                                </li>
                                                <li className="border border-3 border-white rounded-circle bg-primary text-center" style="margin-right: -20px; width: 52px; height: 52px; line-height: 49px;">
                                                    <span className="text-white fs-16 fw-medium">27</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xxxl-12">
                            <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-20">
                                    <h3>Top Selling Products</h3>

                                    <div className="dropdown select-dropdown without-border">
                                        <button className="dropdown-toggle bg-transparent text-secondary fs-15" data-bs-toggle="dropdown" aria-expanded="false">
                                            This Week
                                        </button>
                                    
                                        <ul className="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow rounded-10" data-simplebar>
                                            <li>
                                                <button className="dropdown-item text-secondary">This Day</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">This Week</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">This Month</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">This Year</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="default-table-area without-header table-top-selling-products">
                                    <div className="table-responsive">
                                        <table className="table align-middle">
                                            <tbody>
                                                <tr>
                                                    <td className="text-body fw-medium">01.</td>
                                                    <td className="ps-0">
                                                        <a href="product-details.html" className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/product1.png" className="rounded-circle" style="width: 50px; height: 50px;" alt="product1" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-normal hover-text">Smart Watch</h3>
                                                                <span className="fs-14 text-body fw-normal">953 Items Sold</span>
                                                            </div>
                                                        </a>
                                                    </td> 
                                                    <td className="text-body">Item: #ARP-1217</td> 
                                                    <td className="text-body">$90,954</td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body fw-medium">02.</td>
                                                    <td className="ps-0">
                                                        <a href="product-details.html" className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/product2.png" className="rounded-circle" style="width: 50px; height: 50px;" alt="product2" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-normal hover-text">Mobile Phone</h3>
                                                                <span className="fs-14 text-body fw-normal">876 Items Sold</span>
                                                            </div>
                                                        </a>
                                                    </td> 
                                                    <td className="text-body">Item: #ARP-9513</td> 
                                                    <td className="text-body">$85,648</td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body fw-medium">03.</td>
                                                    <td className="ps-0">
                                                        <a href="product-details.html" className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/product3.png" className="rounded-circle" style="width: 50px; height: 50px;" alt="product3" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-normal hover-text">Laptop Device</h3>
                                                                <span className="fs-14 text-body fw-normal">823 Items Sold</span>
                                                            </div>
                                                        </a>
                                                    </td> 
                                                    <td className="text-body">Item: #ARP-7531</td> 
                                                    <td className="text-body">$79,852</td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body fw-medium">04.</td>
                                                    <td className="ps-0">
                                                        <a href="product-details.html" className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/product4.png" className="rounded-circle" style="width: 50px; height: 50px;" alt="product4" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-normal hover-text">Black T-Shirt</h3>
                                                                <span className="fs-14 text-body fw-normal">743 Items Sold</span>
                                                            </div>
                                                        </a>
                                                    </td> 
                                                    <td className="text-body">Item: #ARP-3579</td> 
                                                    <td className="text-body">$73,624</td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body fw-medium">05.</td>
                                                    <td className="ps-0">
                                                        <a href="product-details.html" className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/product5.png" className="rounded-circle" style="width: 50px; height: 50px;" alt="product5" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-normal hover-text">Headphones</h3>
                                                                <span className="fs-14 text-body fw-normal">693 Items Sold</span>
                                                            </div>
                                                        </a>
                                                    </td> 
                                                    <td className="text-body">Item: #ARP-4826</td> 
                                                    <td className="text-body">$65,973</td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body fw-medium">06.</td>
                                                    <td className="ps-0">
                                                        <a href="product-details.html" className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/product6.png" className="rounded-circle" style="width: 50px; height: 50px;" alt="product6" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-normal hover-text">Hand Watch</h3>
                                                                <span className="fs-14 text-body fw-normal">654 Items Sold</span>
                                                            </div>
                                                        </a>
                                                    </td> 
                                                    <td className="text-body">Item: #ARP-1265</td> 
                                                    <td className="text-body">$42,455</td> 
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
        
                                    <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-15">
                                        <span className="fs-15">Showing 1 to 5 of 50 entries</span>
        
                                        <nav className="custom-pagination" aria-label="Page navigation example">
                                            <ul className="pagination mb-0 justify-content-center">
                                                <li className="page-item">
                                                    <button className="page-link icon" aria-label="Previous">
                                                        <i className="material-symbols-outlined">west</i>
                                                    </button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link active">1</button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link">2</button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link">3</button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link icon" aria-label="Next">
                                                        <i className="material-symbols-outlined">east</i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-xxl-4 col-xxxl-6 mb-4">
                            <div className="card bg-white p-20 rounded-10 border border-white">
                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-20">
                                    <h3>Order Summary</h3>

                                    <div className="dropdown select-dropdown without-border">
                                        <button className="dropdown-toggle bg-transparent text-secondary fs-15" data-bs-toggle="dropdown" aria-expanded="false">
                                            This Week
                                        </button>
                                    
                                        <ul className="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow rounded-10" data-simplebar>
                                            <li>
                                                <button className="dropdown-item text-secondary">This Day</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">This Week</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">This Month</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">This Year</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="d-flex justify-content-between align-items-center mb-20">
                                    <span className="fs-15 text-secondary">Completed 60%</span>
                                    <span className="fs-15 text-secondary">New Order 30%</span>
                                    <span className="fs-15 text-secondary">Pending 10%</span>
                                </div>

                                <div id="order_summary_chart"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 col-xxxl-6">
                            <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-20">
                                    <h3>Top Sellers</h3>

                                    <div className="dropdown select-dropdown without-border">
                                        <button className="dropdown-toggle bg-transparent text-secondary fs-15" data-bs-toggle="dropdown" aria-expanded="false">
                                            This Week
                                        </button>
                                    
                                        <ul className="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow rounded-10" data-simplebar>
                                            <li>
                                                <button className="dropdown-item text-secondary">This Day</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">This Week</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">This Month</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">This Year</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="default-table-area without-header table-top-sellers">
                                    <div className="table-responsive">
                                        <table className="table align-middle">
                                            <tbody>
                                                <tr>
                                                    <td className="text-body fw-medium">01.</td>
                                                    <td className="ps-0">
                                                        <div className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/user6.jpg" className="rounded-circle" style="width: 50px; height: 50px;" alt="user6" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-normal">Mark Stjohn</h3>
                                                                <span className="fs-14 text-body fw-normal">Customer ID #76431</span>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                    <td>
                                                        <ul className="p-0 mb-0 list-unstyled d-flex align-items-center justify-content-end" style="gap: 2px;">
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <span className="fs-14 text-body fw-normal">(5)</span>
                                                            </li>
                                                        </ul>
                                                    </td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body fw-medium">02.</td>
                                                    <td className="ps-0">
                                                        <div className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/user7.jpg" className="rounded-circle" style="width: 50px; height: 50px;" alt="user7" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-normal">Joan Stanley</h3>
                                                                <span className="fs-14 text-body fw-normal">Customer ID #64815</span>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                    <td>
                                                        <ul className="p-0 mb-0 list-unstyled d-flex align-items-center justify-content-end" style="gap: 2px;">
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-half-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <span className="fs-14 text-body fw-normal">(4.5)</span>
                                                            </li>
                                                        </ul>
                                                    </td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body fw-medium">03.</td>
                                                    <td className="ps-0">
                                                        <div className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/user8.jpg" className="rounded-circle" style="width: 50px; height: 50px;" alt="user8" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-normal">Jacob Bell</h3>
                                                                <span className="fs-14 text-body fw-normal">Customer ID #34581</span>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                    <td>
                                                        <ul className="p-0 mb-0 list-unstyled d-flex align-items-center justify-content-end" style="gap: 2px;">
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-line text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <span className="fs-14 text-body fw-normal">(4)</span>
                                                            </li>
                                                        </ul>
                                                    </td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body fw-medium">04.</td>
                                                    <td className="ps-0">
                                                        <div className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/user9.jpg" className="rounded-circle" style="width: 50px; height: 50px;" alt="user9" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-normal">Donald Bryan</h3>
                                                                <span className="fs-14 text-body fw-normal">Customer ID #67941</span>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                    <td>
                                                        <ul className="p-0 mb-0 list-unstyled d-flex align-items-center justify-content-end" style="gap: 2px;">
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <span className="fs-14 text-body fw-normal">(5)</span>
                                                            </li>
                                                        </ul>
                                                    </td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body fw-medium">05.</td>
                                                    <td className="ps-0">
                                                        <div className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/user10.jpg" className="rounded-circle" style="width: 50px; height: 50px;" alt="user10" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-normal">Kristina Blomquist</h3>
                                                                <span className="fs-14 text-body fw-normal">Customer ID #36985</span>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                    <td>
                                                        <ul className="p-0 mb-0 list-unstyled d-flex align-items-center justify-content-end" style="gap: 2px;">
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <span className="fs-14 text-body fw-normal">(5)</span>
                                                            </li>
                                                        </ul>
                                                    </td> 
                                                </tr>
                                                <tr className="last-child-border-none">
                                                    <td className="text-body fw-medium">06.</td>
                                                    <td className="ps-0">
                                                        <div className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/user11.jpg" className="rounded-circle" style="width: 50px; height: 50px;" alt="user11" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-normal">Jeffrey Morrison</h3>
                                                                <span className="fs-14 text-body fw-normal">Customer ID #26985</span>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                    <td>
                                                        <ul className="p-0 mb-0 list-unstyled d-flex align-items-center justify-content-end" style="gap: 2px;">
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-half-fill text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <i className="ri-star-line text-warning fs-16"></i>
                                                            </li>
                                                            <li>
                                                                <span className="fs-14 text-body fw-normal">(3.5)</span>
                                                            </li>
                                                        </ul>
                                                    </td> 
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xxl-4 col-xxxl-12">
                            <div className="row">
                                <div className="col-xxl-12 col-lg-6 col-xxxl-6">
                                    <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                        <h3 className="mb-20">Top Sales Locations</h3>
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-sm-6">
                                                <div className="text-center">
                                                    <div id="sales_by_locations_map"></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-sm-6">
                                                <ul className="p-0 mb-0 list-unstyled last-child-none mt-4 mt-sm-0">
                                                    <li className="d-flex align-items-center gap-2 mb-9">
                                                        <img src="assets/images/usa.png" className="rounded-circle" style="width: 20px; height: 20px;" alt="usa" />
                                                        <span className="fs-15">United States <span className="text-secondary">85%</span></span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-9">
                                                        <img src="assets/images/china.png" className="rounded-circle" style="width: 20px; height: 20px;" alt="china" />
                                                        <span className="fs-15">China <span className="text-secondary">60%</span></span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-9">
                                                        <img src="assets/images/australia.png" className="rounded-circle" style="width: 20px; height: 20px;" alt="australia" />
                                                        <span className="fs-15">Australia <span className="text-secondary">85%</span></span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-9">
                                                        <img src="assets/images/germany.png" className="rounded-circle" style="width: 20px; height: 20px;" alt="germany" />
                                                        <span className="fs-15">Germany <span className="text-secondary">75%</span></span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-9">
                                                        <img src="assets/images/canada.png" className="rounded-circle" style="width: 20px; height: 20px;" alt="canada" />
                                                        <span className="fs-15">Canada <span className="text-secondary">80%</span></span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-9">
                                                        <img src="assets/images/france.png" className="rounded-circle" style="width: 20px; height: 20px;" alt="france" />
                                                        <span className="fs-15">France <span className="text-secondary">65%</span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-12 col-lg-6 col-xxxl-6">
                                    <div className="card bg-white p-20 rounded-10 border border border-white mb-4">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-0">
                                            <h3>Revenue</h3>
        
                                            <div className="dropdown select-dropdown without-border">
                                                <button className="dropdown-toggle bg-transparent text-secondary fs-15" data-bs-toggle="dropdown" aria-expanded="false">
                                                    This Week
                                                </button>
                                            
                                                <ul className="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow rounded-10" data-simplebar>
                                                    <li>
                                                        <button className="dropdown-item text-secondary">This Day</button>
                                                    </li>
                                                    <li>
                                                        <button className="dropdown-item text-secondary">This Week</button>
                                                    </li>
                                                    <li>
                                                        <button className="dropdown-item text-secondary">This Month</button>
                                                    </li>
                                                    <li>
                                                        <button className="dropdown-item text-secondary">This Year</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
        
                                        <div id="revenue_chart" style="margin-bottom: -17px;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-8 col-xxxxl-12">
                            <div className="card bg-white rounded-10 border border-white mb-4">
                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 p-20">
                                    <h3>Recent Orders</h3>

                                    <div className="d-flex align-items-center">
                                        <div className="dropdown select-dropdown without-border">
                                            <button className="dropdown-toggle bg-transparent text-secondary fs-15" data-bs-toggle="dropdown" aria-expanded="false">
                                                Show All
                                            </button>
                                        
                                            <ul className="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow rounded-10" data-simplebar>
                                                <li>
                                                    <button className="dropdown-item text-secondary">Shipped</button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item text-secondary">Confirmed</button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item text-secondary">Pending</button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item text-secondary">Rejected</button>
                                                </li>
                                            </ul>
                                        </div>

                                        <form className="table-src-form position-relative">
                                            <input type="text" className="form-control" placeholder="Search here..." />
                                            <div className="src-btn position-absolute top-50 start-0 translate-middle-y bg-transparent p-0 border-0">
                                                <span className="material-symbols-outlined">search</span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                
                                <div className="default-table-area mx-minus-1 table-recent-orders">
                                    <div className="table-responsive">
                                        <table className="table align-middle">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="fw-medium">Order ID</th>
                                                    <th scope="col" className="fw-medium">Customer</th>
                                                    <th scope="col" className="fw-medium">Created</th>
                                                    <th scope="col" className="fw-medium">Total</th>
                                                    <th scope="col" className="fw-medium">Profit</th>
                                                    <th scope="col" className="fw-medium">Status</th>
                                                    <th scope="col" className="fw-medium">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-body">#ARP-1217</td>
                                                    <td>
                                                        <a href="customers.html" className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/user1.jpg" className="rounded-circle" style="width: 50px; height: 50px;" alt="user1" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-medium hover-text mb-0 fs-16">Carlos Daley</h3>
                                                            </div>
                                                        </a>
                                                    </td> 
                                                    <td className="text-body">15 Nov, 2025</td> 
                                                    <td className="text-body">$9,095</td> 
                                                    <td className="text-body">$1,254</td> 
                                                    <td>
                                                        <span className="text-primary bg-primary bg-opacity-10 fs-15 fw-normal d-inline-block default-badge">Shipped</span>
                                                    </td> 
                                                    <td>
                                                        <div className="d-flex justify-content-end" style="gap: 12px;">
                                                            <button className="bg-transparent p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View">
                                                                <i className="material-symbols-outlined fs-16 fw-normal text-primary">visibility</i>
                                                            </button>
                                                            <button className="bg-transparent p-0 border-0 hover-text-danger" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete">
                                                                <i className="material-symbols-outlined fs-16 fw-normal text-body">delete</i>
                                                            </button>
                                                        </div>
                                                    </td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body">#ARP-9513</td>
                                                    <td>
                                                        <a href="customers.html" className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/user2.jpg" className="rounded-circle" style="width: 50px; height: 50px;" alt="user2" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-medium hover-text mb-0 fs-16">Dorothy Young</h3>
                                                            </div>
                                                        </a>
                                                    </td> 
                                                    <td className="text-body">14 Nov, 2025</td> 
                                                    <td className="text-body">$8,564</td> 
                                                    <td className="text-body">$973</td> 
                                                    <td>
                                                        <span className="text-success bg-success bg-opacity-10 fs-15 fw-normal d-inline-block default-badge">Confirmed</span>
                                                    </td> 
                                                    <td>
                                                        <div className="d-flex justify-content-end" style="gap: 12px;">
                                                            <button className="bg-transparent p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View">
                                                                <i className="material-symbols-outlined fs-16 fw-normal text-primary">visibility</i>
                                                            </button>
                                                            <button className="bg-transparent p-0 border-0 hover-text-danger" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete">
                                                                <i className="material-symbols-outlined fs-16 fw-normal text-body">delete</i>
                                                            </button>
                                                        </div>
                                                    </td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body">#ARP-7513</td>
                                                    <td>
                                                        <a href="customers.html" className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/user3.jpg" className="rounded-circle" style="width: 50px; height: 50px;" alt="user3" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-medium hover-text mb-0 fs-16">Greg Woody</h3>
                                                            </div>
                                                        </a>
                                                    </td> 
                                                    <td className="text-body">13 Nov, 2025</td> 
                                                    <td className="text-body">$7,985</td> 
                                                    <td className="text-body">$852</td> 
                                                    <td>
                                                        <span className="text-warning bg-warning bg-opacity-10 fs-15 fw-normal d-inline-block default-badge">Pending</span>
                                                    </td> 
                                                    <td>
                                                        <div className="d-flex justify-content-end" style="gap: 12px;">
                                                            <button className="bg-transparent p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View">
                                                                <i className="material-symbols-outlined fs-16 fw-normal text-primary">visibility</i>
                                                            </button>
                                                            <button className="bg-transparent p-0 border-0 hover-text-danger" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete">
                                                                <i className="material-symbols-outlined fs-16 fw-normal text-body">delete</i>
                                                            </button>
                                                        </div>
                                                    </td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body">#ARP-3579</td>
                                                    <td>
                                                        <a href="customers.html" className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/user4.jpg" className="rounded-circle" style="width: 50px; height: 50px;" alt="user4" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-medium hover-text mb-0 fs-16">Deborah Rosol</h3>
                                                            </div>
                                                        </a>
                                                    </td> 
                                                    <td className="text-body">12 Nov, 2025</td> 
                                                    <td className="text-body">$7,362</td> 
                                                    <td className="text-body">$793</td> 
                                                    <td>
                                                        <span className="text-danger bg-danger bg-opacity-10 fs-15 fw-normal d-inline-block default-badge">Rejected</span>
                                                    </td> 
                                                    <td>
                                                        <div className="d-flex justify-content-end" style="gap: 12px;">
                                                            <button className="bg-transparent p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View">
                                                                <i className="material-symbols-outlined fs-16 fw-normal text-primary">visibility</i>
                                                            </button>
                                                            <button className="bg-transparent p-0 border-0 hover-text-danger" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete">
                                                                <i className="material-symbols-outlined fs-16 fw-normal text-body">delete</i>
                                                            </button>
                                                        </div>
                                                    </td> 
                                                </tr>
                                                <tr>
                                                    <td className="text-body">#ARP-4826</td>
                                                    <td>
                                                        <a href="customers.html" className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <img src="assets/images/user5.jpg" className="rounded-circle" style="width: 50px; height: 50px;" alt="user1" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-12">
                                                                <h3 className="fw-medium hover-text mb-0 fs-16">Kendall Allen</h3>
                                                            </div>
                                                        </a>
                                                    </td> 
                                                    <td className="text-body">11 Nov, 2025</td> 
                                                    <td className="text-body">$6,597</td> 
                                                    <td className="text-body">$674</td> 
                                                    <td>
                                                        <span className="text-primary bg-primary bg-opacity-10 fs-15 fw-normal d-inline-block default-badge">Shipped</span>
                                                    </td> 
                                                    <td>
                                                        <div className="d-flex justify-content-end" style="gap: 12px;">
                                                            <button className="bg-transparent p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View">
                                                                <i className="material-symbols-outlined fs-16 fw-normal text-primary">visibility</i>
                                                            </button>
                                                            <button className="bg-transparent p-0 border-0 hover-text-danger" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete">
                                                                <i className="material-symbols-outlined fs-16 fw-normal text-body">delete</i>
                                                            </button>
                                                        </div>
                                                    </td> 
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
        
                                    <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-15 p-20">
                                        <span className="fs-15">Showing 1 to 5 of 50 entries</span>
        
                                        <nav className="custom-pagination" aria-label="Page navigation example">
                                            <ul className="pagination mb-0 justify-content-center">
                                                <li className="page-item">
                                                    <button className="page-link icon" aria-label="Previous">
                                                        <i className="material-symbols-outlined">west</i>
                                                    </button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link active">1</button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link">2</button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link">3</button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link icon" aria-label="Next">
                                                        <i className="material-symbols-outlined">east</i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xxxxl-12">
                            <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-20">
                                    <h3>Transactions History</h3>

                                    <div className="dropdown select-dropdown without-border">
                                        <button className="dropdown-toggle bg-transparent text-secondary fs-15" data-bs-toggle="dropdown" aria-expanded="false">
                                            Last Month
                                        </button>
                                    
                                        <ul className="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow rounded-10" data-simplebar>
                                            <li>
                                                <button className="dropdown-item text-secondary">Last Day</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">Last Week</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">Last Month</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-secondary">Last Year</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="default-table-area without-header table-transactions-history">
                                    <div className="table-responsive">
                                        <table className="table align-middle">
                                            <tbody>
                                                <tr>
                                                    <td className="ps-0">
                                                        <div className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <div className="text-primary text-center rounded-circle" style="width: 50px; height: 50px; line-height: 62px; background-color: #dbeafd;">
                                                                    <i className="material-symbols-outlined fs-24">settings_backup_restore</i>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 ms-15">
                                                                <h3 className="fw-normal">Refund Bill payment</h3>
                                                                <span className="fs-14 text-body fw-normal">15 Nov 2025 - 11:40am</span>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                    <td className="fw-normal text-success fs-16">+$995</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-0">
                                                        <div className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <div className="text-danger text-center rounded-circle" style="width: 50px; height: 50px; line-height: 62px; background-color: #fce4e2;">
                                                                    <i className="material-symbols-outlined fs-24">account_balance</i>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 ms-15">
                                                                <h3 className="fw-normal">Bank Transfer</h3>
                                                                <span className="fs-14 text-body fw-normal">15 Nov 2025 - 8:20am</span>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                    <td className="fw-normal text-danger fs-16">-$1,550</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-0">
                                                        <div className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <div className="text-primary-50 text-center rounded-circle" style="width: 50px; height: 50px; line-height: 62px; background-color: #ebe9fe;">
                                                                    <i className="material-symbols-outlined fs-24">credit_card</i>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 ms-15">
                                                                <h3 className="fw-normal">Master Card</h3>
                                                                <span className="fs-14 text-body fw-normal">14 Nov 2025 - 11:40am</span>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                    <td className="fw-normal text-success fs-16">+$862</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-0">
                                                        <div className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <div className="text-info text-center rounded-circle" style="width: 50px; height: 50px; line-height: 62px; background-color: #daf7fb;">
                                                                    <i className="material-symbols-outlined fs-24">account_balance_wallet</i>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 ms-15">
                                                                <h3 className="fw-normal">Wallet</h3>
                                                                <span className="fs-14 text-body fw-normal">10 Nov 2025 - 10:10am</span>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                    <td className="fw-normal text-success fs-16">+$974</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-0">
                                                        <div className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <div className="text-warning text-center rounded-circle" style="width: 50px; height: 50px; line-height: 62px; background-color: #fff4e8;">
                                                                    <i className="material-symbols-outlined fs-24">attach_money</i>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 ms-15">
                                                                <h3 className="fw-normal">Cash Withdrawal</h3>
                                                                <span className="fs-14 text-body fw-normal">09 Nov 2025 - 1:30pm</span>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                    <td className="fw-normal text-danger fs-16">-$250</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-0">
                                                        <div className="d-flex align-items-center text-decoration-none">
                                                            <div className="flex-shrink-0">
                                                                <div className="text-success-60 text-center rounded-circle" style="width: 50px; height: 50px; line-height: 62px; background-color: #e0f8ea;">
                                                                    <i className="material-symbols-outlined fs-24">payments</i>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 ms-15">
                                                                <h3 className="fw-normal">Payment</h3>
                                                                <span className="fs-14 text-body fw-normal">8 Nov 2025 - 12:34pm</span>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                    <td className="fw-normal text-danger fs-16">-$657</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-15">
                                        <span className="fs-15">Showing 1 to 5 of 50 entries</span>
        
                                        <nav className="custom-pagination" aria-label="Page navigation example">
                                            <ul className="pagination mb-0 justify-content-center">
                                                <li className="page-item">
                                                    <button className="page-link icon" aria-label="Previous">
                                                        <i className="material-symbols-outlined">west</i>
                                                    </button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link active">1</button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link">2</button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link">3</button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link icon" aria-label="Next">
                                                        <i className="material-symbols-outlined">east</i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-grow-1"></div>

                <footer className="footer-area bg-white text-center rounded-10 rounded-bottom-0">
                    <p className="fs-16 text-body">© <span className="text-secondary">Fila</span> is Proudly Owned by <a href="https://envytheme.com/" target="_blank" className="text-decoration-none text-primary">EnvyTheme</a></p>
                </footer>

            </div>
        </div>

        <button className="btn btn-primary theme-settings-btn p-0 position-fixed z-2 text-center rounded-circle" style="bottom: 24px; right: 24px; width: 56px; height: 56px; line-height: 54px;" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <i className="text-white ri-settings-3-fill fs-28" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Click On Theme Settings"></i>
        </button>


        <div className="offcanvas offcanvas-end bg-white border-0" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style="box-shadow: 0 4px 20px #2f8fe812 !important; max-width: 300px;">
            <div className="offcanvas-header bg-light p-20">
                <h5 className="offcanvas-title fs-18 fw-medium" id="offcanvasScrollingLabel">Configuration Panel</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body p-0 overflow-hidden">
                <div className="last-child-none" style="max-height: 858px;" data-simplebar>
                    <div className="p-20 border-bottom child">
                        <h4 className="fs-15 fw-medium mb-12">RTL Mode</h4>
                        <div className="rtl-btn">
                            <label id="switch">
                                <input type="checkbox" onchange="toggleTheme()" className="toggle-switch rtl-switch" id="slider" />
                            </label>
                        </div>
                    </div>
                    <div className="p-20 border-bottom child">
                        <h4 className="fs-15 fw-medium mb-12">Only Sidebar Dark</h4>
                        <div className="sidebar-light-dark" id="sidebar-light-dark">
                            <input type="checkbox" className="toggle-switch sidebar-dark-switch" />
                        </div>
                    </div>
                    <div className="p-20 border-bottom child">
                        <h4 className="fs-15 fw-medium mb-12">Only Header Dark</h4>
                        <div className="header-light-dark" id="header-light-dark">
                            <input type="checkbox" className="toggle-switch header-dark-switch" />
                        </div>
                    </div>
                    <div className="p-20 border-bottom child">
                        <h4 className="fs-15 fw-medium mb-12">Right Sidebar</h4>
                        <div className="right-sidebar" id="right-sidebar">
                            <input type="checkbox" className="toggle-switch right-sidebar-switch" />
                        </div>
                    </div>
                    <div className="p-20 border-bottom child">
                        <h4 className="fs-15 fw-medium mb-12">Hide Sidebar</h4>
                        <div className="icon-sidebar" id="icon-sidebar">
                            <input type="checkbox" className="toggle-switch icon-sidebar-switch" />
                        </div>
                    </div>
                    <div className="p-20 border-bottom child">
                        <h4 className="fs-15 fw-medium mb-12">Bordered Card</h4>
                        <div className="card-border" id="card-border">
                            <input type="checkbox" className="toggle-switch border-switch" />
                        </div>
                    </div>
                    <div className="p-20 border-bottom child">
                        <h4 className="fs-15 fw-medium mb-12">Card Border Radius</h4>
                        <div className="card-radius-square" id="card-radius-square">
                            <input type="checkbox" className="toggle-switch border-radius-switch" />
                        </div>
                    </div>
                    
                    <div className="p-20 border-bottom child">
                        <a href="#" className="btn btn-primary text-white">
                            Buy Fila
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </body>
        </>
    )
}

export default Home