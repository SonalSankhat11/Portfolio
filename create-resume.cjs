const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'resume');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Minimal valid PDF
const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 174 >>
stream
BT
/F1 22 Tf
50 720 Td
(Sonal Sankhat) Tj
0 -30 Td
/F1 14 Tf
(Computer Science Engineering Student) Tj
0 -25 Td
(Placeholder Resume File) Tj
0 -25 Td
(Replace this file with your actual Sonal_Sankhat_Resume.pdf) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000224 00000 n 
0000000450 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
527
%%EOF
`;

fs.writeFileSync(path.join(dir, 'Sonal_Sankhat_Resume.pdf'), pdf.trim());
console.log('Resume PDF generated successfully');
