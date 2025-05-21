import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function generatePDF(patients) {
    const doc = new jsPDF();

    // Add a title
    doc.setFontSize(18);
    doc.text("Patients List", 14, 20);

    // Add a table with patient data
    const tableData = patients.map((patient, index) => {
        const key = Object.keys(patient)[0];
        return [
            index + 1,
            patient[key]?.name || "N/A",
            patient[key]?.surname || "N/A",
            patient[key]?.email || "N/A",
        ];
    });

    autoTable(doc, {
        head: [["#", "Name", "Surname", "Email"]],
        body: tableData,
        startY: 30,
    });

    // Save the PDF
    doc.save("Patients_List.pdf");
}

export function generateDietPDF(patient) {
    const doc = new jsPDF();

    // Add a title
    doc.setFontSize(18);
    doc.text(`Diet Plan for ${patient.name} ${patient.surname}`, 14, 20);

    // Add patient details
    doc.setFontSize(12);
    doc.text(`Name: ${patient.name || "N/A"}`, 14, 40);
    doc.text(`Surname: ${patient.surname || "N/A"}`, 14, 50);
    doc.text(`Email: ${patient.email || "N/A"}`, 14, 60);

    // Add diet details (example structure)
    const dietData = patient.diet || [];
    const tableData = dietData.map((item, index) => [
        index + 1,
        item.meal || "N/A",
        item.calories || "N/A",
        item.time || "N/A",
    ]);

    autoTable(doc, {
        head: [["#", "Meal", "Calories", "Time"]],
        body: tableData,
        startY: 80,
    });

    // Save the PDF
    doc.save(`Diet_Plan_${patient.name}_${patient.surname}.pdf`);
}