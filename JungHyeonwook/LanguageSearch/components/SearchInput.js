export default function SearchInput({ $target, initialState, onChange }) {
  this.$element = document.createElement("form");
  this.$element.className = "SearchInput";
  this.state = initialState;

  $target.appendChild(this.$element);
  //   console.log($target);

  this.render = () => {
    this.$element.innerHTML = `
    <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}">
    `;
    console.log("asd");
  };

  this.render();

  //이벤트 핸들러 구현
  this.$element.addEventListener("keyup", (e) => {
    onChange(e.target.value);
  });
}
