const PostList = ({ response }) => {
  return (
    <>
      {
        <ul>
          {response &&
            response.map((data) => {
              return <li key={data.id}>{data.title}</li>;
            })}
        </ul>
      }
    </>
  );
};

export default PostList;
