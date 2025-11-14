import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

// Configure the worker using the local worker file
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function PDFViewer({ pdfUrl }) {
  const containerRef = useRef(null);
  const [pdf, setPdf] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load PDF
  useEffect(() => {
    const loadPDF = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Attempting to load PDF from:", pdfUrl);

        // Load the PDF document with explicit options
        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
          cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@" + pdfjsLib.version + "/cmaps/",
          cMapPacked: true,
        });

        const pdfDoc = await loadingTask.promise;

        console.log("PDF loaded successfully. Pages:", pdfDoc.numPages);
        setPdf(pdfDoc);
        setNumPages(pdfDoc.numPages);
        setLoading(false);
      } catch (err) {
        console.error("Error loading PDF:", err);
        console.error("Error details:", err.message);
        console.error("PDF URL was:", pdfUrl);
        setError(`Failed to load PDF: ${err.message || "Unknown error"}`);
        setLoading(false);
      }
    };

    loadPDF();
  }, [pdfUrl]);

  // Render pages after PDF is loaded
  useEffect(() => {
    if (!pdf || !containerRef.current) return;

    const renderPage = async (pageNum) => {
      try {
        const page = await pdf.getPage(pageNum);
        const canvas = containerRef.current.querySelector(`#pdf-page-${pageNum}`);

        if (!canvas) {
          console.warn(`Canvas for page ${pageNum} not found`);
          return;
        }

        const context = canvas.getContext("2d");

        // Calculate scale to fit container width (with some padding)
        const containerWidth = containerRef.current.clientWidth;
        const viewport = page.getViewport({ scale: 1 });
        const scale = Math.min((containerWidth - 40) / viewport.width, 2); // Max scale of 2
        const scaledViewport = page.getViewport({ scale });

        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
        };

        await page.render(renderContext).promise;
        console.log(`Page ${pageNum} rendered successfully`);
      } catch (err) {
        console.error(`Error rendering page ${pageNum}:`, err);
      }
    };

    // Render all pages
    const renderAllPages = async () => {
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        await renderPage(pageNum);
      }
    };

    renderAllPages();
  }, [pdf]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          <p className="mt-4 body-default">Loading PDF...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center text-red-500">
          <p className="body-default">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pdf-viewer" ref={containerRef}>
      {Array.from({ length: numPages }, (_, index) => (
        <div key={index} className="pdf-page mb-6 shadow-lg rounded overflow-hidden">
          <canvas id={`pdf-page-${index + 1}`} className="w-full h-auto bg-white" />
        </div>
      ))}
    </div>
  );
}
