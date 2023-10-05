import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "t3xz0pp14g77",
  environment: "master",
  accessToken: "RHJWgMOtmA5Ig-p8tc8xmkCmYWsXCNRdVVZ65BjHk60",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const fetch = async () => {
    try {
      const data = await client.getEntries({ content_type: "projects" });

      const projects = data.items.map((item) => {
        const { url, title, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { img, id, url, title };
      });
      //   console.log(projects);
      setLoading(false);
      setProjects(projects);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  return { loading, projects };
};
