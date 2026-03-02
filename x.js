
// Certificate data - update this object with new entries from your Excel
const certificates = {
    "SH-2026-001": {
        name: "Junior Paradise Dube",
        course: "Advanced Nursing Techniques",
        date: "2026-02-27",
        status: "Valid"
    },
    // Add more here, e.g.:
    // "SH-2026-002": {name: "Jane Smith", course: "Basic Training", date: "2026-03-01", status: "Valid" },
};

// Get ID from URL (e.g., ?id=SH-2026-001)
const urlParams = new URLSearchParams(window.location.search);
const certId = urlParams.get('id');

const resultElement = document.getElementById('result');

if (certId && certificates[certId]) {
    const cert = certificates[certId];
    if (cert.status === "Valid") {
        resultElement.innerHTML = `
                          <p class="valid">This certificate is VALID.</p>
                          <p><strong>Recipient:</strong> ${cert.name}</p>
                          <p><strong>Course:</strong> ${cert.course}</p>
                          <p><strong>Issued On:</strong> ${cert.date}</p>
                          <p>Issued by Will at Soundhealth Training.</p>
                      `;
    } else {
        resultElement.innerHTML = '<p class="invalid">This certificate is REVOKED or INVALID.</p>';
    }
} else {
    resultElement.innerHTML = '<p class="invalid">Invalid Certificate ID. Please check and try again.</p>';
}
