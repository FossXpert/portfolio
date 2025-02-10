export const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = "/Ravi_1.pdf"; // Path to the PDF in the public folder
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };