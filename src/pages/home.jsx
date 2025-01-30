// src/components/Home.jsx

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [editingTaskId, setEditingTaskId] = useState(null);

    // Fetch projects and tasks on component mount
    useEffect(() => {
        fetchProjects();
        fetchTasks();
    }, []);

    const fetchProjects = async () => {
        const response = await fetch('http://localhost:5000/projects');
        const data = await response.json();
        setProjects(data);
    };

    const fetchTasks = async () => {
        const response = await fetch('http://localhost:5000/tasks');
        const data = await response.json();
        setTasks(data);
    };

    // Create Project
    const createProject = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: projectTitle, description: projectDescription, owner_id: 1 }), // Static owner_id for simplicity
        });
        fetchProjects(); // Refresh the project list
        setProjectTitle('');
        setProjectDescription('');
    };

    // Delete Project
    const deleteProject = async (projectId) => {
        await fetch(`http://localhost:5000/projects/${projectId}`, { method: 'DELETE' });
        fetchProjects(); // Refresh the project list after deletion
    };

    // Create Task
    const createTask = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: taskTitle, description: taskDescription, project_id: selectedProjectId, assigned_to_id: 1 }), // Static assigned_to_id for simplicity
        });
        fetchTasks(); // Refresh the task list
        setTaskTitle('');
        setTaskDescription('');
    };

    // Update Task
    const updateTask = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:5000/tasks/${editingTaskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: taskTitle, description: taskDescription }),
        });
        fetchTasks(); // Refresh the task list
        setEditingTaskId(null);
        setTaskTitle('');
        setTaskDescription('');
    };

    // Delete Task
    const deleteTask = async (taskId) => {
        await fetch(`http://localhost:5000/tasks/${taskId}`, { method: 'DELETE' });
        fetchTasks(); // Refresh the task list after deletion
    };

    // Edit Task - Populate fields for editing
    const editTask = (task) => {
        setEditingTaskId(task.id);
        setTaskTitle(task.title);
        setTaskDescription(task.description);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen page-fade-in">
            <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">Project Management Dashboard</h1>

            {/* Create Project Section */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow-lg card">
                <h2 className="text-2xl font-semibold mb-4">Create New Project</h2>
                <form onSubmit={createProject} className="flex flex-col space-y-4">
                    <input type="text" placeholder="Project Title" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} required className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500" />
                    <textarea placeholder="Project Description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} required className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500" />
                    <button type="submit" className="flex items-center justify-center p-3 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition duration-200">
                        <FontAwesomeIcon icon={faPlus} className="mr-2" /> Create Project
                    </button>
                </form>
            </div>

            {/* Projects List */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Your Projects</h2>
                <ul className="space-y-4">
                    {projects.map((project) => (
                        <li key={project.id} className="p-4 bg-white rounded-md shadow-md flex justify-between items-center card">
                            <div>
                                <h3 className="font-bold">{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button onClick={() => deleteProject(project.id)} className="text-red-600 hover:text-red-800 transition duration-200">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Assign Task Section */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg card">
                <h2 className="text-2xl font-semibold mb-4">Assign New Task</h2>
                <form onSubmit={editingTaskId ? updateTask : createTask} className="flex flex-col space-y-4">
                    <select value={selectedProjectId} onChange={(e) => setSelectedProjectId(e.target.value)} required className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500">
                        <option value="">Select Project</option>
                        {projects.map((project) => (
                            <option key={project.id} value={project.id}>{project.title}</option>
                        ))}
                    </select>
                    <input type="text" placeholder="Task Title" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} required className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500" />
                    <textarea placeholder="Task Description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} required className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500" />
                    <button type="submit" className="flex items-center justify-center p-3 text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-200">
                        <FontAwesomeIcon icon={faPlus} className="mr-2" /> {editingTaskId ? 'Update Task' : 'Create Task'}
                    </button>
                </form>
            </div>

            {/* Tasks List */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Assigned Tasks</h2>
                <ul className="space-y-4">
                    {tasks.map((task) => (
                        <li key={task.id} className="p-4 bg-white rounded-md shadow-md flex justify-between items-center card">
                            <div>
                                <h3 className="font-bold">{task.title}</h3>
                                <p>{task.description}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button onClick={() => editTask(task)} className="text-yellow-600 hover:text-yellow-800 transition duration-200">
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button onClick={() => deleteTask(task.id)} className="text-red-600 hover:text-red-800 transition duration-200">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
