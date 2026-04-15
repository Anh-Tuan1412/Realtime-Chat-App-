# 02 - Database ERD

```mermaid
erDiagram
    USER {
      string _id
      string fullName
      string email
      string password
      string profilePic
      date createdAt
      date updatedAt
    }

    MESSAGE {
      string _id
      string senderId
      string receiverId
      string text
      string image
      date createdAt
      date updatedAt
    }

    USER ||--o{ MESSAGE : sends
    USER ||--o{ MESSAGE : receives
```
