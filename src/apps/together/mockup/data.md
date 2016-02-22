---
layout: layout.hbs
---

# Data Models

## **Users**
- This data model consists of all the users who will be collaborating on a single project.
- Users can create new projects, view all their existing projects, and create new tasks for the projects they are a collaborator of.

  ```
  Users
  - Name 
  - Email
  - Contact Number
  ```

## **Projects**
- This includes all the projects that the user is a collaborator of.
- It will also include other details of the project like the project name itself and the tasks under the project.
- This data model also lists all the projects that user is a part of.
	
  ```
  Projects
  - Project title
  - Collaborators
  - Tasks
  ```

## **Tasks**
- The project data model will consist of the tasks data model.
- This will have all the tasks that are created by the user for a particular project.
	
  ```
  Tasks
  - Task Name
  - Duties
  - Deadline
  - Assigned To
  ```

## **Revision**
- Made the website compatible to fit to an iPad screen without requiring the user to scroll between sections.
- Awareness feature:
  - Whenever a new task is added, the person adding the task along with the name of the task is shown to users seeing it for the first time
  - In the chat window, as a user types, other collaborators of the project are able to see that they are typing
  - Also, if a user has been added as a collaborator or assigned a new task, they will be notified via the announcements icon on the right of the navbar.