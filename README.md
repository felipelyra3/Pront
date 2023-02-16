<div align="center">
  <img src="https://i.imgur.com/NJgx0AC.png" alt="Pront - logo" />
</div>


# Pront

This is a prototype of an integrated and universal medical record for Brazilian patients.


## Demonstration

<div align="center">
  <a target="_blank" rel="noopener" href="https://youtu.be/4O2OI48qWHs"><img src="https://i.imgur.com/ttHm9gZ.png" alt="Pront - video demonstration" /></a>
</div>


## Features

- Doctors, nurses and recepcionist can register new patients
- Save all medical records of a patient
- Edit patient's basic information
- Save all patient allergies
- Save all patient vaccination
- Save all patient exams
- Patients can login and see to their own information
- Fist login requires password change
- Doctors, nurses and recepcionist can reset patients' passwords


## Environment Variables

To run this project, you will need the following environment variables in your `.env` file

### Front-end
`REACT_APP_API_BASE_URL`

### Back-end
`MONGO_URI`

`PORT`

`MONGO_INITDB_ROOT_USERNAME`

`MONGO_INITDB_ROOT_PASSWORD`


## Installation

Install Pront using npm

### Front-end

```bash
  $ git clone https://github.com/felipelyra3/Pront
  $ cd Pront/front
  $ npm i
  $ npm run start
```

### Back-end

```bash
  $ git clone https://github.com/felipelyra3/Pront
  $ cd Pront/back
  $ npm i
  $ npm run seed
  $ npm run start
```

### Full-stack with Docker

```bash
  $ git clone https://github.com/felipelyra3/Pront
  $ cd Pront
  $ docker-compose up -d
```
## Routes

| Verb  | Route | Description | Requirements |
| ------------- | ------------- | ------------- |  ------------- |
| post  | /login  | login authentication | body = {cpf, password} |
| post  | /login/checktoken  | checks if token is valid | headers = {authorization: {token, logintype}} |
| delete  | /login/deletesession  | deletes the session (logout) | headers = {authorization: {token, logintype}} |
| post  | /registration/newuser  | registers a new user | headers = {authorization: {token, logintype}}, body = {name, socialName, gender, birthday, cpf, loginType, password, address: {cep, city, neighborhood, number, state, street}} |
| get  | /search/cpf/:cpf  | searches an user by CPF | headers = {authorization: {token, logintype}}, CPF as params |
| get  | /search/susnumber/:susnumber  | searches an user by SUS number | headers = {authorization: {token, logintype}}, SUS number as params |
| get  | /search/patient/cpf/:cpf  | searches own information by CPF; can be used only por patients | headers = {authorization: {token, logintype}}, CPF as params |
| put  | /update/user  | updates patient information | headers = {authorization: {token, logintype}}, body = {name, socialName, gender, birthday, cpf, loginType, password, _id, address: {cep, city, neighborhood, number, state, street}} |
| put  | /update/user/password  | resets patient password | headers = {authorization: {token, logintype}}, body = {cpf, password} |
| put  | /update/user/ownpassword  | changes user's password; at first login | headers = {authorization: {token, logintype}}, body = {cpf, password} |
| put  | /update/vaccine  | adds a vaccine record for a patient | headers = {authorization: {token, logintype}}, body = {_id, healthUnit, cnes, batch, manufacturer, vaccinator, date} |
| put  | /update/allergy  | adds an allergy record for a patient | headers = {authorization: {token, logintype}}, body = {_id, allergies} |
| put  | /update/exam  | adds an exam record for a patient | headers = {authorization: {token, logintype}}, body = {_id, examType, place, result} |

## Technology used

- ReactJS
- HTML5
- CSS3
- NodeJS
- MongoDB
- Docker


## Author

- [@felipelyra3](https://www.github.com/https://github.com/felipelyra3)

