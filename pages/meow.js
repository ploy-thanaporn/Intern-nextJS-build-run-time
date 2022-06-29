const Meow = ({ file }) => {
  return (
    <div>
      <h3>Run Time</h3>
      <img src={file} />
    </div>
  );
};

Meow.getInitialProps = async () => {
  const res = await fetch("https://aws.random.cat/meow");
  const data = await res.json();

  const random = Math.random().toString();
  console.log(random);

  return data;
};

export default Meow;

// function Page({ stars }) {
//   return <div>Next stars: {stars}</div>;
// }

// Page.getInitialProps = async (ctx) => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const json = await res.json();
//   return { stars: json.stargazers_count };
// };

// export default Page;
