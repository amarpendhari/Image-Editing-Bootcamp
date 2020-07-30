# Vue + Json Server Image Editing Bootcamp

## Project setup

```
npm install
```

## Install Vue

```
npm install vue
```

## Compiles and hot-reloads for development(Run Vue on localhost)

```
npm run serve
```

## Install JSON Server

```
npm install -g json-server
```

## Run JSON Server

```
json-server --watch db.json
```

## Run Vue + JSON Server(Scripts added for npm run dev)

```
npm run dev
```

## Image Editing Bootcamp

- Online Image Editing Bootcamp using Vue + JSON Server

## Project Specifications

- A Complex Nested Component App using Vue
- JSON Server is a Node Module that you can use to create demo rest json webservice(i.e full fake REST API )
- Vuex for State Management
- Auth Implemented
- User can Register as Students or Instructor
- Email ID connot be used Twice
- Diffreent Dashboards for Students & Instructors respectively
- Handling Resposne when No Data.

* Registration

  - All Feilds are Required
  - Used Email Id cannot be used again
  - Alerts if any Feild left missing or for Invalid Data
  - Submit Registration Form and Log In User
  - If User Registers a Student or Instructor take them to respective Dashboard

* Login

  - Only Log In for Users who have Registered
  - Fake account cannot Log IN
  - Enter Valid Email Id & Password
  - Log In User & take them to respective Dashboard

* Students

  - Students Dashboard consists of Image Editing Video Tutuorials
  - Students can watch this Video & take Editing Tasks
  - Editing Task will contain Total No of Task, when clicked Task no., Task will Appear
  - Only one Task can be Edited at a Time
  - Once the task is Edited, Response will be Submitted to Instructor
  - Confirmation message of Response Submitted
  - Rated Images can be Seen on Students Screen

* Instructor

  - Instructor can Create Image Editing Task, that will be visible to students
  - All Feilds in necessary in Create Task Form
  - Created Task will have a Task Name, Image, Description(editing details).
  - Task Created by Instructor can we viewed in Task List
  - Instructor can go to Rate Edited Images and view Edited Iamges Submitted by Students
  - Image can be Rated only once
  - Instructor can Rate Image from 0.5 to 10(.5 values allowed)

_Thank You_
