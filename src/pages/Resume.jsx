import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import PDFViewer from "../components/ui/PDFViewer.jsx";

export default function Resume() {
  return (
    <Section>
      <Container>
        <h1 className="heading-page">My Resume</h1>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Open in New Window
          </a>
        </div>

        <div className="mt-8">
          <PDFViewer pdfUrl="/resume.pdf" />
        </div>
      </Container>
    </Section>
  );
}
