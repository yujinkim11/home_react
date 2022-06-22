export const Kakao = ({ kakaoData }) => {
  console.log(kakaoData);
  return (
    <div style={{ width: "1500px", margin: "0 auto" }}>
      <h1
        style={{
          color: "#1D1D1D",
          margin: "70px 0 10px 50px",
        }}
      >
        카카오
      </h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          margin: "10px 30px 10px 10px",
        }}
      >
        {kakaoData.map((kakao) => (
          <li key={kakao.id} style={{ margin: "10px 30px 10px 10px" }}>
            <img src={kakao.img} style={{ width: "453px" }}></img>
            <h3>{kakao.title}</h3>
            <p>{kakao.con.slice(0, 50) + "..."}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
