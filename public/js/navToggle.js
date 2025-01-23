const navbar = document.querySelector("#navbar");

console.log("hello")

export function openSidebar() {
  navbar.classList.add("show");
}

export function closeSidebar() {
  navbar.classList.remove("show");
}
