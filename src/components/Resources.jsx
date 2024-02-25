import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Resources({resources}) {
  const { slug } = useParams();
  const [resource, setResource] = useState();

  useEffect(() => {
    //console.log(resources)
    console.log("Current slug:", slug);
    if (resources) {
      const filteredResource = resources.filter(res => res.category.toLowerCase() === slug.toLowerCase().replaceAll("-", " "));
      setResource(filteredResource[0]); // Set to empty object if not found
    }
  }, [slug, resources]); // [resources] sier at useEffect skal kjøre på nytt hvis denne forandres (f.eks at innholdet oppdateres)
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