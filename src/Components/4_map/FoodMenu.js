export const FoodMenu = ({ menus }) => {
  //   console.log(menus);
  return (
    <div>
      <h1
        style={{
          color: "salmon",
        }}
      >
        오늘의 메뉴는!{" "}
      </h1>
      <ul>
        {menus.map((dish) => (
          <li key={dish.id}>
            오늘이 메인 메뉴는 {dish.main}, 사이드 메뉴는 {dish.side}
            !!!
            {/* {console.log(dish)} */}
          </li>
        ))}
        {/* * map
            => 배열 안의 요소를 새로운 배열로 만들어줌
            => map(변수=>새로 만들 배열)

            * key
            => Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다 */}
      </ul>
    </div>
  );
};
