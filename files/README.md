# Files Folder

This folder contains reference materials and assets for the Lex Advisors website.

## Folder Structure

### `/files/logos/`
- **Purpose**: Store logo files (PNG, SVG, JPG formats)
- **Usage**: Upload the Lex Advisors logo here
- **Recommended**: Use SVG format for best quality and scalability

### `/files/images/`
- **Purpose**: Store general images, photos, and graphics
- **Usage**: Team photos, office images, service-related graphics
- **Formats**: PNG, JPG, WebP

### `/files/documents/`
- **Purpose**: Store reference documents and PDFs
- **Usage**: Legal documents, brochures, case studies
- **Formats**: PDF, DOC, DOCX

## How to Use

1. **Upload your logo** to `/files/logos/`
2. **Update the HTML files** to reference the correct logo path
3. **Add any additional images** to `/files/images/`
4. **Store reference documents** in `/files/documents/`

## Current Logo Reference

The website currently uses a placeholder logo. Once you upload the actual logo:

1. Place it in `/files/logos/`
2. Update the `src` attribute in all HTML files from:
   ```html
   <img src="logo-placeholder.svg" alt="Lex Advisors Logo" class="logo-img">
   ```
   to:
   ```html
   <img src="files/logos/your-logo-file.svg" alt="Lex Advisors Logo" class="logo-img">
   ```

## File Naming Convention

- Use lowercase letters
- Separate words with hyphens
- Include file extension
- Examples: `lex-advisors-logo.svg`, `team-photo.jpg`, `brochure-2024.pdf`
