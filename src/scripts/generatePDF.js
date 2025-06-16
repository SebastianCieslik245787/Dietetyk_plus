import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { font } from "../scripts/fonts/times-normal.js";

/**
 * Tworzy PDF z planem diety dla pacjenta oraz listą zakupów na każdy dzień.
 * @param {Array} days - Tablica dni (każdy dzień ma np. { meals: [...] })
 * @param {string} name - Imię pacjenta
 * @param {string} surname - Nazwisko pacjenta
 */
export function generateDietPDF(days, name, surname) {
    const doc = new jsPDF();
    doc.addFileToVFS("times-normal.ttf", font);
    doc.addFont("times-normal.ttf", "times-normal", "normal");
    doc.setFont("times-normal", "normal");
    doc.setFontSize(20);
    doc.text(`Plan diety dla: ${name} ${surname}`, 14, 20);

    if (!Array.isArray(days) || days.length === 0) {
        doc.setFont("times-normal", "normal");
        doc.setFontSize(12);
        doc.text("Brak danych do wyświetlenia.", 14, 30);
    } else {
        let y = 30;
        days.forEach((day, dayIdx) => {
            if (y > 250) { doc.addPage(); y = 20; }
            doc.setFont("times-normal", "bold");
            doc.setFontSize(15);
            doc.text(`Dzień ${dayIdx + 1}`, 14, y);
            // Linia pod tytułem dnia
            doc.setDrawColor(180, 180, 180);
            doc.line(12, y + 2, 200, y + 2);
            y += 10;

            if (Array.isArray(day.meals) && day.meals.length > 0) {
                day.meals.forEach((mealObj, mealIdx) => {
                    if (y > 250) { doc.addPage(); y = 20; }
                    doc.setFont("times-normal", "bold");
                    doc.setFontSize(13);
                    doc.text(`${mealObj.label || ""}: ${mealObj.meal?.name || ""}`, 18, y);
                    y += 7;

                    if (mealObj.meal?.macros) {
                        doc.setFont("times-normal", "normal");
                        doc.setFontSize(11);
                        autoTable(doc, {
                            head: [["Białko (g)", "Węglowodany (g)", "Tłuszcze (g)", "kcal"]],
                            body: [[
                                mealObj.meal.macros.proteins,
                                mealObj.meal.macros.carbohydrates,
                                mealObj.meal.macros.fats,
                                mealObj.meal.macros.kcal
                            ]],
                            startY: y,
                            theme: "grid",
                            styles: { font: "times-normal", fontSize: 10 },
                            margin: { left: 18 }
                        });
                        y = doc.lastAutoTable.finalY + 2;
                    }

                    if (Array.isArray(mealObj.meal?.ingredients)) {
                        doc.setFont("times-normal", "normal");
                        doc.setFontSize(11);
                        doc.text("Składniki:", 18, y);
                        y += 5;
                        mealObj.meal.ingredients
                            .filter(i => i.name)
                            .forEach(i => {
                                doc.text(`- ${i.name} (${i.count} ${i.unit})`, 22, y);
                                y += 5;
                            });
                    }

                    if (mealObj.meal?.recipe) {
                        doc.setFont("times-normal", "italic");
                        doc.setFontSize(11);
                        doc.text("Przepis:", 18, y);
                        y += 5;
                        doc.setFont("times-normal", "normal");
                        doc.text(doc.splitTextToSize(mealObj.meal.recipe, 170), 22, y);
                        y += 10 + Math.ceil(mealObj.meal.recipe.length / 90) * 5;
                    }
                    y += 4;
                });
            } else {
                doc.setFont("times-normal", "normal");
                doc.setFontSize(11);
                doc.text("Brak posiłków w tym dniu.", 18, y);
                y += 7;
            }
            // Linia oddzielająca dni
            doc.setDrawColor(200, 200, 200);
            doc.line(12, y + 2, 200, y + 2);
            y += 8;
        });

        // Dodajemy listę zakupów na końcu PDF
        doc.addPage();
        doc.setFont("times-normal", "bold");
        doc.setFontSize(18);
        doc.text("Lista zakupów", 14, 20);
        // Linia pod tytułem listy zakupów
        doc.setDrawColor(180, 180, 180);
        doc.line(12, 22, 200, 22);

        let yZakupy = 30;
        days.forEach((day, dayIdx) => {
            doc.setFont("times-normal", "bold");
            doc.setFontSize(14);
            doc.text(`Dzień ${dayIdx + 1}`, 14, yZakupy);
            // Linia pod tytułem dnia zakupów
            doc.setDrawColor(200, 200, 200);
            doc.line(12, yZakupy + 2, 200, yZakupy + 2);
            yZakupy += 9;

            // Zbierz wszystkie składniki z posiłków tego dnia
            const ingredients = [];
            if (Array.isArray(day.meals)) {
                day.meals.forEach(mealObj => {
                    if (Array.isArray(mealObj.meal?.ingredients)) {
                        mealObj.meal.ingredients
                            .filter(i => i.name)
                            .forEach(i => {
                                ingredients.push(`- ${i.name} (${i.count} ${i.unit})`);
                            });
                    }
                });
            }

            doc.setFont("times-normal", "normal");
            doc.setFontSize(11);

            if (ingredients.length > 0) {
            // ingredients: ["- nazwa (ilość jednostka)", ...]
            // Rozbij na obiekty:
            const tableData = ingredients.map(item => {
                    // "- nazwa (ilość jednostka)"
                    const match = item.match(/- (.+) \((.+) (.+)\)/);
                    if (match) {
                        return [match[1], match[2], match[3]];
                    }
                    return [item, "", ""];
                });
                autoTable(doc, {
                    head: [["Składnik", "Ilość", "Jednostka"]],
                    body: tableData,
                    startY: yZakupy,
                    styles: { font: "times-normal", fontSize: 11 },
                    margin: { left: 18 }
                });
                yZakupy = doc.lastAutoTable.finalY + 5;
            } else {
                doc.text("Brak składników.", 18, yZakupy);
                yZakupy += 5;
            }
            // Linia oddzielająca dni zakupów
            doc.setDrawColor(220, 220, 220);
            doc.line(12, yZakupy + 2, 200, yZakupy + 2);
            yZakupy += 8;
        });
    }

    doc.save(`Dieta_${name}_${surname}.pdf`);
}