import { useState, useEffect } from "react";
import axios from "axios";

export default function Images(props) {
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setLoaded(false);
  }, [props.word]);

  function handleResponse(response) {
    setPhotos(response.data.photos);
  }

  function load() {
    setLoaded(true);
    let pixelesApiUrl = `https://api.pexels.com/v1/search?query=${props.word}&per_page=8`;
    let pixelesKey = "563492ad6f91700001000001b7866cf2761b4b21a48a294c059db68b";
    let header = { Authorization: `Bearer ${pixelesKey}` };
    axios.get(pixelesApiUrl, { headers: header }).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Images text-center py-4 d-row">
        {photos.map((photo, index) => {
          return (
            <div className="d-col-4">
              <a
                href={photo.src.original}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="m-2 rounded img-fluid"
                  key={index}
                  src={photo.src.landscape}
                  alt="images"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    load();
    return <div>Loading ...</div>;
  }
}
