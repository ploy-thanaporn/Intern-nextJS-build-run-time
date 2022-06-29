const Meow = ({ meow, randomData }) => {
  return (
    <div>
      <div>
        <h3>Build Time</h3>
        <span>{randomData}</span>
      </div>

      <img src={meow.file} style={{ marginTop: 12 }} />
    </div>
  );
};

// getStaticProps จะ fetch เฉพาะตอน build time แต่ถ้า run in dev จะถูกเรียกทุกครั้ง
export async function getStaticProps() {
  const res = await fetch("https://aws.random.cat/meow");
  const data = await res.json();

  return {
    props: {
      meow: data || {},
      randomData: Math.random().toString(),
    },
  };
}

export default Meow;
