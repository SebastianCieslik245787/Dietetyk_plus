import jsPDF from "jspdf";

/**
 * Tworzy PDF z planem diety dla pacjenta.
 * @param {Array} days - Tablica dni (każdy dzień ma np. { meals: [...] })
 * @param {string} name - Imię pacjenta
 * @param {string} surname - Nazwisko pacjenta
 */
export function generateDietPDF(days, name, surname) {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Plan diety dla: ${name} ${surname}`, 14, 20);

    if (!Array.isArray(days) || days.length === 0) {
        doc.setFontSize(12);
        doc.text("Brak danych do wyswietlenia.", 14, 30);
    } else {
        let y = 30;
        days.forEach((day, dayIdx) => {
            if (y > 260) { doc.addPage(); y = 20; }
            doc.setFontSize(14);
            doc.text(`Dzień ${dayIdx + 1}`, 14, y);
            y += 8;

            if (Array.isArray(day.meals) && day.meals.length > 0) {
                day.meals.forEach((mealObj, mealIdx) => {
                    if (y > 260) { doc.addPage(); y = 20; }
                    doc.setFontSize(12);
                    doc.text(`${mealObj.label || ""}: ${mealObj.meal?.name || ""}`, 14, y);
                    y += 6;
                    if (mealObj.meal?.macros) {
                        doc.setFontSize(10);
                        doc.text(
                            `Białko: ${mealObj.meal.macros.proteins}g, Węglowodany: ${mealObj.meal.macros.carbohydrates}g, Tłuszcze: ${mealObj.meal.macros.fats}g, kcal: ${mealObj.meal.macros.kcal}`,
                            14,
                            y
                        );
                        y += 5;
                    }
                    if (Array.isArray(mealObj.meal?.ingredients)) {
                        const ingredients = mealObj.meal.ingredients
                            .filter(i => i.name)
                            .map(i => `${i.name} - ${i.count} ${i.unit}`)
                            .join(", ");
                        doc.text(`Składniki: ${ingredients}`, 14, y);
                        y += 5;
                    }
                    if (mealObj.meal?.recipe) {
                        doc.text(`Przepis: ${mealObj.meal.recipe}`, 14, y, { maxWidth: 180 });
                        y += 8;
                    }
                    y += 2;
                });
            } else {
                doc.setFontSize(10);
                doc.text("Brak posiłków w tym dniu.", 14, y);
                y += 6;
            }
            y += 4;
        });
    }

    doc.save(`Dieta_${name}_${surname}.pdf`);
}