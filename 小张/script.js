// 页脚年份自动更新（兼容 id 与 class）
const year = new Date().getFullYear();
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = year;
document.querySelectorAll(".year").forEach((el) => (el.textContent = year));

// 滚动进入视口时显现（轻交互，符合克制美学）
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  // 不支持时直接显示
  reveals.forEach((el) => el.classList.add("visible"));
}

console.log("玛瑙品牌故事页已加载");

// 英文注释折叠（支持多个，文化 / 故事 等板块）
document.querySelectorAll(".en-toggle").forEach((toggle) => {
  const content = document.getElementById(toggle.getAttribute("aria-controls"));
  if (!content) return;
  toggle.addEventListener("click", () => {
    const isOpen = content.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    const label = toggle.querySelector(".en-toggle-label");
    if (label) {
      label.textContent = isOpen
        ? "收起英文 · Hide English"
        : "查看英文翻译 · View English";
    }
  });
});
