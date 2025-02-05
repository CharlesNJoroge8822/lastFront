import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import "/Home.css";  

const Home = () => {
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [userName, setUserName] = useState(''); // New state for user's name

    useEffect(() => {
        fetchProjects();
        fetchTasks();
        fetchUserData();  // Fetch logged-in user data
    }, []);

    const fetchProjects = async () => {
        const response = await fetch('https://lastback-6.onrender.com/projects');
        const data = await response.json();
        setProjects(data);
    };

    const fetchTasks = async () => {
        const response = await fetch('https://lastback-6.onrender.com/tasks');
        const data = await response.json();
        setTasks(data);
    };

    const fetchUserData = async () => {
        // Assuming there's an endpoint to fetch the logged-in user's data
        const response = await fetch('https://lastback-6.onrender.com/users/1');
        const data = await response.json();
        setUserName(data.name || 'User'); // Set the logged-in user's name
    };

    const createProject = async (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString(); // Date for project creation
        await fetch('https://lastback-6.onrender.com/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: projectTitle, 
                description: projectDescription, 
                owner_id: 1, 
                date_created: currentDate // Add date_created field
            }),
        });
        fetchProjects();
        setProjectTitle('');
        setProjectDescription('');
    };

    const deleteProject = async (projectId) => {
        await fetch(`https://lastback-6.onrender.com/projects/${projectId}`, { method: 'DELETE' });
        fetchProjects();
    };

    const createTask = async (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString(); // Use the current date for tasks
        await fetch('https://lastback-6.onrender.com/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: taskTitle,
                description: taskDescription,
                project_id: selectedProjectId,
                assigned_to_id: 1,
                date: currentDate // Add date field
            }),
        });
        fetchTasks();
        setTaskTitle('');
        setTaskDescription('');
    };

    const updateTask = async (e) => {
        e.preventDefault();
        await fetch(`https://lastback-6.onrender.com/tasks/${editingTaskId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: taskTitle, description: taskDescription }),
        });
        fetchTasks();
        setEditingTaskId(null);
        setTaskTitle('');
        setTaskDescription('');
    };

    const deleteTask = async (taskId) => {
        await fetch(`https://lastback-6.onrender.com/tasks/${taskId}`, { method: 'DELETE' });
        fetchTasks();
    };

    const editTask = (task) => {
        setEditingTaskId(task.id);
        setTaskTitle(task.title);
        setTaskDescription(task.description);
    };

    return (
        <div className="page-wrapper">
            <header className="header">
                <h1>Welcome, {userName}</h1> {/* Display logged-in user's name */}
                <h2>Project Management Dashboard</h2>
            </header>

            <section className="card">
                <h2>Create New Project</h2>
                <form onSubmit={createProject}>
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Project Description"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        required
                    />
                    <button type="submit">
                        <FontAwesomeIcon icon={faPlus} /> Create Project
                    </button>
                </form>
            </section>

            <section>
                <h2>Your Projects</h2>
                <ul className="list">
                    {projects.map((project) => (
                        <li key={project.id}>
                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <p>{new Date(project.date_created).toLocaleString()}</p> {/* Display project creation date */}
                            </div>
                            <div>
                                <button onClick={() => deleteProject(project.id)} className="delete-btn">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="card">
                <h2>Assign New Task</h2>
                <form onSubmit={editingTaskId ? updateTask : createTask}>
                    <select
                        value={selectedProjectId}
                        onChange={(e) => setSelectedProjectId(e.target.value)}
                        required
                    >
                        <option value="">Select Project</option>
                        {projects.map((project) => (
                            <option key={project.id} value={project.id}>
                                {project.title}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Task Description"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        required
                    />
                    <button type="submit">{editingTaskId ? 'Update Task' : 'Create Task'}</button>
                </form>
            </section>

            <section>
                <h2>Assigned Tasks</h2>
                <ul className="list">
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <div>
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                                <p>{new Date(task.date).toLocaleString()}</p> {/* Format task date */}
                            </div>
                            <div>
                                <button onClick={() => editTask(task)} className="edit-btn">
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button onClick={() => deleteTask(task.id)} className="delete-btn">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Home;
