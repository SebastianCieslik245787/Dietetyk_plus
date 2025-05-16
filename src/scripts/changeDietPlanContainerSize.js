let startedHeight = -1

export function changeDietPlanContainerSize() {
    const mealsEl = document.querySelector(".diet-plan-meals");
    const contentEl = document.querySelector(".diet-plan-content");
    const separatorEl = document.querySelector(".diet-plan-separator");

    if (!mealsEl || !contentEl) return

    if(startedHeight === -1) startedHeight = contentEl.offsetHeight;

    const mealsHeight = mealsEl.offsetHeight;

    console.log(startedHeight);
    console.log(mealsHeight);

    if (startedHeight < mealsHeight) {
        contentEl.style.height = mealsHeight + "px";
        separatorEl.style.height = mealsHeight - 10 + "px";
    }
    else {
        contentEl.style.height = startedHeight - 10 + "px";
        separatorEl.style.height = startedHeight + "px";
    }
}