# Main Website (Backend)

---
#### Creating Virtual Enviornment:
```
virtualenv venv
```
#### Activating Virtual Env on Windows:
```
venv\Scripts\activate
```

#### Activating Virtual Env on Linux:
```
source venv/bin/activate
```

#### Installing Dependencies:
```
pip install -r requirements.txt
```
#### Run Python Development Server:
```
python manage.py runserver
```


> ### **API Endpoints**

| Endpoint    | Method      | Description               |
| ----------- | ----------- | ------------------------- |
| /api/token/login           | POST         | Login a user. Recieves Auth Token.    |
| /auth/token/logout          | GET          | Logout a user.    |
| /auth/users                 | POST         | Create User.              |
| /auth/users/{id}            | GET          | Get a perticular User.    |
| /auth/users/reset_password/ | POST         | Reset Password.    |
| /auth/users/reset_password_confirm/ | POST         | POST UID and Token for Confirmation.    |
| /userquestion/{user_ans} | GET        | Get current user question and evalute the answer, Make sure you include Auth Header   |
| /leaderboard/                 | GET          | Leaderboard              |





