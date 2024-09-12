// fetchProjects.js
import { useState, useEffect } from "react";
import { createClient } from "contentful";

// Create the Contentful client
const client = createClient({
  space: "8rmwu8tfve5n",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

client
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response));

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

export default useFetchProjects;
