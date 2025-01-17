/* General Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

h1, h2, h3 {
    color: #333;
}

a {
    text-decoration: none;
    color: #007bff;
}

/* Header */
header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 2rem 0;
}

header .profile-img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
}

header .header-content {
    max-width: 900px;
    margin: 0 auto;
}

header h1 {
    margin-top: 1rem;
    font-size: 2.5rem;
}

header p {
    font-size: 1.2rem;
    margin: 1rem 0;
}

header .btn {
    background-color: #007bff;
    color: #fff;
    padding: 0.5rem 2rem;
    font-size: 1rem;
    border-radius: 3px;
    transition: background-color 0.3s ease;
}

header .btn:hover {
    background-color: #0056b3;
}

/* Main Section */
main {
    padding: 3rem 1.5rem;
}

section {
    margin-bottom: 2.5rem;
}

h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1rem;
    line-height: 1.6;
}

.project-list {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.project-item {
    background-color: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    flex: 1;
    min-width: 250px;
    max-width: 350px;
    transition: transform 0.3s ease;
}

.project-item:hover {
    transform: translateY(-5px);
}

.project-item h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.project-item p {
    font-size: 1rem;
}

/* Contact Form */
.contact form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact input,
.contact textarea {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

.contact input[type="text"],
.contact input[type="email"] {
    height: 40px;
}

.contact textarea {
    resize: vertical;
    min-height: 150px;
}

.contact button {
    background-color: #28a745;
    color: #fff;
    padding: 0.8rem;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.contact button:hover {
    background-color: #218838;
}

/* Success/Error Messages */
.success,
.error {
    font-size: 1rem;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
    display: none;
}

.success {
    background-color: #28a745;
    color: #fff;
}

.error {
    background-color: #dc3545;
    color: #fff;
}

/* Footer */
footer {
    text-align: center;
    padding: 1.5rem 0;
    background-color: #333;
    color: #fff;
}

footer p {
    font-size: 1rem;
}
