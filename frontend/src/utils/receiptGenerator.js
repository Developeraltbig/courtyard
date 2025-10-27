import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // <-- 1. Import autoTable as a function

export const generateReceipt = (order) => {
    // 1. Create a new PDF document
    const doc = new jsPDF();

    // 2. Add content to the PDF
    // Restaurant Title
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('The CourtYard Diaries', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Invoice / Order Receipt', 105, 28, { align: 'center' });

    // Order Details
    doc.setFontSize(10);
    doc.text(`Order ID: ${order._id}`, 14, 45);
    doc.text(`Date: ${new Date(order.createdAt).toLocaleString('en-IN')}`, 14, 50);
    doc.text(`Table No: ${order.tableNumber}`, 14, 55);
    doc.text(`Customer: ${order.customer.name}`, 14, 60);

    // 3. Create the table of items
    const tableColumn = ["Qty", "Item Name", "Price", "Total"];
    const tableRows = [];

    order.items.forEach(item => {
        const itemData = [
            item.quantity,
            item.menuItem.name,
            `₹${item.menuItem.price.toFixed(2)}`,
            `₹${(item.menuItem.price * item.quantity).toFixed(2)}`
        ];
        tableRows.push(itemData);
    });

    // --- 3. THE FIX IS HERE ---
    // Instead of doc.autoTable(...), we now call it as a function, passing 'doc'
    autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 70, // Y position to start the table
        theme: 'striped',
        headStyles: { fillColor: [192, 57, 43] } // Match your brand color
    });

    // 4. Add the total amount
    const finalY = doc.lastAutoTable.finalY; // This part remains the same
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`Grand Total: ₹${order.totalAmount.toFixed(2)}`, 14, finalY + 15);

    // 5. Add a thank you message
    doc.setFontSize(12);
    doc.setFont('helvetica', 'italic');
    doc.text('Thank you for your order!', 105, finalY + 30, { align: 'center' });

    // 6. Save the PDF, prompting a download
    doc.save(`receipt-${order._id}.pdf`);
};