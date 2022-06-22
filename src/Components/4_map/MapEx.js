import { LangDB } from "../../DB";

export const MapEx = (data) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1A1A1B",
          height: "100vh",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            listStyle: "none",
          }}
        >
          {LangDB.map((language) => (
            <div>
              <li
                key={language.id}
                style={{
                  width: "400px",
                  margin: "100px 70px 0 0",
                  backgroundColor: "#1A1A1B",
                  boxShadow: "3px 3px 3px 3px #000",
                }}
              >
                <img
                  src={language.img}
                  style={{
                    width: "400px",
                    height: "300px",
                  }}
                ></img>
                <div
                  style={{
                    height: "180px",
                    color: "white",
                    margin: "0 0 0 15px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "900",
                      margin: "5px 0",
                    }}
                  >
                    {language.title}
                  </h3>
                  <p style={{ fontSize: "15px", fontWeight: "700" }}>
                    {language.con}
                  </p>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
