import { useState } from "react";

export const useDownloadPdf = () => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadPdf = async () => {
    try {
      setIsLoading(true); // Set loading to true before fetching
      const fileUrl = "https://9cehvukx9sf8gj2k.public.blob.vercel-storage.com/Resume/Rahul_Resume_Ite1-urrcS14Rl9EMWnCoZNJKjUtfN1Fl9S.pdf";
      
      const response = await fetch(fileUrl);
      const blob = await response.blob(); // Convert response to Blob

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Rahul-Resume.pdf"; // Set download filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(link.href); // Clean up object URL
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    } finally {
      setIsLoading(false); // Reset loading after completion
    }
  };

  return { downloadPdf, isLoading };
};
