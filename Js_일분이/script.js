// var currentMenu; //전역변수
// var menu = document.querySelector(".menu");
//1번 이벤트 발생시킬 태그 갖고왔고
/*
function clickMenuHandler( ) {
   currentMenu.classList.remove('menu-active') ;
  <-현재 눌러서 활성화된 애 있다 가정하고
   this.classList.add('menu-active') ;
   currentMenu = this ; 
  <-누른 this를 전연변수로 갱신! 그래야 액티브활성화해줌
}
*/
// <-이렇게 하면 currentMenu 언디파인드! 값 안넣구 , 변수 선언만 했잖아~
//2번
//이벤트가 발생되면 실행할 함수 만들기
//실행 아님! 눌렀을때 실행이 되야하니까, function 함수로 누르는걸 만드는거임
//눌렀을때 걔를 호출시킬수 있도록 짜야함!
//   <-if 문으로 currentMenu 가 값이 있을때만 리무브 해주쇼~
// -처음에는 담긴애가 없으니 값이 없으니까,(메뉴 누르지 않았으니)
//처음 if 문 조건으로 (커렌트메뉴) 가 들어있다면, 리무브 해주쇼~
//그러니 실질적으로 if문은 한번 돌고난후,
//버튼 누른후인 2번쨰부터 실행을 하겠지

// function clickHandler(e) {
//   if (currentMenu) {
//     currentMenu.classList.remove("menu-active");
//     console.log("remove");
//   }
//   e.target.classList.add("menu-active");
//   currentMenu = e.target;
//   console.log("active");
// }

// menu.addEventListener("click", clickHandler);
//3번
//1번과(태그) 2번(기능) 연결시키기-실행 !
//2번째 매개변수에는, 실행될 함수를 넣어!
//*이름이 Handler 인 이유! 이벤트 포함된거니까 !
//
//
// ________________________________________________

var currentMenu;
var menu = document.querySelector(".menu");
// 1 기능 줄 태그 갖고 온다

function clickHandler(e) {
  if (currentMenu) {
    currentMenu.classList.remove("menu-active");
  }
  e.target.classList.add("menu-active");
  console.log("유");
  currentMenu = e.target;
}
// 2 눌렀을때 색깔 바꿔주는 기능 만들어준다

menu.addEventListener("click", clickHandler);
// 3 일번과 + 이번을 합쳐준다
// 메뉴를 클릭했을때 기능(색깔 변함) 발생하도록.
// 함수가 이벤트리스너로 호출되면 첫번째 매개변수로
// 자동으로 어떤 객체가 들어가요. 이벤트 객체!
// 이벤트 객체를 콘솔로그 출력해보면 모든 이벤트가 쫘악-
// 이벤트 객체가 가진 속성 .target 을 이용!
// ___________________________________________________
