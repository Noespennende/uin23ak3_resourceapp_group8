import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Resources({ resources, category }) {
  const [resource, setResource] = useState();

  useEffect(() => {
    console.log(resources)
    if (resources && category) {
      const filteredResource = resources.find(res => res.category.toLowerCase().includes(category.toLowerCase()));
      setResource(filteredResource || {});
    }
  }, [resources, category]); // [resources] sier at useEffect skal kjøre på nytt hvis denne forandres (f.eks at innholdet oppdateres)
  console.log(resource)

  return (
    <section>
      <h2>{resource?.category}</h2>
      <p>{resource?.text}</p>
      <ul>
        {resource?.sources?.map((source, index) => (
          <li key={index}>
            <a href={source.url}>{source.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}