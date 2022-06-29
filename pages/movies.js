import React from "react";

// export const getStaticProps = async () => {
//   return {
//     props: {
//       movies: ["Back to the future", "The contact", "iRobot", "Superman"],
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(
    "http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods"
  );
  const data = await res.json();
  return {
    props: {
      movies: data.youtubes,
      randomData: Math.random().toString(),
    },
  };
};

const Movies = ({ movies, randomData }) => {
  return (
    <div>
      <h1>Build time</h1>
      <span>{randomData}</span>
      <ul>
        {movies.map((movie, index) => {
          return (
            <li key={movie.id} style={{ listStyle: "none" }}>
              <img
                src={movie.youtube_image}
                alt=""
                height={40}
                style={{ marginRight: 16, marginBottom: 10 }}
              />
              {`${index + 1}. ${movie.title}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
