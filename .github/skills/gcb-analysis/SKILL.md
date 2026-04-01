---
name: gcb-analysis
description: 'Use when: comprehensively analyzing Global Carbon Budget 2025 data to gather and organize insights for integration into trackair website prompts, including static updates and dynamic features.'
---

# GCB Analysis Skill

This skill provides a comprehensive workflow to consult and integrate the Global Carbon Budget (GCB) 2025 as the theoretical foundation for the trackair project. It focuses on unbiased data gathering, context analysis, graphic interpretation, and organizing findings into structured prompts for website updates.

## Workflow Steps

1. **Extract Full Content from PDFs**: Use text extraction tools (e.g., pdftotext or Python libraries like PyPDF2) to convert GCB-Paper.pdf and GCB-Supplement.pdf into readable text, ensuring no data is missed.

2. **Gather Data and Context**: Systematically collect all data points, trends, projections, methodologies, and contextual information from the extracted text. Avoid biases; focus on objective facts.

3. **Analyze Graphics and Figures**: Review and interpret all graphs, charts, and visual data. Extract key insights, patterns, and implications for carbon emissions and atmospheric changes.

4. **Compare with Trackair Website**: Cross-reference GCB findings with existing website content (index.html, 3d-info.html, live-ic.html) to identify alignments, updates needed, and new opportunities.

5. **Organize Data for Prompts**: Structure the gathered data, comparisons, and insights into clear, prompt-ready formats. Categorize by static content updates, dynamic feature ideas, and implementation suggestions without applying direct changes.

6. **Generate Prompt Outputs**: Produce organized summaries, data excerpts, and recommendation lists that can be directly inserted into prompts for website modifications or further analysis.

## Quality Checks

- Comprehensiveness: Cover all data, context, and graphics without omission.
- Objectivity: Present data without interpretive bias.
- Organization: Data is structured logically for easy prompt integration.
- Relevance: All insights enhance trackair's air quality/carbon tracking mission.
- Readiness: Outputs are formatted for seamless use in prompts.

## Bundled Assets

- [pdf_extractor.py](assets/pdf_extractor.py): Python script using PyPDF2 to extract text from PDFs.
- [data_analyzer.py](assets/data_analyzer.py): Script to parse extracted text for key data points and generate summaries.
- [chart_generator.js](assets/chart_generator.js): JavaScript code for creating interactive charts based on GCB data.
- [update_template.html](assets/update_template.html): HTML template for integrating GCB insights into website pages.