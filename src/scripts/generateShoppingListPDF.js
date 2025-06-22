import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {font} from "./fonts/times-normal.js";

/**
 * Tworzy PDF tylko z podsumowaniem zakupów.
 * @param {Array} days - Tablica dni (każdy dzień to tablica posiłków)
 * @param {string} name - Imię pacjenta
 * @param {string} surname - Nazwisko pacjenta
 * @param {string} logoBase64 - Logo w base64
 */
export function generateShoppingListPDF(days, name, surname, logoBase64) {
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
    doc.setTextColor(180, 180, 180);
    doc.text("Dietetyk+", pageWidth / 2, 22, {align: "center"});
    doc.setTextColor(0, 0, 0);

    // Data wygenerowania w prawym górnym rogu
    const today = new Date().toLocaleDateString();
    doc.setFontSize(10);
    doc.text(`Data wygenerowania: ${today}`, 200, 16, {align: "right"});

    // Tytuł wyśrodkowany
    doc.setFontSize(20);
    doc.text(`Lista zakupów dla: ${name} ${surname}`, pageWidth / 2, 36, {align: "center"});

    // --- PODSUMOWANIE ZAKUPÓW Z CAŁEGO OKRESU ---
    doc.setFontSize(18);
    doc.text("Podsumowanie zakupów", 14, 50);
    doc.setDrawColor(180, 180, 180);
    doc.line(12, 52, 200, 52);

    // Zbierz i zsumuj wszystkie składniki
    const allIngredients = {};
    if (Array.isArray(days)) {
        days.forEach(day => {
            if (Array.isArray(day)) {
                day.forEach(i => {
                    const key = `${i.name}|${i.unit}`;
                    if (!allIngredients[key]) {
                        allIngredients[key] = {name: i.name, count: 0, unit: i.unit};
                    }
                    allIngredients[key].count += Number(i.count) || 0;
                });

            }
        });
    }
    const summaryTable = Object.values(allIngredients).map(i => [
        i.name,
        i.count % 1 === 0 ? i.count : i.count.toFixed(2),
        i.unit
    ]);

    if (summaryTable.length > 0) {
        autoTable(doc, {
            head: [["Składnik", "Łączna ilość", "Jednostka"]],
            body: summaryTable,
            startY: 60,
            styles: {font: "times-normal", fontStyle: "normal", fontSize: 11},
            headStyles: {font: "times-normal", fontStyle: "normal", fontSize: 11},
            bodyStyles: {font: "times-normal", fontStyle: "normal", fontSize: 11},
            margin: {left: 18}
        });
    } else {
        doc.setFontSize(11);
        doc.text("Brak składników do podsumowania.", 18, 65);
    }

    // Nagłówek i stopka na każdej stronie
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.text(`${name} ${surname}`, 200, 10, {align: "right"});
        doc.setFontSize(9);
        doc.text(`Strona ${i} z ${pageCount}`, 105, 292, {align: "center"});
    }

    doc.save(`Lista_zakupow_${name}_${surname}.pdf`);
}