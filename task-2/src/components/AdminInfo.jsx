const AdminInfo = () => {
  /* static admin information*/
  const admins = [
    {
      id: 1,
      name: "Pallavi",
      age: 23,
      email: "pallavi@gmail.com",
      role: "admin",
    },
    {
      id: 2,
      name: "Akila",
      age: 20,
      email: "akila@gmail.com",
      role: "admin",
    },
    {
      id: 3,
      name: "Swetha",
      age: 33,
      email: "swetha@gmail.com",
      role: "admin",
    },
    {
      id: 4,
      name: "Ragavi",
      age: 25,
      email: "ragavi@gmail.com",
      role: "admin",
    },
  ];
  return (
    <table>
      <thead>
        <tr key="header">
          {Object.keys(admins[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {admins.map((admin) => (
          <tr key={admin.id}>
            {Object.values(admin).map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminInfo;
