DROP DATABASE IF EXISTS todo_db;

CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE todo_tasks (
    tasks VARCHAR(50) NOT NULL,
    complete BOOLEAN DEFAULT false,
);
