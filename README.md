# Not to do api

This api is created for not to do list application
Here is the link to front end app ...

## APIS

All the api will be following the `{rooturl}/api/v1/` format.

### Task API

`../api/v1/task` resource will provide all task related api.

| #   | Method   | Path    | Description                                                   |
| --- | -------- | ------- | ------------------------------------------------------------- |
| 1.  | `GET`    | `/task` | this will return all the task available in the database       |
| 2.  | `POST`   | `/task` | send task object to store in the database                     |
| 3.  | `DELETE` | `/task` | It expect ID of the task and will delete a task from database |

`../api/v1/user` resource will provide all task related api.

### User API
