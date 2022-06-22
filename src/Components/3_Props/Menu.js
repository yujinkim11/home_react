export const Menu = ({ list }) => {
  return (
    <>
      <h1>오늘의 메뉴는?</h1>
      <div>
        오늘의 메인 메뉴는 {list[0].main}이고 사이드 메뉴는 {list[0].side},
        음료는 {list[0].drink}야
      </div>
      <div>
        오늘의 메인 메뉴는 {list[1].main}이고 사이드 메뉴는 {list[1].side},
        음료는 {list[1].drink}야
      </div>
      <div>
        오늘의 메인 메뉴는 {list[2].main}이고 사이드 메뉴는 {list[2].side},
        음료는 {list[2].drink}야
      </div>
      <div>
        오늘의 메인 메뉴는 {list[3].main}이고 사이드 메뉴는 {list[3].side},
        음료는 {list[3].drink}야
      </div>
    </>
  );
};
