import "./blog.css"

import { useEffect, useState } from 'react';

const Blog3 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://basic-blog.teamrabbil.com/api/post-list/1');
      const result = await response.json();
      console.log(result);
      setData(result);
    };

    fetchData().catch(console.error);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {
        data.map((item, i) => {
          const { id, title, img } = item;
          // Ensure you return the JSX from map callback function
          return (
            <div key={id}>
              <div className="blog__container">
              <h1>{title}</h1>
              <img src={img} alt={title} />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Blog3;
