import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { font } from "../scripts/fonts/times-normal.js";

/**
 * Tworzy PDF z planem diety dla pacjenta (bez listy zakupów).
 * @param {Array} days - Tablica dni (każdy dzień to tablica posiłków)
 * @param {string} name - Imię pacjenta
 * @param {string} surname - Nazwisko pacjenta
 * @param {string} logoBase64 - Logo w base64
 */
export function generateDietPDF(days, name, surname, logoBase64) {
    const doc = new jsPDF();
    doc.addFileToVFS("times-normal.ttf", font);
    doc.addFont("times-normal.ttf", "times-normal", "normal");
    doc.setFont("times-normal", "normal");

    // Dodaj logo w lewym górnym rogu (jeśli jest)
    if (logoBase64) {
        doc.addImage(logoBase64, "PNG", 10, 10, 30, 30);
    }

    // Napis "Dietetyk+" jasnoszary, wyśrodkowany na górze
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFont("times-normal", "normal");
    doc.setFontSize(28);
    doc.setTextColor(180, 180, 180); // jasnoszary
    doc.text("Dietetyk+", pageWidth / 2, 22, { align: "center" });
    doc.setTextColor(0, 0, 0); // reset koloru na czarny

    // Data wygenerowania w prawym górnym rogu
    const today = new Date().toLocaleDateString();
    doc.setFontSize(10);
    doc.setFont("times-normal", "normal");
    doc.text(`Data wygenerowania: ${today}`, 200, 16, { align: "right" });

    // Tytuł wyśrodkowany, poniżej napisu Dietetyk+
    doc.setFont("times-normal", "normal");
    doc.setFontSize(20);
    doc.text(`Plan diety dla: ${name} ${surname}`, pageWidth / 2, 36, { align: "center" });

    if (!Array.isArray(days) || days.length === 0) {
        doc.setFont("times-normal", "normal");
        doc.setFontSize(12);
        doc.text("Brak danych do wyświetlenia.", 14, 50);
    } else {
        let y = 46;
        days.forEach((day, dayIdx) => {
            if (y > 250) { doc.addPage(); y = 20; }
            // Nagłówek dnia
            doc.setFont("times-normal", "normal");
            doc.setFontSize(15);
            doc.text(`Dzień ${dayIdx + 1}`, 14, y);
            doc.setDrawColor(180, 180, 180);
            doc.line(12, y + 2, 200, y + 2);
            y += 10;

            if (Array.isArray(day) && day.length > 0) {
                day.forEach((mealObj) => {
                    if (y > 250) { doc.addPage(); y = 20; }
                    doc.setFont("times-normal", "normal");
                    doc.setFontSize(13);
                    doc.text(`${mealObj.name || ""}: ${mealObj.meal?.name || ""}`, 18, y);
                    y += 7;

                    // Składniki do posiłku - małą czcionką
                    if (Array.isArray(mealObj.meal?.ingredients) && mealObj.meal.ingredients.length > 0) {
                        doc.setFont("times-normal", "normal");
                        doc.setFontSize(9);
                        doc.text("Produkty:", 20, y);
                        y += 5;
                        mealObj.meal.ingredients.forEach(i => {
                            doc.text(`- ${i.name} (${i.count} ${i.unit})`, 24, y);
                            y += 4;
                        });
                    }

                    // Przepis
                    if (mealObj.meal?.recipe) {
                        doc.setFont("times-normal", "normal");
                        doc.setFontSize(11);
                        doc.text("Przepis:", 18, y);
                        y += 5;
                        doc.setFont("times-normal", "normal");
                        doc.setFontSize(11);
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
    }

    // Dodaj nagłówek i stopkę na każdej stronie
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        // Nagłówek z nazwiskiem
        doc.setFontSize(10);
        doc.setFont("times-normal", "normal");
        doc.text(`${name} ${surname}`, 200, 10, { align: "right" });
        // Stopka z numerem strony
        doc.setFontSize(9);
        doc.setFont("times-normal", "normal");
        doc.text(`Strona ${i} z ${pageCount}`, 105, 292, { align: "center" });
    }

    doc.save(`Dieta_${name}_${surname}.pdf`);
}