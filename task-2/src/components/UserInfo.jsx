const UserInfo = () => {
  /* static user information*/
  const users = [
    {
      id: 1,
      name: "Gayathri",
      age: 23,
      email: "gayathri@gmail.com",
      role: "user",
    },
    {
      id: 2,
      name: "Divya",
      age: 20,
      email: "divya@gmail.com",
      role: "user",
    },
    {
      id: 3,
      name: "Lakshmi",
      age: 33,
      email: "lakshmi@gmail.com",
      role: "user",
    },
    {
      id: 4,
      name: "Bhavvya",
      age: 25,
      email: "bhavvya@gmail.com",
      role: "user",
    },
  ];
  return (
    <table>
      <thead>
        <tr key="header">
          {Object.keys(users[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            {Object.values(user).map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserInfo;
